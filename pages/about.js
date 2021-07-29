import React from "react";
import styles from '../styles/About.module.css';


const about = () => {
  return (
    <div className={styles.container}>
      <h1 className="pageTitle">About Me</h1>
      
      <div className={styles.main}>
      <div className={styles.images}>
      <img className={styles.profileImage} src="https://res.cloudinary.com/dih7zrall/image/upload/v1627524874/Portfolio/geneva_e7afjr.jpg" />
      <img className={styles.profileImageExtra} src="https://res.cloudinary.com/dih7zrall/image/upload/v1627523875/Portfolio/laos_dlqego.jpg" />
      <img className={styles.profileImageExtra} src="https://res.cloudinary.com/dih7zrall/image/upload/v1627526801/Portfolio/elephant_vhe6z8.jpg" />
      </div>
      <div className={styles.bio}>
      <h2 className={styles.subtitle}>
        AILIE MCCORKINDALE, Full Stack Developer - Javascript(ES6), HTML & CSS. MERN Stack (MongoDB,
        Express, React, Node-js).
      </h2>
      <p>
        Hi, I'm Ailie. I'm a web developer based in Paris, France and I am
        currently looking for a new challenge!
      </p>
      <p>
        Fresh from taking time out to backpack in South East Asia and sharpening
        my tech skills with Ironhack's intensive web development bootcamp, I'm
        ready to kick start my career as a full stack developer! A lover of
        puzzles, I’m not afraid to think outside the box, try new things and use
        my creativity and enthusiasm to solve problems.
      </p>
      <p>
        I love to learn new things and expand my horizons. Although my
        professional path has taken a few twists and turns, I’ve never stopped
        learning whether it was through university, evening classes or online
        tutorials, and I’ve finally found my passion in the ever changing world
        of web development, where it is essential to keep up with all the latest
        developments.
      </p>
      <p>In my spare time I enjoy travelling, reading, yoga and making games with HTML canvas.</p>
      <h3>Technologies</h3>
      <p>HTML 5 | CSS3 | JavaScript | TypeScript | React | Bootstrap | MaterialUI | Node.js | Express | Handlebars | Jasmine | MongoDB | Mongoose | Git | GitHub</p>
      <h3>Languages</h3>
      <p>English, French, Italian</p>
      </div>
      </div>
    </div>
  );
};

export default about;
