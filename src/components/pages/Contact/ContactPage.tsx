import React from 'react'
import { Preloader } from '../../common/Preloader/Preloader'
import './ContactPage.scss'


export const ContactPage = () => {
    const preloaderDuration = 800;

    // Preloader element must be first because it depends on the CSSTransition
    return (
        <>
            <Preloader duration={preloaderDuration} />
            <section style={{animationDelay: `${preloaderDuration}ms`}} className="section contact-section">
                <div className="section-descr contact-section__descr">
                    <h2 className="section-title contact-section__title">Contact me</h2>
                </div>
                
            </section>
        </>
    )
}