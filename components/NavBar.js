import Link from 'next/link'
import styles from '../styles/NavBar.module.css'


const NavBar = ({}) => {    
    return (
        <nav className={styles.navBar}>
          <ul>
            <li>
              <Link href="/">
                <a>Logo</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/">
              <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </nav>
)}

export default NavBar