import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'
import { AboutPage } from '../pages/About/AboutPage'
import { ContactPage } from '../pages/Contact/ContactPage'
import { HomePage } from '../pages/Home/HomePage'
import { ProjectsPage } from '../pages/Projects/ProjectsPage'
import { SkillsPage } from '../pages/Skills/SkillsPage'
import './MainSection.scss'

const PATH = {
    HOME: '/home/',
    ABOUT: '/about/',
    SKILLS: '/skills/',
    PROJECTS: '/projects',
    CONTACT: '/contact'
}

export const MainSection = () => {
    return (
        <main className="main-section">
            <Routes>
            <Route path="/" element={ <Navigate to={PATH.HOME}/> } />

            <Route path={PATH.HOME} element={ <HomePage /> } />
            <Route path={PATH.ABOUT} element={ <AboutPage /> } />
            <Route path={PATH.SKILLS} element={ <SkillsPage /> } />
            <Route path={PATH.PROJECTS} element={ <ProjectsPage /> } />
            <Route path={PATH.CONTACT} element={ <ContactPage /> } />

            </Routes>
        </main>
    )
}