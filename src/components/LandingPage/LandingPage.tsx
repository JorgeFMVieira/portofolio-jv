import React, { useEffect, useState } from 'react'
import Navbar from '../Navbar/Navbar'
import Main from '../Main/Main'
import styles from './LandingPage.module.css'
import Experience from '../Experience/Experience'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'
import FadeIn from '../Animations/FadeIn'
import { motion } from 'framer-motion'

const openMenu = {
    hidden: {
        opacity: 0,
        scale: 0, // Slight shrink effect when hidden
        transition: { duration: 0.3 }, // Smooth transition
    },
    visible: {
        opacity: 1,
        scale: 1, // Back to full size when visible
        transition: { duration: 0.3 }, // Smooth transition
    }
};

const LandingPage = () => {

    const [openNav, setOpenNav] = useState(false);

    useEffect(() => {
        if (openNav) {
            document.body.style.overflow = 'hidden'; // Disable scroll
        } else {
            document.body.style.overflow = ''; // Re-enable scroll
        }
    
        return () => {
            document.body.style.overflow = ''; // Ensure scroll is re-enabled
        };
      }, [openNav]);

    return (
        <div className={`${styles.landing_page} ${openNav ? styles.landing_page_scroll : styles.landing_page}`}>
            <div className={styles.main}>
                <Navbar openNav={openNav} setOpenNav={setOpenNav} />
                <motion.div className={styles.wrapper_main}
                    variants={openMenu}
                    initial="visible"
                    animate={openNav ? "hidden" : "visible"}
                    style={{ willChange: "" }}
                >
                    <Main />
                </motion.div>
            </div>
            <motion.div
                variants={openMenu}
                initial="visible"
                animate={openNav ? "hidden" : "visible"}
            >
                <FadeIn children={<Experience />} />
                <FadeIn children={<Skills />} />
                <FadeIn children={<Contact />} />
            </motion.div>
        </div>
    )
}

export default LandingPage
