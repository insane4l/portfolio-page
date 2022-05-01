import { Map, Marker, ZoomControl } from 'pigeon-maps'
import { stamenToner } from 'pigeon-maps/providers'
import React from 'react'
import { AnimatedSection } from '../../common/AnimatedSection/AnimatedSection';
import { ContactForm } from './ContactForm/ContactForm';
import './ContactPage.scss'


export const ContactPage = () => {
    const preloaderDuration = 800;


    return (
        <AnimatedSection preloaderDuration={preloaderDuration}>
            <div className="contact-section">
                <div className="contact-section_left-box">
                    <h2 className="section-title contact-section__title">Contact me</h2>

                    <p>Some text will be here</p>

                    <div className="contact-section__form">
                        <ContactForm />
                    </div>
                </div>

                <div className="contact-section__map">
                    <Map provider={stamenToner} defaultCenter={[56, 22]} defaultZoom={5}>
                        <ZoomControl />
                        {/* 59.37666, 28.1921 */}
                        <Marker width={50} color={"red"} anchor={[59.2, 27.6]} />
                    </Map>
                </div>

            </div>
        </AnimatedSection>
    )
}