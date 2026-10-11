import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Download, Menu, X } from 'lucide-react';
import { HERO_DATA, SOCIAL_LINKS } from '../constants';
import { CONTAINER } from '../utils/layout';
import ThemeToggle from './ThemeToggle';

type Theme = 'light' | 'dark';

// index.html sets data-theme before first paint; this keeps it in sync after that
const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() =>
    document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
  );

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#18181b' : '#f4f1ea');
  }, [theme]);

  const toggle = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    try {
      localStorage.setItem('theme', next);
    } catch {
      // Storage blocked (private mode): the choice just won't persist
    }
  };

  return { theme, toggle };
};

const NAV = [
  { label: 'Research', id: 'research' },
  { label: 'Experience', id: 'experience' },
  { label: 'Education', id: 'education' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

const SOCIALS = [
  { label: 'Email', href: `mailto:${SOCIAL_LINKS.email}` },
  { label: 'LinkedIn', href: SOCIAL_LINKS.linkedin },
];

const initials = HERO_DATA.name
  .split(' ')
  .filter((_, i, parts) => i === 0 || i === parts.length - 1)
  .map((part) => part[0])
  .join('');

const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();

  const scrollTo = (id: string) => {
    // Unlock page scroll before navigating; the menu's effect cleanup runs too late for scrollIntoView
    document.body.style.overflow = '';
    setOpen(false);
    if (id === 'top') window.scrollTo({ top: 0, behavior: 'smooth' });
    else document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const linkClass = 'text-sm text-muted hover:text-ink transition-colors';

  // Phone menu: slides in from the right over a blurred page; Esc or a tap outside closes it
  const burgerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const wasOpen = useRef(false);

  useEffect(() => {
    if (!open) {
      // Hand focus back to the burger only when the menu was actually open
      if (wasOpen.current) burgerRef.current?.focus();
      wasOpen.current = false;
      return;
    }
    wasOpen.current = true;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const themeButton = <ThemeToggle dark={theme === 'dark'} onToggle={toggle} />;

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-rule bg-bar/90 backdrop-blur-md transition-colors">
        <div className={`${CONTAINER} flex h-16 items-center justify-between`}>
          <button
            onClick={() => scrollTo('top')}
            aria-label={`${HERO_DATA.name}, back to top`}
            title={HERO_DATA.name}
            className="flex items-center gap-2.5"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent font-serif text-[15px] text-paper">
              {initials}
            </span>
            <span className="hidden font-serif text-lg tracking-tight text-ink sm:inline">Hemalka</span>
          </button>

          <nav className="hidden items-center gap-7 md:flex" aria-label="Main">
            {NAV.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className={linkClass}>
                {item.label}
              </button>
            ))}
            {SOCIAL_LINKS.resume && (
              <a
                href={SOCIAL_LINKS.resume}
                download
                className="rounded-full border border-ink/80 px-4 py-1.5 text-sm font-medium text-ink hover:bg-ink hover:text-paper transition-colors"
              >
                CV
              </a>
            )}
            {themeButton}
          </nav>

          <div className="flex items-center gap-2 md:hidden">
            {themeButton}
            <button
              ref={burgerRef}
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              aria-expanded={open}
              aria-controls="mobile-menu"
              className="-mr-2 p-2 text-ink"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {/* Outside <header>: its backdrop-blur would otherwise trap these fixed layers inside the bar */}
      <div
        onClick={() => setOpen(false)}
        aria-hidden="true"
        className={`fixed inset-0 z-50 bg-black/30 backdrop-blur-md transition-[opacity,visibility] duration-300 md:hidden ${
          open ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
      />
      <nav
        id="mobile-menu"
        aria-label="Mobile"
        className={`fixed inset-y-0 right-0 z-50 flex w-[82%] max-w-sm flex-col border-l border-rule bg-paper shadow-2xl transition-[transform,visibility] duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] md:hidden ${
          open ? 'visible translate-x-0' : 'invisible translate-x-full'
        }`}
      >
        <div className="flex h-16 flex-shrink-0 items-center justify-between border-b border-rule bg-bar px-5">
          <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-faint">Menu</span>
          <button ref={closeRef} onClick={() => setOpen(false)} aria-label="Close menu" className="-mr-2 rounded-full p-2 text-ink hover:bg-wash">
            <X size={22} />
          </button>
        </div>

        <ul className="flex-1 overflow-y-auto px-5 py-4">
          {NAV.map((item, i) => (
            <li
              key={item.id}
              className={`transition-[opacity,transform] duration-500 ${open ? 'translate-x-0 opacity-100' : 'translate-x-6 opacity-0'}`}
              style={{ transitionDelay: open ? `${80 + i * 45}ms` : '0ms' }}
            >
              <button
                onClick={() => scrollTo(item.id)}
                className="group flex w-full items-baseline gap-4 border-b border-rule py-4 text-left"
              >
                <span className="font-mono text-[11px] text-faint">{String(i + 1).padStart(2, '0')}</span>
                <span className="font-serif text-[1.65rem] leading-none tracking-tight text-ink transition-colors group-hover:text-accent">
                  {item.label}
                </span>
              </button>
            </li>
          ))}
        </ul>

        <div className="flex-shrink-0 space-y-5 border-t border-rule px-5 py-6">
          {SOCIAL_LINKS.resume && (
            <a
              href={SOCIAL_LINKS.resume}
              download
              className="flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper hover:bg-accent transition-colors"
            >
              <Download size={16} /> Download CV
            </a>
          )}
          <div className="flex items-center justify-center gap-6">
            {SOCIALS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noreferrer"
                className="inline-flex items-center gap-0.5 text-sm font-medium text-muted hover:text-ink"
              >
                {link.label} <ArrowUpRight size={13} />
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
