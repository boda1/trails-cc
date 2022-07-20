import link from 'next/link'
import Image from 'next/image'
import styles from '../styles/hero-post.module.css'

export default function HeroPost() {
    return (
    <div className={styles.heroPost}>
        <Image  
                    src="/king-alfred-preview.jpeg"
                    alt="alt-text"
                    width={4896}
                    height={2760}
                    layout="responsive"
                    
        />
        <div className={styles.caption}>
            <h2>
                Name of latest post
            </h2>
        </div>
    </div>
)}