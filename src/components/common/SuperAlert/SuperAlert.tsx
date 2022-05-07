import React, { useEffect, useRef, useState } from 'react'
import './SuperAlert.scss'


/** Customize: 
 * .super-alert styles when SuperAlert is hidden
 * .super-alert.active styles when SuperAlert is displayed */
export const SuperAlert: React.FC<SuperAlertPropsType> = React.memo( ({ children, label, variant, displayDuration, transitionDuration = 600 }) => {
    console.log('ALERT RENDERED');
    
    const [displayMode, setDisplayMode] = useState(true)
    const [addedCN, setAddedCN] = useState('')

    let removeSuperAlertId = useRef<number>()
    const removeActiveClassId = useRef<number>()

    useEffect(() => {
        // active class added (for animation -> transition)
        setAddedCN('active')

        if (displayDuration) {

            removeSuperAlertId.current = +setTimeout(() => {
                // SuperAlert component removed
                setDisplayMode(false)
            }, ( displayDuration + (transitionDuration * 2) ))
    
            removeActiveClassId.current = window.setTimeout(() => {
                // active class removed
                setAddedCN('')
            }, (displayDuration + transitionDuration))
        }

    }, [])

    // cleanup
    useEffect(() => {
        return () => {
            clearTimeout(removeSuperAlertId.current)
            clearTimeout(removeActiveClassId.current)
        }
    }, [])

    const superAlertVariantCN = variant ? `super-alert ${variant}` : 'super-alert'
    const finalSuperAlertCN = addedCN ? `${superAlertVariantCN} ${addedCN}` : superAlertVariantCN

    const superAlertStyle = transitionDuration ? { transition: `${transitionDuration}ms all`, } : {}

    return (
        <>
            {displayMode && (label || children)
                &&
                <div className={finalSuperAlertCN} style={superAlertStyle}>
                    {label || children}
                </div>
            }
        </>
    )
})


type SuperAlertPropsType = {
    label?: string
    variant?: SuperAlertVariantType
    /** Display duration in milliseconds
     * (Pure time without animation transitions)
     */
    displayDuration?: number
    /** Transition duration in milliseconds
     * (from hidden to displayed & from displayed to hidden)
     * default 600ms
     */
    transitionDuration?: number
}

export type SuperAlertVariantType = "success" | "error" | undefined