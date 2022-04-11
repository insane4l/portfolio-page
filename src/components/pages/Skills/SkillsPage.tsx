import React from 'react'
import { Preloader } from '../../common/Preloader/Preloader'
import './SkillsPage.scss'


export const SkillsPage = () => {
    const preloaderDuration = 1200;

    // Preloader element must be first because it depends on the CSSTransition
    return (
        <>  
            <Preloader duration={preloaderDuration}/>
            <section style={{animationDelay: `${preloaderDuration}ms`}} className="section skills-section">
                <div className="section-descr skills-section__descr">
                    <h2 className="section-title skills-section__title">Skills & Experience</h2>
                </div>
                
            </section>
        </>
        
    )
}