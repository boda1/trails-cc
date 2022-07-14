import Link from 'next/link'

import styles from '../styles/routecard.module.css'


const RoutesCards = ({routeState}) => {    
    return (
    <div>
        <ul className={styles.routeCards} >
            {routeState.map(route =>  
                <li className= {styles.routeCard} key={route.id}>
                    <Link href="/">
                        <a className={styles.routeCardLinks}>
                            {route.route}
                        </a>
                    </Link>
                </li>
            )}
        </ul>
    </div>
)}

export default RoutesCards