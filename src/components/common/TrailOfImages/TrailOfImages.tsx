
import throttle from 'lodash.throttle'
import React, { useEffect, useRef, useState } from 'react'
import { v1 } from 'uuid'
import './TrailOfImages.scss'

type TechItemType = {
    id: string
    img: string
    styles: { top: string, left: string }
}

// TrailOfImagesEffect
export const TrailOfImages: React.FC<TrailOfImagesPropsType> =  React.memo( ({images}) => {
    console.log('rerender');
    
    const wrapperRef = useRef(null)
    let intervalRef = useRef(null)
    const throttledItemsCreating = useRef(
        throttle(async (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
            await createNewItem(e)
        }, 66) // todo: prop trailDensity  (max 0, not recomended)
      ).current;


    console.log(intervalRef);
    console.log(intervalRef.current);
    

    // const itemsArr = [
    //     {id: v1(), img: img1, styles: {top: "10px", left: '40px'}}
    // ]
    
    const [items, setItems] = useState<TechItemType[]>([])
    

    useEffect(() => {
        
        return () => {
            // @ts-ignore
            clearInterval(intervalRef.current)
            throttledItemsCreating.cancel()
        };
    }, [])

    useEffect(() => {
        console.log('effect');

        if (items.length > 0 && !intervalRef.current) {
            // debugger;
            // @ts-ignore
            intervalRef.current = getInterval()
        } 
        
        if (items.length <= 0 && intervalRef.current) {
            // @ts-ignore
            clearInterval(intervalRef.current);
            intervalRef.current = null;
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

    const getInterval = () => {

        const intervalId = setInterval(() => {
            console.log('tic tic');
            deleteOldestItem()
        }, 150) // todo: dependence of trailDensity

        return intervalId
    }

    function randomInt(min: number, max: number) {
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
    const mouseMoveHandler = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        console.log('eeee');
        throttledItemsCreating(e);
    }
    const createNewItem = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        //@ts-ignore
        let x = e.clientX - wrapperRef.current!.getBoundingClientRect().left
        //@ts-ignore
        let y = e.clientY - wrapperRef.current!.getBoundingClientRect().top
        let rotateStyle = `rotate(${Math.random() * 360}deg)`

        let randomIcon = images[randomInt(0, (images.length - 1))]

        let newItem = {id: v1(), img: randomIcon, styles: {top: `${y}px`, left: `${x}px`, transform: rotateStyle}}
        
        setItems(state => [...state, newItem])
        console.log('mouse');
    }

    return (
        <div className="trail-of-images" ref={wrapperRef} onMouseMove={mouseMoveHandler} style={{width: '100vh', height: '100vh', position: 'relative'}}>
            {
                items.map(el => <ImageItem key={el.id} img={el.img} styles={el.styles as React.CSSProperties} />)
            }
        </div>
    )
})


const ImageItem: React.FC<{img: string, styles: React.CSSProperties}> = React.memo( ({img, styles}) => {
    return (
        <span className="trail-of-images-item" style={styles}>
            <img className="trail-of-images-img" src={img} alt="random img" />
        </span>
    )
})





type TrailOfImagesPropsType = {
    images: Array<string>
}