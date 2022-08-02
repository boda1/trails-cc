import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/routecard.module.css';
import { FaMountain } from 'react-icons/fa';
import { RiPinDistanceFill } from 'react-icons/ri';


const RoutesCards = ({ routeState }) => {    
    return (
    <div>
            <ul className={styles.routeCards} >
                {routeState.map(route =>  
                    <li className={styles.routeCard} key={route.id}>
                        <Image
                        src={route.imageurl}
                        alt={route.route}
                        width={4896}
                        height={2760}
                        layout="responsive"
                        />
                        <div className={styles.routeCardFooter}>
                            <div>
                                <div className={styles.routeLink}>
                                    <Link href="[...slug]" as={route.path} className={styles.routeLink}>
                                        <a>{route.route}</a>
                                    </Link>
                                </div>
                            </div>
                            <div>
                                <div className={styles.routeElevation}>
                                    <FaMountain alt='mountain icon' /> - {route.elevation}m
                                </div>
                            </div>    
                            <div>
                                <div className={styles.routeDistance}>
                                    <RiPinDistanceFill alt='distance icon' /> - {route.distance}km
                                </div>
                            </div>
                        </div>
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