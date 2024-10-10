import React, { useRef } from 'react'
import styles from './Navbar.module.css'
import Logo from './Logo/Logo'
import NavItems from './NavItems/NavItems'
import { useScroll, useMotionValueEvent } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

export type NavBarProps = {
    openNav: boolean;
    setOpenNav: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = (props: NavBarProps) => {

    return (
        <div className={`${styles.navbar} ${props.openNav ? styles.navbar_expand : ''}`}>
            <div className={styles.logo}>
              <Link className={styles.item} to={"home"} spy={true} smooth={true} offset={-200} duration={500}>
                  <Logo />
              </Link>
            </div>
            <div className={styles.navitems}>
                <NavItems openNav={props.openNav} setOpenNav={props.setOpenNav} />
            </div>
        </div>
    )
}

export default Navbar
