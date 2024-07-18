
// LineApp.js
import React from 'react';
import { LineChart } from '@carbon/charts-react';
import options from './options.js';
import '@carbon/charts-react/styles.css';
import { useContext } from 'react';
import { CarContext } from '../manage-car-context.jsx';

const LineApp = () => {


  const {clickLogData}= useContext(CarContext)


  return (
    <LineChart
      data={clickLogData}
      options={options}
    ></LineChart>
  );
};

export default LineApp;