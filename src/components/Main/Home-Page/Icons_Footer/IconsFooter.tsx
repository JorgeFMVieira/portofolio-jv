import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { motion } from 'framer-motion'
import styles from './IconsFooter.module.css'
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type IconsFooterProps = {
    icon: IconProp
}

const IconsFooter = (props: IconsFooterProps) => {
    return (
        <motion.div 
            initial={{
                rotate: 0
            }}
            whileHover={{
                rotate: 360,
                color: "#A9A9A9"
            }}
            transition={{
                type: "tween", duration: 0.5
            }}
            className={styles.icon_footer}>
                <FontAwesomeIcon icon={props.icon} size="lg"/>
        </motion.div>
    )
}

export default IconsFooter
