import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <div className={styles.container} >

      <main className={styles.main}>
      <p className={styles.portfolio}><span className={styles.rectangle}></span>PORTFOLIO</p>
      <h1 className={styles.title}>Ailie McCorkindale</h1>
      <h2 className={styles.subtitle}>Web Developer</h2>
        <button className={styles.btn}>My Projects</button>
      </main>

      
    </div>
  )
}


