import React, { useState } from 'react';
import styles from './NavItems.module.css';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

export type NavItemsProps = {
    openNav: boolean;
    setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const openMenu = {
    hidden: {
        opacity: 0,
        scale: 0.8, // Slight shrink effect when hidden
        transition: { duration: 0.3 } // Smooth transition
    },
    visible: {
        opacity: 1,
        scale: 1, // Back to full size when visible
        transition: { duration: 0.3 } // Smooth transition
    }
};

const NavItems = (props: NavItemsProps) => {

    return (
        <div className={styles.wrapper_navitem}>
            <div className={`${styles.navitems} ${props.openNav ? styles.openNavItems : styles.closedNavItems}`}>
                <Link
                    className={styles.item}
                    to={"experience"}
                    spy={true}
                    smooth={true}
                    offset={-23}
                    duration={500}
                    onClick={() => props.openNav ? (props.setOpenNav(!props.openNav)) : (() => {})}
                >
                    Experience
                </Link>
                <Link
                    className={styles.item}
                    to={"skills"}
                    spy={true}
                    smooth={true}
                    offset={-23}
                    duration={500}
                    onClick={() => props.openNav ? (props.setOpenNav(!props.openNav)) : (() => {})}
                >
                    Skills
                </Link>
                <motion.div
                    className={`${styles.item} ${styles.button}`}
                    whileHover={{
                        backgroundColor: "#40b9e9",
                        color: '#FFFFFF'
                    }}
                    transition={{
                        duration: 0.3
                    }}
                >
                    <Link
                        to={"contact"}
                        spy={true}
                        smooth={true}
                        offset={-23}
                        duration={500}
                        onClick={() => props.openNav ? (props.setOpenNav(!props.openNav)) : (() => {})}
                    >
                        Contact
                    </Link>
                </motion.div>
            </div>

            {/* Menu Icon */}
            <div className={`${styles.menu_nav}`} onClick={() => props.setOpenNav(!props.openNav)}>
                {/* Animated transition between faBars and faClose */}
                {!props.openNav ? (
                    <motion.div
                        key="bars-icon" // Unique key for the icon to trigger animation
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={openMenu}
                    >
                        <FontAwesomeIcon icon={faBars} size="2xl" />
                    </motion.div>
                ) : (
                    <motion.div
                        key="close-icon" // Unique key for the icon to trigger animation
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        variants={openMenu}
                        className={`${props.openNav ? styles.closeMenuNavVisible : styles.closeMenuNavInVisible}`}
                    >
                        <FontAwesomeIcon icon={faClose} size="2xl" />
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default NavItems;
