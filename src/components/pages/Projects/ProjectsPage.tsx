import React, { useState } from 'react'
import { AnimatedSection } from '../../common/AnimatedSection/AnimatedSection';
import './ProjectsPage.scss'
import mockupStub from '../../../assets/images/projectsImgs/mockup_stub.jpg'
import previewStub from '../../../assets/images/projectsImgs/preview_stub.png'
import { FullScreenImg } from '../../common/FullScreenImg/FullScreenImg';
import { PreviewSlider } from './PreviewSlider/PreviewSlider';
import { CardsSlider } from './CardsSlider/CardsSlider';
import { CardsStack } from './CardsStack/CardsStack';
import { useMediaQuery } from 'react-responsive'
import snPreview from '../../../assets/images/projectsImgs/sn_preview.png'
import snMockup from '../../../assets/images/projectsImgs/sn_mockup.jpg'


export type ProjectItemType = {
    id: number
    previewImage: string
    mockupImage: string
    title: string
    description: string
    technologies: Array<string>
    sourceCodeLink: string
    demoPageLink: string
}

const projects: Array<ProjectItemType> = [
    {
        id: 1,
        previewImage: snPreview,
        mockupImage: snMockup,
        title: 'Social Network',
        description: 'Social Network with authorization, users, developers chat etc.. lorem1 lorem1 lorem1 lorem1 lorem1 lorem1 lorem1 lorem1 lorem1 lorem1 lorem1 lorem1 lorem1 lorem1 lorem1',
        technologies: ['React.js', 'Redux', 'SCSS', 'REST API', 'WebSocket',],
        sourceCodeLink: 'https://github.com/insane4l/React-Practice-Dimych-socialNetwork',
        demoPageLink: 'https://insane4l.github.io/React-Practice-Dimych-socialNetwork',
    },
    { 
        id: 2,
        previewImage: previewStub,
        mockupImage: mockupStub,
        title: 'Todo Lists',
        description: 'lorem loasdfhjhk asdhj klfhjklsd hjkafhjkl sdhajklfhjklhjkasdfhjk',
        technologies: ['React.js', 'Redux', 'Material UI', 'REST API'],
        sourceCodeLink: 'https://www.github.com',
        demoPageLink: 'https://www.github.com',
    },
    {
        id: 3,
        previewImage: previewStub,
        mockupImage: mockupStub,
        title: 'test3',
        description: 'lofdasdfasdfhjhk asdhj kasdfjkafhjkl sdhajklfhjklhjkasdfhjk',
        technologies: ['React.js', 'Redux', 'REST API'],
        sourceCodeLink: 'https://www.github.com',
        demoPageLink: 'https://www.github.com',
    },
    {
        id: 4,
        previewImage: previewStub,
        mockupImage: mockupStub,
        title: 'test444',
        description: 'lofdasdfasdfhjfasdfasdfasddhajklfhjklhjkasdfhjk',
        technologies: ['React.js'],
        sourceCodeLink: 'https://www.github.com',
        demoPageLink: 'https://www.github.com',
    },
]

export const ProjectsPage = () => {
    const preloaderDuration = 1500

    const isSmallerThanXXLBreakPoint = useMediaQuery({ query: `(max-width: 1279px)`})

    const [fullSizeImageMode, setFullSizeImageMode] = useState(false)
    const [selectedCard, setSelectedCard] = useState<ProjectItemType>(projects[0])

    const showFullSizeImage = () => {
        setFullSizeImageMode(true)
    }

    const hideFullSizeImage = () => {
        setFullSizeImageMode(false)
    }

    return (
        <AnimatedSection preloaderDuration={preloaderDuration}>
            <div className="projects-section">

                <div className="projects-section-box">
                    <div className="projects-section-box_left">
                        <h2 className="section-title projects-section__title">Portfolio</h2>
                        <p className="projects-section__descr">Here are some of my projects:</p>                    
                        {!isSmallerThanXXLBreakPoint 
                            && <PreviewSlider cards={projects} selectedCardId={selectedCard.id} selectCard={setSelectedCard} />
                        }
                    </div>

                    <div className="projects-section__cards">
                        {isSmallerThanXXLBreakPoint
                            ? <CardsSlider cards={projects} />
                            : <CardsStack selectedCard={selectedCard} onCardImageClick={showFullSizeImage}/>
                        }
                    </div>
                {/* </div>

                <div className="projects-section_right-box"> */}
                    
                    {/* {!isSmallerThanXXLBreakPoint && <CardsStack selectedCard={selectedCard} onCardImageClick={showFullSizeImage}/>} */}

                </div>


                { fullSizeImageMode && <FullScreenImg source={selectedCard.mockupImage} closeHandler={hideFullSizeImage}/> }
            </div>
        </AnimatedSection>
        
    )
}


