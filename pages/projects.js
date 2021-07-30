import React from 'react';
import ProjectCard from '../components/ProjectCard';
import styles from '../styles/Project.module.css';
import { myProjects } from '../projectsData';

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

