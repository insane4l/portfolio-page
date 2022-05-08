import React, { useRef } from 'react'
import './ContactForm.scss'
import emailjs from '@emailjs/browser'
import { SuperAlertVariantType } from '../../../common/SuperAlert/SuperAlert'

// todo: need some optimization, refactoring
export const ContactForm: React.FC<ContactFormPropsType> = ({setSubmitResultMessage}) => {

    const formRef = useRef<HTMLFormElement>(null)
    
    const sendMessage = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        emailjs
            .sendForm('default_service', 'template_k1qu6or', formRef.current!, 'csNtTFWaWTouVadq5')
            .then(() => {
                // alert('Message sent')
                setSubmitResultMessage && setSubmitResultMessage('success' , 'Thank you! Your message has been sent')
                formRef.current!.reset()
            })
            .catch(() => {
                setSubmitResultMessage && setSubmitResultMessage('error' , 'Failed to send your message. Please try later or contact me directly roman.karpeyev@gmail.com')
            })
    }

    return (
        <form onSubmit={sendMessage} name="contact_form" ref={formRef} className="contact-form">
            <ul className="contact-form__list">
                <li className="contact-form__name">
                    <input type="text" autoComplete="off" required placeholder="Your Name" name="name" />
                    <label></label>
                </li>
                <li className="contact-form__email">
                    <input type="email" autoComplete="on" required placeholder="Your Email" name="email" />
                    <label></label>
                </li>
                
                <li className="contact-form__subject">
                    <input type="text" autoComplete="off" required placeholder="Subject" name="subject" />
                    <label></label>
                </li>
                <li className="contact-form__message">
                    <textarea placeholder="Message" required name="message" />
                    <label></label>
                </li>
                <li className="contact-form__btn">
                    <button className="button">Send message</button>
                </li>
            </ul>
        </form>
    )
}


type ContactFormPropsType = {
    setSubmitResultMessage?: (status: SuperAlertVariantType, message: string) => void
}