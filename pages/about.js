import React from 'react'
import Head from 'next/head'
import styles from '@/styles/Home.module.css'

const about = () => {
  return (
    <>
      <Head>
        <title>About</title>
      </Head>

      <div className={styles.about}>
        <h3> Introduction:  <hr /></h3> <br />
        <p>
          &rArr; Name: Gouri Saini <br />
          &rArr; Pursuing Bachelor's in Computer Applications (BCA) from Bhopal <br />
          &rArr; Aspiring MERN stack developer with a strong passion for programming and innovative web applications. <br /> <br />

        </p>


        <h3> Experience:  <hr /></h3> <br />
        <p>
          &rArr; MERN stack Intern at Zappian <br />
          &rArr; September 5, 2023 - Present <br /><br />

        </p>

        <h3>Passion for MERN Stack:</h3> <hr /> <br />
        <p>
          &rArr; True passion lies in web development, particularly the MERN stack  <br />
          &rArr; Pride in being a MERN stack developer. <br />
          &rArr; Successfully completed major and minor projects using MongoDB, Express.js, React.js, and Node.js. <br />
          &rArr; Projects focused on creating dynamic and interactive web applications with seamless user experiences. <br /> <br />

        </p>
        <h3> Academic Excellence:</h3> <hr /> <br />
        <p>
          &rArr; Maintained good academic record. <br />
          &rArr; Proficient in programming languages like C, C++, and Java. <br />
          &rArr; Solid foundation in software development and problem-solving skills. <br />
          &rArr; Completed certified Java course for creating efficient and robust Java applications. <br /> <br />
        </p>
        <h3>          Teaching and Leadership:</h3> <hr /> <br />
        <p>
          &rArr; Inclination towards teaching and leadership roles. <br />
          &rArr; Enjoys sharing knowledge and tutoring to help others grasp programming concepts. <br />
          &rArr; Growth as a team leader, able to mentor and guide effectively. <br /> <br />

        </p>
        <h3>  Continuous Learning:</h3> <hr /> <br />
        <p>
          &rArr; Recognizes the importance of continuous learning and growth. <br />
          &rArr; Actively seeks opportunities to expand knowledge and stay updated with industry trends. <br />
          &rArr; Constantly explores new libraries, frameworks, and technologies in web development. <br /> <br />

        </p>
        <h3>  Ultimate Goal: </h3> <hr /> <br />
        <p>
          &rArr; Aim to combine technical expertise, leadership abilities, and teaching passion. <br />
          &rArr; Goal is to make a positive impact in web development. <br />
          &rArr; Aspires to contribute to innovative projects enhancing user experiences and solving real-world challenges. <br /> <br />

        </p>
        <h3>     Future Outlook: </h3> <hr /> <br />
        <p>
          &rArr; Excited to embrace new opportunities. <br />
          &rArr; Eager to forge a fulfilling career in software development and MERN stack web applications. <br /> <br />

        </p>
      </div>
    </>
  )
}

export default about