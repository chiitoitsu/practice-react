import React from 'react';
import './Contact.css';

function Contact() {
    return (
        <div id='Contact'>
            <input id='Contact_Email' placeholder='Your Email'/>
            <input id='Contact_Message' placeholder='Your Message'/>
            <button id='Contact_Button'>Send</button>
        </div>
    )
}

export default Contact;