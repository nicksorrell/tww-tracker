import React from 'react';
import QuestList from '../../components/QuestList/QuestList';

import styles from './Layout.module.css';

function Layout() {
    return (
        <div className={styles.column}>
            <div className={styles.titlebar}>
                <h1>TWW Tracker - Resterson</h1>
            </div>
            <div className={styles.row}>
                <div className={styles.main}>
                    <QuestList/>
                </div>
            </div>
        </div>
    );
}

export default Layout;
