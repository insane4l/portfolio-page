import React, { useEffect, useMemo } from 'react'
import { NavLink } from 'react-router-dom'
import { Preloader } from '../../common/Preloader/Preloader'
import { TextSlider } from '../../common/TextSlider/TextSlider'
import './HomePage.scss'
import image_stub from '../../../assets/images/temporary_low_q_png.png'


export const HomePage = () => {
    const preloaderDuration = 1100;

    const roles = useMemo(() => ['Husband', 'Father', 'Developer'], [])

    useEffect(() => {
        setInterval(() => {

        }, 2222)
    }, [])

    // Preloader element must be first because it depends on the CSSTransition
    return (
        <>
            <Preloader duration={preloaderDuration}/>
            <section style={{animationDelay: `${preloaderDuration}ms`}} className="section home-section">
 
                <div className="section-descr home-section__descr">
                    <h2 className="section-title home-section__title">
                        <span>Hi there,</span>
                        <span>I'm Roman Karpeyev</span>
                        <span>- aka insane4L</span>
                        <span>I'm a <TextSlider items={roles} className="roles__item" /></span>
                    </h2>

                    <div className="home-section__buttons">
                        <a className="home-section__btn" href="">Download CV</a>
                        <NavLink className="home-section__btn" to="/contact/" >Contact me</NavLink>
                    </div>
                </div>

                <div className="home-section__image">
                    <img src={image_stub} alt="" />
                </div>

            </section>
        </>
    )
}