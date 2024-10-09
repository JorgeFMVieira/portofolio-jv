import React from 'react';
import styles from './SkillsInfo.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';

export type SkillsInfoProps = {
    title: string;
    currentTab: string;
    items: string[];
}

const SkillsInfo = (props: SkillsInfoProps) => {

    return (
        <div className={styles.skills_info_tab}>
            <div className={styles.title_skills_info_tab}>{props.title}</div>
            <div className={styles.description_skills_info_tab}>
                <AnimatePresence>
                    {props.items.map((skill, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }} // Adjust the duration as you like
                            className={styles.skill_item}
                        >
                            <FontAwesomeIcon icon={faCaretRight} style={{ color: "#40b9e9" }} />&nbsp;
                            {skill}
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    )
}

export default SkillsInfo;
