import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DisplayUMAP from './components/DisplayUMAP'
import DisplayTask from './components/DisplayTask'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
	   <div id="main-container">
	    <DisplayTask id={"grid-item-1"}/>
	    <DisplayTask id={"grid-item-2"}/>
	    <DisplayTask id={"grid-item-3"}/>
	    <DisplayUMAP id={"grid-item-4"}/>
           </div>
    </>
  )
}

export default App
