import styles from './Header.module.css'

export default function Header(){
    return(
        <>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={styles.openNavIcon}>
                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                <path d="M4 6h16" />
                <path d="M7 12h13" />
                <path d="M10 18h10" />
            </svg>

            {/* <header>
                
            </header> */}
        </>
    )
}