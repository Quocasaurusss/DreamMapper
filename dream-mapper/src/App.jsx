import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DisplayUMAP from './components/DisplayUMAP'
import DisplayRewards from './components/DisplayRewards'
import DisplayTask from './components/DisplayTask'

function App() {
  const [task, setTask] = useState("walk");
  const [time, setTime] = useState(5000);
  const [img, setUMAP] = useState("http://127.0.0.1:5000/static/walk_5000_umap.png");
  const [rewards, setRewards] = useState("http://127.0.0.1:5000/static/walk_rewards.png");

  useEffect(() => {
	  setUMAP("http://127.0.0.1:5000/static/" + task + "_" + time + "_umap.png")
	  setRewards("http://127.0.0.1:5000/static/" + task + "_rewards.png")
  }, [task, time])

  return (
    <>
	   <div id="main-container">
	    <DisplayRewards id={"grid-item-5"} img={rewards} setTime={setTime} task={task}/>
	    <DisplayTask otherId={"stand"} id={"grid-item-1"} setUMAP={setUMAP} setRewards={setRewards} task={task} setTask={setTask} img={"walker-stand-img.png"}/>
	    <DisplayTask otherId={"walk"} id={"grid-item-2"} setUMAP={setUMAP} setRewards={setRewards} task={task} setTask={setTask} img={"walker-walk-img.png"}/>
	    <DisplayTask id={"grid-item-3"}/>
	    <DisplayTask id={"grid-item-6"}/>
	    <DisplayUMAP id={"grid-item-4"} img={img}/>
           </div>
    </>
  )
}

export default App
