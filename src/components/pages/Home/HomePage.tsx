import React, { useEffect, useMemo } from 'react'
import { NavLink } from 'react-router-dom'
import { TextSlider } from '../../common/TextSlider/TextSlider'
import './HomePage.scss'
import image_stub from '../../../assets/images/temporary_low_q_png.png'
import { AnimatedSection } from '../../common/AnimatedSection/AnimatedSection'


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

                <div className="home-section__welcome-block">
                    <h2 className="section-title home-section__title">
                        <span>Hi there,</span>
                        <span>I'm Roman Karpeyev</span>
                        <span>- aka insane4L</span> {/*todo: delete this line (show instead of my name when hovered)*/}
                        <span>
                            <span>I'm a </span>
                            <span className="roles__wrapper">
                                <TextSlider items={roles} className="roles__item" />
                            </span>
                        </span>
                    </h2>

                    <div className="home-section__buttons">
                        <a className="home-section__btn" href="">Download CV</a>
                        <NavLink className="home-section__btn" to="/contact/" >Contact me</NavLink>
                    </div>
                </div>

                <div className="home-section__image">
                    <img src={image_stub} alt="" />
                </div>

            </div>

        </AnimatedSection>
    )
}