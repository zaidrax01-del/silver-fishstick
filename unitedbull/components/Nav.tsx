'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

type Item  = { label: string; href: string };
type Entry = { label: string; href?: string; items?: Item[] };

const NAV: Entry[] = [
  { label: 'Home', href: '/' },
  {
    label: 'Ecosystem',
    items: [
      { label: 'Services',     href: '/ecosystem/services' },
      { label: 'Partnerships', href: '/ecosystem/partnerships' },
      { label: 'How It Works', href: '/ecosystem/how-it-works' },
    ],
  },
  {
    label: 'Project Radar',
    items: [
      { label: 'Radar Dashboard',   href: '/radar' },
      { label: 'New Launches',      href: '/radar/new' },
      { label: 'Trending',          href: '/radar/trending' },
      { label: 'Top Gainers',       href: '/radar/gainers' },
      { label: 'Verified Projects', href: '/radar/verified' },
    ],
  },
  {
    label: 'About',
    items: [
      { label: 'Our Mission', href: '/#mission' },
      { label: 'Our Vision',  href: '/about/vision' },
      { label: 'Roadmap',     href: '/about/roadmap' },
      { label: 'Team',        href: '/about/team' },
    ],
  },
  {
    label: 'Token',
    items: [
      { label: 'Tokenomics',     href: '/#tokenomics' },
      { label: 'Token Utility',  href: '/token/utility' },
      { label: 'Contract / Buy', href: '/token/buy' },
    ],
  },
  {
    label: 'Community',
    items: [
      { label: 'X',        href: 'https://x.com/' },
      { label: 'Telegram', href: 'https://t.me/' },
      { label: 'Discord',  href: 'https://discord.com/' },
      { label: 'Events',   href: '/community/events' },
    ],
  },
  {
    label: 'Contact',
    items: [
      { label: 'Contact Us',          href: '/contact' },
      { label: 'Submit Your Project', href: '/contact/submit' },
      { label: 'Partner With BULL',   href: '/contact/partner' },
    ],
  },
];

const isMobile = () =>
  typeof window !== 'undefined' && window.matchMedia('(max-width:1080px)').matches;

export default function Nav() {
  const [panel, setPanel] = useState(false);      // mobile full-screen panel
  const [dd, setDd]       = useState<string | null>(null); // which accordion is open

  // lock body scroll while the mobile panel is open
  useEffect(() => {
    document.body.classList.toggle('navlock', panel);
    return () => document.body.classList.remove('navlock');
  }, [panel]);

  // Escape closes everything
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') { setPanel(false); setDd(null); }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  // resizing back to desktop closes the mobile UI
  useEffect(() => {
    const mq = window.matchMedia('(min-width:1081px)');
    const onChange = () => { if (mq.matches) { setPanel(false); setDd(null); } };
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const closeAll = () => { setPanel(false); setDd(null); };

  const onParentClick = (label: string) => {
    if (!isMobile()) return;                     // desktop uses :hover / :focus-within
    setDd(prev => (prev === label ? null : label));
  };

  return (
    <header>
      <div className="wrap">
        <Link className="logo" href="/">
          <svg aria-hidden="true"><use href="#head" /></svg>
          UNITED<b>BULL</b>
        </Link>

        <nav id="nav" aria-label="Main" className={panel ? 'open' : undefined}>
          <ul>
            {NAV.map(entry =>
              entry.items ? (
                <li key={entry.label} className={`dd${dd === entry.label ? ' open' : ''}`}>
                  <button
                    type="button"
                    className="navlink"
                    aria-haspopup="true"
                    aria-expanded={dd === entry.label}
                    onClick={() => onParentClick(entry.label)}
                  >
                    {entry.label}
                    <svg className="car" aria-hidden="true"><use href="#chev" /></svg>
                  </button>
                  <ul className="menu">
                    {entry.items.map(item => (
                      <li key={item.href}>
                        <Link href={item.href} onClick={closeAll}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </li>
              ) : (
                <li key={entry.label}>
                  <Link className="on" href={entry.href!} onClick={closeAll}>{entry.label}</Link>
                </li>
              )
            )}
          </ul>
        </nav>

        <Link className="btn" href="/join">Join BULL</Link>

        <button
          type="button"
          className="burger"
          aria-label={panel ? 'Close menu' : 'Open menu'}
          aria-expanded={panel}
          aria-controls="nav"
          onClick={() => { setPanel(p => !p); setDd(null); }}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  );
}
