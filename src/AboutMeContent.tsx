import { FiArrowUpRight, FiBookOpen } from 'react-icons/fi';
import { skillGroups } from './portfolio';

function AboutMeContent() {
  return (
    <section id="about" className="section about-section container" aria-labelledby="about-title">
      <div className="about-layout">
        <div data-reveal><p className="eyebrow"><span>03 /</span> A LITTLE ABOUT ME</p><h2 id="about-title">Curiosity is<br />part of the stack<span>.</span></h2><div className="about-copy"><p>I’m Anthony, a full stack software engineer based in Fort Mill, South Carolina. I enjoy working through the whole problem: how an interface feels, how an API behaves, and how the pieces fit together.</p><p>My work spans production web platforms, mobile applications, and industrial data systems. At Secure Process Intelligence, I help turn customer data needs into practical software.</p><p>From working directly with a CEO to leading a five-person capstone team, I’m comfortable taking responsibility, collaborating on decisions, and adapting as requirements and priorities evolve.</p></div></div>
        <div className="about-aside" data-reveal>
          <div className="education-card">
            <div className="education-top"><FiBookOpen aria-hidden="true" /><span className="mono-label">THE FOUNDATION</span><span>2026</span></div>
            <h3>University of<br />South Carolina</h3><p>BS in Computer Science</p>
            <div className="education-detail"><span>Concentration</span><strong>Artificial Intelligence</strong></div><div className="education-detail"><span>Minor</span><strong>Mathematics</strong></div>
            <div className="education-bottom"><div><strong>3.739</strong><span>GRADUATING GPA</span></div><FiArrowUpRight aria-hidden="true" /></div><p className="scholarship">SC LIFE Scholarship · Graduated May 2026</p>
          </div>
        </div>
      </div>
      <div className="toolkit" data-reveal><div className="toolkit-heading"><h3>Tools of the trade<span>.</span></h3><p>The technologies I build with.</p></div><div className="skill-columns">{skillGroups.map(group => <div className="skill-group" key={group.label}><h4>{group.label}</h4><ul>{group.skills.map(skill => <li key={skill}>{skill}</li>)}</ul></div>)}</div></div>
    </section>
  );
}

export default AboutMeContent;
