import React, {Fragment} from 'react';
import _ from 'underscore';

import Quest from '../Quest/Quest';
import QuestGraph from '../QuestGraph/QuestGraph';

import questData from '../../data/quests';

import styles from './QuestList.module.css';

function QuestList() {   

    const TWW = _.find(questData, (quest) => quest.title === 'The World Wakes');   

    return (
        <Fragment>
            {/* <Quest title={TWW.title} skills={TWW.skills} quests={TWW.quests} /> */}
            <QuestGraph/>
        </Fragment>
    );
}

export default QuestList;
