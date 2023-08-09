import React, { useState } from 'react'
import Head from 'next/head'
import Message from '@/components/Message'
import styles from '@/styles/contact.module.css'

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact</title>
        <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      </Head>
      <div className={styles.main}>
        <div className={styles.side}>
          <h2><em>Let's connect and discuss exciting projects! Feel free to reach out to me.</em></h2>
        </div>
        <Message />
        <div className={styles.side}>

          <a href="https://www.linkedin.com/in/gouri-saini-755006124/" title='LinkedIn' target='_blank'>
            <i className="ri-linkedin-fill"></i>
          </a>
          <a href="https://github.com/gourisaini" title='GitHub' target='_blank'>
            <i className="ri-github-fill"></i>
          </a>
          <a href="https://www.instagram.com/_gouri._.saini_/?igshid=MzRlODBiNWFlZA%3D%3D" title='Instagram' target='_blank'>
            <i className="ri-instagram-fill"></i>
          </a>
        </div>
      </div>
    </>
  )
}

export default contact;