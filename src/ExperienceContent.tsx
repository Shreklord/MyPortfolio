import { FiArrowDown } from 'react-icons/fi';
import { experiences, profile } from './portfolio';

function ExperienceContent() {
  return (
    <section id="experience" className="section experience-section" aria-labelledby="experience-title">
      <div className="container experience-layout">
        <div className="experience-intro" data-reveal><p className="eyebrow"><span>01 /</span> EXPERIENCE</p><h2 id="experience-title">Built through<br />experience<span>.</span></h2><p>I work in fast-paced development environments, collaborating with teams and adapting to changing requirements across design, implementation, and delivery.</p><a className="text-link" href={profile.resume} download>Get the full resume <FiArrowDown aria-hidden="true" /><span className="sr-only"> (DOCX download)</span></a></div>
        <div className="experience-timeline">
          {experiences.map((experience, index) => <article className={`experience-item${experience.current ? ' current' : ''}`} key={experience.company} data-reveal>
            <span className="timeline-dot" aria-hidden="true" />
            <div className="experience-meta"><span>{experience.date}</span>{experience.current && <span className="current-tag">CURRENT</span>}<span className="experience-index">0{index + 1}</span></div>
            <h3>{experience.company}</h3><p className="experience-role">{experience.role}</p><p className="experience-description">{experience.description}</p><p className="experience-note">{experience.note}</p>
            <ul className="tags" aria-label={`${experience.company} skills`}>{experience.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>
          </article>)}
        </div>
      </div>
    </section>
  );
}

export default ExperienceContent;
