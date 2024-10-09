import React from 'react'
import styles from './Navbar.module.css'
import Logo from './Logo/Logo'
import NavItems from './NavItems/NavItems'
import { useScroll, useMotionValueEvent } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

const Navbar = () => {

    return (
        <div className={styles.navbar}>
            <div className={styles.logo}>
              <Link className={styles.item} to={"home"} spy={true} smooth={true} offset={-200} duration={500}>
                  <Logo />
              </Link>
            </div>
            <div className={styles.navitems}>
                <NavItems />
            </div>
        </div>
    )
}

export default Navbar
