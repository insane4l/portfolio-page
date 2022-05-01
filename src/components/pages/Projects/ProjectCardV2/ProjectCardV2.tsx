import React, { useState } from 'react'
import mockupImg from '../../../../assets/images/project_mockup.jpg'
import { FullScreenImg } from '../../../common/FullScreenImg/FullScreenImg';
import { projectDescrIcons } from '../../../../assets/icons/icons';
import './ProjectCardV2.scss'

// Single card without wrappers like swiper slider
// this version for situation when ProjectCard parent would be big container NOT little card wrapper with overflow hidden styles (for <FullScreenImg />)
export const ProjectCard = () => {

    const [fullSizeImageMode, setFullSizeImageMode] = useState(false)

    const showFullSizeImage = () => {
        setFullSizeImageMode(true)
    }

    const hideFullSizeImage = () => {
        setFullSizeImageMode(false)
    }

    return (
        <>
            <div className="project__card">
                <div onClick={showFullSizeImage} className="project__card-mockup">
                    <img src={mockupImg} alt="project mockup" />
                </div>
                
                <div className="project__card-info">
                    <div className="project__card-title">
                        Social Network
                    </div>
                    {/* Description: */}
                    <div className="project__card-descr">
                        Social Network with authorization, users, developers chat etc.. fdasfjdsfjn sdfajjndsafj askas fdjsakfkas dafka jkfdsalfa kfdajf alsdfkasdfj  jfdsakfkdlasf  fdsakjfasd
                    </div>
                    {/* Technologies: */}
                    <div className="project__card-technologies">
                        React.js 
                        <span> ▸ </span>
                        Redux
                        <span> ▸ </span>
                        SCSS
                        <span> ▸ </span>
                        REST API
                        <span> ▸ </span>
                        WebSocket
                    </div>
                    {/* <button className="button project__card-btn">Watch Demo</button> */}

                    <div className="project__card-links">
                        <a className="project__card-link" href="https://www.github.com"><img src={projectDescrIcons.projectGithubLinkIcon} alt="watch on github" /></a>
                        <a className="project__card-link" href="https://www.github.com"><img src={projectDescrIcons.projectDemoLinkIcon} alt="watch demo" /></a>
                    </div>
                    
                </div>
                
            </div>

            { fullSizeImageMode && <FullScreenImg source={mockupImg} closeHandler={hideFullSizeImage}/> }
        </>
    )
}