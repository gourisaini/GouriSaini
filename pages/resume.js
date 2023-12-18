import React from 'react'
import Head from 'next/head'
import styles from '@/styles/resume.module.css'

const resume = () => {
  return (
    <>
      <Head>
        <title>Resume</title>
      </Head>
      <div className={styles.main}>

        <button className={styles.btn}><a href="/contact">Hire Me</a></button>
        <div className={styles.CVimg}>
          <img src="/Gouri Saini CV.jpg" alt="" />
        </div>
        <button className={styles.btn}><a href="/Gouri Saini CV(2).pdf" download>Download Resume</a></button>
      </div>
    </>
  )
}

export default resume;