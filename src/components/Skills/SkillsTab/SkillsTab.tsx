import React from 'react'
import styles from './SkillsTab.module.css'

export type SkillsTabProps = {
    name: string;
    currentTab: string;
    setCurrentTab: React.Dispatch<React.SetStateAction<any>>;
}

const SkillsTab = (props: SkillsTabProps) => {
    return (
        <div className={`${styles.skill_tab} ${props.currentTab === props.name ? `${styles[`selected`]}` : ''}`} onClick={() => props.setCurrentTab(props.name)}>
            <div className={`${styles.skill_line} ${props.currentTab === props.name ? `${styles[`line_selected`]}` : ''}`}></div>
            <div className={styles.skill_name}>{props.name}</div>
        </div>
    )
}

export default SkillsTab
