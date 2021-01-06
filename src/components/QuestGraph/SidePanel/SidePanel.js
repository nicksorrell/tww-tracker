import React, { Fragment } from 'react';
import _ from 'underscore';
import SkillIcons from '../../../util/SkillIcons';
import SkillIds from '../../../util/SkillIds';
import styles from './SidePanel.module.css';

function SidePanel(props) {
    const skills = props.skills;
    const quests = props.quests;
    let playerSkills = {regular: [], special: []};
    let availableQuests = [];

    for (let skill of Object.entries(SkillIds)) {
        let skillName = skill[0].toLowerCase();

        if (skill[1] < 28) {
            playerSkills.regular.push({
                name: skillName.replace(skillName[0], skillName[0].toUpperCase()),
                level: _.find(skills, (_skill) => _skill.id === skill[1]).level
            });
        } else {
            playerSkills.special.push({
                name: skillName.replace(skillName[0], skillName[0].toUpperCase()),
                level: _.find(skills, (_skill) => _skill.id === skill[1]).level
            });
        }
    }

    for (let quest of quests) {
        if (quest.status === 'NOT_COMPLETED') {
            if (!availableQuests.find((_quest) => _quest.name === quest.name)) {
                availableQuests.push(quest);
            }
        }
    }

    availableQuests.sort((a, b) => (a.name < b.name ? -1 : 1));

    let specialSkillsEls = playerSkills.special.map(skill => {
        return (
            <div className={styles.skill} title={skill.name} key={skill.name}>
                {skill.name === "Combat" ? <img
                    src={SkillIcons['melee']}
                    alt="Skill icon"
                /> : null}
                <span>{skill.name === "Combat" ? "Combat" : "Quest Points"} {skill.level}</span>
            </div>
        );
    });

    let skillsEls = playerSkills.regular.map((skill) => {
        return (
            <div className={styles.skill} title={skill.name} key={skill.name}>
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
        if (difficulty === 0) return <span className={[styles.difficulty, styles.difficulty0].join(' ')}></span>;
        if (difficulty === 1) return <span className={[styles.difficulty, styles.difficulty1].join(' ')}></span>;
        if (difficulty === 2) return <span className={[styles.difficulty, styles.difficulty2].join(' ')}></span>;
        if (difficulty === 3) return <span className={[styles.difficulty, styles.difficulty3].join(' ')}></span>;
        if (difficulty === 4) return <span className={[styles.difficulty, styles.difficulty4].join(' ')}></span>;
        if (difficulty === 250) return <span className={[styles.difficulty, styles.difficulty250].join(' ')}></span>;

    }
    let questsEls = availableQuests.map((quest) => {
        return (
            <p
                key={questKey++}
                className={styles.availableQuest}
                onClick={() => props.availableQuestClickHandler(quest.name)}
            >
                {makeDifficultyMarker(quest.difficulty)}
                {quest.name}
            </p>
        );
    });

    return (
        <Fragment>
            <h2 className={styles.title}>Skills</h2>
            <div className={styles.skills}>
                
                <div className={styles.regularSkills}>
                    {skillsEls}
                </div>
                <div className={styles.specialSkills}>
                    {specialSkillsEls}
                </div>
            </div>

            <h2 className={styles.title}>Available Quests ({availableQuests.length})</h2>
            <div className={styles.quests}>
                {questsEls}
            </div>
        </Fragment>
    );
}

export default SidePanel;
