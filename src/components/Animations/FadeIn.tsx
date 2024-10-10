import { motion } from 'framer-motion';
import React from 'react'

const fadeInAnimation = {
    initial: {
        opacity: 0,
        y: 200,
    },
    animate: {
        opacity: 1,
        y: 0
    },
};

export type FadeInProps = {
    children: JSX.Element;
};

const FadeIn = (props: FadeInProps) => {
    return (
        <motion.div
            variants={fadeInAnimation}
            initial="initial"
            whileInView="animate"
            viewport={{
                once: true
            }}
        >
            {props.children}
        </motion.div>
    )
}

export default FadeIn
