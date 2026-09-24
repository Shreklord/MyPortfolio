import { FiArrowUpRight, FiArrowRight, FiCpu, FiDatabase, FiGitBranch, FiLayers, FiPlus, FiSmartphone } from 'react-icons/fi';
import { profile } from './portfolio';

function WorkContent() {
  return (
    <section id="work" className="section work-section container" aria-labelledby="work-title">
      <div className="section-heading" data-reveal><div><p className="eyebrow"><span>02 /</span> SELECTED WORK</p><h2 id="work-title">Ideas, meet execution<span>.</span></h2></div><p>Selected engineering contributions.<br />From mobile systems to applied AI.</p></div>
      <article className="project-featured" data-reveal>
        <div className="project-featured-copy">
          <div className="project-meta"><span className="project-category">MOBILE · CAPSTONE</span><span>2025 — 2026</span></div>
          <h3>Synchro Mobile</h3>
          <p className="project-description">A mobile application used by two schools, built with a team of five. I led architecture, implementation, and code reviews, connecting the application to a tested, cloud-deployed backend.</p>
          <div className="project-outcomes"><div><h4>Technical leadership</h4><p>Architecture, implementation, and code reviews</p></div><div><h4>Delivery & validation</h4><p>Jest testing, Azure deployment, and TestFlight</p></div></div>
          <ul className="tags" aria-label="Synchro Mobile technologies"><li>Node.js</li><li>Jest</li><li>Azure</li><li>TestFlight</li></ul>
        </div>
        <div className="architecture-panel" role="group" aria-label="Synchro Mobile architecture: mobile application connected to Node.js REST APIs, deployed on Azure">
          <div className="architecture-top"><span className="mono-label">FROM INTERFACE TO INFRASTRUCTURE</span><FiGitBranch aria-hidden="true" /></div>
          <div className="architecture-node"><span className="architecture-icon"><FiSmartphone aria-hidden="true" /></span><div><strong>Mobile application</strong><span>Validated with TestFlight</span></div><span className="node-index">01</span></div>
          <div className="architecture-connector" aria-hidden="true" />
          <div className="architecture-node"><span className="architecture-icon"><FiLayers aria-hidden="true" /></span><div><strong>Node.js + REST APIs</strong><span>Authentication & synchronization</span></div><span className="node-index">02</span></div>
          <div className="architecture-connector" aria-hidden="true" />
          <div className="architecture-node"><span className="architecture-icon"><FiDatabase aria-hidden="true" /></span><div><strong>Azure deployment</strong><span>Cloud-hosted backend</span></div><span className="node-index">03</span></div>
          <p className="architecture-footnote"><span className="status-dot" /> Tested with Jest. Built to work together.</p>
        </div>
      </article>
      <div className="project-grid">
        <article className="project-card" data-reveal>
          <div className="project-card-top"><FiLayers aria-hidden="true" /><span className="mono-label">02 / APPLICATION DEVELOPMENT</span></div>
          <h3>DaVinci Academia</h3><p>A modular application backend with role-based access and permissions, connecting Java and JSON to a JavaFX interface.</p>
          <ul className="tags" aria-label="DaVinci Academia technologies"><li>Java</li><li>JavaFX</li><li>JSON</li></ul>
          <details className="project-details"><summary>Behind the build <FiPlus aria-hidden="true" /></summary><p>Developed at the University of South Carolina from January 2023 to April 2024. Focused on a modular backend structure and integrating access permissions with the application interface.</p></details>
        </article>
        <article className="project-card" data-reveal>
          <div className="project-card-top"><FiCpu aria-hidden="true" /><span className="mono-label">03 / APPLIED MACHINE LEARNING</span></div>
          <h3>ASSET Hackathon</h3><p>Exploring how machine learning can distinguish falls from everyday movement using sensor data in a retirement-home setting.</p>
          <ul className="tags" aria-label="ASSET project methods"><li>Deep learning</li><li>Statistics</li><li>Frequency analysis</li></ul>
          <details className="project-details"><summary>Behind the build <FiPlus aria-hidden="true" /></summary><p>Combined deep learning, traditional machine learning, statistical methods, and frequency analysis. Worked with real retirement-home sensor data under a nondisclosure agreement.</p></details>
        </article>
      </div>
      <a className="section-end-link text-link" href={profile.github} target="_blank" rel="noreferrer">More code, experiments, and explorations <span>GitHub <FiArrowUpRight aria-hidden="true" /></span></a>
      <div className="work-transition" aria-hidden="true"><span /><FiArrowRight /><span /></div>
    </section>
  );
}

export default WorkContent;
