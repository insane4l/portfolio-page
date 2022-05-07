import React from 'react'
import { AnimatedSection } from '../../common/AnimatedSection/AnimatedSection';
import './AboutPage.scss'
import { FlyingElementsBg } from '../../common/FlyingElementsBg/FlyingElementsBg';



export const AboutPage = () => {
    const preloaderDuration = 900;


    return (

        <AnimatedSection preloaderDuration={preloaderDuration}>

            <div className="about-section">
                <FlyingElementsBg />

                <div className="about-section-box_left">
                    <h2 className="section-title about-section__title">About me</h2>
                    <p className="about-section__descr">
                        <span>
                            I am a front-end developer from Estonia and I have experience in creating SPA and dynamic web-interfaces.
                            I use the following tech stack: React, TypeScript/JavaScript, Redux.
                        </span>

                        <span>
                            I prefer to spend my free time on codewars.com or with educational books.
                            I enjoy what I do and I am focused on personal professional development.
                        </span>
                    </p>
                </div>

                <div>
                    some animation will be here
                </div>
            </div>

        </AnimatedSection>


    )
}