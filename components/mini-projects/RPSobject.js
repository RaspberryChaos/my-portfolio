import Image from "next/image";
import styles from "../../styles/RPSobject.module.css";

const RPSobject = ({ title, handleChoice, color }) => {
  return (
    <div
      onClick={handleChoice}
      className={styles.option}
      style={{ backgroundColor: color }}
    >
      <div className={styles.imageContainer}>
        <Image
          src={`/rps/${title.toLowerCase()}.png`}
          width={80}
          height={80}
          layout="responsive"
          alt={title}
        />
      </div>
      <p className={styles.label}>{title}</p>
    </div>
  );
};

export default RPSobject;
