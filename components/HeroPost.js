import link from 'next/link'
import Image from 'next/image'
import styles from '../styles/hero-post.module.css'
import WeatherData from './WeatherData'

export default function HeroPost(props) {
    const latestRoute = props.routesList.routes[props.routesList.routes.length - 1]

    return (
        <div className={styles.heroPostContainer}>
            <div className={styles.heroPostImage}>
                <Image  
                            src={latestRoute.imageurl}
                            alt={latestRoute.image_alt_text}
                            width={4896}
                            height={2760}
                            layout="responsive"
                            
                />
            </div>
            <div className={styles.heroPostSiteTitle}>
                <h1>Workingtitle.cc</h1>
            </div>
            <div className={styles.heroPostCaption}>
                <h2>
                    {latestRoute.route}
                </h2>
                <h3>
                    "We went somewhere and this is what it looked like yay"
                </h3>
            </div>
            <WeatherData />
        </div>
)}
