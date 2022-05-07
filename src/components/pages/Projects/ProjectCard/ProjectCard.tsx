import React from 'react'
import { projectDescrIcons } from '../../../../assets/icons/icons';
import { ItemListString } from '../../../common/ItemListString/ItemListString';
import { ProjectItemType } from '../ProjectsPage';
import './ProjectCard.scss'

// Version for swiper slider (when card located in small container)
// full size image will be out of slider wrappers
export const ProjectCard: React.FC<ProjectCardPropsType> = ({project, onImageClick}) => {
    const {mockupImage, title, description, technologies, sourceCodeLink, demoPageLink} = project

    return (
        <>
            <div className="project__card">
                <div onClick={onImageClick} className="project__card-mockup">
                    <img src={mockupImage} alt="project mockup" />
                </div>
                
                <div className="project__card-info">
                    <div>
                        <div className="project__card-title">
                            {title}
                        </div>
                        <div className="project__card-descr">
                            {description}
                        </div>
                    </div>
                    
                    <div>
                        <ItemListString className="project__card-technologies" items={technologies} />
                        {/* <button className="button project__card-btn">Watch Demo</button> */}

                        <div className="project__card-links">
                            <a className="project__card-link" href={sourceCodeLink} target="_blank" rel="noreferrer">
                                <img src={projectDescrIcons.projectGithubLinkIcon} alt="watch on github" />
                            </a>

                            <a className="project__card-link" href={demoPageLink} target="_blank" rel="noreferrer">
                                <img src={projectDescrIcons.projectDemoLinkIcon} alt="watch demo" />
                            </a>
                        </div>
                    </div>
                    
                </div>
                
            </div>

        </>
    )
}

type ProjectCardPropsType = {
    project: ProjectItemType
    onImageClick: () => void
}