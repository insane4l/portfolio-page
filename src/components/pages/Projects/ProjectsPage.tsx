import React, { useState } from 'react'
import { AnimatedSection } from '../../common/AnimatedSection/AnimatedSection';
import './ProjectsPage.scss'
import mockupImg from '../../../assets/images/projectsImgs/project_mockup.jpg'
import previewExample from '../../../assets/images/projectsImgs/sn_example.png'
import { FullScreenImg } from '../../common/FullScreenImg/FullScreenImg';
import { PreviewSlider } from './PreviewSlider/PreviewSlider';
import { CardsSlider } from './CardsSlider/CardsSlider';
import { CardsStack } from './CardsStack/CardsStack';
import { useMediaQuery } from 'react-responsive'


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
        previewImage: previewExample,
        mockupImage: mockupImg,
        title: 'Social Network',
        description: 'Social Network with authorization, users, developers chat etc.. fdasfjdsfjn sdfajjndsafj askas fdjsakfkas dafka jkfdsalfa kfdajf alsdfkasdfj  jfdsakfkdlasf  fdsakjfasd',
        technologies: ['React.js', 'Redux', 'SCSS', 'REST API', 'WebSocket API',],
        sourceCodeLink: 'https://www.github.com',
        demoPageLink: 'https://www.github.com',
    },
    {
        id: 2,
        previewImage: previewExample,
        mockupImage: mockupImg,
        title: 'Todo Lists',
        description: 'lorem loasdfhjhk asdhj klfhjklsd hjkafhjkl sdhajklfhjklhjkasdfhjk',
        technologies: ['React.js', 'Redux', 'Material UI', 'REST API'],
        sourceCodeLink: 'https://www.github.com',
        demoPageLink: 'https://www.github.com',
    },
    {
        id: 3,
        previewImage: previewExample,
        mockupImage: mockupImg,
        title: 'test3',
        description: 'lofdasdfasdfhjhk asdhj kasdfjkafhjkl sdhajklfhjklhjkasdfhjk',
        technologies: ['React.js', 'Redux', 'REST API'],
        sourceCodeLink: 'https://www.github.com',
        demoPageLink: 'https://www.github.com',
    },
    {
        id: 4,
        previewImage: previewExample,
        mockupImage: mockupImg,
        title: 'test444',
        description: 'lofdasdfasdfhjfasdfasdfasddhajklfhjklhjkasdfhjk',
        technologies: ['React.js'],
        sourceCodeLink: 'https://www.github.com',
        demoPageLink: 'https://www.github.com',
    },
]

export const ProjectsPage = () => {
    const preloaderDuration = 1500

    const isSmallerThanLgBreakPoint = useMediaQuery({ query: `(max-width: 992px)`})

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

                <div className="projects-section_left-box">
                    <h2 className="section-title projects-section__title">Portfolio</h2>
                    My last projects:
                    Here are some of my latest projects:

                    {isSmallerThanLgBreakPoint
                        ? <CardsSlider cards={projects} />
                        : <PreviewSlider cards={projects} selectedCardId={selectedCard.id} selectCard={setSelectedCard} />
                    }
                </div>

                <div>
                    {!isSmallerThanLgBreakPoint && <CardsStack selectedCard={selectedCard} onCardImageClick={showFullSizeImage}/>}
                </div>


                { fullSizeImageMode && <FullScreenImg source={selectedCard.mockupImage} closeHandler={hideFullSizeImage}/> }
            </div>
        </AnimatedSection>
        
    )
}


