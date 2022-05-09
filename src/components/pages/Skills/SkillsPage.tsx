import React, { useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive';
import { v1 } from 'uuid';
import { techLogos } from '../../../assets/icons/icons';
import { AnimatedSection } from '../../common/AnimatedSection/AnimatedSection'
import { DoubleTextLine } from '../../common/DoubleTextLine/DoubleTextLine';
import { ItemListString } from '../../common/ItemListString/ItemListString';
import { StaticSourceOptionsType, TrailOfImages } from '../../common/TrailOfImages/TrailOfImages';
import { isMobile } from 'react-device-detect'
import './SkillsPage.scss'

const listsId = [
    v1(), v1(), v1()
]

export const SkillsPage = () => {
    const preloaderDuration = 1200;

    const isSmallScreen = useMediaQuery({ query: `(max-width: 880px)`})

    const trailOfImagesMobileProps: StaticSourceOptionsType | undefined = isMobile 
        ? {posTop: '70%', posLeft: '50%', interval: 300}
        : undefined

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
        if (isSmallScreen) {
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
            !isSmallScreen && uncollapseSkillSection()
        }
        const onTextMouseLeave = () => {
            !isSmallScreen && collapseSkillSection()
        }

        return (
            <DoubleTextLine 
                key={section.id}
                className="skills-section__li"
                primaryTextCN="skills-section__li-title"
                secondaryTextCN="skills-section__li-descr"
                onMouseOver={onTextMouseOver}
                onMouseLeave={onTextMouseLeave}
                onClick={toggleCollapseMode}
                doubleMode={section.uncollapsed}
                primaryText={section.title}
                secondaryText={<ItemListString itemsSpacing={10} items={skillLists[section.id]} />}/>
        )
    })

    return (
        <AnimatedSection preloaderDuration={preloaderDuration}>
            <div className="skills-section">
                <TrailOfImages images={techLogos} staticSource={trailOfImagesMobileProps}/>

                <div className="skills-section-box_left">
                    <h2 className="section-title skills-section__title">Skills & Experience</h2>

                    <div className="skills-section__list">
                        {mappedSkillSections}
                    </div>
                </div>

                {/* <div className="skills-section__list"> */}
                    {/* <ItemListString itemsSpacing={6} items={['tessss', 'tdsat', 'dfasdsfs', 'ertyerthre']} />
                    <DoubleTextLine primaryText={['firsfgfsdgsdfgsdfgdfsgdfsgd', 'lifdgfdsgdfsgfdsgdfsgdfs']} secondaryText='Secdfsgdfsgfdsgsdfgsdfgdsfgdfgond linedddddfsdgsdfgdfsgdfsgdfsgdddddddddd'/>
                    <DoubleTextLine primaryText={['somename', '']} secondaryText='Watch Demo'/>
                    <DoubleTextLine primaryText={['Todo', 'Lists']} secondaryText='Watch Demo'/> */}

                    {/* <DoubleTextLine 
                        className="skills-section__li"
                        primaryTextCN="skills-section__li-title"
                        secondaryTextCN="skills-section__li-descr"
                        primaryText={['Social', 'Network']}
                        secondaryText={<ItemListString itemsSpacing={6} items={['tessss', 'tdsat', 'dfasdsfs', 'ertyerthre']} />}/> */}

                    {/* {mappedSkillsItems}
                </div> */}
                
            </div>
        </AnimatedSection>

    )
}