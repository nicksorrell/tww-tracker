import React, {useState} from 'react';
import _ from 'underscore';
import Skill from './Skill/Skill';
import questData from '../../data/quests';
import styles from './Quest.module.css';

function Quest(props) {
    let skills = <p>None</p>;
    let quests = <p>None</p>;

    const [showQuests, setShowQuests] = useState(false);
    const [isCompleted, setCompleted] = useState(false);

    function capitalize(string) {
        return string.replace(string[0], string[0].toUpperCase());
    }

    if (Object.entries(props.skills).length > 0) {
        skills = Object.keys(props.skills).map((key, index) => {
            return (
                <Skill
                    key={index}
                    name={capitalize(key)}
                    level={props.skills[key]}
                />
            );
        });
    }

    if (props.quests.length > 0) {
        quests = props.quests.map((questTitle, index) => {
            let quest = _.find(
                questData,
                (_quest) => _quest.title === questTitle
            );

            return (
                <div className={[(!showQuests ? styles.hidden : styles.shown), styles.requirement].join(' ')}>
                    <Quest
                        key={index}
                        title={quest.title}
                        skills={quest.skills}
                        quests={quest.quests}
                    ></Quest>
                </div>
            );
        });
    }

    return (
        <div className={styles.quest}>
            <h1 className={styles.title}>{props.title}</h1>
            {props.quests.length > 0 ? <button onClick={() => setShowQuests(!showQuests)}>+</button> : null}
            <h2 className={styles.subtitle}>Required Skills</h2>
            <div className={styles.skills}>{skills}</div>
            <h2 className={styles.subtitle}>{props.quests.length > 0 ? props.quests.length + " " : null}Required Quests</h2>
            <div className={styles.quests}>{quests}</div>
        </div>
    );
}

export default Quest;
