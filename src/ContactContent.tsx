import { useEffect, useRef, useState } from 'react';
import { FiArrowUpRight, FiCheck, FiCopy, FiGithub, FiLinkedin } from 'react-icons/fi';
import { profile } from './portfolio';

function ContactContent() {
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>('idle');
  const timer = useRef<ReturnType<typeof setTimeout>>();
  useEffect(() => () => clearTimeout(timer.current), []);
  const copyEmail = async () => {
    clearTimeout(timer.current);
    try { await navigator.clipboard.writeText(profile.email); setCopyStatus('copied'); }
    catch { setCopyStatus('error'); }
    timer.current = setTimeout(() => setCopyStatus('idle'), 4000);
  };
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="container contact-inner" data-reveal>
        <p className="eyebrow"><span>04 /</span> START A CONVERSATION</p>
        <div className="contact-heading"><h2 id="contact-title">Have something<br />in mind<span>?</span></h2><a className="contact-arrow" href={`mailto:${profile.email}`} aria-label="Email Anthony Goldhammer"><FiArrowUpRight aria-hidden="true" /></a></div>
        <p className="contact-description">A project, a collaboration, or a good conversation.<br />I’d love to hear what you’re working on.</p>
        <div className="contact-bottom">
          <div className="contact-email"><span className="mono-label">LET’S TALK</span><div className="email-row"><a href={`mailto:${profile.email}`}>{profile.email}</a><button className="copy-button" onClick={copyEmail} aria-label={copyStatus === 'copied' ? 'Email copied' : 'Copy email address'}>{copyStatus === 'copied' ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}</button></div><p className="copy-feedback" role="status">{copyStatus === 'copied' ? 'Email address copied.' : copyStatus === 'error' ? 'Couldn’t copy automatically. Select the address to copy it, or click to email.' : '\u00a0'}</p></div>
          <div className="contact-socials"><a href={profile.linkedin} target="_blank" rel="noreferrer"><FiLinkedin aria-hidden="true" />LinkedIn<FiArrowUpRight aria-hidden="true" /></a><a href={profile.github} target="_blank" rel="noreferrer"><FiGithub aria-hidden="true" />GitHub<FiArrowUpRight aria-hidden="true" /></a><a className="alternate-email" href="mailto:Anthony.goldhammer@icloud.com">Alternative email<FiArrowUpRight aria-hidden="true" /></a></div>
        </div>
      </div>
    </section>
  );
}

export default ContactContent;
