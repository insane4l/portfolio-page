import React, { createRef, FC, memo, ReactNode, useEffect, useState } from 'react'
import './DoubleTextLine.scss'

export const DoubleTextLine: FC<DoubleTextLinePropsType> = memo( (
    {
        doubleMode = true,
        onClick, onMouseOver, onMouseLeave,
        primaryText, secondaryText,
        className = '', primaryTextCN = '', secondaryTextCN = ''
}) => {

    const [textLineHeight, setTextLineHeight] = useState('')
    const textLineRef = createRef<HTMLSpanElement>()

    useEffect(() => {
        const elHeight = textLineRef.current?.clientHeight
        if (elHeight) setTextLineHeight(`${elHeight}px`)
    }, [])

    const onClickHandler = (e: MouseEv) => {
        onClick && onClick(e)
    }
    const onMouseOverHandler = (e: MouseEv) => {
        onMouseOver && onMouseOver(e)
    }
    const onMouseLeaveHandler = (e: MouseEv) => {
        onMouseLeave && onMouseLeave(e)
    }

    const doubleTextLineStyle = textLineHeight ? {paddingTop: textLineHeight, marginBottom: textLineHeight} : {}

    const finalWrapperCN = `dtl__wrapper ${doubleMode ? "dtl_active" : ""} ${className}`
    
    return (
        <div 
            onClick={onClickHandler} 
            onMouseOver={onMouseOverHandler}
            onMouseLeave={onMouseLeaveHandler}
            style={doubleTextLineStyle}
            className={finalWrapperCN}>

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
    /** Show/hide 2 text lines
     * default: true
     */
    doubleMode?: boolean
    onClick?: (e: MouseEv) => void
    onMouseOver?: (e: MouseEv) => void
    onMouseLeave?: (e: MouseEv) => void
    /** Array with 2 parts of primary text line*/
    primaryText: Array<string>
    /** Secondary text line*/
    secondaryText: string | ReactNode
    /** Wrapper class names*/
    className?: string
    /** Primary text class names*/
    primaryTextCN?: string
    /** Secondary text class names*/
    secondaryTextCN?: string
}

type MouseEv = React.MouseEvent<HTMLDivElement, MouseEvent>