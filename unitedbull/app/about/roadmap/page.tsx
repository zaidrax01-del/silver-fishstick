import Link from 'next/link';
import PageHero from '@/components/PageHero';

const PHASES = [
  {
    label: 'Foundation',
    status: 'In progress',
    body: 'Establish the brand, the token, and the public presence. Get the site, community channels, and token live.',
    items: [
      'BULL token deployed',
      'Website and brand identity',
      'X and Telegram community',
      'Charity allocation configured',
    ],
  },
  {
    label: 'Ecosystem',
    status: 'Next',
    body: 'Open the service side. Start taking project submissions and running the first engagements.',
    items: [
      'Ecosystem pages live',
      'Submission and review process',
      'First project partnerships',
      'Service scoping and delivery',
    ],
  },
  {
    label: 'Radar',
    status: 'Planned',
    body: 'Ship the discovery layer. Live market data, project listings, and the feeds that make BULL useful to browse.',
    items: [
      'Radar dashboard',
      'New launches and trending feeds',
      'Verified project review',
      'Live market data integration',
    ],
  },
  {
    label: 'Scale',
    status: 'Planned',
    body: 'Grow the network. More projects, more partners, and the tooling to support both without losing quality.',
    items: [
      'Partner and KOL network',
      'Self-serve project tooling',
      'Expanded service offerings',
      'Community growth programmes',
    ],
  },
];

export default function RoadmapPage() {
  return (
    <>
      <PageHero
        eyebrow="About / Roadmap"
        title={<>Where we are, <b>and what&apos;s next</b></>}
        lead="Four phases. No dates, because we'd rather ship late than promise a timeline we can't control."
        trail={[{ label: 'About', href: '/about' }, { label: 'Roadmap' }]}
      />

      <section className="sect">
        <div className="wrap">
          <div className="sect-head">
            <div className="kicker">The plan</div>
            <h2>Four phases</h2>
            <p>
              Each phase has to be finished before the next one means anything. A Radar dashboard
              is useless without projects to list, and projects won&apos;t list without a reason
              to.
            </p>
          </div>

          <div className="svcs">
            {PHASES.map(p => (
              <article key={p.label} className="svc">
                <div style={{
                  fontFamily: 'var(--font-rajdhani), sans-serif',
                  fontSize: 11,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  color: p.status === 'In progress' ? 'var(--g)' : '#7f918d',
                  marginBottom: 12,
                }}>
                  {p.status}
                </div>
                <h4>{p.label}</h4>
                <p>{p.body}</p>
                <ul>
                  {p.items.map(i => <li key={i}>{i}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sect sect-alt">
        <div className="wrap">
          <div className="sect-head">
            <div className="kicker">How we work</div>
            <h2>Why there are no dates</h2>
            <p>
              Roadmaps with fixed dates in crypto are marketing. They get set to look ambitious,
              then quietly slip, then get replaced with a new roadmap. We&apos;d rather tell you
              the order things happen in and update you when something actually ships.
            </p>
            <p>
              Phase status changes here when it changes in reality — not on a schedule.
            </p>
          </div>

          <div className="steps cols-2">
            <div className="step">
              <h4>Ship, then announce</h4>
              <p>Features go on the roadmap as done when they&apos;re live, not when they&apos;re planned.</p>
            </div>
            <div className="step">
              <h4>Update in public</h4>
              <p>Progress and setbacks both get posted to the community channels.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="band-in">
            <h3>Want to be part of a phase?</h3>
            <p>Projects and partners can join at any point in the roadmap.</p>
            <div className="cta">
              <Link className="btn fill" href="/contact/submit">Submit your project →</Link>
              <Link className="btn dark" href="/about/vision">Read our vision</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
