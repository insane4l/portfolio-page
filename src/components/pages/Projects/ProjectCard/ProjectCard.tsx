import React from 'react'
import { projectDescrIcons } from '../../../../assets/icons/icons';
import { ProjectItemType } from '../ProjectsPage';
import './ProjectCard.scss'

// Version for swiper slider (when card located in small container)
// full size image will be out of slider wrappers
export const ProjectCard: React.FC<ProjectCardPropsType> = ({project, onImageClick}) => {
    const {mockupImage, title, description, technologies, sourceCodeLink, demoPageLink} = project

    const mappedTechnologies = technologies.map((el, indx, arr) => {
        return indx === (arr.length - 1)
            ? <>{el}</>
            : <>{el} <span> ▸ </span></>
    })

    return (
        <>
            <div className="project__card">
                <div onClick={onImageClick} className="project__card-mockup">
                    <img src={mockupImage} alt="project mockup" />
                </div>
                
                <div className="project__card-info">
                    <div className="project__card-title">
                        {title}
                    </div>
                    
                    <div className="project__card-descr">
                        {description}
                    </div>
                   
                    <div className="project__card-technologies">
                        {mappedTechnologies}
                    </div>
                    {/* <button className="button project__card-btn">Watch Demo</button> */}

                    <div className="project__card-links">
                        <a className="project__card-link" href={sourceCodeLink}><img src={projectDescrIcons.projectGithubLinkIcon} alt="watch on github" /></a>
                        <a className="project__card-link" href={demoPageLink}><img src={projectDescrIcons.projectDemoLinkIcon} alt="watch demo" /></a>
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