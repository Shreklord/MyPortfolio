import {
  FaTruckLoading,
  FaHandPaper,
  FaBoxes,
  FaReact,
  FaJava,
} from "react-icons/fa";
import { BsStack } from "react-icons/bs";
import { SiTypescript, SiPostgresql } from "react-icons/si";
import { BiCalendar, BiBuilding } from "react-icons/bi";

function ExperienceContent() {
  const experiences = [
    {
      id: 1,
      title: "Software Development Software Engineer",
      company: "SCLPT",
      period: "Summer 2024 - Current",
      type: "Internship",
      description:
        "Worked on full-stack development projects using modern web technologies. Built 20+ RestFul APIs and 20+ front end components.",
      skills: [
        { name: "Full Stack Development", icon: <BsStack /> },
        { name: "React", icon: <FaReact /> },
        { name: "TypeScript", icon: <SiTypescript /> },
        { name: "PostgreSQL", icon: <SiPostgresql /> },
        { name: "RESTful APIs", icon: <BsStack /> },
        { name: "API Development", icon: <BsStack /> },
        { name: "Azure DevOps", icon: <BsStack /> },
      ],
      color: "var(--primary-green)",
    },
    {
      id: 2,
      title: "Computer Science Student",
      company: "University of South Carolina",
      period: "2023 - Present",
      type: "Education",
      description:
        "Developing strong foundations in computer science and software engineering principles.",
      skills: [
        { name: "Java Development", icon: <FaJava /> },
        { name: "Database Systems", icon: <SiPostgresql /> },
        { name: "JavaFX Applications", icon: <FaJava /> },
        { name: "Data Structures & Algorithms", icon: <FaJava /> },
        { name: "Object-Oriented Programming", icon: <FaJava /> },
      ],
      color: "var(--secondary-green)",
    },
    {
      id: 3,
      title: "Warehouse Associate",
      company: "Spencer's",
      period: "2020 - 2024",
      type: "Employment",
      description:
        "Gained valuable experience in logistics, teamwork, and operational efficiency.",
      skills: [
        { name: "Loading Bay Operations", icon: <FaTruckLoading /> },
        { name: "Order Picking", icon: <FaHandPaper /> },
        { name: "Inventory Management", icon: <FaBoxes /> },
      ],
      color: "var(--dark-green)",
    },
  ];

  return (
    <div className="experience_border">
      <div className="experience_row_header">
        <h1 className="expereince_header1">Experience</h1>
        <p className="experience_subtitle">
          My journey through education, internships, and work experiences
        </p>
      </div>

      <div className="experience_timeline">
        {experiences.map((exp, index) => (
          <div key={exp.id} className={`experience_card card-${index + 1}`}>
            <div className="experience_card_header">
              <div className="experience_meta">
                <div
                  className="experience_type"
                  style={{ borderColor: exp.color }}
                >
                  {exp.type}
                </div>
                <div className="experience_period">
                  <BiCalendar />
                  {exp.period}
                </div>
              </div>
              <h3 className="experience_card_title">{exp.title}</h3>
              <div className="experience_company">
                <BiBuilding />
                {exp.company}
              </div>
            </div>

            <div className="experience_card_body">
              <p className="experience_description">{exp.description}</p>

              <div className="experience_skills">
                <h4 className="skills_subtitle">Key Skills & Technologies</h4>
                <div className="skills_list">
                  {exp.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="skill_item">
                      <span className="skill_icon" style={{ color: exp.color }}>
                        {skill.icon}
                      </span>
                      <span className="skill_name">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div
              className="experience_card_accent"
              style={{ background: exp.color }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceContent;
