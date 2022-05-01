import React, { useRef } from 'react'
import './ContactForm.scss'
import emailjs from '@emailjs/browser'

export const ContactForm = () => {

    const formRef = useRef(null)

    const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        debugger;
        emailjs
            .sendForm('default_service', 'template_k1qu6or', formRef.current!, 'csNtTFWaWTouVadq5')
            .then(() => {
                alert('Message sent')
                // window.location.reload()
                }
            )
            .catch(() => {
                debugger;
            })
    }

    return (
        <form onSubmit={sendMessage} name="contact_form" ref={formRef} className="contact-form">
            <ul className="contact-form__list">
                <li className="contact-form__name">
                    <input type="text" autoComplete="off" placeholder="Your Name" name="name" />
                    <label htmlFor=""></label>
                </li>
                <li className="contact-form__email">
                    <input type="email" autoComplete="on" placeholder="Your Email" name="email" />
                    <label htmlFor=""></label>
                </li>
                
                <li className="contact-form__subject">
                    <input type="text" autoComplete="off" placeholder="Subject" name="subject" />
                    <label htmlFor=""></label>
                </li>
                <li className="contact-form__message">
                    <textarea placeholder="Message" name="message" />
                    <label htmlFor=""></label>
                </li>
                <li className="contact-form__btn">
                    <button className="button">Send message</button>
                </li>
            </ul>
        </form>
    )
}