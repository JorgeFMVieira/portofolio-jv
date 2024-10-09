import React, { useCallback, useEffect, useRef, useState } from 'react'
import styles from './Experience.module.css'
import { motion, useInView } from 'framer-motion'
import Timeline from './Timeline/Timeline';

const Experience = () => {

    const ref = useRef(null);
    const isInViewTitle = useInView(ref);


    return (
        <div className={styles.experience} id='experience'>
            <motion.div
                ref={ref}
                className={styles.title_experience}
                animate={{
                    color: isInViewTitle ? "#FFFFFF" : "#1E1E1E"
                }}
                whileHover={{
                    color: "#1E1E1E"
                }}
                >my&nbsp;<span>Experience</span>.
            </motion.div>
            <div className={styles.timeline}>
                <Timeline title='2019-2022' description='IT Management and Programming Technician' type='left' />
                <Timeline title='2022-2023' description='Samsys - Software Developer' type='right' />
                <Timeline title='2023-2024' description='Freelancer' type='left' />
                <Timeline title='2024-Present' description='Open To Work' type='right' />
                <div className={styles.line} style={{ height: 100*4+50 + "px"}}></div>
            </div>
            <div className={styles.timeline_info}>
                <span>Junior Developer from Porto, Portugal, with 2 years of experience in software development, passionate about creating innovative solutions.</span>
            </div>
        </div>
    )
}

export default Experience
