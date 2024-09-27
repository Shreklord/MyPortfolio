import React from "react";

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
    // Handle non-link tabs by setting active tab
    if (tab !== "GitHub" && tab !== "Resume") {
      setActiveTab(tab);
    }
  };

  const handleDropdownChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTab = event.target.value;
  
    if (selectedTab === "GitHub") {
      window.location.href = "https://github.com/Shreklord"; // Use location.href for direct navigation
    } else if (selectedTab === "Resume") {
      window.location.href = "/Resume/Resume_Website.pdf"; // Direct link to the resume PDF
    } else {
      setActiveTab(selectedTab);
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
          {tabs.map((tab) =>
            tab === "GitHub" || tab === "Resume" ? (
              // For GitHub and Resume, use <a> tags
              <a
                key={tab}
                href={tab === "GitHub" ? "https://github.com/Shreklord" : "/Resume/Resume_Website.pdf"}
                target="_blank"
                rel="noopener noreferrer"
                className="nav_tab" // Apply same style as other tabs
              >
                {tab}
              </a>
            ) : (
              // For other tabs, use div with click handler
              <div
                key={tab}
                className={activeTab === tab ? "nav_tab_active" : "nav_tab"}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </div>
            )
          )}
        </div>

        {/* Dropdown for smaller screens */}
        <div className="dropdown-menu-container">
        <select className="dropdown-menu" onChange={handleDropdownChange} value={activeTab}>
          <option value="" disabled>Select a page</option>
          {tabs.map((tab) => (
            <option key={tab} value={tab}>
              {tab}
            </option>
          ))}
        </select>
        </div>
      </div>
    </nav>
  );
}

export default NavigationBar;
