import React from 'react'
import { Preloader } from '../Preloader/Preloader'
import './AnimatedSection.scss'

export const AnimatedSection: React.FC<AnimatedSectionType> = ({children, preloaderDuration}) => {

    // Preloader element must be first because it depends on the CSSTransition
    return (
        <>
            <Preloader duration={preloaderDuration}/>
            <section className="section">
                <div style={{animationDelay: `${preloaderDuration}ms`}} className="section__inner">

                {children}

                </div>
            </section>
        </>
    )
}

type AnimatedSectionType = {
    /** Fake preloader duration in milliseconds */
    preloaderDuration: number
}