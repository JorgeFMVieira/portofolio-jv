import React, { useEffect, useRef, useState } from 'react'
import styles from './Skills.module.css'
import { motion, useInView } from 'framer-motion'
import SkillsTab from './SkillsTab/SkillsTab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import SkillsInfo from './SkillsInfo/SkillsInfo';

const itemCategories = {
    "Programming Languages": ['Javascript', 'Typescript', 'C#', 'MySql/SQL', 'Java', 'Python', 'PHP', 'C', 'C++', "HTML/CSS"],
    "Frameworks": ["React", ".NET CORE", "Node.js", "React Native", ".NET Framework", "Bootstrap", "Git", "Github", "Postman"],
    "Tools": ["AWS", "Firebase", "MongoDB Atlas", "Figma", "Heroku", "Vercel"],
    "Soft Skills": ["Creativity", "Problem-solving", "Teamwork", "Communication", "Leadership", "Decision-making", "Attention to detail", "Organizational skills", "Resilience", "Flexibility"],
    "Spoken Languages": ["Portuguese", "English"],
};

// Use the keys of itemCategories to define a union type
type ItemCategory = keyof typeof itemCategories;

const titles: Record<ItemCategory, string> = {
    "Programming Languages": "Proficient In",
    "Frameworks": "Frameworks I'm familiar with",
    "Tools": "Tools I Use",
    "Soft Skills": "Soft Skills",
    "Spoken Languages": "Languages I Speak",
};

const Skills = () => {

    const ref = useRef(null);
    const isInViewTitle = useInView(ref);

    const [currentTab, setCurrentTab] = useState<ItemCategory>("Programming Languages");
    const [items, setItems] = useState<string[]>([]);

    useEffect(() => {
        setItems(itemCategories[currentTab]);
    }, [currentTab]);

    return (
        <div className={styles.skills} id='skills'>
            <motion.div
                ref={ref}
                className={styles.title_skills}
                animate={{
                    color: isInViewTitle ? "#FFFFFF" : "#40b9e9"
                }}
                whileHover={{
                    color: "#40b9e9"
                }}
                >my&nbsp;<span>Skills</span>.
            </motion.div>
            <div className={styles.skills_box}>
                <div className={styles.skills_tablist}>
                    {Object.keys(itemCategories).map((category, index) => (
                        <SkillsTab 
                            key={index} 
                            name={category} 
                            currentTab={currentTab} 
                            setCurrentTab={setCurrentTab} 
                        />
                    ))}
                </div>
                <div className={styles.skills_infos}>
                    <SkillsInfo title={titles[currentTab]} currentTab={currentTab} items={items} />
                </div>
            </div>
        </div>
    )
}

export default Skills
