'use client'
import { useState } from 'react'
import styles from './Header.module.css'
import MobileNavbar from './MobileNavbar/MobileNavbar'
import DesktopNavbar from './DesktopNavbar/DesktopNavbar'
import Link from 'next/link'
import { poppins } from '../../../../public/fonts/fonts'

export default function Header(){
    const [isNavbarOpen, setIsNavbarOpen] = useState(false)

    const toggleNavbar = async () => {
        setIsNavbarOpen(!isNavbarOpen)
    }

    return(
        <>
            <header className={styles.header}>
                <div className={styles.headerContainer}>
                    <div className={styles.openNavbarIconContainer}>
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.openNavbarIcon} onClick={toggleNavbar}>
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M4 6l16 0" />
                            <path d="M4 12l16 0" />
                            <path d="M4 18l16 0" />
                        </svg>
                    </div>

                    <div className={styles.titleLinkContainer}>
                        <Link href={'/'} className={`${styles.titleLink} ${poppins.className}`}>Leandro Heffes</Link>
                    </div>

                    <DesktopNavbar />
                </div>
            </header>

            <MobileNavbar toggleNavbar={toggleNavbar} isNavbarOpen={isNavbarOpen}/>
        </>
    )
}