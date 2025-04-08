import styles from './home.module.css'

export default function Home(){
    return(
        <section className={styles.homeSection}>
            <div className={styles.container}>
                <div className={styles.textContainer}>
                    <h1>Leandro Heffes</h1>
                    <h2>Full stack web developer</h2>
                </div>

                <div className={styles.linksContainer}>
                    <a href="/projects">My projects</a>
                    <a href="/contact">Contact</a>
                </div>
            </div>
        </section>
    )
}