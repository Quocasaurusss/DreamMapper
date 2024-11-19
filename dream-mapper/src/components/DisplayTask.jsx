import { useState } from 'react'

function DisplayTask({id}) {
  const [count, setCount] = useState(0)

  return (
    <>
	<div id={id} style={{height: 'auto', width: '100%', border: "1px solid black", backgroundColor: "white"}}>
	</div>
    </>
  )
}

export default DisplayTask 
