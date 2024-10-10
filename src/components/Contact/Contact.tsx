import React, { useRef, useState } from 'react'
import styles from './Contact.module.css'
import { motion, useInView } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import TabContact from './TabContact/TabContact';

const Contact = () => {

    const ref = useRef(null);
    const isInViewTitle = useInView(ref);

    return (
        <div className={styles.contact} id='contact'>
            <motion.div
                ref={ref}
                className={styles.title_contact}
                animate={{
                    color: isInViewTitle ? "#FFFFFF" : "#1E1E1E"
                }}
                whileHover={{
                    color: "#1E1E1E"
                }}
                >my&nbsp;<span>Contacts</span>.
            </motion.div>
            <div className={styles.timeline}>
                <div className={styles.contact_info}>
                    <TabContact title='Follow me' iconsOnly={true} textIcons={false} icons={[faLinkedin, faGithub]} iconsUrl={["https://www.linkedin.com/in/jorgevieira18/", "https://github.com/JorgeFMVieira"]} description='' descriptionUrl="" isEmail={false} />
                    <TabContact title='Email Me' iconsOnly={false} textIcons={false} icons={[]} iconsUrl={[]} description='jorgevieira1221@gmail.com' descriptionUrl="" isEmail={true} />
                    <TabContact title='Resume' iconsOnly={false} textIcons={true} icons={[faDownload]} iconsUrl={[]} description='Download Resume' descriptionUrl="/jorge_vieira_cv.pdf" isEmail={false} />
                </div>
            </div>
            <div className={styles.wrapper_timeline_info}>
                <div className={styles.timeline_info}>
                    <span>I'm actively seeking new opportunities and would love to connect! Feel free to reach out with any questions or just to say hello. I'll make sure to respond as soon as I can!</span>
                </div>
            </div>
    
        </div>
    )
}

export default Contact
