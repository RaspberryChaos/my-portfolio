import React from "react";
import styles from "../styles/ProjectCard.module.css";
import Image from "next/image";

const ProjectCard = (props) => {
  //console.log("props", props);
  return (
    <div key={`project_${props.project.id}`} className={styles.card}>
      <h2 className={styles.cardTitle}>{props.project.title}</h2>
      <h3>{props.project.category}</h3>
      {props.project.img && (
        <div className={styles.imageContainer}>
        <Image
          src={props.project.img}
          width={1450}
          height={816}
          alt="screenshot"
          layout="responsive"
        />
        </div>
      )}
      <div className={styles.buttons}>
        <a href={props.project.url} target="_blank" rel="noopener noreferrer">
          Visit Site
        </a>
        <a
          href={props.project.gitHub}
          target="_blank"
          rel="noopener noreferrer"
        >
          See Code
        </a>
      </div>
      <p>Technologies Used: {props.project.tags.join(", ")}</p>
    </div>
  );
};

export default ProjectCard;
