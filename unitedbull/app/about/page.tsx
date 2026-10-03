import Link from 'next/link';
import PageHero from '@/components/PageHero';

const VALUES = [
  {
    title: 'Say what we mean',
    body: 'If we can\'t deliver it, we don\'t promise it. No guaranteed returns, no "100x" language, no manufactured hype.',
    icon: <path d="M12 3v18M5 8h14M5 16h14" />,
  },
  {
    title: 'Build before we sell',
    body: 'The network has to exist before we ask anyone to trust it with their project. Tools first, talk second.',
    icon: <path d="M4 20V10M10 20V4M16 20v-8M22 20h-19" />,
  },
  {
    title: 'Filter, don\'t flood',
    body: 'A smaller list of projects we actually stand behind beats a long list of everything that asked.',
    icon: <path d="M3 5h18l-7 8v6l-4 2v-8z" />,
  },
];

const PAGES = [
  {
    href: '/about/vision',
    title: 'Our Vision',
    body: 'What a Web3 growth network actually means, and what we\'re trying to build toward.',
  },
  {
    href: '/about/roadmap',
    title: 'Roadmap',
    body: 'The phases we\'re working through, from foundation to a functioning discovery network.',
  },
  {
    href: '/about/team',
    title: 'Team',
    body: 'Who\'s behind BULL and how we operate — including what we\'re willing to put our names to.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title={<>Why <b>BULL</b> exists</>}
        lead="Most crypto projects launch with a token and no product, then spend their runway looking for a reason to exist. BULL started from the opposite direction — a problem worth solving, and a token that comes second."
        trail={[{ label: 'About' }]}
      />

      <section className="sect">
        <div className="wrap">
          <div className="sect-head">
            <div className="kicker">The problem</div>
            <h2>Good projects lose to louder ones</h2>
            <p>
              Every week, teams with working products and real communities get buried under tokens
              with better marketing and nothing behind them. The gap isn&apos;t quality — it&apos;s
              access. Access to marketing, to developers, to partners, to an audience.
            </p>
            <p>
              BULL is being built to close that gap. Not by picking winners, but by giving projects
              the tools to compete on their merits.
            </p>
          </div>
        </div>
      </section>

      <section className="sect sect-alt">
        <div className="wrap">
          <div className="sect-head">
            <div className="kicker">How we operate</div>
            <h2>Three principles</h2>
          </div>

          <div className="svcs">
            {VALUES.map(v => (
              <article key={v.title} className="svc">
                <i><svg viewBox="0 0 24 24">{v.icon}</svg></i>
                <h4>{v.title}</h4>
                <p>{v.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sect">
        <div className="wrap">
          <div className="sect-head">
            <div className="kicker">Go deeper</div>
            <h2>More about BULL</h2>
          </div>

          <div className="svcs">
            {PAGES.map(p => (
              <Link key={p.href} href={p.href} className="svc">
                <h4>{p.title}</h4>
                <p>{p.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="band-in">
            <h3>Building something worth backing?</h3>
            <p>Send it over. We read every submission and reply either way.</p>
            <div className="cta">
              <Link className="btn fill" href="/contact/submit">Submit your project →</Link>
              <Link className="btn dark" href="/ecosystem">Explore the ecosystem</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
