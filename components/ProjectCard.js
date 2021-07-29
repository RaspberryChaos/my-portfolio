import React from "react";
import styles from "../styles/ProjectCard.module.css";

const imgSize = {
    width: "100%",
    objectFit: "cover"
}

const ProjectCard = (props) => {
    console.log("props", props)
  return (
    <div
      key={`project_${props.project.id}`}
      className={styles.card}
    >
      <h2 className={styles.cardTitle}>{props.project.title}</h2>
      <h3>{props.project.category}</h3>
      {props.project.img && <img src={props.project.img} style={imgSize} alt="screenshot" />}
    <div className={styles.buttons}>
      <a href={props.project.url} target="_blank">
        Visit Site
      </a>
      <a href={props.project.gitHub} target="_blank">
        See Code
      </a>
    </div>
      <p>Technologies Used: {props.project.tags.join(', ')}</p>
    </div>
  );
};

export default ProjectCard;
