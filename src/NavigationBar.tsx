// import React, { useState } from "react";

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
    if (tab === "GitHub") {
      // Open GitHub profile in a new tab
      window.open("https://github.com/Shreklord", "_blank", "noopener,noreferrer");
    } else if (tab === "Resume") {
      // Open the PDF file in a new tab
      window.open("public/Resume/Resume_Website.pdf", "_blank", "noopener,noreferrer");
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <nav>
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
    </nav>
  );
}

export default NavigationBar;
