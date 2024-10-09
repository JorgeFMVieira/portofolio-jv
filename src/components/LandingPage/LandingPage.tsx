import React from 'react'
import Navbar from '../Navbar/Navbar'
import Main from '../Main/Main'
import styles from './LandingPage.module.css'
import Experience from '../Experience/Experience'
import Skills from '../Skills/Skills'
import Contact from '../Contact/Contact'

const LandingPage = () => {
    return (
        <div className={styles.landing_page}>
            <div className={styles.main}>
                <Navbar />
                <Main />
            </div>
            <Experience />
            <Skills />
            <Contact />
        </div>
    )
}

export default LandingPage
