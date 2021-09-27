import React from "react";
import styles from "../styles/Contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const linkedIn = {
  color: "#0072b1",
  backgroundColor: "#ffffff",
  fontSize: "2rem",
};

const contact = () => {
  return (
    <div>
      <h1 className="pageTitle">Contact Me</h1>
      <div className={styles.container}>
        <div className={styles.contact}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          <a
            className={styles.link}
            href="mailto:ailie.mccorkindale@gmail.com"
            rel="noopener noreferrer"
            target="blank"
          >
            ailie.mccorkindale@gmail.com
          </a>
        </div>
        <div className={styles.contact}>
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          <a
            className={styles.link}
            href="https://github.com/RaspberryChaos"
            rel="noopener noreferrer"
            target="blank"
          >
            Github
          </a>
        </div>
        <div className={styles.contact}>
          <FontAwesomeIcon icon={faLinkedin} style={linkedIn} />
          <a
            className={styles.link}
            href="https://www.linkedin.com/in/ailie-mccorkindale/"
            rel="noopener noreferrer"
            target="blank"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

export default contact;
