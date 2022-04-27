import React from 'react'
import { AnimatedSection } from '../../common/AnimatedSection/AnimatedSection';
import './ProjectsPage.scss'


export const ProjectsPage = () => {
    const preloaderDuration = 1500;

    return (
        <AnimatedSection preloaderDuration={preloaderDuration}>
            <div className="projects-section">

                <div><h2 className="section-title projects-section__title">Some Projects</h2></div>
                <div></div>
                
            </div>
        </AnimatedSection>
        
    )
}