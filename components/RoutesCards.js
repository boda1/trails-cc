import Link from 'next/link'

import styles from '../styles/routecard.module.css'


const RoutesCards = ({routesList}) => {    
    return (
    <div>
        <ul className={styles.routeCards} >
            {routesList.routes.map(route =>  
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