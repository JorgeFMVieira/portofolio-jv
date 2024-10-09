import React from 'react'
import styles from './TabContact.module.css'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { spawn } from 'child_process';

export type TabContactProps = {
  title: string;
  iconsOnly: boolean;
  textIcons: boolean;
  icons: IconDefinition[];
  iconsUrl: string[];
  description: string;
  descriptionUrl: string;
  isEmail: boolean;
}

const TabContact = (props: TabContactProps) => {

    const handleDescriptionClick = () => {
        if (props.isEmail) {
            window.location.href = `mailto:${props.description}`;
        }
    };

  return (
    <div>
        <div className={styles.tab_contact}>
            <div className={styles.title_tab_contact}>{props.title}</div>
            <div className={styles.desc_tab_contact}>
                {props.iconsOnly ? (
                    props.icons.map((icon, index) => (
                        <div className={styles.icons_tab_contact}>
                            <motion.a
                            key={index}
                            href={props.iconsUrl[index]}
                            rel="noreferrer"
                            target="_blank"
                            whileHover={{ color: '#1E1E1E' }}
                            >
                            <FontAwesomeIcon icon={icon} size='xl' />
                            </motion.a>
                        </div>
                    ))
                    ) : (
                    props.textIcons ? (
                        <span>
                        {props.icons.map((icon, index) => (
                            <div className={styles.icons_tab_contact}>
                                <motion.a href={props.descriptionUrl} target="_blank" rel="noopener noreferrer"
                                    whileHover={{
                                        color: '#1E1E1E'
                                    }}>
                                    <FontAwesomeIcon icon={icon} size='xl' />&nbsp;{props.description}
                                </motion.a>
                            </div>
                        ))}
                    </span>
                    ) : (
                        <motion.span className={styles.icons_tab_contact}
                                onClick={handleDescriptionClick}
                                whileHover={{
                                    color: '#1E1E1E'
                                }}>{props.description}
                        </motion.span>
                    )
                )}
            </div>
        </div>
        <div className={styles.line}></div>
    </div>
  );
}

export default TabContact;
