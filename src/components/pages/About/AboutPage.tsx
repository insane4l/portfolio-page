import React from 'react'
import { Preloader } from '../../common/Preloader/Preloader'
import './AboutPage.scss'


export const AboutPage = () => {
    const preloaderDuration = 900;

    // Preloader element must be first because it depends on the CSSTransition
    return (
        <>
            <Preloader duration={preloaderDuration}/>
            <section style={{animationDelay: `${preloaderDuration}ms`}} className="section about-section">
                <div className="section-descr about-section__descr">
                    <div>
                        <h2 className="section-title about-section__title">About me</h2>
                        <p className="about-section__descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit et eos nemo ratione. Nulla veritatis similique iste laboriosam illum quibusdam ducimus. Commodi facere eveniet molestiae non iste quis a, aut nisi magni, ut eius maiores porro dolorem. Quisquam, eum vitae earum facilis sapiente odio eligendi architecto cum saepe quas ad iusto. Ex, eum! Magni aut explicabo similique eum voluptatibus id </p>
                    </div>
                </div>
               
                <div>
                    some animation will be here
                </div>
                

            </section>
        </>
        
    )
}