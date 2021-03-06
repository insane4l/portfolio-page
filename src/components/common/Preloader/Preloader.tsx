import React, { useEffect, useState } from 'react'
import { MainLogo } from '../MainLogo/MainLogo'
import './Preloader.scss'


export const Preloader: React.FC<PreloaderPropsType> = ({duration, label = 'Loading...'}) => {

    useEffect(() => {
        setTimeout(() => {
            setPreloaderDisplay(false);
        }, duration)
    }, [])

    const [displayPreloader, setPreloaderDisplay] = useState(true);

    return (
        <>
            {displayPreloader &&
                <div className="preloader__overlay">
                    <div className="preloader__wrapper">
                        <MainLogo collapseMode={true} />
                        <div className="preloader__label">{label}</div>
                        <div className="preloader__progress-line">
                            <div style={{animationDuration: `${duration}ms`}} className="preloader__progress-line-inner"></div>
                        </div>
                    </div>
                </div>
            }
        </>
    )
}


type PreloaderPropsType = {
    /**
     Duration in milliseconds
     */
    duration: number
    label?: string
}