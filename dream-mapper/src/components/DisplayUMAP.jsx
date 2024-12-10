import { useState } from 'react'
import '../App.css'

function DisplayUMAP({id, img}) {
  const [count, setCount] = useState(0)

  return (
    <>
	<div id={id} style={{height: 'auto', width: '100%', backgroundColor: "white"}}>
		<img style={{width: "100%", border: "1px solid black"}} src={img} alt={img} />
	</div>
    </>
  )
}

export default DisplayUMAP 
