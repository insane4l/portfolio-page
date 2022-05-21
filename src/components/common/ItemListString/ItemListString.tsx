import React from 'react'
import './ItemListString.scss'


/** Decorated item list string */
export const ItemListString: React.FC<ItemListStringPropsType> = ({items, itemsSpacing, className}) => {

    const wrapperStyles = itemsSpacing ? '' : 'flex-space-between'
    const elStyles = itemsSpacing ? {marginRight: `${itemsSpacing}px`} : {}

    const itemsListStringFinalCN = `item-list-string ${wrapperStyles} ${className || ''}`

    const mappedItems = items.map((el, indx, arr) => (
        <React.Fragment key={indx}>
            <span style={elStyles} className="item-list-elem">{el}</span>
            {indx !== (arr.length - 1) && <span style={elStyles} className="item-list-elem item-list-decorator">▸</span>}
        </React.Fragment>
    ))

    return (
        <div className={itemsListStringFinalCN}>
            {mappedItems}
        </div>
    )
}


type ItemListStringPropsType = {
    items: string[]
    /** 
     * Spacing between items (number in pixels)
     * default: space between elements equalized
    */
    itemsSpacing?: number
    className?: string
}