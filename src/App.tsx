import React from 'react'
import './App.scss'
import Windows10 from './components/Windows10'
import { DemoContextProvider } from './contexts/DemoContext'
import demoContextDefaultValues from './contexts/DefaultValues'

function App() {
  return (
  	<DemoContextProvider value={demoContextDefaultValues}>
    	<Windows10/>
    </DemoContextProvider>
  )
}

export default App
