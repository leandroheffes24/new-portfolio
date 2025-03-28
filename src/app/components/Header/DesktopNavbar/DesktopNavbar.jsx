import styles from './DesktopNavbar.module.css'
import Link from 'next/link'

export default function DesktopNavbar(){
    return(
        <nav className={styles.navbar}>
            <Link className={styles.navbarLink} href={'#home'}>Home</Link>
            <Link className={styles.navbarLink} href={'#projects'}>Projects</Link>
            <Link className={styles.navbarLink} href={'#tasks-i-do'}>Tasks I do</Link>
            <Link className={styles.navbarLink} href={'#skills'}>Skills</Link>
            <Link className={styles.navbarLink} href={'#experience-and-training'}>
            Experience and training</Link>
            <Link className={styles.navbarLink} href={'#contact'}>Contact</Link>
        </nav>
    )
}