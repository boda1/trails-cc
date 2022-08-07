import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/routecard.module.css';
import { FaMountain,FaRoad } from 'react-icons/fa';
import { RiPinDistanceFill } from 'react-icons/ri';


const RoutesCards = ({ routeState }) => {    
    return (
    <div>
            <ul className={styles.routeCards} >
                {routeState.slice(0,-1).map(route =>  
                    <li className={styles.routeCard} key={route.id}>
                        <Image
                        src={route.imageurl}
                        alt={route.image_alt_text}
                        width={4896}
                        height={2760}
                        layout="responsive"
                        />

                        <ul className={styles.routeCardFooter}>

                            <li className={styles.routeLink}>
                                <Link href="[...slug]" as={route.path} className={styles.routeLink}>
                                    <a>{route.route}</a>
                                </Link>
                            </li>

                            <li className={styles.routeStats}>
                                <FaMountain alt='mountain icon' /> - {route.elevation}m
                            </li>


                            <li className={styles.routeStats}>
                                <RiPinDistanceFill alt='distance icon' /> - {route.distance}km
                            </li>

                            <li className={styles.routeStats}>
                                <FaRoad alt='surface icon' /> - {route.surface}
                            </li>
                        </ul>
                        {/* <Link href="/">
                            <a className={styles.routeCardLinks}>
                                {route.route}
                            </a>
                        </Link> */}
                    </li>
                )}
            </ul>
        </div>
)}

export default RoutesCards