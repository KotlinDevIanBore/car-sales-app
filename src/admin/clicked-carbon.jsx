import React, { useState } from 'react';
import RenderMostClickedCars from './analytics/most-clicked-cars';
import RenderMostSearchedCar from './analytics/most-searched-car';
import './clicked-carbon.css'
import LineApp from './analytics/graph';
 import EditCar from '../edit-car-app/edit-car'
 import ManageCars from '../admin/manage-car-component';


const ComponentDictionary = {
  tab1: RenderMostClickedCars,
  tab2: RenderMostSearchedCar,
  tab3: LineApp,
  tab4: LineApp,
  tab5: ManageCars
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <ul className="tabs vertical">
        
        <li className={activeTab === 'tab1' ? 'active' : ''}>
          <a href="#" onClick={() => handleTabChange('tab1')}>Most Clicked Car</a>
        </li>
        <li className={activeTab === 'tab2' ? 'active' : ''}>
          <a href="#" onClick={() => handleTabChange('tab2')}>Most Searched Car</a>
        </li>
        <li className={activeTab === 'tab3' ? 'active' : ''}>
          <a href="#" onClick={() => handleTabChange('tab3')}>Trends</a>
        </li>
        <li className={activeTab === 'tab4' ? 'active' : ''}>
          <a href="#" onClick={() => handleTabChange('tab4')}>EditCars</a>
        </li>
        <li className={activeTab === 'tab5' ? 'active' : ''}>
          <a href="#" onClick={() => handleTabChange('tab5')}>Add Car</a>
        </li>
      </ul>

      {ComponentDictionary[activeTab]()}
    </div>
  );
};

export default Tabs;