import React, { useEffect, useMemo, useState } from 'react'


export const TextSlider: React.FC<TextSliderPropsType> = React.memo( ({items, className, displayDuration = 2222}) => {

    const [itemIndx, setItemIndx] = useState(0)
    
    const spanStyle = useMemo<React.CSSProperties>(() => ({ // todo: How to type htmlelement style prop (mb Omit<> ?????)
        animationDuration: `${displayDuration}ms`,
        WebkitAnimationDuration: `${displayDuration}ms`,
        MozAnimationDuration: `${displayDuration}ms`,
        OAnimationDuration: `${displayDuration}ms`,
        // abcde: 'aaaaa',
        animationIterationCount: 'infinite',
        WebkitAnimationIterationCount: 'infinite',
        MozAnimationIterationCount: 'infinite',
        OAnimationIterationCount: 'infinite'
    }), [displayDuration])


    useEffect(() => {
        let timerId = setInterval(() => {
            setItemIndx(prevIndx => {
                return prevIndx >= (items.length - 1) ? 0 : (prevIndx + 1)
            })
        }, displayDuration)

        return( () => clearInterval(timerId) )
    }, [items, displayDuration])


    return (
            <>
                {(itemIndx >= 0) 
                    && <span className={className || ''} style={spanStyle}>
                        {items[itemIndx]}
                    </span>
                }
            </>
    )
})



type TextSliderPropsType = {
    items: Array<string>
    /**
        Customize changeable span element with class with animation
     */
    className?: string
    /**
        Item display duration in milliseconds
        (also changes css animation-duration property)
        [Default value 2222 ms]
     */
    displayDuration?: number
}