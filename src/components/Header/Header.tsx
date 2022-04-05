import React from 'react'
import { Navbar } from './Navbar/Navbar'
import './Header.scss'
import { MainLogo } from './MainLogo/MainLogo'
import { Contacts } from './Contacts/Contacts'

export const Header = () => {
    return (
        <header className="header">
            <MainLogo />
            <Navbar />
            <Contacts />
        </header>
    )
}