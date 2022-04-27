import React from 'react'
import { AnimatedSection } from '../../common/AnimatedSection/AnimatedSection';
import { DoubleTextLine } from '../../common/DoubleTextLine/DoubleTextLine';
import './ContactPage.scss'


export const ContactPage = () => {
    const preloaderDuration = 800;


    return (
        <AnimatedSection preloaderDuration={preloaderDuration}>
            <div className="contact-section">

                <div><h2 className="section-title contact-section__title">Contact me</h2></div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <DoubleTextLine primaryText={['firsfgfsdgsdfgsdfgdfsgdfsgd', 'lifdgfdsgdfsgfdsgdfsgdfs']} secondaryText='Secdfsgdfsgfdsgsdfgsdfgdsfgdfgond linedddddfsdgsdfgdfsgdfsgdfsgdddddddddd'/>
                    <DoubleTextLine primaryText={['firsfd', 'lifds']} secondaryText='Second lineddddddddddddddd'/>
                    <DoubleTextLine primaryText={['firsfd', 'lifds']} secondaryText='Second lineddddddddddddddd'/>
                    <DoubleTextLine primaryText={['firsfd', 'lifds']} secondaryText='Second lineddddddddddddddd'/>
                </div>

            </div>
        </AnimatedSection>
    )
}