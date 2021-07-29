import React, { useState} from "react";
import Link from "next/link";
import styles from "../styles/Nav.module.css";
import Image from "next/Image";
import logoLI from '../public/linkedin.png';
import logoGH from '../public/github.png';


const Navbar = () => {

const [menuOpen, setMenuOpen] = useState(false);

const handleClick = (e, link) => {
    if(link === true) {
        setMenuOpen(false);
        console.log(menuOpen, "link")

    } else {
        setMenuOpen(prev => prev ? false : true);
    }
    console.log(menuOpen)
    console.log("clicked")
}

  return (
    <nav className={styles.nav}>
      <ul className={styles.navMenu} style={{right: (menuOpen ? "0" : "-100%")}}>
        <li className={styles.navItem}>
          <Link href="/">
          <a onClick={(e) => handleClick(e, true)}>Home</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/about">
            <a onClick={(e) => handleClick(e, true)}>About</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/projects">
          <a onClick={(e) => handleClick(e, true)}>Projects</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="mailto:ailie.mccorkindale@gmail.com">
          <a onClick={(e) => handleClick(e, true)}>Contact</a>
          </Link>
        </li>
        {/* <div className={styles.socMedia}>
        <li>
          <a href="https://www.linkedin.com/in/ailie-mccorkindale/" target="_blank" onClick={(e) => handleClick(e, true)}>
            <Image src={logoLI} alt="LinkedIn logo" className={styles.logo} width={12} height={12} />
            <span className={styles.social}>LinkedIn</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/RaspberryChaos" target="_blank" onClick={(e) => handleClick(e, true)}>
            <Image src={logoGH} alt="GitHub logo" className={styles.logo} width={12} height={12}  />
          <span className={styles.social}>GitHub</span>
          </a>
        </li>
        </div> */}
      </ul>
      <div className={menuOpen ? styles.active : styles.hamburger}  onClick={(e) => handleClick(e, false)}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </div>
    </nav>
  );
};

export default Navbar;
