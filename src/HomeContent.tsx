import { FiArrowDown, FiArrowUpRight, FiMapPin } from 'react-icons/fi';
import { profile } from './portfolio';

function HomeContent() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />
      <div className="container hero-layout">
        <div className="hero-copy">
          <p className="eyebrow hero-enter"><span className="status-dot" /> FULL STACK SOFTWARE ENGINEER</p>
          <h1 id="hero-title" className="hero-enter">Thoughtful code.<br /><span>Real-world<br className="hero-break" /> impact.</span></h1>
          <p className="hero-intro hero-enter">Hey, I’m Anthony Goldhammer.</p>
          <p className="hero-description hero-enter">I’ve helped build web applications that have reached over 5,000 end users. I work across the stack to deliver intuitive web and mobile experiences.</p>
          <div className="hero-actions hero-enter"><a className="button button-primary" href="#experience">View experience <FiArrowDown aria-hidden="true" /></a><a className="text-link" href="#contact">Let’s connect <FiArrowUpRight aria-hidden="true" /></a></div>
          <p className="hero-location hero-enter"><FiMapPin aria-hidden="true" /> Fort Mill, South Carolina</p>
        </div>
        <div className="hero-portrait hero-enter">
          <div className="portrait-topline"><span>THE PERSON BEHIND THE CODE</span><span>01 / AG</span></div>
          <div className="portrait-frame">
            <img src="/Images/HeadShotAnthony.jpg" alt="Anthony Goldhammer" width="1241" height="1493" fetchPriority="high" />
            <span className="portrait-corner corner-tl" aria-hidden="true" /><span className="portrait-corner corner-br" aria-hidden="true" />
            <div className="portrait-caption"><span className="status-dot" /><span>Engineer. Builder. Problem solver.</span></div>
          </div>
          <div className="current-role"><span className="mono-label">CURRENTLY AT</span><p>Secure Process Intelligence <FiArrowUpRight aria-hidden="true" /></p></div>
        </div>
      </div>
      <div className="hero-bottom container"><a href="#experience" className="scroll-cue"><span className="scroll-line" aria-hidden="true" /> SCROLL TO EXPLORE</a><a href={profile.github} target="_blank" rel="noreferrer" className="text-link">Find me on GitHub <FiArrowUpRight aria-hidden="true" /></a></div>
      <dl className="proof-strip container" aria-label="Professional impact" data-reveal>
        <div><dt>Product reach</dt><dd className="metric-value">5,000<span>+</span></dd><dd className="metric-description">End users reached<span>by web applications I helped build</span></dd></div>
        <div><dt>Application development</dt><dd className="metric-value metric-value-text">Full stack</dd><dd className="metric-description">Web & mobile applications<span>from interfaces and APIs to cloud deployment</span></dd></div>
        <div><dt>Collaborative engineering</dt><dd className="metric-value metric-value-text">Teamwork</dd><dd className="metric-description">Development team experience<span>collaboration, code reviews & capstone leadership</span></dd></div>
      </dl>
    </section>
  );
}

export default HomeContent;
