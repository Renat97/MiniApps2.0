import React, {useState,useEffect} from "react";
import styled from 'styled-components';
import {Bar} from 'react-chartjs-2'
import {Line} from 'react-chartjs-2';
import axios from 'axios';

var StyledDiv = styled.div`display: flex;  flex-direction: column; justify-content: flex-start; outline: 5px dotted;`;

var History = () => {
    const [chart, setChart] = useState();
    const [chartValues, setChartValues] = useState();
    useEffect(() => {
      axios.get('https://api.coindesk.com/v1/bpi/historical/close.json').then((data) => {
        console.log('data', data.data.bpi);
        setChart(Object.keys(data.data.bpi));
        setChartValues(Object.values(data.data.bpi));
      })
    }, []);

        return (
          <div>
            <Line
            data={{
              labels: chart,
              datasets: [
                {
                label: 'price',
                data: chartValues,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 5,
            }
          ],
            }}
            options={{
              maintainAspectRatio: false,
              scales: {
                yAxes: [{
                  ticks: {
                    beginAtZero: true
                  }
                }]
              }
            }}
            />
          </div>
        );
}

export default History;
