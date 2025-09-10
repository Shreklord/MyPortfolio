import React, { useState, useEffect } from "react";
import { BiMenu, BiX, BiDownload, BiLogoGithub } from "react-icons/bi";

type NavigationBarProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const tabs: string[] = ["Home", "About Me", "Experience", "Contact"];

const externalLinks = [
  {
    name: "GitHub",
    icon: <BiLogoGithub />,
    href: "https://github.com/Shreklord",
    color: "#333",
  },
  {
    name: "Resume",
    icon: <BiDownload />,
    href: "/Resume/Resume_Website.pdf",
    color: "var(--primary-green)",
  },
];

function NavigationBar({ activeTab, setActiveTab }: NavigationBarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={`nav_container ${scrolled ? "scrolled" : ""}`}>
      <div className="nav_row">
        <div className="nav_brand" onClick={() => handleTabClick("Home")}>
          <div className="brand_content">
            <h2 className="name_header">Anthony Goldhammer</h2>
            <div className="brand_tagline">Software Developer</div>
          </div>
          <div className="green_bar" />
        </div>

        {/* Desktop Navigation */}
        <div className="nav_desktop">
          <div className="nav_links">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`nav_link ${activeTab === tab ? "active" : ""}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="nav_external">
            {externalLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="external_link"
                style={{ "--link-color": link.color } as React.CSSProperties}
                title={link.name}
              >
                <span className="external_icon">{link.icon}</span>
                <span className="external_text">{link.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="mobile_menu_button"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <BiX /> : <BiMenu />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile_menu ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="mobile_menu_content">
          <div className="mobile_nav_links">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`mobile_nav_link ${
                  activeTab === tab ? "active" : ""
                }`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="mobile_external_links">
            {externalLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="mobile_external_link"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="mobile_external_icon">{link.icon}</span>
                <span>{link.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="mobile_menu_overlay"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </nav>
  );
}

export default NavigationBar;
