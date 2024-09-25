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
    const selectedTab = event.target.value;
    setSelectedTab(selectedTab);
  };

  const handleDropdownBlur = () => {
    // Handle GitHub and Resume selections when dropdown loses focus
    if (selectedTab === "GitHub") {
      window.open("https://github.com/Shreklord", "_blank", "noopener,noreferrer");
    } else if (selectedTab === "Resume") {
      window.open("/Resume/Resume_Website.pdf", "_blank", "noopener,noreferrer");
    } else {
      setActiveTab(selectedTab);  // Set the active tab for internal navigation
    }
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
          onBlur={handleDropdownBlur}  // Trigger action when dropdown loses focus
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

