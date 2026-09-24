import { useEffect, useRef, useState } from 'react';
import { FiArrowUpRight, FiArrowUp } from 'react-icons/fi';
import NavigationBar from './NavigationBar';
import MainContent from './MainContent';
import { profile } from './portfolio';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('main section[id]'));
    let frame = 0;
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      if (progressRef.current) progressRef.current.style.transform = `scaleX(${total > 0 ? scrollTop / total : 0})`;
      setScrolled(scrollTop > 24);
      const current = [...sections].reverse().find(section => section.getBoundingClientRect().top <= window.innerHeight * 0.36);
      setActiveSection(current?.id ?? 'home');
      frame = 0;
    };
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(updateScroll); };
    updateScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -24px 0px' });
    if (!motionQuery.matches) elements.forEach(element => { element.classList.add('reveal-ready'); observer.observe(element); });
    const onMotionChange = () => {
      if (motionQuery.matches) { observer.disconnect(); elements.forEach(element => element.classList.add('is-visible')); }
    };
    motionQuery.addEventListener('change', onMotionChange);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      motionQuery.removeEventListener('change', onMotionChange);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <div className="reading-progress" ref={progressRef} aria-hidden="true" />
      <NavigationBar activeSection={activeSection} scrolled={scrolled} />
      <MainContent />
      <footer className="site-footer container">
        <a className="wordmark" href="#home" aria-label="Anthony Goldhammer, back to top">ag<span>.</span></a>
        <p>© {new Date().getFullYear()} {profile.name}</p>
        <div className="footer-links">
          <a href={profile.github} target="_blank" rel="noreferrer">GitHub <FiArrowUpRight aria-hidden="true" /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <FiArrowUpRight aria-hidden="true" /></a>
          <a href="https://www.instagram.com/anthony.gold3" target="_blank" rel="noreferrer">Instagram <FiArrowUpRight aria-hidden="true" /></a>
        </div>
        <a href="#home" className="back-top" aria-label="Back to top"><FiArrowUp aria-hidden="true" /></a>
      </footer>
    </>
  );
}

export default App;
