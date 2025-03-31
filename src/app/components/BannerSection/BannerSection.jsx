'use client'
import styles from './BannerSection.module.css'
import picaditasDeButarfaBanner from '../../assets/picaditasDeButarfaBanner.webp'
import terraSeguridadBanner from '../../assets/terraSeguridadBanner.webp'
import Image from 'next/image'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css';

export default function BannerSection(){
    return(
        <section className={styles.bannerSection}>
            <Splide
                aria-label="Projects banners"
                className={styles.splide}
                options={{
                    type: 'loop',
                    perPage: 1,
                    autoplay: true,
                    interval: 4000,
                    arrows: false,
                    pagination: true,
                    drag: true,
                    // breakpoints: {
                    //     768: {
                    //         height: '50vh',
                    //     },
                    // },
                }}
            >
                <SplideSlide className={styles.splideSlide}>
                    <Image
                        src={picaditasDeButarfaBanner}
                        alt='Banner de Picaditas De Butarfa'
                        className={styles.banner}
                    />
                </SplideSlide>
                <SplideSlide className={styles.splideSlide}>
                    <Image
                        src={terraSeguridadBanner}
                        alt='Banner de Terra Seguridad'
                        className={styles.banner}
                    />
                </SplideSlide>
            </Splide>
        </section>
    )
}