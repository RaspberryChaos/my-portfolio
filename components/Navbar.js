import React, { useState} from "react";
import Link from "next/link";
import styles from "../styles/Nav.module.css";

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
        <li>
          <Link href="/" className="navItem">
          <a onClick={(e) => handleClick(e, true)}>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/about" className="navItem">
            <a onClick={(e) => handleClick(e, true)}>About</a>
          </Link>
        </li>
        <li>
          <Link href="/projects" className="navItem">
          <a onClick={(e) => handleClick(e, true)}>Projects</a>
          </Link>
        </li>
        <li>
          <Link href="/contact" className="navItem">
          <a onClick={(e) => handleClick(e, true)}>Contact</a>
          </Link>
        </li>
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
