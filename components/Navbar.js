import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Nav.module.css";
// import Image from "next/image";
// import logoLI from '../public/linkedin.png';
// import logoGH from '../public/github.png';

const Navbar = () => {

const [menuOpen, setMenuOpen] = useState(false);
const [screenSize, setScreenSize] = useState("desktop");

const onScroll = (e) => {
  if(menuOpen === true && screenSize === "mobile") {
    window.scrollTo(0,0);
  }
};

useEffect(() => {
  window.addEventListener("scroll", onScroll);
  return () => window.removeEventListener("scroll", onScroll);
}, [menuOpen]);

const handleClick = (e, type) => {  
        setMenuOpen(prev => !prev);
        if(type === "menu" && screenSize === "desktop") {
          setScreenSize("mobile");
        } else {
          setScreenSize("desktop");
        }
}

  return (
    <nav className={styles.nav}>
      <ul className={styles.navMenu} style={{right: (menuOpen ? "0" : "-100%")}}>
        <li className={styles.navItem}>
          <Link href="/">
          <a onClick={(e) => handleClick(e, "link")}>Home</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">
            <a onClick={(e) => handleClick(e, "link")}>About</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/projects">
          <a onClick={(e) => handleClick(e, "link")}>Projects</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/contact">
          <a onClick={(e) => handleClick(e, "link")}>Contact</a>
          </Link>
        </li>
      </ul>
      <div className={menuOpen ? styles.active : styles.hamburger}  onClick={(e) => handleClick(e, "menu")}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </nav>
  );
};

export default Navbar;
