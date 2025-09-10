import { useEffect, useState } from "react";

type HomeContentProps = {
  setActiveTab: (tab: string) => void;
};

function HomeContent({ setActiveTab }: HomeContentProps) {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const fullText = "Hey, I'm Anthony Goldhammer";

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="home_row">
      <div className="home_column">
        <h1 className="home_header1">
          {displayText}
          {isTyping && <span className="typing-cursor">|</span>}
        </h1>
        <h2 className="home_text1">Web Developer and Software Engineer</h2>
        <h2 className="home_text2">Based out of Fort Mill, South Carolina</h2>
        <p className="home_description">
          Passionate about creating innovative applications and exploring new
          technologies. Let's build something amazing together.
        </p>
        <div className="experience_button_container">
          <button
            className="experience_button"
            type="button"
            onClick={() => {
              setActiveTab("Experience");
            }}
          >
            <span>View Experience</span>
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 12h14m-7-7 7 7-7 7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="home_column2">
        <div className="image-container">
          <img
            className="goldhammer_image"
            src="/Images/Goldhammer.png"
            alt="Anthony Goldhammer - Web Developer"
            loading="lazy"
          />
          <div className="image-glow"></div>
        </div>
      </div>
    </div>
  );
}

export default HomeContent;
