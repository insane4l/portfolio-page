import React from 'react'
import './FlyingElementsBg.scss'

export const FlyingElementsBg: React.FC<FlyingElementsBgPropsType> = React.memo( ({elCount = 130}) => {

    const dots = []
    for (let i = 1; i <= elCount; i++) {
        dots.push(i)
    }

    const mappedDots = dots.map(elNum => {
        return (
            <div key={elNum} className={`el__wrapper el__wrapper-${elNum}`}>
                <div className={`el el-${elNum}`}></div>
            </div>
        )
    })

    return (
        <div className="overlay">
            {mappedDots}
        </div>
    )
})


type FlyingElementsBgPropsType = {
    elCount?: number
}