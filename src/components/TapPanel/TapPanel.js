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
          <div className='tab-one'> 
            <div className='tab-title'> 
                <h2 className='title'>Get your favorites for free</h2>
            </div>
        <div className="tab-options">
          {tabData.map((tab, index) => (
            <div
              key={index}
              className={`tab-option ${activeTab === index ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
            {tab.number} <span className='star'>★</span>
            </div>
          ))}
        </div>
          </div>
         
        <div className="tab-content">
          <div> 
          <img
            src={tabData[activeTab].img}
            alt="Image"
          />
          </div>
      
          <div className='tab-content-infos'> 
                <h2>{tabData[activeTab].title}</h2>
                <p>{tabData[activeTab].text}</p>
          </div>
        </div>
      </div>
  );
};

export default TabPanel
