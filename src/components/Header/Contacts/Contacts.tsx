import React, { FC } from 'react'
import './Contacts.scss'
import { contactIcons } from '../../../assets/icons/icons'

const contactsList = [
    {label: "linkedin icon", icon: contactIcons.linkedinIcon, href: "https://www.linkedin.com/in/insane4l/"},
    {label: "github icon", icon: contactIcons.githubIcon, href: "https://github.com/insane4l"},
    {label: "instagram icon", icon: contactIcons.instagramIcon, href: "https://www.instagram.com/_karpeyev"},
    {label: "telegram icon", icon: contactIcons.telegramIcon, href: "tg://resolve?domain=insane4L"}
]

export const Contacts: FC<ContactsPropsType> = ({collapseMode}) => {

    const mappedItems = contactsList.map(el => (
        <ContactsItem
            key={el.label}
            label={el.label}
            icon={el.icon}
            href={el.href}/>
        )
    )

    const contactsListCN = collapseMode ? 'contacts__list contacts__list_collapsed' : 'contacts__list'

    return (
        <div className="contacts">
            <ul className={contactsListCN}>
                {mappedItems}
            </ul>
        </div>
    )
}



const ContactsItem: FC<ContactsItemPropsType> = ({href, icon, label}) => {
    return (
        <li className="contacts__list-item">
            <a className="contacts__link" href={href} target="_blank" rel="noreferrer">
                <img className="contacts__icon" src={icon} alt={label} />
            </a>
        </li>
    )
}


type ContactsPropsType ={collapseMode: boolean}
type ContactsItemPropsType = {href: string, icon: string, label: string}