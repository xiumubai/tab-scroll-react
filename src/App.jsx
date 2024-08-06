import React, { useState, useRef } from 'react';
import './App.css';

const TABS = new Array(8).fill(0).map((_, index) => index);

const TabList = () => {
  const [tabs] = useState(TABS);
  const [activeIndex, setActiveIndex] = useState(0);
  const tabListRef = useRef(null);
  const tabClick = (index) => {
    setActiveIndex(index);
    const tabList = tabListRef.current;
    const tab = tabList.children[index];
    const tabRect = tab.getBoundingClientRect();
    const scrollLeft =
      tab.offsetLeft + tabRect.width / 2 - window.innerWidth / 2;
    tabList.scrollLeft = scrollLeft;
  };

  return (
    <div className="tabs" ref={tabListRef}>
      {tabs.map((tab, tabIndex) => (
        <div
          key={tabIndex}
          className="tab-item"
          onClick={() => tabClick(tabIndex)}
          style={{
            backgroundColor: tabIndex === activeIndex ? '#f93c7d' : '#8ce397',
          }}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

const App = () => {
  return <TabList />;
};

export default App;
