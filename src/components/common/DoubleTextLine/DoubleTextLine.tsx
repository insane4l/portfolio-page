import React, { createRef, FC, memo, ReactNode, useEffect, useState } from 'react'
import './DoubleTextLine.scss'

export const DoubleTextLine: FC<DoubleTextLinePropsType> = memo( (
    {
        doubleMode = true,
        onClick, onMouseOver, onMouseLeave,
        primaryText, secondaryText,
        className = '', primaryTextCN = '', secondaryTextCN = ''
}) => {

    const [primaryTextHeight, setPrimaryTextHeightValue] = useState('')
    const [containerPaddingBottom, setContainerPaddingBottom] = useState('')
    const [wrapperHeight, setWrapperHeight] = useState('')

    const primaryTextLineRef = createRef<HTMLSpanElement>()
    const secondaryTextLineRef = createRef<HTMLSpanElement>()

    useEffect(() => {
        const primaryLineHeight = primaryTextLineRef.current?.clientHeight
        const secondaryLineHeight = secondaryTextLineRef.current?.clientHeight
        if (primaryLineHeight) setPrimaryTextHeightValue(`${primaryLineHeight}px`)
        if (secondaryLineHeight) setContainerPaddingBottom(`${secondaryLineHeight}px`)
        if (primaryLineHeight && secondaryLineHeight) setWrapperHeight(`${(primaryLineHeight * 2) + secondaryLineHeight}px`)
    }, [])

    useEffect(() => {
        const primaryLineHeight = primaryTextLineRef.current?.clientHeight
        const secondaryLineHeight = secondaryTextLineRef.current?.clientHeight

        if (doubleMode) {
            
            if (secondaryLineHeight && primaryLineHeight) {
                setContainerPaddingBottom(`${secondaryLineHeight - primaryLineHeight}px`)
            }
        } else {
            if (secondaryLineHeight && primaryLineHeight) setContainerPaddingBottom(`${secondaryLineHeight + primaryLineHeight}px`)
        }
    }, [doubleMode])

    const onClickHandler = (e: MouseEv) => {
        onClick && onClick(e)
    }
    const onMouseOverHandler = (e: MouseEv) => {
        onMouseOver && onMouseOver(e)
    }
    const onMouseLeaveHandler = (e: MouseEv) => {
        onMouseLeave && onMouseLeave(e)
    }


    const containerStyle = primaryTextHeight ? {marginTop: primaryTextHeight, paddingBottom: containerPaddingBottom} : {}
    const wrapperStyle = {height: wrapperHeight}
    const primaryTextLineStyle = doubleMode ? {paddingBottom: primaryTextHeight} : {}


    const finalWrapperCN = `dtl ${doubleMode ? "dtl_active" : ""} ${className}`
    const finalPrimaryTextCN = `dtl__text dtl__primary ${primaryTextCN || ''}`
    const finalSecondaryTextCN = `dtl__text dtl__secondary ${secondaryTextCN || ''}`
    const pointerEventsMode = onMouseLeave ? 'pointer-events_disabled' : ''
    
    return (
        <div className={finalWrapperCN} style={wrapperStyle}>

            <div 
                style={containerStyle}
                className="dtl__container">

                <span 
                    className={finalPrimaryTextCN}
                    style={primaryTextLineStyle}
                    onClick={onClickHandler} 
                    onMouseOver={onMouseOverHandler}
                    onMouseLeave={onMouseLeaveHandler}>
                        
                    <span ref={primaryTextLineRef} className={"dtl__primary_p1 " + pointerEventsMode}>
                        {`${primaryText[0]}\u00A0` || ''}
                    </span>
                    <span className={"dtl__primary_p2 " + pointerEventsMode}>
                        {primaryText[1] || ''}
                    </span>
                </span>

                <span ref={secondaryTextLineRef} className={finalSecondaryTextCN}>
                    {secondaryText}
                </span>
                
            </div>

        </div>
    )
})

type DoubleTextLinePropsType = {
    /** Show/hide 2 text lines
     * default: true
     */
    doubleMode?: boolean
    /** To make the primaryText clickable
     * onMouseLeave prop should be undefined 
    */
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