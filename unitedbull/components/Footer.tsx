import Link from 'next/link';

const SOCIALS = [
  { label: 'X',        href: 'https://x.com/',       icon: 'x' },
  { label: 'Telegram', href: 'https://t.me/',        icon: 'tg' },
  { label: 'Discord',  href: 'https://discord.com/', icon: 'dc' },
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-left">
          <div className="soc">
            {SOCIALS.map(s => (
              <a key={s.label} href={s.href} aria-label={s.label}
                 target="_blank" rel="noreferrer">
                <svg aria-hidden="true"><use href={`#${s.icon}`} /></svg>
              </a>
            ))}
          </div>
          <Link className="foot-events" href="/community/events">Events</Link>
        </div>
        <p>
          BULL is a cryptocurrency project and does not guarantee profits, returns,
          liquidity, or token appreciation. Nothing here constitutes financial advice.
        </p>
      </div>
    </footer>
  );
}
