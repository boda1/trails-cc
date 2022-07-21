import link from 'next/link'
import Image from 'next/image'
import styles from '../styles/hero-post.module.css'

export default function HeroPost() {
    return (
    <div className={styles.heroPostContainer}>
        <div className={styles.heroPostImage}>
            <Image  
                        src="/king-alfred-preview.jpeg"
                        alt="alt-text"
                        width={4896}
                        height={2760}
                        layout="responsive"
                        
            />
        </div>
        <div className={styles.heroPostCaption}>
            <h2>
                Title of latest post
            </h2>
            <h3>
                "We went somewhere and this is what it looked like yay"
            </h3>
        </div>
    </div>
)}