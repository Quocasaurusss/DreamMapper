import { useState, useEffect } from 'react'
import Chart from 'chart.js/auto'
import '../App.css'

function DisplayRewards({id, img, setTime, task}) {
    let standDataset = {
      label: 'walker-stand',
      data: [192, 35],
      borderColor: 'blue',
      borderWidth: 2,
      fill: true,
      pointBackgroundColor: 'red',
      pointRadius: 5
    }

    let walkDataset = {...standDataset}; 
    walkDataset.data = [36, 32]
    walkDataset.label= 'walker-walk' 
    
    const [dataset, setDataset] = useState(standDataset)
  useEffect(() => {
    if (task == 'walk') {
      setDataset(walkDataset)    
    }
    else {
      setDataset(standDataset)
    }
  }, [task])
  useEffect(() => {

    const ctx = document.getElementById("myChart");
    const data = {
      labels: [5000, 10000],
      datasets: [
        dataset
      ]
    }

    const config = {
      type: 'line',  // Set the chart type
      data: data,
      scales: {
        x: {
	  min: 0
	}
      },
      options: {
        responsive: true,
        onClick: function(e, elements) {
	  if (elements.length > 0) {
            let index = elements[0].index;
	    if (index == 1) {
	      setTime(10000)
	    }
	    else {
	      setTime(5000)
	    }
	  }
	}
      }
    }
  if (Chart.getChart("myChart")) {
    Chart.getChart("myChart").destroy();
  }
  const myChart = new Chart(ctx, config);
  }, [dataset])
  return (
    <>
	<div id={id} style={{height: 'auto', width: '100%', backgroundColor: "white"}}>
	  <canvas id="myChart" width="400px" height="400px"></canvas>
	</div>
    </>
  )
}

export default DisplayRewards
