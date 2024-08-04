import React from 'react'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';

  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );
  


export default function Chart2() {
  

    const data= {
                labels : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                     datasets: 
                     [
                        {
                        label: 'Data1',
                        data: ['10','20','30','40','50','60','70'] ,
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        },
                                    
                    ]
            }
    const options = {}
                                  
    return <Line data={data} options={options} > </Line>;
      

}
