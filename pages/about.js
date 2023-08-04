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
      <p>
        Hello there! I'm Gouri Saini, a dedicated and ambitious student currently pursuing my Bachelor's in Computer Applications (BCA) from Bhopal. I am an aspiring MERN stack developer with a strong passion for programming and creating innovative web applications.
      </p>
      <p>
        My true passion lies in web development, particularly in the MERN stack. I take immense pride in being a MERN stack developer, and I have successfully undertaken numerous major and minor projects using MongoDB, Express.js, React.js, and Node.js. Working on these projects has allowed me to create dynamic and interactive web applications that provide seamless user experiences.
      </p>
      <p>
        Throughout my academic journey, I have excelled in my studies, maintaining a good academic record. My love for programming languages like C, C++, and Java has allowed me to develop a solid foundation in software development and problem-solving skills. I further honed my expertise by completing a certified Java course, which equipped me with the knowledge to create efficient and robust Java applications.
      </p>
      <p>
        One of my significant achievements during my studies is completing a minor project that utilized Java and MySQL. This experience not only strengthened my technical skills but also provided me with practical insights into database management and application development.
      </p> <p>
        Beyond my technical skills, I have also discovered my inclination towards teaching and leadership. I enjoy sharing my knowledge with others and have taken up tutoring roles to help students grasp programming concepts effectively. These experiences have contributed to my growth as a team leader, enabling me to mentor and guide others effectively.
      </p> <p>
        Being a fresher, I understand the importance of continuous learning and growth. Therefore, I actively seek opportunities to expand my knowledge and keep up with the latest industry trends. My appetite for learning drives me to explore new libraries, frameworks, and technologies, always aiming to stay at the forefront of web development innovations.
      </p> <p>
        Outside of the world of programming, I find joy in exploring diverse interests and maintaining a balanced lifestyle. Whether it's engaging in recreational activities, pursuing hobbies, or spending quality time with family and friends, I believe in nurturing a well-rounded life that fosters creativity and productivity.
      </p> <p>
      My ultimate goal is to combine my technical expertise, leadership abilities, and love for teaching to make a positive impact in the field of web development. I aspire to contribute to innovative projects that enhance user experiences and provide solutions to real-world challenges.
      </p> <p>
      With an unyielding spirit and a thirst for knowledge, I am excited to embrace new opportunities and forge a fulfilling career in the dynamic realm of software development and MERN stack web applications.
      </p>
    </div>
    </>
  )
}

export default about