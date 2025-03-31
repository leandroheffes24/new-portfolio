import Image from 'next/image'
import styles from './HomeSection.module.css'
import homeBackground from '../../assets/homeBackground.webp'
import { poppins } from '../../../../public/fonts/fonts'
import Link from 'next/link'

export default function HomeSection(){
    return(
        <section className={styles.homeSection}>
            <div className={styles.informationContainer}>
                <h1 className={poppins.className}>Leandro Heffes</h1>
                <h2>Full stack web developer</h2>
                <p>I'm a developer passionate about creating dynamic, efficient, and scalable digital experiences. From sleek front-end designs to powerful back-end solutions, I turn ideas into reality.</p>

                <div className={styles.buttonsContainer}>
                    <button>
                        <Link href={'#projects'}>Take a look at my projects</Link>
                    </button>

                    <button>
                        <Link href={'#contact'}>Contact me</Link>
                    </button>
                </div>
            </div>

            <div className={styles.imageContainer}>
                <Image
                    src={homeBackground}
                    alt='Home image background'
                    className={styles.image}
                />
            </div>
        </section>
    )
}