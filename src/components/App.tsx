import React, { useEffect, useState } from 'react'
import './App.scss'
import { Header } from './Header/Header'
import { MainSection } from './MainSection/MainSection'
import { useMediaQuery } from 'react-responsive'
import { isMobile } from 'react-device-detect'

const App = () => {

	// ******Viewport units on mobile browsers normalized**************************************************************************
	const isLargerThanSmBreakPoint = useMediaQuery({ query: `(min-width: 576px)`})
	const [browserContentHeight, setBrowserContentHeight] = useState<null | number>(null)

	useEffect(() => {
		function checkBrowserContentHeight() {
			const vh = window.innerHeight
			setBrowserContentHeight(vh)				
		}
		checkBrowserContentHeight()

		window.addEventListener('resize', checkBrowserContentHeight)

		return () => window.removeEventListener('resize', checkBrowserContentHeight)
	}, [])

	const appWrapperStyle = 
		(isMobile && isLargerThanSmBreakPoint && browserContentHeight)
			? {height: `${browserContentHeight}px`}
			: {}
	// ******************************************************************************************


	return (
		<div style={appWrapperStyle} className="app__wrapper">
			<Header />
			<MainSection />
		</div>
	)
}

export default App
