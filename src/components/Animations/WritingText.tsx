import { motion, useInView } from 'framer-motion';
import React, { useRef } from 'react'

export type WritingTextProps = {
    text: string;
    once: boolean;
}

const defaultAnimations = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
}

const WritingText = (props: WritingTextProps) => {

    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5, once: props.once });

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ staggerChildren: 0.1 }}>
                {props.text.split("").map((char) => (
                    <motion.span variants={defaultAnimations}>
                        {char}
                    </motion.span>
                ))}
        </motion.div>
    )
}

export default WritingText
