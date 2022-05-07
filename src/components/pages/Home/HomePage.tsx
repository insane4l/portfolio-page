import React, { useEffect, useMemo } from 'react'
import { NavLink } from 'react-router-dom'
import { TextSlider } from '../../common/TextSlider/TextSlider'
import './HomePage.scss'
import image_stub from '../../../assets/images/photo_low_quality.png'
import { AnimatedSection } from '../../common/AnimatedSection/AnimatedSection'
import { FlyingElementsBg } from '../../common/FlyingElementsBg/FlyingElementsBg'
import myCV from '../../../assets/myCV.pdf'


export const HomePage = () => {
    const preloaderDuration = 1100;

    const roles = useMemo(() => ['Husband', 'Father', 'Developer'], [])

    useEffect(() => {
        setInterval(() => {

        }, 2222)
    }, [])


    return (
        <AnimatedSection preloaderDuration={preloaderDuration}>
            <div className="home-section">
                <FlyingElementsBg />

                <div className="home-section__welcome-block">
                    <h2 className="section-title home-section__title">
                        <span>Hi there,</span>
                        <span className="names">
                            <span>I'm Roman Karpeyev</span>
                            <span className="nickname">aka insane4L</span>
                        </span>
                        {/* <span>- aka insane4L</span> todo: delete this line (show instead of my name when hovered) */}
                        <span>
                            <span>I'm a </span>
                            <span className="roles__wrapper">
                                <TextSlider items={roles} className="roles__item" />
                            </span>
                        </span>
                    </h2>

                    <div className="home-section__buttons">
                        <a className="button home-section__btn" href={myCV} download="Roman Karpeyev CV">Download CV</a>
                        <NavLink className="button home-section__btn" to="/contact/" >Contact me</NavLink>
                    </div>
                </div>

                <div className="home-section__image">
                    <img src={image_stub} alt="" />
                </div>
            </div>

        </AnimatedSection>
    )
}