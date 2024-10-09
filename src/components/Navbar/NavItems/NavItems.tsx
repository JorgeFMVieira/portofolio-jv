import React from 'react'
import styles from './NavItems.module.css'
import { Link } from 'react-scroll'
import { motion } from 'framer-motion'

const NavItems = () => {
    return (
        <div className={styles.navitems}>
            <Link className={styles.item} to={"experience"} spy={true} smooth={true} offset={-23} duration={500}>Experience</Link>
            <Link className={styles.item} to={"skills"} spy={true} smooth={true} offset={-23} duration={500}>Skills</Link>
            <motion.div className={`${styles.item} ${styles.button}`}
                    whileHover={{
                        backgroundColor: "#40b9e9",
                        color: '#FFFFFF'
                    }}
                    transition={{
                        duration: 0.3
                    }}
                >
                <Link to={"contact"} spy={true} smooth={true} offset={-23} duration={500}>
                    Contact
                </Link>
            </motion.div>
        </div>
    )
}

export default NavItems
