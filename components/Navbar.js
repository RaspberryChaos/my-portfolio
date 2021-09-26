import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Nav.module.css";
// import Image from "next/image";
// import logoLI from '../public/linkedin.png';
// import logoGH from '../public/github.png';

const Navbar = () => {

const [menuOpen, setMenuOpen] = useState(false);

const onScroll = (e) => {
  if(menuOpen === true) {
    window.scrollTo(0,0);
  }
};

useEffect(() => {
  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, [menuOpen]);

const handleClick = (e) => {  
        setMenuOpen(prev => !prev);
}

  return (
    <nav className={styles.nav}>
      <ul className={styles.navMenu} style={{right: (menuOpen ? "0" : "-100%")}}>
        <li className={styles.navItem}>
          <Link href="/">
          <a onClick={(e) => handleClick(e)}>Home</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">
            <a onClick={(e) => handleClick(e)}>About</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/projects">
          <a onClick={(e) => handleClick(e)}>Projects</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="mailto:ailie.mccorkindale@gmail.com">
          <a onClick={(e) => handleClick(e)}>Contact</a>
          </Link>
        </li>
      </ul>
      <div className={menuOpen ? styles.active : styles.hamburger}  onClick={(e) => handleClick(e)}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </nav>
  );
};

export default Navbar;
