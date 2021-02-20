import React, { useState, useEffect } from 'react';
import _ from 'underscore';
import * as go from 'gojs';
import axios from 'axios';
import { ReactDiagram } from 'gojs-react';
import SidePanel from './SidePanel/SidePanel';
import questData from '../../data/quests';

import SkillIds from '../../util/SkillIds';
import SkillIcons from '../../util/SkillIcons';

import styles from './QuestGraph.module.css';

function QuestGraph() {
    let diagram = null;
    const loadStatuses = {
        LOADED: 1,
        NOT_LOADED: 2,
        ERROR: 3
    };

    const [loadStatus, setLoadStatus] = useState(loadStatuses.NOT_LOADED);
    const [data, setData] = useState({
        quests: [],
        skills: []
    });

    let nodeKey = 1;
    const questDataArray = [];
    let isDev = process.env && process.env.NODE_ENV === 'development';
    let endpoints = {
        skills:
            (isDev
                ? 'http://localhost/tww/'
                : 'https://nicksorrell.com/tww-tracker/') +
            'skills.php?user=Nixorell',
        quests:
            (isDev
                ? 'http://localhost/tww/'
                : 'https://nicksorrell.com/tww-tracker/') +
            'quests.php?user=Nixorell'
    };

    useEffect(() => {
        axios
            .all([axios.get(endpoints.skills), axios.get(endpoints.quests)])
            .then(
                axios.spread((...responses) => {
                    let skills = responses[0].data.skillvalues;
                    let quests = responses[1].data.quests;

                    // Add combat level
                    skills.push({
                        id: 28,
                        level: responses[0].data.combatlevel
                    });

                    // Calculate Quest Points
                    let questPoints = 0;

                    for (let quest of quests) {
                        if (quest.status === 'COMPLETED') {
                            questPoints += quest.questPoints;
                        }
                    }

                    skills.push({
                        id: 29,
                        level: questPoints
                    });

                    // Calculate max required level for each skill
                    const reqSkills = {};
                    const maxSkillReqs = [];

                    // Generate list of max required skills
                    for (let quest of questData) {
                        for (let skill of Object.entries(quest.skills)) {
                            let skillName = skill[0];
                            let skillLevel = skill[1];

                            if (reqSkills[skillName] == null || +reqSkills[skillName] < +skillLevel) {
                                reqSkills[skillName] = skillLevel;
                            }
                        }
                    }

                    for (let skill of Object.entries(reqSkills)) {
                        let skillName = skill[0];
                        let skillLevel = skill[1];

                        maxSkillReqs.push({
                            name: skillName,
                            level: skillLevel,
                            id: SkillIds[skillName.toUpperCase()]
                        });
                    }

                    for (let skill of skills) {
                        let _skill = _.find(maxSkillReqs, sk => sk.id === skill.id);
                        
                        skill.maxReq = _skill == null ? 1 : +_skill.level;
                    }

                    // Finally set the data
                    setData({
                        quests: quests,
                        skills: skills
                    });

                    setLoadStatus(loadStatuses.LOADED);
                })
            )
            .catch((err) => {
                setLoadStatus(loadStatuses.ERROR);
            });
    }, [
        endpoints.skills,
        endpoints.quests,
        loadStatuses.LOADED,
        loadStatuses.ERROR
    ]);

    if (loadStatus === loadStatuses.NOT_LOADED) {
        return (
            <div className={styles.message}>
                <h1>Loading data...</h1>
            </div>
        );
    }

    if (loadStatus === loadStatuses.LOADED) {
        generateHierarchy('The World Wakes');
    }
    if (loadStatus === loadStatuses.ERROR) {
        return (
            <div className={[styles.message, styles.message__error].join(' ')}>
                <h1>Failed to load data :(</h1>
            </div>
        );
    }

    function generateHierarchy(questTitle, parentKey = 0) {
        function _determineQuestStatus(quest) {
            let questInResponse = _.find(
                data.quests,
                (dataQuest) => quest.title === dataQuest.title
            );
            let status =
                questInResponse.status === 'COMPLETED'
                    ? 'COMPLETED'
                    : 'NOT_COMPLETED';

            if (questInResponse.userEligible === false)
                status = status = 'REQUIREMENTS_NOT_MET';

            for (let questSkillEntry of Object.entries(quest.skills)) {
                let questSkill = {
                    name: questSkillEntry[0],
                    level: questSkillEntry[1]
                };
                let playerSkill = _.find(
                    data.skills,
                    (skill) =>
                        skill.id === SkillIds[questSkill.name.toUpperCase()]
                );

                if (questSkill.name === 'kudos') continue;
                else if (playerSkill.level < questSkill.level)
                    status = 'REQUIREMENTS_NOT_MET';
            }

            return status;
        }

        function _determineRequiredQuestStatuses(quest) {
            let reqQuests = quest.quests.map((reqQuest) => {
                return {
                    title:
                        reqQuest.indexOf('miniquest') > 0
                            ? reqQuest.split(' (miniquest)')[0]
                            : reqQuest,
                    status: _determineQuestStatus(
                        _.find(questData, (_quest) => _quest.title === reqQuest)
                    )
                };
            });

            return reqQuests;
        }

        let quest = _.find(questData, (quest) => quest.title === questTitle);

        let currentKey = nodeKey;
        let skillsArray = Object.entries(quest.skills).map((skill) => {
            let isSkillMet =
                skill[0] === 'kudos'
                    ? true
                    : _.find(
                          data.skills,
                          (_skill) =>
                              _skill.id === SkillIds[skill[0].toUpperCase()]
                      ).level >= skill[1];
            return { name: skill[0], level: skill[1], met: isSkillMet };
        });

        let subQuests = _determineRequiredQuestStatuses(quest);
        let questStatus = _determineQuestStatus(quest);
        let questDifficulty =
            _.find(data.quests, (dataQuest) => quest.title === dataQuest.title)
                .difficulty || 0;

        for (let quest of subQuests) {
            if (quest.status === 'NOT_COMPLETED') {
                questStatus = 'REQUIREMENTS_NOT_MET';
            }
        }

        questDataArray.push({
            key: nodeKey,
            name:
                quest.title.indexOf('miniquest') > 0
                    ? quest.title.split(' (miniquest)')[0]
                    : quest.title,
            difficulty: questDifficulty,
            parent: parentKey,
            skills: skillsArray,
            quests: subQuests,
            status: questStatus
        });

        nodeKey++;

        for (let reqQuest of quest.quests) {
            generateHierarchy(reqQuest, currentKey);
        }
    }

    function initDiagram() {
        const $ = go.GraphObject.make;
        diagram = $(go.Diagram, {
            padding: 50,
            allowMove: false,
            layout: $(go.TreeLayout, {
                treeStyle: go.TreeLayout.StyleLastParents,
                angle: 90,
                nodeSpacing: 50,
                layerSpacing: 200,
                layerStyle: go.TreeLayout.LayerUniform,
                alternateAngle: 90,
                alternateNodeSpacing: 50,
                alternateLayerSpacing: 200
            })
        });

        const skillTemplate = $(
            go.Panel,
            'Auto',
            $(
                go.Shape,
                'RoundedRectangle',
                {
                    margin: 5,
                    height: 30,
                    strokeWidth: 0
                },
                new go.Binding('fill', 'met', (met) => (met ? 'green' : 'red'))
            ),
            $(
                go.Panel,
                'Horizontal',
                {
                    padding: new go.Margin(0, 10, 0, 10),
                    alignment: go.Spot.Center
                },
                $(
                    go.Picture,
                    { margin: new go.Margin(0, 5, 0, 0) },
                    new go.Binding('source', 'name', (name) => SkillIcons[name])
                ),
                $(
                    go.TextBlock,
                    {
                        stroke: 'white',
                        isMultiline: false,
                        margin: new go.Margin(0, 5, 0, 0)
                    },
                    new go.Binding('text', 'name', (name) =>
                        name.replace(name[0], name[0].toUpperCase())
                    )
                ),
                $(
                    go.TextBlock,
                    {
                        stroke: 'white',
                        font: 'bold 10pt sans-serif',
                        isMultiline: false
                    },
                    new go.Binding('text', 'level')
                )
            )
        );

        function segmentArrayBy(n) {
            return function (a) {
                var r = [];
                for (var i = 0; i < a.length; i += n) {
                    r.push(a.slice(i, i + n));
                }
                return r;
            };
        }

        diagram.nodeTemplate = $(
            go.Node,
            'Auto',
            {
                locationSpot: go.Spot.Top,
                isShadowed: true,
                shadowBlur: 1,
                shadowOffset: new go.Point(3, 3),
                shadowColor: 'rgba(0, 0, 0, .5)',
                // selection adornment to match shape of nodes
                selectionAdornmentTemplate: $(
                    go.Adornment,
                    'Auto',
                    $(
                        go.Shape,
                        'RoundedRectangle',
                        {
                            parameter1: 2,
                            spot1: go.Spot.TopLeft,
                            spot2: go.Spot.BottomRight
                        },
                        {
                            fill: null,
                            stroke: '#7986cb',
                            strokeWidth: 3
                        }
                    ),
                    $(go.Placeholder)
                ),
                contextMenu: $(
                    'ContextMenu',
                    $(
                        'ContextMenuButton',
                        { defaultStretch: go.GraphObject.Horizontal },
                        $(
                            go.TextBlock,
                            {
                                textAlign: 'left'
                            },
                            'Zoom to Quest',
                            {
                                click: function (e, obj) {
                                    e.diagram.commit(function (d) {
                                        d.scale = 1;
                                        d.centerRect(
                                            obj.part.adornedPart.actualBounds
                                        );
                                    }, 'zoom to node');
                                }
                            }
                        )
                    ),
                    $(
                        'ContextMenuButton',
                        { defaultStretch: go.GraphObject.Horizontal },
                        $(
                            go.TextBlock,
                            {
                                textAlign: 'left'
                            },
                            'Toggle Node Quests',
                            {
                                click: function (e, obj) {
                                    e.diagram.commit(function (d) {
                                        if (
                                            obj.part.adornedPart.isTreeExpanded
                                        ) {
                                            return obj.part.adornedPart.collapseTree();
                                        } else {
                                            return obj.part.adornedPart.expandTree();
                                        }
                                    }, 'toggle node quests');
                                }
                            }
                        )
                    )
                )
            },
            $(
                go.Shape,
                'RoundedRectangle',
                {
                    parameter1: 2,
                    spot1: go.Spot.TopLeft,
                    spot2: go.Spot.BottomRight
                },
                { strokeWidth: 1 },

                new go.Binding('fill', '', function (obj) {
                    if (obj.isHighlighted) {
                        return 'darkgoldenrod';
                    } else if (obj.data.status === 'COMPLETED') {
                        return '#025002';
                    } else if (obj.data.status === 'REQUIREMENTS_NOT_MET') {
                        return 'darkred';
                    } else {
                        return '#334b61';
                    }
                }).ofObject()
            ),
            $(
                go.Panel,
                'Vertical',
                { margin: 10 },
                $(
                    go.TextBlock,
                    { font: 'bold 26pt sans-serif', stroke: 'white' },
                    new go.Binding('text', 'name')
                ),
                $(
                    go.Panel,
                    'Horizontal',
                    { margin: new go.Margin(5, 0, 5, 0) },
                    $(
                        go.Shape,
                        'Circle',
                        { height: 16, alignment: go.Spot.Center },
                        new go.Binding('fill', 'difficulty', (d) => {
                            if (d === 0) return 'lime';
                            if (d === 1) return 'yellow';
                            if (d === 2) return 'orange';
                            if (d === 3) return 'red';
                            if (d === 4) return 'purple';
                            if (d === 250) return 'lightblue';
                        })
                    ),
                    $(
                        go.TextBlock,
                        {
                            font: '16pt sans-serif',
                            stroke: 'white',
                            margin: new go.Margin(0, 0, 0, 5),
                            alignment: go.Spot.Center
                        },
                        new go.Binding('text', 'difficulty', (d) => {
                            let difficulty = '';
                            if (d === 0) difficulty = 'Novice';
                            if (d === 1) difficulty = 'Intermediate';
                            if (d === 2) difficulty = 'Experienced';
                            if (d === 3) difficulty = 'Master';
                            if (d === 4) difficulty = 'Grandmaster';
                            if (d === 250) difficulty = 'Special';

                            return `${difficulty}`;
                        })
                    )
                ),
                $(go.Shape, 'LineH', {
                    stroke: 'rgba(255,255,255,0.75)',
                    strokeWidth: 1,
                    height: 1,
                    stretch: go.GraphObject.Horizontal
                }),
                $(
                    go.TextBlock,
                    {
                        margin: new go.Margin(10, 0, 5, 0),
                        font: 'bold 14pt sans-serif',
                        stroke: 'white'
                    },
                    'Required Skills'
                ),
                $(
                    go.TextBlock,
                    { stroke: 'white' },
                    'None',
                    new go.Binding(
                        'visible',
                        'skills',
                        (skills) => skills.length === 0
                    )
                ),
                $(
                    go.Panel,
                    'Vertical',
                    new go.Binding('itemArray', 'skills', segmentArrayBy(4)),
                    {
                        itemTemplate: $(
                            go.Panel,
                            'Horizontal',
                            new go.Binding('itemArray', ''),
                            {
                                itemTemplate: skillTemplate
                            }
                        )
                    }
                ),
                $(
                    go.TextBlock,
                    {
                        margin: new go.Margin(10, 0, 5, 0),
                        font: 'bold 14pt sans-serif',
                        stroke: 'white'
                    },
                    'Required Quests'
                ),
                $(
                    go.Panel,
                    'Vertical',
                    { margin: new go.Margin(0, 0, 10, 0) },
                    new go.Binding('itemArray', 'quests', segmentArrayBy(3)),
                    {
                        itemTemplate: $(
                            go.Panel,
                            'Horizontal',
                            { margin: new go.Margin(0, 0, 5, 0) },
                            new go.Binding('itemArray', ''),
                            {
                                itemTemplate: $(
                                    go.Panel,
                                    'Auto',
                                    { margin: 2 },
                                    $(
                                        go.Shape,
                                        'RoundedRectangle',
                                        {
                                            strokeWidth: 0
                                        },
                                        new go.Binding(
                                            'fill',
                                            'status',
                                            (status) => {
                                                if (status === 'COMPLETED') {
                                                    return 'green';
                                                } else if (
                                                    status ===
                                                    'REQUIREMENTS_NOT_MET'
                                                ) {
                                                    return 'red';
                                                } else {
                                                    return '#326390';
                                                }
                                            }
                                        )
                                    ),
                                    $(
                                        go.TextBlock,
                                        new go.Binding('text', 'title'),
                                        { margin: 5, stroke: 'white' }
                                    )
                                )
                            }
                        )
                    }
                ),
                $(
                    go.TextBlock,
                    { stroke: 'white' },
                    'None',
                    new go.Binding(
                        'visible',
                        'quests',
                        (quests) => quests.length === 0
                    )
                ),
                $(
                    go.Shape,
                    'LineH',
                    {
                        stroke: 'rgba(255,255,255,0.75)',
                        strokeWidth: 1,
                        height: 1,
                        stretch: go.GraphObject.Horizontal
                    },
                    new go.Binding(
                        'visible',
                        'quests',
                        (quests) => quests.length > 0
                    )
                ),
                $(
                    'Button',
                    {
                        margin: new go.Margin(10, 0, 0, 0),
                        'ButtonBorder.fill': 'rgba(255,255,255,0.25)',
                        _buttonFillOver: 'rgba(255,255,255,0.5)',
                        click: function (e, obj) {
                            if (obj.part.isTreeExpanded) {
                                obj.part.collapseTree();
                            } else {
                                obj.part.expandTree();
                            }
                        }
                    },
                    new go.Binding(
                        'visible',
                        'quests',
                        (quests) => quests.length > 0
                    ),
                    $(
                        go.TextBlock,
                        { margin: 5, stroke: 'white' },
                        'Toggle Required Quests'
                    )
                )
            )
        );

        diagram.linkTemplate = $(
            go.Link,
            go.Link.Orthogonal,
            { corner: 5, selectable: false },
            $(go.Shape, { strokeWidth: 3, stroke: '#424242' })
        );

        diagram.click = function (e) {
            e.diagram.commit(function (d) {
                d.clearHighlighteds();
            }, 'no highlighteds');
        };

        diagram.contextMenu = $(
            'ContextMenu',
            $(
                'ContextMenuButton',
                { defaultStretch: go.GraphObject.Horizontal },
                $(go.TextBlock, { textAlign: 'left' }, 'Expand All'),
                {
                    click: function (e, obj) {
                        e.diagram.commit(function (d) {
                            d.nodes.each((n) => n.expandTree());
                        }, 'expand all');
                    }
                }
            ),
            $(
                'ContextMenuButton',
                { defaultStretch: go.GraphObject.Horizontal },
                $(go.TextBlock, { textAlign: 'left' }, 'Collapse Completed'),
                {
                    click: function (e, obj) {
                        e.diagram.commit(function (d) {
                            d.nodes.each((n) => {
                                let subQuestsCompleted = true;

                                if (n.data.quests.length > 0) {
                                    for (let quest of n.data.quests) {
                                        if (quest.status !== 'COMPLETED')
                                            subQuestsCompleted = false;
                                    }
                                }
                                if (
                                    n.data.status === 'COMPLETED' ||
                                    subQuestsCompleted
                                )
                                    n.collapseTree();
                            });
                        }, 'collapse completed');
                    }
                }
            ),
            $(
                'ContextMenuButton',
                { defaultStretch: go.GraphObject.Horizontal },
                $(go.TextBlock, { textAlign: 'left' }, 'Zoom to Fit'),
                {
                    click: function (e, obj) {
                        e.diagram.commit(function (d) {
                            d.zoomToRect(d.documentBounds);
                        }, 'zoom to fit');
                    }
                }
            )
        );

        diagram.addDiagramListener('TreeExpanded', function (e) {
            e.diagram.centerRect(e.subject.part);
        });

        diagram.model = new go.TreeModel(questDataArray);

        diagram.animationManager.isEnabled = false;

        return diagram;
    }

    function searchForQuest(name) {
        diagram.focus();

        diagram.startTransaction('highlight search');
        var regex = new RegExp(`^${name}$`, 'i');
        var results = diagram.findNodesByExample({ name: regex });
        diagram.highlightCollection(results);
        if (results.count > 0) diagram.centerRect(results.first().actualBounds);
        diagram.commitTransaction('highlight search');
    }

    return (
        <div className={styles.questGraph}>
            <div className={styles.panel}>
                <SidePanel
                    skills={data.skills}
                    quests={questDataArray}
                    availableQuestClickHandler={searchForQuest}
                />
            </div>
            <div className={styles.graph}>
                <ReactDiagram
                    initDiagram={initDiagram}
                    divClassName="diagram-component"
                />
            </div>
        </div>
    );
}

export default QuestGraph;
