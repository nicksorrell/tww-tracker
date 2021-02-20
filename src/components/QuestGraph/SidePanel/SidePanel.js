import React, { Fragment, useState } from 'react';
import _ from 'underscore';
import SkillIcons from '../../../util/SkillIcons';
import SkillIds from '../../../util/SkillIds';
import styles from './SidePanel.module.css';

function SidePanel(props) {
    const skills = props.skills;
    const quests = props.quests;
    let playerSkills = { regular: [], special: [] };
    let availableQuests = [];
    let uniqueQuests = [];
    let completedQuests = [];
    let unmetQuests = [];
    const [showAvailableQuests, setShowAvailableQuests] = useState(true);
    const [showCompletedQuests, setShowCompletedQuests] = useState(false);
    const [showUnmetQuests, setShowUnmetQuests] = useState(false);

    for (let skill of Object.entries(SkillIds)) {
        let skillName = skill[0].toLowerCase();
        let propSkill = _.find(skills, (_skill) => _skill.id === skill[1]);

        if (skill[1] < 28) {
            playerSkills.regular.push({
                name: skillName.replace(
                    skillName[0],
                    skillName[0].toUpperCase()
                ),
                level: propSkill.level,
                maxReq: propSkill.maxReq
            });
        } else {
            playerSkills.special.push({
                name: skillName.replace(
                    skillName[0],
                    skillName[0].toUpperCase()
                ),
                level: propSkill.level,
                maxReq: propSkill.maxReq
            });
        }
    }

    for (let quest of quests) {
        if (!uniqueQuests.find((_quest) => _quest.name === quest.name)) {
            uniqueQuests.push(quest);
        }
        if (quest.status === 'COMPLETED') {
            if (!completedQuests.find((_quest) => _quest.name === quest.name)) {
                completedQuests.push(quest);
            }
        }
        if (quest.status === 'NOT_COMPLETED') {
            if (!availableQuests.find((_quest) => _quest.name === quest.name)) {
                availableQuests.push(quest);
            }
        }
        if (quest.status === 'REQUIREMENTS_NOT_MET') {
            if (!unmetQuests.find((_quest) => _quest.name === quest.name)) {
                unmetQuests.push(quest);
            }
        }
    }

    availableQuests.sort((a, b) => (a.name < b.name ? -1 : 1));
    completedQuests.sort((a, b) => (a.name < b.name ? -1 : 1));
    unmetQuests.sort((a, b) => (a.name < b.name ? -1 : 1));

    let specialSkillsEls = playerSkills.special.map((skill) => {
        return (
            <div className={[styles.skill, skill.level >= skill.maxReq ? styles.maxReqMet : null].join(' ')} title={`${skill.name} (max req. ${skill.maxReq})`} key={skill.name}>
                {skill.name === 'Combat' ? (
                    <img src={SkillIcons['melee']} alt="Skill icon" />
                ) : null}
                <span>
                    {skill.name === 'Combat' ? 'Combat' : 'Quest Points'}{' '}
                    {skill.level}
                </span>
            </div>
        );
    });

    let skillsEls = playerSkills.regular.map((skill) => {
        return (
            <div className={[styles.skill, skill.level >= skill.maxReq ? styles.maxReqMet : null].join(' ')} title={`${skill.name} (max req. ${skill.maxReq})`} key={skill.name}>
                <img
                    src={SkillIcons[skill.name.toLowerCase()]}
                    alt="Skill icon"
                />
                <span>{skill.level}</span>
            </div>
        );
    });

    let questKey = 0;

    function makeDifficultyMarker(difficulty) {
        if (difficulty === 0)
            return (
                <span
                    className={[styles.difficulty, styles.difficulty0].join(
                        ' '
                    )}
                ></span>
            );
        if (difficulty === 1)
            return (
                <span
                    className={[styles.difficulty, styles.difficulty1].join(
                        ' '
                    )}
                ></span>
            );
        if (difficulty === 2)
            return (
                <span
                    className={[styles.difficulty, styles.difficulty2].join(
                        ' '
                    )}
                ></span>
            );
        if (difficulty === 3)
            return (
                <span
                    className={[styles.difficulty, styles.difficulty3].join(
                        ' '
                    )}
                ></span>
            );
        if (difficulty === 4)
            return (
                <span
                    className={[styles.difficulty, styles.difficulty4].join(
                        ' '
                    )}
                ></span>
            );
        if (difficulty === 250)
            return (
                <span
                    className={[styles.difficulty, styles.difficulty250].join(
                        ' '
                    )}
                ></span>
            );
    }

    let questsEls = availableQuests.map((quest) => {
        return (
            <p
                key={questKey++}
                className={styles.quest}
                onClick={() => props.availableQuestClickHandler(quest.name)}
            >
                {makeDifficultyMarker(quest.difficulty)}
                {quest.name}
            </p>
        );
    });

    let completedQuestsEls = completedQuests.map((quest) => {
        return (
            <p
                key={questKey++}
                className={styles.quest}
                onClick={() => props.availableQuestClickHandler(quest.name)}
            >
                {makeDifficultyMarker(quest.difficulty)}
                {quest.name}
            </p>
        );
    });

    let unmetQuestsEls = unmetQuests.map((quest) => {
        return (
            <p
                key={questKey++}
                className={styles.quest}
                onClick={() => props.availableQuestClickHandler(quest.name)}
            >
                {makeDifficultyMarker(quest.difficulty)}
                {quest.name}
            </p>
        );
    });

    return (
        <Fragment>
            <div className={[styles.panel, styles.summary].join(' ')}>
                <h2 className={styles.title}>Summary</h2>
                <p>
                    You have completed {completedQuests.length} of the{' '}
                    {uniqueQuests.length - 1} quests leading up to TWW so far.
                    That's{' '}
                    {Math.floor(
                        (completedQuests.length / (uniqueQuests.length - 1)) *
                            100
                    )}
                    % of the way there!
                </p>
                <p>
                    There are currently {availableQuests.length} quests unlocked
                    and available, and {unmetQuests.length - 1} quests with
                    unmet requirements.
                </p>
            </div>

            <div className={styles.panel}>
                <h2 className={styles.title}>Skills</h2>
                <p>Skills in green have been met for the TWW chain.</p>
                <div className={styles.skills}>
                    <div className={styles.regularSkills}>{skillsEls}</div>
                    <div className={styles.specialSkills}>
                        {specialSkillsEls}
                    </div>
                </div>
            </div>

            <div className={styles.questsPanel}>
                <h2
                    className={[styles.title, styles.questsTitle].join(' ')}
                    onClick={() => setShowAvailableQuests(!showAvailableQuests)}
                >
                    <span className={styles.expander}>
                        {showAvailableQuests ? '-' : '+'}
                    </span>
                    Available Quests
                    <span className={styles.questCount}>{availableQuests.length}</span>
                </h2>
                {showAvailableQuests ? (
                    <div className={styles.quests}>{questsEls}</div>
                ) : null}

                <h2
                    className={[styles.title, styles.questsTitle].join(' ')}
                    onClick={() => setShowCompletedQuests(!showCompletedQuests)}
                >
                    <span className={styles.expander}>
                        {showCompletedQuests ? '-' : '+'}
                    </span>
                    Completed Quests
                    <span className={[styles.questCount, styles.completed].join(' ')}>{completedQuests.length}</span>
                </h2>
                {showCompletedQuests ? (
                    <div
                        className={[
                            styles.quests,
                            styles.quests__completed
                        ].join(' ')}
                    >
                        {completedQuestsEls}
                    </div>
                ) : null}

                <h2
                    className={[styles.title, styles.questsTitle].join(' ')}
                    onClick={() => setShowUnmetQuests(!showUnmetQuests)}
                >
                    <span className={styles.expander}>
                        {showUnmetQuests ? '-' : '+'}
                    </span>
                    Unavailable Quests
                    <span className={[styles.questCount, styles.unmet].join(' ')}>{unmetQuests.length}</span>
                </h2>
                {showUnmetQuests ? (
                    <div
                        className={[styles.quests, styles.quests__unmet].join(
                            ' '
                        )}
                    >
                        {unmetQuestsEls}
                    </div>
                ) : null}
            </div>
        </Fragment>
    );
}

export default SidePanel;
