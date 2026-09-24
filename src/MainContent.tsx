import HomeContent from './HomeContent';
import WorkContent from './WorkContent';
import ExperienceContent from './ExperienceContent';
import AboutMeContent from './AboutMeContent';
import ContactContent from './ContactContent';

function MainContent() {
  return <main id="main" tabIndex={-1}><HomeContent /><ExperienceContent /><WorkContent /><AboutMeContent /><ContactContent /></main>;
}

export default MainContent;
