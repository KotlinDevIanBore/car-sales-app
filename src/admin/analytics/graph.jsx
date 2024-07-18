
// LineApp.js
import React from 'react';
import { LineChart } from '@carbon/charts-react';
import data from './data.js';
import options from './options.js';
import '@carbon/charts-react/styles.css';

const LineApp = () => {
  return (
    <LineChart
      data={data}
      options={options}
    ></LineChart>
  );
};

export default LineApp;