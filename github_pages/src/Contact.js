import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <form id='Contact' method='post' action='https://formspree.io/email@email.com'>
            <div id='Contact_Title'>Get in Touch</div>
            <input type="hidden" name="_subject" value="Contact request from personal website" />
            <input id='Contact_Email' name="_replyto" placeholder='Your Email' type='email' required />
            <textarea id='Contact_Message' name="message" placeholder='Your Message' cols='80' rows='15' required />
            <input id='Contact_Button' type='submit' value='Send' />
        </form>
    )
}

export default Contact;