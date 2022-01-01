import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
    
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    emailjs.sendForm('contact_form', 'contact_n5nscen', form.current, 'user_kb5S5jVfjwnWVrrwzCWx0')
    .then((result) => {
        console.log(result.text);
        alert('Send Your massage.');
    }, (error) => {
        console.log(error.text);
    });
    e.target.reset();

    };

    return (
        <div className='contact-wrapper'>
            <div className='container'>
                <h1>Contact Form</h1>
                <form className='conatct-form' ref={form} onSubmit={sendEmail}>
                    <input type="text" placeholder='Your Name' name='name' />
                    <input type="email" placeholder='Your Email' name='email' />
                    <textarea name="massage" id="" cols="30" rows="10" placeholder='enter your massage ...'></textarea>
                    <input className='contact-btn' type="submit" value='Submit'/>
                </form>    
            </div>
        </div>
    );
};

export default Contact;