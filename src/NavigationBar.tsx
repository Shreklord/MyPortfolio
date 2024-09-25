import React, { useState } from "react";

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
  const [selectedTab, setSelectedTab] = useState<string>("");

  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const newTab = event.target.value;

    // If GitHub or Resume is selected, open the link in a new tab
    if (newTab === "GitHub") {
      window.open("https://github.com/Shreklord", "_blank", "noopener,noreferrer");
    } else if (newTab === "Resume") {
      window.open("/Resume/Resume_Website.pdf", "_blank", "noopener,noreferrer");
    } else {
      // For other tabs, just set the active tab
      setActiveTab(newTab);
    }

    // Save the selected tab to state
    setSelectedTab(newTab);
  };

  const handleDropdownClick = () => {
    // Reset selectedTab to allow re-selection of the same link
    setSelectedTab("");
  };

  return (
    <nav>
      <div className="nav_row">
        <div className="name_column">
          <h2 className="name_header">Anthony Goldhammer</h2>
          <div className="green_bar" />
        </div>

        {/* Tabs row for larger screens */}
        <div className="tabs_row">
          {tabs.map((tab) => (
            <div
              key={tab}
              className={activeTab === tab ? "nav_tab_active" : "nav_tab"}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </div>
          ))}
        </div>

        {/* Dropdown for smaller screens */}
        <select
          className="dropdown-menu"
          onChange={handleDropdownChange}
          onClick={handleDropdownClick} // Reset the dropdown to allow the same selection
          value={selectedTab || activeTab}
        >
          <option value="" disabled>Select a page</option>
          {tabs.map((tab) => (
            <option key={tab} value={tab}>
              {tab}
            </option>
          ))}
        </select>
      </div>
    </nav>
  );
}

export default NavigationBar;


