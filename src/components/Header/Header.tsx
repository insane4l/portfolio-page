import React, { useState } from 'react'
import { Navbar } from './Navbar/Navbar'
import './Header.scss'
import { MainLogo } from '../common/MainLogo/MainLogo'
import { Contacts } from './Contacts/Contacts'

export const Header = () => {

    const [collapseMode, setCollapseMode] = useState(true)

    const toggleCollapseMode = () => {
        setCollapseMode(mode => !mode)
    }

    return (
        <header className="header">
            <MainLogo toggleCollapseMode={toggleCollapseMode} collapseMode={collapseMode} withBorder/>
            <Navbar collapseMode={collapseMode} />
            <Contacts collapseMode={collapseMode} />
        </header>
    )
}