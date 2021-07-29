import React from 'react';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Project.module.css';

const myProjects = [
     {
        title: "Whale Of Fortune",
        id: 1,
        url: "https://raspberrychaos.github.io/game-project/" ,
        gitHub: "https://github.com/RaspberryChaos/game-project",
        category: "Ironhack student project",
        tags: ["HTML", "CSS", "JavaScript"],
        img: "https://res.cloudinary.com/dih7zrall/image/upload/v1627420924/Portfolio/WoF6_fbkt49.jpg"
    },
    {
        title: "My Life Timeline",
        id: 2,
        url: "http://my-timeline-project.herokuapp.com/" ,
        gitHub: "https://github.com/KiwiMantelli/my-timeline-project2",
        category: "Ironhack student project",
        tags: ["HTML", "CSS", "JavaScript", "Node", "Express", "Handlebars", "MongoDB", "Mongoose"],
        img: "https://res.cloudinary.com/dih7zrall/image/upload/v1627420748/Portfolio/timeline1_poacrt.jpg"
    },
    {
        title: "Breakroom 248",
        id: 3,
        url: "http://breakroom-248.herokuapp.com/" ,
        gitHub: "https://github.com/tatimatz/breakroom248client/tree/master",
        category: "Ironhack student project",
        tags: ["HTML", "CSS", "JavaScript", "React", "Node", "Express", "MaterialUI", "MongoDB", "Mongoose"],
        img: "https://res.cloudinary.com/dih7zrall/image/upload/v1627420748/Portfolio/breakroom1_jclub7.jpg"
    },
    {
        title: "Website for Virginie Perrault",
        id: 4,
        url: "https://virginie-perrault.netlify.app/" ,
        gitHub: "https://github.com/RaspberryChaos/site-virginie-perrault",
        category: "Client project",
        tags: ["HTML", "CSS", "JavaScript"],
        img: "https://res.cloudinary.com/dih7zrall/image/upload/v1627420748/Portfolio/siteVP1_ud2td8.jpg"
    },
    {
        title: "Flappy Bird",
        id: 5,
        url: "https://flappybird-ailie.netlify.app/" ,
        gitHub: "https://github.com/RaspberryChaos/flappy-bird",
        category: "HTML Canvas Game",
        tags: ["HTML", "CSS", "JavaScript"],
        img: "https://res.cloudinary.com/dih7zrall/image/upload/v1627435501/Portfolio/flappybird1_cxgz4v.jpg"
    },
    {
        title: "Bubble Pop",
        id: 6,
        url: "https://bubblepop-ailie.netlify.app/" ,
        gitHub: "https://github.com/RaspberryChaos/bubblePop",
        category: "HTML Canvas Game",
        tags: ["HTML", "CSS", "JavaScript"],
        img: "https://res.cloudinary.com/dih7zrall/image/upload/v1627420748/Portfolio/bubblePop1_cccytz.jpg"
    }
]


const projects = () => {
    return (
        <div className="container">
            <h1 className="pageTitle">My Projects</h1>
            
            <div className={styles.projectGrid}>
                {myProjects.map(project => <ProjectCard project={project}/> )}
            </div>
        </div>
    )
}
 
export default projects;
