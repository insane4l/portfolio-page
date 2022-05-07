import React from 'react'
import { SuperAlert } from '../common/SuperAlert/SuperAlert'
import { RoutesList } from '../Routes/Routes'
import './MainSection.scss'


export const MainSection = () => {
    return (
        <main className="main-section">
           <RoutesList />
           {/* <SuperAlert label="Adaptive coming soon" /> */}
        </main>
    )
}