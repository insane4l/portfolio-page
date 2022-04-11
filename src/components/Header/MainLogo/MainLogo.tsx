import React from 'react'
import './MainLogo.scss'

export const MainLogo: React.FC<MainLogoPropsType> = ({collapseMode, toggleCollapseMode}) => {

    const mainLogoCN = collapseMode ? 'main-logo main-logo_collapsed' : 'main-logo'

    return (
        <div className={mainLogoCN}>
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
    toggleCollapseMode: () => void
}