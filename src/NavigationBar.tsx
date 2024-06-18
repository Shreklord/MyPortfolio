// import React, { useState } from "react";
import "./navigation_bar.css";

type NavigationBarProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const tabs: string[] = [
  "Home",
  "About Me",
  "Experience",
  "GitHub",
  "Contact",
  "Resume",
];

function NavigationBar({ activeTab, setActiveTab }: NavigationBarProps) {
  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <nav>
      <div className="nav_mobile_container">Hamburger</div>
      <div className="nav_desktop_container">
        <div className="nav_row">
          <div className="name_column">
            <h2 className="name_header">Anthony Goldhammer</h2>
            <div className="green_bar" />
          </div>
          <div className="tabs_row">
            {tabs.map((tab) => (
              <div
                key={tab}
                className={activeTab === tab ? "nav_tab_active" : "nav_tab"}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </div>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
