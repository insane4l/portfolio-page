import React, { useEffect, useState } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { AboutPage } from '../pages/About/AboutPage'
import { ContactPage } from '../pages/Contact/ContactPage'
import { HomePage } from '../pages/Home/HomePage'
import { ProjectsPage } from '../pages/Projects/ProjectsPage'
import { SkillsPage } from '../pages/Skills/SkillsPage'
import { CSSTransition, SwitchTransition, TransitionGroup } from 'react-transition-group'
import './Routes.scss'


const PATH = {
    HOME: '/home/',
    ABOUT: '/about/',
    SKILLS: '/skills/',
    PROJECTS: '/projects',
    CONTACT: '/contact'
}


export const RoutesList = React.memo( () => {

    const location = useLocation()
    // const [currentPath, setPath] = useState(location.pathname)
    // useEffect(() => {
    //     setPath(location.pathname)
    // }, [location.pathname])

    
    return (
       
        <SwitchTransition>
            <CSSTransition 
                // onEnter={() => setPath(location.pathname)}
                // disable animations if the current link is clicked a second time  TODO: need to fix
                // exit={currentPath !== location.pathname} // todo: WHY NOT WORKING disabling all exit transitions not only on the same link click (name-exit name-exit-active)
                key={location.key} timeout={300} classNames="section">
        
                <Routes location={location}>
                    <Route path="/" element={ <Navigate to={PATH.HOME}/> } />

                    <Route path={PATH.HOME} element={ <HomePage /> } />
                    <Route path={PATH.ABOUT} element={ <AboutPage /> } />
                    <Route path={PATH.SKILLS} element={ <SkillsPage /> } />
                    <Route path={PATH.PROJECTS} element={ <ProjectsPage /> } />
                    <Route path={PATH.CONTACT} element={ <ContactPage /> } />

                </Routes>
            </CSSTransition>
        </SwitchTransition>
    )
})