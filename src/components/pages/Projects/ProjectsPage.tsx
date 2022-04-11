import React from 'react'
import { Preloader } from '../../common/Preloader/Preloader'
import './ProjectsPage.scss'


export const ProjectsPage = () => {
    const preloaderDuration = 1500;

    // Preloader element must be first because it depends on the CSSTransition
    return (
        <>
            <Preloader duration={preloaderDuration}/>
            <section style={{animationDelay: `${preloaderDuration}ms`}} className="section projects-section">
                <div className="section-descr projects-section_descr">
                    <h2 className="section-title projects-section__title">Some Projects</h2>
                </div>
            </section>
        </>
        
    )
}