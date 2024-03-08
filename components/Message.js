import React, { useRef, useState } from 'react'
import styles from '@/styles/contact.module.css'
import emailjs from "@emailjs/browser";

const Message = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_7sy3vuj', 'template_pobsl2c', form.current, 'tuicnCzxiCYQ0H1o5')
            .then((result) => {
                console.log(result.text);
                alert("Message sent successfully");
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className={styles.center}>
            <h1><i>Contact Me</i></h1>
            <h4>To reach me or inquire about anything, kindly fill out the form below or give me a call on +91123456789</h4>
            <form ref={form} onSubmit={sendEmail} className={styles.content}>
                <input type="text" placeholder="Name" name="user_name"  required/>
                <input type="email" placeholder='Email' name="user_email" required/>
                <input type="text" placeholder='Subject' name='user_subject' />
                <textarea placeholder="Message" id="" cols="30" rows="5" name="message"></textarea>
                <button>SEND</button>
            </form>
        </div>
    )
}

export default Message