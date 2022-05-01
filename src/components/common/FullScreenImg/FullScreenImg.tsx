import React, { useEffect } from 'react'
import { toggleBodyScroll } from '../../../utils/toggleBodyScroll'

import './FullScreenImg.scss'


export const FullScreenImg: React.FC<FullScreenImgPropsType> = React.memo( ({source, closeHandler}) => {

    // useEffect(() => {
    //     toggleBodyScroll('hide');
    //     return () => {
    //         toggleBodyScroll('show');
    //     }
    // },[])

    const closeOnOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if ( !(e.target as HTMLImageElement)?.classList?.contains('fsi__image') ) {
            closeHandler();
        }
    }
    
    return (
        <div className="fsi" onClick={closeOnOverlayClick}>
            <div className="fsi__wrapper">
                <img className="fsi__image" src={source} alt="full_size_image" />
                <span className="fsi_close" onClick={closeHandler}>&times;</span>
            </div>
        </div>
    )
})



type FullScreenImgPropsType = {
    source: string
    closeHandler: () => void
}