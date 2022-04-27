import React from 'react'
import './MainLogo.scss'

export const MainLogo: React.FC<MainLogoPropsType> = ({collapseMode, toggleCollapseMode, withBorder}) => {

    const wrapperBorderCN = withBorder ? 'main-logo_with-border' : ''
    const collapseModeCN = collapseMode ? 'main-logo_collapsed' : ''
    const finalmMainLogoCN = `main-logo ${collapseModeCN} ${wrapperBorderCN}`

    return (
        <div className={finalmMainLogoCN}>
            <button onClick={toggleCollapseMode} className="main-logo__wrapper">
                {/* <span>K</span> */}
                <span>KARPEYE</span>
                <span>V</span>
            </button>
        </div>
    )
}

type MainLogoPropsType = {
    collapseMode: boolean
    withBorder?: boolean
    toggleCollapseMode?: () => void
}