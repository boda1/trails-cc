import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/routecard.module.css'


const RoutesCards = ({routeState}) => {    
    return (
    <div>
            <ul className={styles.routeCards} >
                {routeState.map(route =>  
                    <li className= {styles.routeCard} key={route.id}>
                        <Image
                        src={route.imageurl}
                        alt={route.route}
                        width={4896}
                        height={2760}
                        layout="responsive"
                        />
                        <Link href="[...slug]" as={route.path}>
                            <h2 style={{cursor: "pointer"}}><a  className= {styles.routeCardLinks}>{route.route}</a></h2>
                        </Link>

                        <p>
                            Description/ intro text - to be added to json
                        </p>

                        <ul>
                            <li>
                                <img></img>
                                <p>{route.distance}</p>
                            </li>
                            <li>
                                <img></img>
                                <p>{route.elevation}</p>
                            </li>
                            <li>
                                <img></img>
                                <p>{route.surface}</p>
                            </li>
                        </ul>


                    </li>
                )}
            </ul>
        </div>
)}

export default RoutesCards