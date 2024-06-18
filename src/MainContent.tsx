// import React from "react";
// import background from "src/assets/Images/Wave.png";
// import NavigationBar from "./NavigationBar";
import HomeContent from "./HomeContent";
import ContactContent from "./ContactContent";
import ExperienceContent from "./ExperienceContent";
import AboutMeContent from "./AboutMeContent";

type MainContentProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

function MainContent({ activeTab, setActiveTab }: MainContentProps) {
  return (
    <div className="main-background">
      {activeTab === "Home" && <HomeContent setActiveTab={setActiveTab} />}
      {activeTab === "Contact" && <ContactContent />}
      {activeTab === "Experience" && <ExperienceContent />}
      {activeTab === "About Me" && <AboutMeContent />}
    </div>
  );
}

export default MainContent;
