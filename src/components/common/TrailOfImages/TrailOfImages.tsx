
import throttle from 'lodash.throttle'
import React, { useEffect, useRef, useState } from 'react'
import { v1 } from 'uuid'
import './TrailOfImages.scss'

type TechItemType = {
    id: string
    img: string
    styles: { top: string, left: string }
}

// todo: create styled source point (when static source effect mode on)
// TrailOfImagesEffect
export const TrailOfImages: React.FC<TrailOfImagesPropsType> =  React.memo( ({images, staticSource}) => { // staticSourcePosition
    // console.log('wrapper rendered');
    
    let deleteItemsInterval = staticSource 
        // (css animation duration 1000ms)
        ? (staticSource.interval + 1000)
        // 200ms hardcoded - its when mouse move trail of images effect 
        // todo: dependence of trailDensity (create prop)
        : 200    
    
    const wrapperRef = useRef(null)
    let deleteItemsTimerId = useRef<number | null>(null)
    let staticSourceTimerId = useRef<number | null>(null)

    const throttledItemsCreating = useRef(
        throttle(async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            await createNewItem(e)
        }, 90) // todo: create component prop trailDensity  (max 0, not recomended)
      ).current;
    
    
    const [items, setItems] = useState<TechItemType[]>([])
    

    useEffect(() => {
        
        if (staticSource) {
            staticSourceTimerId.current = +setInterval(() => {
                // console.log('tic tic static source items');
                
                createNewItem(undefined, staticSource.posTop, staticSource.posLeft);
            }, staticSource.interval)
        }

        // cleanup
        return () => {

            staticSourceTimerId.current && clearInterval(staticSourceTimerId.current)
            deleteItemsTimerId.current && clearInterval(deleteItemsTimerId.current)
            throttledItemsCreating.cancel()
        };
    }, [])

    useEffect(() => {
        // console.log('effect');

        if (items.length > 0 && !deleteItemsTimerId.current) {
            deleteItemsTimerId.current = startDeleteItemsTimer()
        } 
        
        if (items.length <= 0 && deleteItemsTimerId.current) {

            clearInterval(deleteItemsTimerId.current);
            deleteItemsTimerId.current = null;
        }
    }, [items])

    const deleteOldestItem = () => {  
        setItems((items) => {
            if (items.length > 0) {
                const newItems = [...items]
                newItems.shift()
                return newItems
            } else {
                return items
            }
        })
    }

    const startDeleteItemsTimer = () => {

        const intervalId = setInterval(() => {
            // console.log('tic tic delete items');
            
            deleteOldestItem()
        }, deleteItemsInterval)

        return +intervalId
    }

    function randomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    const mouseMoveHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        // console.log('mousemove');
        if (!staticSource) {
            throttledItemsCreating(e)
        }
    }

    const createNewItem = (e?: React.MouseEvent<HTMLDivElement, MouseEvent>, positionTop?: string, positionLeft?: string) => {
        // console.log('created 1 item');

        let top: string
        let left: string

        if (positionTop && positionLeft) {

            top = positionTop
            left = positionLeft

        } else if (e) {
            //@ts-ignore
            top = `${e.clientY - wrapperRef.current!.getBoundingClientRect().top}px`
            //@ts-ignore
            left = `${e.clientX - wrapperRef.current!.getBoundingClientRect().left}px`
        } else {

            return
        }

        let rotateStyle = `rotate(${Math.random() * 360}deg)`

        let randomIcon = images[randomInt(0, (images.length - 1))]

        let newItem = {id: v1(), img: randomIcon, styles: {top, left, transform: rotateStyle}}
        
        setItems(state => [...state, newItem])
    }

    return (
        <div className="trail-of-images" ref={wrapperRef} onMouseMove={mouseMoveHandler}>
            {
                items.map(el => <ImageItem key={el.id} img={el.img} styles={el.styles as React.CSSProperties} />)
            }
        </div>
    )
})


const ImageItem: React.FC<{img: string, styles: React.CSSProperties}> = React.memo( ({img, styles}) => {
    // console.log('Image item rendered');
    
    return (
        <span className="trail-of-images-item" style={styles}>
            <img className="trail-of-images-img" src={img} alt="random img" />
        </span>
    )
})





type TrailOfImagesPropsType = {
    images: Array<string>
    /** 
     * Static source position
     * If is specified, mouse move trail of images effect will be disabled
     */
    staticSource?: StaticSourceOptionsType
}

export type StaticSourceOptionsType = {
    /**
     * top position - css property value
     */
    posTop: string
    /**
     * left position - css property value
     */
    posLeft: string
    /**
     * interval in milliseconds - interval between the creation of each new element
     */
    interval: number
}