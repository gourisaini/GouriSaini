import React from 'react'
import styles from "@/styles/project.module.css"
import Head from "next/head"
const project = () => {


  return (
    <>
      <Head>
        <title>Project</title>
      </Head>
      <div className={styles.main}>
        <div className={styles.side}>
          <h2><em>Welcome to my showcase of innovative portfolio projects, where creativity meets problem-solving, and dedication delivers exceptional results</em></h2>
        </div>

        <div className={styles.desktop}>
          <div className={styles.box}>
            <div className={styles.vid}>
              <video
                loop
                controls
                poster="/art gallery photo.png"
                src="/Art Gallery.mp4">
              </video>
            </div>
            <div className={styles.content}>
              <p><b><u>Art (Online Art gallery)</u> - JavaScript, HTML, CSS <br /> <br /><i> Art is a front-end website that allows artists and art enthusiasts to showcase, view, or purchase art pieces.</i></b></p>
              <div style={{ display: 'flex', justifyContent: "space-evenly" }}>
                <button><a href="https://github.com/gourisaini/Art-Gallery" target="_blank">Source Code</a></button>
                <button><a href="https://gourisaini.github.io/Art-Gallery/" target="_blank">Visit Site</a></button>
              </div>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.content}>
              <p><b><u>Loyal Friend(Animal Welfare site)</u> - JavaScript, HTML, CSS <br /> <br /> <i> The website front-end allows the user to adopt a pet, volunteer towards the pet, purchase products that are related to pets, and donate the desired amount to the organization</i></b></p>
              <div style={{ display: 'flex', justifyContent: "space-evenly" }}>
                <button><a href="https://github.com/gourisaini/LoyalFriend" target="_blank">Source Code</a></button>
                <button><a href=" https://gourisaini.github.io/LoyalFriend/" target="_blank">Visit Site</a></button>
              </div>
            </div>
            <div className={styles.vid}>
              <video
                loop
                controls
                poster="/Loyal Friend photo.png"
                src="/Loyal Friend.mp4">
              </video>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.vid}>
              <video
                loop
                poster='/cosmetic.png'
                controls
                src="/cosmetic.mp4">
              </video>
            </div>
            <div className={styles.content}>
              <p><b><u>Skin Studio(Cosmetic site)</u> - JavaScript, HTML, CSS <br /> <br /> <i> Skin Studio is a front-end website where users can view various cosmetic products and their descriptions. The project provides the user with a flexible & attractive UI & shows them a list of products & carries out all the shopping activities online.
              </i></b></p>
              <div style={{ display: 'flex', justifyContent: "space-evenly" }}>
                <button><a href="https://github.com/gourisaini/Cosmetic-Site" target="_blank">Source Code</a></button>
                <button><a href="https://gourisaini.github.io/Cosmetic-Site/" target="_blank">Visit Site</a></button>
              </div>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.content}>
              <p><b><u>WhatsApp Web Clone</u> - React.js,Material-Ui,Node.js,Express.js,MongoDB,Socket.IO <br /> <br /> <i>The WhatsApp Web Clone is a project that seeks to recreate the functionality and user experience of the original WhatsApp Web application. This clone aims to provide users with the ability to access and use WhatsApp directly from their web browsers, just like the original platform </i></b></p>
              <div style={{ display: 'flex', justifyContent: "space-evenly" }}>
                <button><a href="https://github.com/gourisaini/Whatsapp-web-clone" target="_blank">Source Code</a></button>
                {/* <button><a href="" target="_blank">Visit Site</a></button> */}
              </div>
            </div>
            <div className={styles.vid}>
              <img src="/whatsapp.png" alt="" />
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.vid}>
              <video
                loop
                poster='/Resume Builder photo.png'
                controls
                src="/Resume Builder.mp4">
              </video>
            </div>
            <div className={styles.content}>
              <p><b><u>Career Crafts </u>- Node.js, MongoDB, HTML, CSS, Bootstrap, JavaScript <br /> <br /> <i>Developed a web application that will auto-generate a nice and properly formatted Resume from the information filled up in a form.The resume is downloadable on PDF format. Also, the user can log in again to access the previous resume that he had made.</i></b></p>
              <div style={{ display: 'flex', justifyContent: "space-evenly" }}>
                <button><a href="https://github.com/gourisaini/resumeBuilder" target="_blank">Source Code</a></button>
                {/* <button><a href="" target="_blank">Visit Site</a></button> */}
              </div>
            </div>
          </div>

          <div className={styles.box}>
            <div className={styles.content}>
              <p><b><u>Nmovies</u> - React.js <br /> <br /> <i> Nmovies is a site that provides information related to films and television series you can find ratings and reviews of the newest movies and TV shows including cast, summaries, etc</i></b></p>
              <div style={{ display: 'flex', justifyContent: "space-evenly" }}>
                <button><a href="https://github.com/gourisaini/movieRating" target="_blank">Source Code</a></button>
                {/* <button><a href="" target="_blank">Visit Site</a></button> */}
              </div>
            </div>
            <div className={styles.vid}>
              <video
                loop
                poster='/Nmovies photo.png'
                controls
                src="/Nmovies.mp4"></video>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.mobile}>
        <div className={styles.box}>
          <div className={styles.vid}>
            <video controls poster='/art gallery photo.png' src="/Art Gallery.mp4"></video>
          </div>
          <div className={styles.content}>
            <p><b><u>Art (Online Art gallery)</u> - JavaScript, HTML, CSS <br /> <br />  <i>Art is a front-end website that allows artists and art enthusiasts to showcase, view, or purchase art pieces..</i></b></p>
            <div style={{ display: 'flex', justifyContent: "space-evenly" }}>
              <button><a href="https://github.com/gourisaini/Art-Gallery" target="_blank">Source Code</a></button>
              <button><a href="https://gourisaini.github.io/Art-Gallery/" target="_blank">Visit Site</a></button>
            </div>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.vid}>
            <video controls poster='Loyal Friend photo.png' src="/Loyal Friend.mp4"></video>
          </div>
          <div className={styles.content}>
            <p><b><u>Loyal Friend(Animal Welfare site)</u> - JavaScript, HTML, CSS <br /> <br /> <i>The website front-end allows the user to adopt a pet, volunteer towards the pet, purchase products that are related to pets, and donate the desired amount to the organization</i></b></p>
            <div style={{ display: 'flex', justifyContent: "space-evenly" }}>
              <button><a href="https://github.com/gourisaini/LoyalFriend" target="_blank">Source Code</a></button>
              <button><a href=" https://gourisaini.github.io/LoyalFriend/" target="_blank">Visit Site</a></button>
            </div>
          </div>

        </div>

        <div className={styles.box}>
          <div className={styles.vid}>
            <video controls poster='/cosmetic.png' src="/cosmetic.mp4"></video>
          </div>
          <div className={styles.content}>
            <p><b><u>Skin Studio(Cosmetic site)</u> - JavaScript, HTML, CSS <br /> <br />

            <i>Skin Studio is a front-end website where users can view various cosmetic
              products and their descriptions. The project provides the user with a flexible &
              attractive UI & shows them a list of products & carries out all the shopping
              activities online.
            </i></b></p>
            <div style={{ display: 'flex', justifyContent: "space-evenly" }}>
              <button><a href="https://github.com/gourisaini/Cosmetic-Site" target="_blank">Source Code</a></button>
              <button><a href="https://gourisaini.github.io/Cosmetic-Site/" target="_blank">Visit Site</a></button>
            </div>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.vid}>
            <img src="/whatsapp.png" alt="" />
          </div>
          <div className={styles.content}>
            <p><b><u>WhatsApp Web Clone</u> - React.js,Material-Ui,Node.js,Express.js,MongoDB,Socket.IO <br /> <br /> <i>The WhatsApp Web Clone is a project that seeks to recreate the functionality and user experience of the original WhatsApp Web application. This clone aims to provide users with the ability to access and use WhatsApp directly from their web browsers, just like the original platform</i></b></p>
            <div style={{ display: 'flex', justifyContent: "space-evenly" }}>
              <button><a href="https://github.com/gourisaini/Whatsapp-web-clone" target="_blank">Source Code</a></button>
              {/* <button><a href="" target="_blank">Visit Site</a></button> */}
            </div>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.vid}>
            <video controls poster='/Resume Builder photo.png' autoPlay src="/Resume Builder.mp4"></video>
          </div>
          <div className={styles.content}>
            <p><b><u>Career Crafts</u> - Node.js, MongoDB, HTML, CSS, Bootstrap, JavaScript <br /><br /> <i>Developed a web application that will auto-generate a nice and properly formatted Resume from the information filled up in a form.The resume is downloadable on PDF format. Also, the user can log in again to access the previous resume that he had made.</i></b></p>
            <div style={{ display: 'flex', justifyContent: "space-evenly" }}>
              <button><a href="https://github.com/gourisaini/resumeBuilder" target="_blank">Source Code</a></button>
              {/* <button><a href="" target="_blank">Visit Site</a></button> */}
            </div>
          </div>
        </div>

        <div className={styles.box}>
          <div className={styles.vid}>
            <video controls poster='Nmovies photo.png' src="/Nmovies.mp4"></video>
          </div>
          <div className={styles.content}>
            <p><b><u>Nmovies</u> - React.js <br /> <br />  <i>Nmovies is a site that provides information related to films and television series you can find ratings and reviews of the newest movies and TV shows including cast, summaries, etc</i></b></p>
            <div style={{ display: 'flex', justifyContent: "space-evenly" }}>
              <button><a href="https://github.com/gourisaini/movieRating" target="_blank">Source Code</a></button>
              {/* <button><a href="" target="_blank">Visit Site</a></button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default project