import link from 'next/link'
import Image from 'next/image'
import styles from '../styles/header.module.css'

export default function Header({pageTitle}) {
    return (
        <header>
                <h1 className={styles.siteTitle}>
                    {pageTitle}
                </h1>
        </header>
)}




