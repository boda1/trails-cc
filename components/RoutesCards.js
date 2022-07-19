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
                            <a>{route.route}</a>
                        </Link>
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