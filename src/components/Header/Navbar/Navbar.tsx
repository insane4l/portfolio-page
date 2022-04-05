import React from 'react'
import { NavLink } from "react-router-dom"
import './Navbar.scss'

// import * as icons from '../../../assets/icons/icons'
import {navIcons} from '../../../assets/icons/icons'


const navbarItems = [
    { label: 'Home', icon: navIcons.home1, url: '/home/'},
    { label: 'About', icon: navIcons.about1, url: '/about/'},
    { label: 'Skills', icon: navIcons.skills1, url: '/skills/'},
    { label: 'Projects', icon: navIcons.projects1  , url: '/projects/'},
    { label: 'Contact', icon: navIcons.contact1, url: '/contact/'}
]

export const Navbar = () => {

    const mappedItems = navbarItems.map(el => <NavbarItem key={el.label} {...el} />)

    return (
        <nav className="navbar">
            <ul className="navbar__list">
                {mappedItems}
            </ul>
        </nav>
    )
}



const NavbarItem: React.FC<NavbarItemPropsType> = ({label, icon, url}) => {
    return (
        <li className="navbar__list-item">
             <NavLink to={url} className="navbar__link">
                <img className="navbar__link-icon" src={icon} alt={label} />
                <div className="navbar__link-label">{label}</div>
            </NavLink>
        </li>      
    )
}




type NavbarItemPropsType = { label: string, icon: string, url: string }