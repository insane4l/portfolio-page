import React, { useEffect, useState } from 'react'
import { v1 } from 'uuid';
import { techLogos } from '../../../assets/icons/icons';
import { AnimatedSection } from '../../common/AnimatedSection/AnimatedSection'
import { DoubleTextLine } from '../../common/DoubleTextLine/DoubleTextLine';
import { ItemListString } from '../../common/ItemListString/ItemListString';
import { StaticSourceOptionsType, TrailOfImages } from '../../common/TrailOfImages/TrailOfImages';
import { isMobile } from 'react-device-detect'
import './SkillsPage.scss'
import { RainOfImages } from '../../common/RainOfImages/RainOfImages';

const listsId = [
    v1(), v1(), v1()
]

export const SkillsPage = () => {
    const preloaderDuration = 1200;

    // const trailOfImagesMobileProps: StaticSourceOptionsType | undefined = isMobile 
    //     ? {posTop: '70%', posLeft: '50%', interval: 300}
    //     : undefined

    const [skillSections, setSkillSections] = useState([
        {id: listsId[0], title: ['Languages', ''], uncollapsed: false},
        {id: listsId[1], title: ['Frameworks', '& Libraries'], uncollapsed: false},
        {id: listsId[2], title: ['Methods', '& Tools'], uncollapsed: false},
    ]);

    const skillLists = {
        [listsId[0]]: ['HTML', 'CSS (SCSS)', 'JavaScript (ES6)', 'TypeScript'],
        [listsId[1]]: ['React.js', 'Redux', 'Material UI'],
        [listsId[2]]: ['BEM', 'Git(GitHub)', 'REST API', 'Unit Tests', 'Storybook'],
    }

    useEffect(() => {
        if (isMobile) {
            setSkillSections(sections => sections.map(el => ({...el, uncollapsed: true})))
        }
    }, [])
    

    const mappedSkillSections = skillSections.map(section => {

        const collapseSkillSection = () => {
            const changedSections = skillSections.map(el => el.id === section.id ? {...el, uncollapsed: false} : el)
            setSkillSections(changedSections)
        }
        const uncollapseSkillSection = () => {
            const changedSections = skillSections.map(el => el.id === section.id ? {...el, uncollapsed: true} : el)
            setSkillSections(changedSections)
        }
        const toggleCollapseMode = () => {
            const changedSections = skillSections.map(el => el.id === section.id ? {...el, uncollapsed: !el.uncollapsed} : el)
            setSkillSections(changedSections)
        }

        const onTextMouseOver = () => {
            !isMobile && uncollapseSkillSection()
        }
        const onTextMouseLeave = () => {
            !isMobile && collapseSkillSection()
        }

        return (
            <div className="skills-section__li-wrapper">

                <DoubleTextLine 
                    key={section.id}
                    className="skills-section__li"
                    primaryTextCN="skills-section__li-title"
                    secondaryTextCN="skills-section__li-descr"
                    onMouseOver={isMobile ? undefined : onTextMouseOver}
                    onMouseLeave={isMobile ? undefined : onTextMouseLeave}
                    onClick={!isMobile ? undefined : toggleCollapseMode}
                    doubleMode={section.uncollapsed}
                    primaryText={section.title}
                    secondaryText={<ItemListString itemsSpacing={10} items={skillLists[section.id]} />}/>
            </div>
        )
    })

    return (
        <AnimatedSection preloaderDuration={preloaderDuration}>
            <div className="skills-section">
                {
                    isMobile
                        ? <RainOfImages images={techLogos} imageWidth={10} />
                        : <TrailOfImages images={techLogos} />
                }
                {/* <TrailOfImages images={techLogos} staticSource={trailOfImagesMobileProps}/> */}

                <div className="skills-section-box_left">
                    <h2 className="section-title skills-section__title">Skills & Experience</h2>

                    <div className="skills-section__list">
                        {mappedSkillSections}
                    </div>
                </div>
            </div>
        </AnimatedSection>

    )
}