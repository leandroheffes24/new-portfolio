import styles from './MobileNavbar.module.css'
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion'

export default function MobileNavbar({toggleNavbar, isNavbarOpen}){
    return(
        <AnimatePresence mode='wait'>
            {isNavbarOpen && (
                <motion.nav
                    key="mobile-navbar"
                    initial={{x: "-100%"}}
                    animate={{x: 0}}
                    exit={{x: "-100%"}}
                    transition={{type: "tween", duration: 0.4, ease: "easeInOut"}}
                    className={styles.navbarContainer}
                >
                    <div className={styles.navbarTextContainer}>
                        <span className={styles.navbarText}>NAVIGATION</span>
                    </div>
                    <nav className={styles.navbar}>
                        <Link className={styles.navbarLink} href={'#home'} onClick={toggleNavbar}>Home</Link>
                        <Link className={styles.navbarLink} href={'#projects'} onClick={toggleNavbar}>Projects</Link>
                        <Link className={styles.navbarLink} href={'#tasks-i-do'} onClick={toggleNavbar}>Tasks I do</Link>
                        <Link className={styles.navbarLink} href={'#skills'} onClick={toggleNavbar}>Skills</Link>
                        <Link className={styles.navbarLink} href={'#experience-and-training'} onClick={toggleNavbar}>
                        Experience and training</Link>
                        <Link className={styles.navbarLink} href={'#contact'} onClick={toggleNavbar}>Contact</Link>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.closeNavbarIcon} onClick={toggleNavbar}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M5 12l14 0" />
                            <path d="M5 12l6 6" />
                            <path d="M5 12l6 -6" />
                        </svg>
                    </nav>
                </motion.nav>
            )}
        </AnimatePresence>
    )
}