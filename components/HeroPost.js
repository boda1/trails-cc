import link from 'next/link'
import Image from 'next/image'
import styles from '../styles/hero-post.module.css'

export default function HeroPost({ routesList }) {
    
    // const heroPost = routeState.filter(route => route.id = 1);
    
    console.log("route list:", routesList);

    // YOU ARE HERE

    const latestRoute = routesList.routes[routesList.routes.length - 1]

    console.log("latest route:", latestRoute);

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
        <div className={styles.heroPostCaption}>
            <h2>
                {latestRoute.route}
            </h2>
            <h3>
                "We went somewhere and this is what it looked like yay"
            </h3>
        </div>
    </div>
)}