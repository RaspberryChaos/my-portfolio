import React from 'react';
import Link from 'next/link';
import styles from '../styles/Nav.module.css';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <ul>
                <li>
                    <Link href='/' className={styles.navItem}>Home</Link>
                </li>
                <li>
                    <Link href='/about' className={styles.navItem}>About</Link>
                </li>
                <li>
                    <Link href='/projects' className={styles.navItem}>Projects</Link>
                </li>
                <li>
                    <Link href='/contact' className={styles.navItem}>Contact</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;
