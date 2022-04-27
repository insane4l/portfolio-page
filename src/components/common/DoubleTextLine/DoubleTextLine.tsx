import React, { createRef, FC, memo, useEffect, useState } from 'react'
import './DoubleTextLine.scss'

export const DoubleTextLine: FC<DoubleTextLinePropsType> = memo( ({primaryText, secondaryText, className = '', primaryTextCN = '', secondaryTextCN = ''}) => {

    const [textLineHeight, setTextLineHeight] = useState('')
    const textLineRef = createRef<HTMLSpanElement>()

    useEffect(() => {
        const elHeight = textLineRef.current?.clientHeight
        if (elHeight) setTextLineHeight(`${elHeight}px`)
    }, [])

    const doubleTextLineStyle = textLineHeight ? {paddingTop: textLineHeight, paddingBottom: textLineHeight} : {width: '200px'}
    
    return (
        <div style={doubleTextLineStyle} className={`dtl__wrapper ${className}`}>
            <span className={`dtl__text dtl__primary ${primaryTextCN}`}>
                <span ref={textLineRef} className="dtl__primary_p1">
                    {`${primaryText[0]}\u00A0` || ''}
                </span>
                <span className="dtl__primary_p2">
                    {primaryText[1] || ''}
                </span>
            </span>

            <span className={`dtl__text dtl__secondary ${secondaryTextCN}`}>
                {secondaryText}
            </span>
        </div>
    )
})

type DoubleTextLinePropsType = {
    /** Array with 2 parts of primary text line*/
    primaryText: Array<string>
    /** Secondary text line*/
    secondaryText: string
    /** Wrapper class names*/
    className?: string
    /** Primary text class names*/
    primaryTextCN?: string
    /** Secondary text class names*/
    secondaryTextCN?: string
}