import React from 'react'
import './App.scss'
import { Header } from './Header/Header'
import { MainSection } from './MainSection/MainSection'

const App = () => {
	return (
		<div className="app__wrapper">
			<Header />
			<MainSection />
		</div>
	)
}

export default App
