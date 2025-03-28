import styles from './DesktopNavbar.module.css'
import Link from 'next/link'

export default function DesktopNavbar(){
    return(
        <nav className={styles.navbar}>
                    <Link className={styles.navbarLink} href={'#home'}>
                        <span>Home</span>
                        <span>
                            <svg viewBox="0 0 24 24" fill="currentColor" className={styles.linkIcon}>
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M12.707 2.293l9 9c.63 .63 .184 1.707 -.707 1.707h-1v6a3 3 0 0 1 -3 3h-1v-7a3 3 0 0 0 -2.824 -2.995l-.176 -.005h-2a3 3 0 0 0 -3 3v7h-1a3 3 0 0 1 -3 -3v-6h-1c-.89 0 -1.337 -1.077 -.707 -1.707l9 -9a1 1 0 0 1 1.414 0m.293 11.707a1 1 0 0 1 1 1v7h-4v-7a1 1 0 0 1 .883 -.993l.117 -.007z" />
                            </svg>
                        </span>
                    </Link>

                    <Link className={styles.navbarLink} href={'#projects'}>
                        <span>Projects</span>
                        <span>
                            <svg viewBox="0 0 24 24" fill="currentColor" className={styles.linkIcon}>
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M14 2a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v9a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-9a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3zm0 2h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1" />
                            </svg>
                        </span>
                    </Link>

                    <Link className={styles.navbarLink} href={'#tasks-i-do'}>
                        <span>Tasks I do</span>
                        <span>
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.linkIcon}>
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                                <path d="M10 18l5 -5a1.414 1.414 0 0 0 -2 -2l-5 5v2h2z" />
                            </svg>
                        </span>
                    </Link>

                    <Link className={styles.navbarLink} href={'#skills'}>
                        <span>Skills</span>
                        <span>
                            <svg viewBox="0 0 24 24" fill="currentColor" className={styles.linkIcon}>
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M10 2c0 -.88 1.056 -1.331 1.692 -.722c1.958 1.876 3.096 5.995 1.75 9.12l-.08 .174l.012 .003c.625 .133 1.203 -.43 2.303 -2.173l.14 -.224a1 1 0 0 1 1.582 -.153c1.334 1.435 2.601 4.377 2.601 6.27c0 4.265 -3.591 7.705 -8 7.705s-8 -3.44 -8 -7.706c0 -2.252 1.022 -4.716 2.632 -6.301l.605 -.589c.241 -.236 .434 -.43 .618 -.624c1.43 -1.512 2.145 -2.924 2.145 -4.78" />
                            </svg>
                        </span>
                    </Link>

                    <Link className={styles.navbarLink} href={'#experience-and-training'}>
                        <span>Experience and training</span>
                        <span>
                            <svg viewBox="0 0 24 24" fill="currentColor" className={styles.linkIcon}>
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M8 22a1 1 0 0 1 0 -2h.616l.25 -2h-4.866a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h16a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-4.867l.25 2h.617a1 1 0 0 1 0 2zm5.116 -4h-2.233l-.25 2h2.733z" />
                            </svg>
                        </span>
                    </Link>

                    <Link className={styles.navbarLink} href={'#contact'}>
                        <span>Contact</span>
                        <span>
                            <svg viewBox="0 0 24 24" fill="currentColor" className={styles.linkIcon}>
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M22 7.535v9.465a3 3 0 0 1 -2.824 2.995l-.176 .005h-14a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-9.465l9.445 6.297l.116 .066a1 1 0 0 0 .878 0l.116 -.066l9.445 -6.297z" />
                                <path d="M19 4c1.08 0 2.027 .57 2.555 1.427l-9.555 6.37l-9.555 -6.37a2.999 2.999 0 0 1 2.354 -1.42l.201 -.007h14z" />
                            </svg>
                        </span>
                    </Link>
        </nav>
    )
}