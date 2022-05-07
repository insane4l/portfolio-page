import React from 'react'
import './ItemListString.scss'


/** Decorated item list string */
export const ItemListString: React.FC<ItemListStringPropsType> = ({items, itemsSpacing, className}) => {

    const elementAlignmentStyles = itemsSpacing
        ? {gap: `${itemsSpacing}px`} 
        : {justifyContent: 'space-between'}

    const itemsListStringFinalCN = className ? `item-list-string ${className}` : 'item-list-string'

    const mappedItems = items.map((el, indx, arr) => (
        <React.Fragment key={indx}>
            <span className="item-list-elem">{el}</span>
            {indx !== (arr.length - 1) && <span className="item-list-decorator">▸</span>}
        </React.Fragment>
    ))

    return (
        <div style={elementAlignmentStyles} className={itemsListStringFinalCN}>
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