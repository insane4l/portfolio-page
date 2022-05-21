import React, { useEffect, useRef, useState } from 'react'
import './RainOfImages.scss'

export const RainOfImages: React.FC<RainOfImagesPropsType> = React.memo( ({images, imageWidth}) => { // todo: duration(animationDuration)

    let leftPosition = 0
    const positionStep = ((100 - (imageWidth / 2)) / images.length)


    const mappedImages = images.map((el, indx, arr) => {

        // const position = indx === arr.length - 1 ? {right: 0 + '%'} : {left: leftPosition + '%'} // with constant left position value
        const delay = {animationDelay: `${randomInt(0, 12)}s`} // todo: calc from animationDuration property

        const styles = {
            left: leftPosition + '%',
            // ...position, // with constant left position value
            ...delay,
            width: imageWidth + '%',
            height: imageWidth + '%',
        }

        leftPosition += positionStep;

        return (
            <span key={el} className="rain-of-images-item" style={styles}>
                <img style={{...delay}} className="rain-of-images-img" src={el} alt="random img" />
            </span>
        )
    })


    function randomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    

    return (
        <div className="rain-of-images">
            {mappedImages}

        </div>
    )
})



type RainOfImagesPropsType = {
    images: Array<string>
    /** percent value of parent container */
    imageWidth: number
}