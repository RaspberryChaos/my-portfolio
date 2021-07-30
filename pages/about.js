import React from "react";
import styles from "../styles/About.module.css";
import Image from "next/image";

const about = () => {
  return (
    <div>
      <h1 className="pageTitle">About Me</h1>

      <div className={styles.main}>
        <div className={styles.images}>
          <div className={styles.imageContainer}>
            <Image
              src={"/geneva.jpg"}
              width={827}
              height={621}
              layout="responsive"
              alt={"profile photo"}
            />
          </div>
          <div className={styles.imageContainerExtra}>
            <Image
              src={"/laos.jpg"}
              width={827}
              height={621}
              layout="responsive"
              alt={"Ailie hiking in Laos"}
            />
          </div>
          <div className={styles.imageContainerExtra}>
            <Image
              src={"/elephant.jpg"}
              width={827}
              height={621}
              layout="responsive"
              alt={"Ailie with an elephant"}
            />
          </div>
        </div>

        <div className={styles.bio}>
          <h2 className={styles.subtitle}>
            AILIE MCCORKINDALE, Full Stack Developer
          </h2>
          <p>
            Hi, I&apos;m Ailie. I&apos;m a web developer based in Paris, France and I am
            currently looking for a new challenge!
          </p>
          <p>
            Fresh from taking time out to backpack in South East Asia and
            sharpening my tech skills with Ironhack&apos;s intensive web development
            bootcamp, I&apos;m ready to kick start my career as a full stack
            developer! A lover of puzzles, I&apos;m not afraid to think outside the
            box, try new things and use my creativity and enthusiasm to solve
            problems.
          </p>
          <p>
            I love to learn new things and expand my horizons. Although my
            professional path has taken a few twists and turns, I&apos;ve never
            stopped learning whether it was through university, evening classes
            or online tutorials, and I&apos;ve finally found my passion in the ever
            changing world of web development, where it is essential to keep up
            with all the latest developments.
          </p>
          <p>
            In my spare time I enjoy travelling, reading, yoga and making games
            with HTML canvas.
          </p>
          <h3>Technologies</h3>
          <p>
            HTML 5 | CSS3 | JavaScript | TypeScript | React | Bootstrap |
            MaterialUI | Node.js | Express | Handlebars | Jasmine | MongoDB |
            Mongoose | Git | GitHub
          </p>
          <h3>Languages</h3>
          <p>English, French, Italian</p>
        </div>
      </div>
    </div>
  );
};

export default about;
