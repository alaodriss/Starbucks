import React, { useState } from 'react';
import {tabData} from '../../data'
import './TapPanel.css'
const TabPanel = () => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };


  return (
        <div className="tab-panel">
        <div className="tab-options">
          {tabData.map((tab, index) => (
            <div
              key={index}
              className={`tab-option ${activeTab === index ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              Tab {tab.number}
            </div>
          ))}
        </div>
        <div className="content">
          <img
            src={tabData[activeTab].img}
            alt="Image"
          />
          <h2>{tabData[activeTab].title}</h2>
          <p>{tabData[activeTab].text}</p>
        </div>
      </div>
  );
};

export default TabPanel
