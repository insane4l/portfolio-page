import React from 'react'
import { AnimatedSection } from '../../common/AnimatedSection/AnimatedSection'
import './SkillsPage.scss'


export const SkillsPage = () => {
    const preloaderDuration = 1200;

    return (
        <AnimatedSection preloaderDuration={preloaderDuration}>
            <div className="skills-section">

            <div><h2 className="section-title skills-section__title">Skills & Experience</h2></div>
            <div></div>

            </div>
        </AnimatedSection>

    )
}