import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Gouri Saini</title>
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <div className={styles.description}>
          <h1>Portfolio.</h1>
        </div>
        <div className={styles.center}>
          <div className={styles.space}>
            <h1>MY NAME IS <br /> <span>GOURI SAINI</span></h1>
            <span className={styles.develop}> I'M A WEB DEVELOPER </span>
          </div>
          <div className={styles.imageDiv}>
            <img className={styles.image} src="/me.jpg" alt="" />
          </div>
        </div>

        <div className={styles.grid}>
          <a href="/resume" className={styles.card}>
            <h2>Resume <span> &#8680;</span></h2>
            <p>Discover my full potential in my resume</p>
          </a>

          <a href="/project" className={styles.card}>
            <h2>Projects <span> &#8680;</span></h2>
            <p>I design and code beautifully simple things</p>
            {/* <p> and I love what I do.</p> */}
          </a>

          <a href="/about" className={styles.card}>
            <h2>About <span> &#8680;</span></h2>
            <p> Hello there! I'm Gouri Saini, a MERN stack developer</p>
          </a>

          <a href="/contact" className={styles.card}>
            <h2>Contact <span>  &#8680; </span></h2>
            <p>Let's connect and discuss exciting projects!</p>
          </a>
        </div>
      </main>
    </>
  )
}
