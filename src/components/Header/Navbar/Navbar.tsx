import React, { FC } from 'react'
import { NavLink, useNavigate } from "react-router-dom"
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

export const Navbar: FC<NavbarPropsType> = ({collapseMode}) => {

    const mappedItems = navbarItems.map(el => <NavbarItem key={el.label} {...el} />)

    const navbarListCN = collapseMode ? 'navbar__list navbar__list_collapsed' : 'navbar__list'

    return (
        <nav className="navbar">
            <ul className={navbarListCN}>
                {mappedItems}
            </ul>
        </nav>
    )
}



const NavbarItem: FC<NavbarItemPropsType> = ({label, icon, url}) => {

    // const navigate = useNavigate();

    // const onClickHandler = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    //     e.preventDefault()

    //     setTimeout(() => {
    //         navigate(url)
    //     }, 2222)
    // }

    return (
        <li className="navbar__list-item">
             <NavLink to={url}
                className={({ isActive }) => isActive ? "navbar__link navbar__link-active" : "navbar__link"}>
                <img className="navbar__link-icon" src={icon} alt={label} />
                <div className="navbar__link-label">{label}</div>
            </NavLink>
        </li>      
    )
}



type NavbarPropsType = {collapseMode: boolean}
type NavbarItemPropsType = { label: string, icon: string, url: string }