import React from 'react'
import styles from './Timeline.module.css'
import { motion } from 'framer-motion'

export type TimelineProps = {
    title: string;
    description: string;
    type: string;
}

const Timeline = (props: TimelineProps) => {
    return (
        <motion.div className={`${styles.container_timeline} ${styles[`${props.type}_container`]}`}>
            <span className={styles.title_timeline}>{props.title}</span>
            <span className={styles.description_timeline}>{props.description}</span>
            <motion.div whileHover={{ scale: 1.2, cursor: "pointer" }} className={`${styles.bubble} ${styles[`bubble_${props.type}`]}`}></motion.div>
        </motion.div>
    )
}

export default Timeline
