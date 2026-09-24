import { useEffect, useRef, useState } from 'react';
import { FiArrowDown, FiMenu, FiX } from 'react-icons/fi';
import { navigation, profile } from './portfolio';

type NavigationBarProps = { activeSection: string; scrolled: boolean };

function NavigationBar({ activeSection, scrolled }: NavigationBarProps) {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); toggleRef.current?.focus(); }
    };
    const onPointerDown = (event: PointerEvent) => { if (!navRef.current?.contains(event.target as Node)) setOpen(false); };
    const onResize = () => { if (window.innerWidth > 800) setOpen(false); };
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('resize', onResize);
    };
  }, [open]);

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <nav className="nav-shell container" aria-label="Main navigation" ref={navRef} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }}>
        <a className="brand" href="#home" onClick={() => setOpen(false)} aria-label="Anthony Goldhammer, home"><span className="wordmark">ag<span>.</span></span><span className="brand-name">Anthony<br />Goldhammer</span></a>
        <div className="desktop-links">{navigation.map(link => <a key={link.id} href={`#${link.id}`} className={activeSection === link.id ? 'is-active' : ''} aria-current={activeSection === link.id ? 'location' : undefined}>{link.label}</a>)}</div>
        <a className="resume-link" href={profile.resume} download>Resume <FiArrowDown aria-hidden="true" /><span className="sr-only"> (DOCX download)</span></a>
        <button className="menu-toggle" ref={toggleRef} aria-expanded={open} aria-controls={open ? 'mobile-navigation' : undefined} aria-label={open ? 'Close navigation' : 'Open navigation'} onClick={() => setOpen(value => !value)}>{open ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}</button>
        {open && <div className="mobile-navigation" id="mobile-navigation">{navigation.map((link, index) => <a key={link.id} href={`#${link.id}`} onClick={() => setOpen(false)} aria-current={activeSection === link.id ? 'location' : undefined}><span>0{index + 1}</span>{link.label}<FiArrowDown aria-hidden="true" /></a>)}</div>}
      </nav>
    </header>
  );
}

export default NavigationBar;
