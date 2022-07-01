import link from 'next/link'
import Image from 'next/image'
import styles from '../styles/header.module.css'

export default function Header() {
    return (
        <header>
           <div classname={styles.siteTitleContainer}>
                <Image
                    className={styles.siteTitleBackground}
                    alt="title background image"
                    src="/king-alfred-preview.jpeg"
                    width={1200}
                    height={400}
                />
                <div className={styles.siteTitle}>Trails.cc</div>
            </div> 
        </header>
    )}