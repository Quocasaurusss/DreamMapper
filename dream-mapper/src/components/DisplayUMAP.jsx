import { useState } from 'react'
import '../App.css'

function DisplayUMAP({id}) {
  const [count, setCount] = useState(0)

  return (
    <>
	<div id={id} style={{height: 'auto', width: '100%', border: "1px solid black", backgroundColor: "white"}}>
	</div>
    </>
  )
}

export default DisplayUMAP 
