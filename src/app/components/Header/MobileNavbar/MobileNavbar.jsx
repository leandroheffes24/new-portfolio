import styles from './MobileNavbar.module.css'
import Link from "next/link";

export default function MobileNavbar({toggleNavbar}){
    return(
        <div className={styles.navbarContainer}>
            <div className={styles.navbarTextContainer}>
                <span className={styles.navbarText}>NAVIGATION</span>
            </div>
            <nav className={styles.navbar}>
                <Link className={styles.navbarLink} href={'#'} onClick={toggleNavbar}>Home</Link>
                <Link className={styles.navbarLink} href={'#'} onClick={toggleNavbar}>Projects</Link>
                <Link className={styles.navbarLink} href={'#'} onClick={toggleNavbar}>Tasks I do</Link>
                <Link className={styles.navbarLink} href={'#'} onClick={toggleNavbar}>Skills</Link>
                <Link className={styles.navbarLink} href={'#'} onClick={toggleNavbar}>
                Experience and training</Link>
                <Link className={styles.navbarLink} href={'#'} onClick={toggleNavbar}>Contact</Link>
                <div className={styles.closeNavbarIconContainer}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.closeNavbarIcon} onClick={toggleNavbar}>
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                        <path d="M18 6l-12 12" />
                        <path d="M6 6l12 12" />
                    </svg>
                </div>
            </nav>
        </div>
    )
}