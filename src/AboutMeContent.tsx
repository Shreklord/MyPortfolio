function AboutMeContent() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "Java",
    "PostgreSQL",
    "Git",
    "AWS",
    "Azure",
  ];

  const interests = [
    "Full Stack Development",
    "Web Technologies",
    "Problem Solving",
    "Continuous Learning",
  ];

  return (
    <div className="about_me_row">
      <div className="about_me_column">
        <h1 className="aboutme_header1">About Me</h1>
        <div className="about_content">
          <p className="about_me_text1">
            Hello! I'm Anthony, a passionate Junior Computer Science student at
            the University of South Carolina. My journey into programming began
            at 17 when I discovered the thrill of bringing ideas to life through
            code.
          </p>
          <p className="about_me_text1">
            I'm particularly drawn to projects that challenge me to explore new
            technologies and innovative problem-solving approaches. My goal is
            to continue growing as a Full Stack Developer while creating
            meaningful applications that make a difference.
          </p>

          <div className="skills_section">
            <h3 className="skills_header">Technical Skills</h3>
            <div className="skills_grid">
              {skills.map((skill, index) => (
                <span key={index} className="skill_tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className="interests_section">
            <h3 className="skills_header">Interests</h3>
            <div className="interests_list">
              {interests.map((interest, index) => (
                <div key={index} className="interest_item">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M20 6 9 17l-5-5"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  {interest}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="about_me_column2">
        <div className="image-container">
          <div className="about_me_image"></div>
          <div className="image-glow"></div>
        </div>
        <div className="fun_fact">
          <div className="fact_icon">💡</div>
          <p>Started coding at 17 and haven't stopped learning since!</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMeContent;
