import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_fe7mp6u', 'template_or6p2dd', form.current, 'wf-jT_e3V56eH6Qa5')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
    };

return (
    <div className="contact-page">
        <h1>Contact</h1>
        <div className="contact-content">
            <h3>I'm looking forward to hearing from you!</h3>
            <form className="contact-form" ref={form} onSubmit={sendEmail}>
            
                <input type="text" name="user_name" placeholder="Enter you name"/>
            
                <input type="email" name="user_email" placeholder="Enter you Email"/>
            
                <textarea name="message" placeholder="Tell me what you need"/>
                <input className="form-btn" type="submit" value="Send" />
            </form>
        </div>
    </div>
);
};

export default Contact;