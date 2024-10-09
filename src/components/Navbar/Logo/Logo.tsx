import React from 'react'
import styles from './Logo.module.css'

const Logo = () => {
  return (
    <div className={styles.logo}>
        <div className={styles.circle}>
            <div className={styles.logoName}>JV.</div>
        </div>
        <div className={styles.circle2}></div>
    </div>
  )
}

export default Logo
