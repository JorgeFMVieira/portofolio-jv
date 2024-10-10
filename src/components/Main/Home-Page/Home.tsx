import React, { useEffect, useRef, useState } from 'react'
import styles from './Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { motion, useInView } from 'framer-motion'
import IconsFooter from './Icons_Footer/IconsFooter'

const Home = () => {
    
    return (
        <div className={styles.home} id='home'>
            <motion.div initial={{y: 200}} animate={{y: 0}} className={styles.info}>
                <div className={styles.title_info}>Jorge&nbsp;<span>Vieira</span><div className={styles.title_dot_info}>.</div></div>
                <div className={styles.occupation_info}>
                    Junior Developer
                </div>
                <div className={styles.description_info}>
                    <span>Passionate about coding and always eager to learn new technologies. I enjoy solving problems and building efficient, user-friendly applications.</span>
                </div>
            </motion.div>
            <motion.div initial={{y: 200}} animate={{y: 0}} className={styles.info2}>
                <a href={"/jorge_vieira_cv.pdf"} target="_blank" rel="noopener noreferrer">
                    <div className={styles.button_info2}>
                        <motion.button
                            whileHover={{
                                scale: 1.1,
                            }}
                            transition={{
                                type: "tween", duration: 0.5
                            }}>
                            
                                <FontAwesomeIcon icon={faDownload} size='sm' />&nbsp;Resume
                            
                        </motion.button>
                    </div>
                </a>
                <div className={styles.hold_image_info2}>
                    <div className={styles.picture_info2}>
                        <div className={styles.pic_info2}></div>
                        <div className={styles.border_picture_info2}></div>
                        <div className={styles.pic_blur_info2}></div>
                    </div>
                </div>
            </motion.div>
            <div className={styles.footer}>
                <div className={styles.icons_footer}>
                    <a href="https://www.linkedin.com/in/jorgevieira18/" rel="noreferrer" target="_blank"><IconsFooter icon={faLinkedin} /></a>
                    <a href="https://github.com/JorgeFMVieira" rel="noreferrer" target="_blank"><IconsFooter icon={faGithub} /></a>
                </div>
                <div className={styles.line_footer}></div>
            </div>
        </div>
    )
}

export default Home
