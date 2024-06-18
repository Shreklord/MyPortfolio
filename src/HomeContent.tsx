//import React, { useState } from "react";

type HomeContentProps = {
  setActiveTab: (tab: string) => void;
};

function HomeContent({ setActiveTab }: HomeContentProps) {
  return (
    <div className="home_row">
      <div className="home_column">
        <h1 className="home_header1">Hey, Im Anthony Goldhammer</h1>
        <h2 className="home_text1">
          Web Developer and Software Engineer, Based out
        </h2>
        <h2 className="home_text1_1">of Fort Mill, South Carolina.</h2>
        <h2 className="home_text2">Lets get Started.</h2>
        <button
          className="experience_button"
          type="button"
          onClick={() => {
            setActiveTab("Experience");
          }}
        >
          Experience
        </button>
      </div>
      <div className="home_column2">
        <div className="home_goldhammer_image"></div>
      </div>
    </div>
  );
}

export default HomeContent;
