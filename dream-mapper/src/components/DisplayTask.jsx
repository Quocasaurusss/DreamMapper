import { useState, useEffect } from 'react'

function DisplayTask({otherId, id, img, setUMAP, setRewards, task, setTask}) {
  const [opacity, setOpacity] = useState(1)

  useEffect(()=> {
    if (otherId == task) {
      setOpacity(1)
    }
    else {
      setOpacity(0.5)
    }
  }, [task])

  function changeVisualizations(e) {
    setTask(e.target.id)
  }

  return (
    <>
	<div id={id} style={{height: 'auto', width: '100%', backgroundColor: "white"}}>
		<img id={otherId} onClick={e => changeVisualizations(e)} style={{width: "100%", border: "1px solid red", opacity: opacity }} src={img} alt={img} />
	</div>
    </>
  )
}

export default DisplayTask 
