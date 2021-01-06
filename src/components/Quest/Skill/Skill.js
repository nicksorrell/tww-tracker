import React from 'react';
import agilityIcon from '../../../util/icons/Agility-icon.png';
import archaeologyIcon from '../../../util/icons/Archaeology-icon.png';
import attackIcon from '../../../util/icons/Attack-icon.png';
import constitutionIcon from '../../../util/icons/Constitution-icon.png';
import constructionIcon from '../../../util/icons/Construction-icon.png';
import cookingIcon from '../../../util/icons/Cooking-icon.png';
import craftingIcon from '../../../util/icons/Crafting-icon.png';
import defenceIcon from '../../../util/icons/Defence-icon.png';
import divinationIcon from '../../../util/icons/Divination-icon.png';
import dungeoneeringIcon from '../../../util/icons/Dungeoneering-icon.png';
import farmingIcon from '../../../util/icons/Farming-icon.png';
import firemakingIcon from '../../../util/icons/Firemaking-icon.png';
import fishingIcon from '../../../util/icons/Fishing-icon.png';
import fletchingIcon from '../../../util/icons/Fletching-icon.png';
import herbloreIcon from '../../../util/icons/Herblore-icon.png';
import hitpointsIcon from '../../../util/icons/Hitpoints-icon.png';
import hunterIcon from '../../../util/icons/Hunter-icon.png';
import inventionIcon from '../../../util/icons/Invention-icon.png';
import magicIcon from '../../../util/icons/Magic-icon.png';
import meleeIcon from '../../../util/icons/Melee-icon.png';
import miningIcon from '../../../util/icons/Mining-icon.png';
import prayerIcon from '../../../util/icons/Prayer-icon.png';
import rangedIcon from '../../../util/icons/Ranged-icon.png';
import runecraftingIcon from '../../../util/icons/Runecrafting-icon.png';
import slayerIcon from '../../../util/icons/Slayer-icon.png';
import smithingIcon from '../../../util/icons/Smithing-icon.png';
import strengthIcon from '../../../util/icons/Strength-icon.png';
import summoningIcon from '../../../util/icons/Summoning-icon.png';
import thievingIcon from '../../../util/icons/Thieving-icon.png';
import woodcuttingIcon from '../../../util/icons/Woodcutting-icon.png';

import styles from './Skill.module.css';

function Skill(props) {
    let skillIcon = null;
    switch (props.name) {
        case 'Agility':
            skillIcon = agilityIcon;
            break;
        case 'Archaeology':
            skillIcon = archaeologyIcon;
            break;
        case 'Attack':
            skillIcon = attackIcon;
            break;
        case 'Constitution':
            skillIcon = constitutionIcon;
            break;
        case 'Construction':
            skillIcon = constructionIcon;
            break;
        case 'Combat':
            skillIcon = meleeIcon;
            break;
        case 'Cooking':
            skillIcon = cookingIcon;
            break;
        case 'Crafting':
            skillIcon = craftingIcon;
            break;
        case 'Defence':
            skillIcon = defenceIcon;
            break;
        case 'Divination':
            skillIcon = divinationIcon;
            break;
        case 'Dungeoneering':
            skillIcon = dungeoneeringIcon;
            break;
        case 'Farming':
            skillIcon = farmingIcon;
            break;
        case 'Firemaking':
            skillIcon = firemakingIcon;
            break;
        case 'Fishing':
            skillIcon = fishingIcon;
            break;
        case 'Fletching':
            skillIcon = fletchingIcon;
            break;
        case 'Herblore':
            skillIcon = herbloreIcon;
            break;
        case 'Hitpoints':
            skillIcon = hitpointsIcon;
            break;
        case 'Hunter':
            skillIcon = hunterIcon;
            break;
        case 'Invention':
            skillIcon = inventionIcon;
            break;
        case 'Magic':
            skillIcon = magicIcon;
            break;
        case 'Mining':
            skillIcon = miningIcon;
            break;
        case 'Prayer':
            skillIcon = prayerIcon;
            break;
        case 'Ranged':
            skillIcon = rangedIcon;
            break;
        case 'Runecrafting':
            skillIcon = runecraftingIcon;
            break;
        case 'Slayer':
            skillIcon = slayerIcon;
            break;
        case 'Smithing':
            skillIcon = smithingIcon;
            break;
        case 'Strength':
            skillIcon = strengthIcon;
            break;
        case 'Summoning':
            skillIcon = summoningIcon;
            break;
        case 'Thieving':
            skillIcon = thievingIcon;
            break;
        case 'Woodcutting':
            skillIcon = woodcuttingIcon;
            break;
        default:
            skillIcon = woodcuttingIcon;
            break;
    }

    return (
        <div className={styles.skill}>
            {skillIcon != null ? (
                <img src={skillIcon} className={styles.icon} alt="Combat" />
            ) : null}
            <span className={styles.name}>{props.name}</span>
            <span className={styles.level}>{props.level}</span>
        </div>
    );
}

export default Skill;
