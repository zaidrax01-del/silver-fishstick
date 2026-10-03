import Link from 'next/link';

type Col = { title: string; links: { label: string; href: string; external?: boolean }[] };

const COLUMNS: Col[] = [
  {
    title: 'Ecosystem',
    links: [
      { label: 'Services',     href: '/ecosystem/services' },
      { label: 'Partnerships', href: '/ecosystem/partnerships' },
      { label: 'How It Works', href: '/ecosystem/how-it-works' },
    ],
  },
  {
    title: 'Project Radar',
    links: [
      { label: 'Radar Dashboard',   href: '/radar' },
      { label: 'New Launches',      href: '/radar/new' },
      { label: 'Trending',          href: '/radar/trending' },
      { label: 'Top Gainers',       href: '/radar/gainers' },
      { label: 'Verified Projects', href: '/radar/verified' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About BULL', href: '/about' },
      { label: 'Our Vision', href: '/about/vision' },
      { label: 'Roadmap',    href: '/about/roadmap' },
      { label: 'Team',       href: '/about/team' },
      { label: 'Contact Us', href: '/contact' },
    ],
  },
  {
    title: 'Token',
    links: [
      { label: 'Tokenomics',     href: '/token' },
      { label: 'Token Utility',  href: '/token/utility' },
      { label: 'Contract / Buy', href: '/token/buy' },
    ],
  },
  {
    title: 'Community',
    links: [
      { label: 'X',        href: 'https://x.com/',         external: true },
      { label: 'Telegram', href: 'https://t.me/',          external: true },
      { label: 'Discord',  href: 'https://discord.com/',   external: true },
      { label: 'Events',   href: '/community/events' },
    ],
  },
];

const SOCIALS = [
  { label: 'X',        href: 'https://x.com/',       icon: 'x' },
  { label: 'Telegram', href: 'https://t.me/',        icon: 'tg' },
  { label: 'Discord',  href: 'https://discord.com/', icon: 'dc' },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="foot-main">
          <div className="foot-brand">
            <Link className="logo" href="/">
              <svg aria-hidden="true"><use href="#head" /></svg>
              UNITED<b>BULL</b>
            </Link>
            <p>
              A Web3 growth network helping promising crypto projects launch, market,
              and connect.
            </p>
            <div className="foot-social">
              {SOCIALS.map(s => (
                <a key={s.label} href={s.href} aria-label={s.label}
                   target="_blank" rel="noreferrer">
                  <svg aria-hidden="true"><use href={`#${s.icon}`} /></svg>
                </a>
              ))}
            </div>
          </div>

          {COLUMNS.map(col => (
            <div key={col.title} className="foot-col">
              <h5>{col.title}</h5>
              <ul>
                {col.links.map(l => (
                  <li key={l.href}>
                    {l.external ? (
                      <a href={l.href} target="_blank" rel="noreferrer">{l.label}</a>
                    ) : (
                      <Link href={l.href}>{l.label}</Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="foot-bar">
          <p>
            BULL is a cryptocurrency project and does not guarantee profits, returns,
            liquidity, or token appreciation. Nothing here constitutes financial advice.
          </p>
          <p className="foot-copy">© {new Date().getFullYear()} UnitedBull</p>
        </div>
      </div>
    </footer>
  );
}
