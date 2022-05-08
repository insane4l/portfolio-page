import { Map, Marker, ZoomControl } from 'pigeon-maps'
import { stamenToner } from 'pigeon-maps/providers'
import React, { useEffect, useRef, useState } from 'react'
import { AnimatedSection } from '../../common/AnimatedSection/AnimatedSection';
import { SuperAlert, SuperAlertVariantType } from '../../common/SuperAlert/SuperAlert';
import { ContactDetails } from './ContactDetails/ContactDetails';
import { ContactForm } from './ContactForm/ContactForm';
import './ContactPage.scss'


export const ContactPage = () => {
    const preloaderDuration = 800
    const alertMessageDisplayDuration = 8000
    
    const timerId = useRef<number>()

    const [alertMessage, setAlertMessage] = useState('')
    const [alertMessageStyle, setAlertMessageStyle] = useState<SuperAlertVariantType>(undefined)    

    useEffect(() => {
        timerId.current = +setTimeout(() => {
            console.log('cleared');
            
            setAlertMessage('')
        }, alertMessageDisplayDuration)
    }, [alertMessage])

    // cleanup
    useEffect(() => {
        return () => clearInterval(timerId.current)
    }, [])


    const onFormSubmitStatusMessage = (status: SuperAlertVariantType, message: string) => {
        setAlertMessageStyle(status)
        setAlertMessage(message)
    }


    return (
        <AnimatedSection preloaderDuration={preloaderDuration}>
            <div className="contact-section">
                <div className="contact-section_left-box">
                    <h2 className="section-title contact-section__title">Contact me</h2>
                    <p className="contact-section__descr">I'm interested in freelancing opportunities! Also if you have any questions, you can write me an email in this form or in <a href="tg://resolve?domain=insane4L">Telegram</a></p>
                    
                    <div className="contact-section__form">
                        <ContactForm setSubmitResultMessage={onFormSubmitStatusMessage}/>
                    </div>
                </div>

                <div className="contact-section__map">
                    <ContactDetails />
                    
                    <Map metaWheelZoom={true} provider={stamenToner} defaultCenter={[58, 20.8]} defaultZoom={5}>
                        <ZoomControl />
                        {/* 59.37666, 28.1921 */}
                        <Marker width={40} color={"red"} anchor={[59.2, 27.6]} />
                    </Map>
                </div>

                {alertMessage && <SuperAlert displayDuration={6000} transitionDuration={1000} label={alertMessage} variant={alertMessageStyle}/>}
            </div>
        </AnimatedSection>
    )
}