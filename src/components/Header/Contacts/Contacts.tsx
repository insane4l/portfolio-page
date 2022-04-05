import React from 'react'
import './Contacts.scss'
import { contactIcons } from '../../../assets/icons/icons'

export const Contacts = () => {
    return (
        <div className="contacts">
            <ul className="contacts__list">
                <li className="contacts__list-item">
                    <img className="contacts__icon" src={contactIcons.linkedinIcon} alt="linkedin icon" />
                </li>
                <li className="contacts__list-item">
                    <img className="contacts__icon" src={contactIcons.githubIcon} alt="github icon" />
                </li>
                <li className="contacts__list-item">
                    <img className="contacts__icon" src={contactIcons.instagramIcon} alt="instagram icon" />
                </li>
                <li className="contacts__list-item">
                    <img className="contacts__icon" src={contactIcons.telegramIcon} alt="telegram icon" />
                </li>
            </ul>
        </div>
    )
}