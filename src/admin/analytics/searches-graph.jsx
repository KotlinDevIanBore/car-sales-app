import React from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, Filler } from 'chart.js';
import { Line } from 'react-chartjs-2';
import Data from '../analytics/data';

import { CarContext } from '../manage-car-context';
import { useContext ,useMemo,useEffect} from 'react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const SearchesGraph = ({carID}) => {


  const {searchLogs,setsearchLogId}=useContext(CarContext);


  const carSearchLogs = useMemo(() => {
    return searchLogs.filter(log => log.id === carID);
  }, [searchLogs, carID]);


console.log (carSearchLogs);
 
  



  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            size: 14,
            weight: 'bold'
          }
        }
      },
      title: {
        display: true,
        text: 'Searches Over Time',
        font: {
          size: 20,
          weight: 'bold'
        }
      },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        titleFont: {
          size: 16,
          weight: 'bold'
        },
        bodyFont: {
          size: 14
        },
        padding: 12,
        cornerRadius: 6
      }
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        },
        ticks: {
          font: {
            size: 12
          }
        },
        title: {
          display: true,
          text: 'Date',
          font: {
            size: 14,
            weight: 'bold'
          }
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          color: 'rgba(0, 0, 0, 0.1)'
        },
        ticks: {
          font: {
            size: 12
          }
        },
        title: {
          display: true,
          text: 'Number of Searches',
          font: {
            size: 14,
            weight: 'bold'
          }
        }
      },
    },
  };

  const data = {
    datasets: [
      {
        label: 'Searches',
        data: searchLogs.map((item) => ({ x: item.date, y: item.value })),
        // data: searchLogs.filter((item) => item.carID === carID).map((item) => ({ x: item.date, y: item.value })),
        // data: searchLogs.filter((item) => item.id === carID).map((item) => ({ x: item.date, y: item.value })),
        data: carSearchLogs.map((item) => ({ x: item.date, y: item.value })),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        pointBackgroundColor: 'rgb(75, 192, 192)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(75, 192, 192)',
        tension: 0.3,
        fill: true,
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default SearchesGraph;