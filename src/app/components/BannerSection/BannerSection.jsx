import styles from './BannerSection.module.css'
import banner from '../../assets/banner.webp'
import Image from 'next/image'

export default function BannerSection(){
    return(
        <section className={styles.bannerSection}>
            <Image
                src={banner}
                alt='Banner de ejemplo'
                className={styles.banner}
            />
        </section>
    )
}