import React from 'react'
import { techLogos } from '../../../assets/icons/icons';
import { AnimatedSection } from '../../common/AnimatedSection/AnimatedSection'
import { DoubleTextLine } from '../../common/DoubleTextLine/DoubleTextLine';
import { TrailOfImages } from '../../common/TrailOfImages/TrailOfImages';
import './SkillsPage.scss'


export const SkillsPage = () => {
    const preloaderDuration = 1200;

    return (
        <AnimatedSection preloaderDuration={preloaderDuration}>
            <div className="skills-section">
                <TrailOfImages images={techLogos} />
                <div><h2 className="section-title skills-section__title">Skills & Experience</h2></div>
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <DoubleTextLine primaryText={['firsfgfsdgsdfgsdfgdfsgdfsgd', 'lifdgfdsgdfsgfdsgdfsgdfs']} secondaryText='Secdfsgdfsgfdsgsdfgsdfgdsfgdfgond linedddddfsdgsdfgdfsgdfsgdfsgdddddddddd'/>
                    <DoubleTextLine primaryText={['somename', '']} secondaryText='Watch Demo'/>
                    <DoubleTextLine primaryText={['Todo', 'Lists']} secondaryText='Watch Demo'/>
                    <DoubleTextLine primaryText={['Social', 'Network']} secondaryText='Watch Demo'/>
                </div>

            </div>
        </AnimatedSection>

    )
}