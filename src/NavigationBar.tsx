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
  
    setTimeout(() => {
      if (selectedTab === "GitHub") {
        window.open("https://github.com/Shreklord", "_blank", "noopener,noreferrer");
      } else if (selectedTab === "Resume") {
        window.open("/Resume/Resume_Website.pdf", "_blank", "noopener,noreferrer");
      } else {
        setActiveTab(selectedTab);
      }
    }, 100);  // Adding a small delay to ensure the event processes correctly on touch devices
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
        <select className="dropdown-menu" onChange={handleDropdownChange} value={activeTab}>
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
