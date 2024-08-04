import React from 'react'
import { Bar } from 'react-chartjs-2'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );


export default function Chart1() {
  

    const data= {
                labels : ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                     datasets: 
                     [
                        {
                        label: 'Data2',
                        data: ['10','20','30','40','50','60','70'] ,
                        borderColor: 'rgb(255, 99, 132)',
                        backgroundColor: 'rgba(255, 99, 132, 0.5)',
                        },
                                    
                    ]
            }
    const options = {}
                                  
    return <Bar data={data} options={options} > </Bar>;
      

}
