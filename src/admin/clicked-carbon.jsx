import React, { useState } from 'react';
import RenderMostClickedCars from './analytics/most-clicked-cars';
import RenderMostSearchedCar from './analytics/most-searched-car';
import './clicked-carbon.css'


const ComponentDictionary = {
  tab1: RenderMostClickedCars,
  tab2: RenderMostSearchedCar,
  tab3: () => <p>Tab 3 content</p>,
};

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div>
      <ul className="tabs horizontal">
        <li className={activeTab === 'tab1' ? 'active' : ''}>
          <a href="#" onClick={() => handleTabChange('tab1')}>Most Clicked Car</a>
        </li>
        <li className={activeTab === 'tab2' ? 'active' : ''}>
          <a href="#" onClick={() => handleTabChange('tab2')}>Most Searched Car</a>
        </li>
        <li className={activeTab === 'tab3' ? 'active' : ''}>
          <a href="#" onClick={() => handleTabChange('tab3')}>Tab 3</a>
        </li>
      </ul>

      {ComponentDictionary[activeTab]()}
    </div>
  );
};

export default Tabs;