import link from 'next/link'
import Image from 'next/image'
import styles from '../styles/header.module.css'

export default function IndexHeader() {
    return (
        <header>
                <h1 className={`${styles.siteTitle} ${styles.indexHeaderSubtitle}`}>
                    Trails<span className={styles.contrastText}>.cc</span>
                </h1>

                <h3 className={styles.indexHeaderSubtitle}>
                    Some tagline for the website
                </h3>
                {/*  

                not ready to apply styling to next.js image component 
                
                <div className={styles.siteTitleBackground}>
                    <Image
                        alt="title background image"
                        src="/king-alfred-preview.jpeg"
                        width={100}
                        height={400}
                    />
                </div>
                */}
        </header>
    )}