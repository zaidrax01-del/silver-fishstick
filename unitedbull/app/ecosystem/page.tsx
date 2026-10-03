import Link from 'next/link';
import PageHero from '@/components/PageHero';

const SERVICES = [
  {
    title: 'Token Marketing',
    body: 'Campaign strategy and social rollouts built around your launch window, not a generic template.',
    icon: <path d="M3 10v4h4l7 4V6L7 10zM18 9a4 4 0 0 1 0 6" />,
  },
  {
    title: 'Web Development',
    body: 'Landing pages, dashboards, and token sites that load fast and actually convert visitors.',
    icon: <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 5l-4 14" />,
  },
  {
    title: 'Growth & Engagement',
    body: 'Community management and engagement programmes that keep holders active past week one.',
    icon: <path d="M4 20V14M10 20V9M16 20v-6M22 20V4M3 20h19" />,
  },
  {
    title: 'Token Partnerships',
    body: 'Introductions and cross-project collaborations with teams already in the network.',
    icon: <path d="m3 12 5-4 4 2 5-3 4 4-6 8-4-1-4 1zM8 8l5 6" />,
  },
  {
    title: 'Launch & Promotion',
    body: 'End-to-end support through launch — sequencing, visibility pushes, and post-launch momentum.',
    icon: <path d="M5 19c0-4 3-9 14-14 0 11-5 14-9 14zM9 15l-5 1 3-5M13 19l-1 5 5-3" />,
  },
  {
    title: 'Project Radar Listing',
    body: 'Get your token in front of BULL users through the Radar dashboard and discovery feeds.',
    icon: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3.5" /><path d="M12 12l7-4" /></>,
  },
];

const STEPS = [
  { t: 'Connect',   d: 'Submit your project through the contact form with your token details and goals.' },
  { t: 'Review',    d: 'We look at fit, tokenomics, and community health before anything is agreed.' },
  { t: 'Build',     d: 'Pick the services you need. Scope and timeline get set before work starts.' },
  { t: 'Grow',      d: 'Launch, promote, and track visibility through the Radar and partner network.' },
];

export default function EcosystemPage() {
  return (
    <>
      <PageHero
        eyebrow="The BULL Ecosystem"
        title={<>Everything a project needs to <b>launch, grow, and get seen</b></>}
        lead="BULL connects promising Web3 projects with the marketing, development, and partnerships they need to find an audience — and gives them a place to be discovered."
        trail={[{ label: 'Ecosystem' }]}
      />

      <section className="sect">
        <div className="wrap">
          <div className="sect-head">
            <div className="kicker">What we do</div>
            <h2>Six ways BULL supports a project</h2>
            <p>Each service works on its own. Most teams start with one and add as they grow.</p>
          </div>

          <div className="svcs">
            {SERVICES.map(s => (
              <article key={s.title} className="svc">
                <i><svg viewBox="0 0 24 24">{s.icon}</svg></i>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </article>
            ))}
          </div>

          <div className="cta" style={{ marginTop: 32 }}>
            <Link className="btn dark" href="/ecosystem/services">See all services →</Link>
          </div>
        </div>
      </section>

      <section className="sect sect-alt">
        <div className="wrap">
          <div className="sect-head">
            <div className="kicker">How it works</div>
            <h2>Four steps from submission to launch</h2>
            <p>No long onboarding. No retainer before you know what you&apos;re getting.</p>
          </div>

          <div className="steps">
            {STEPS.map(s => (
              <div key={s.t} className="step">
                <h4>{s.t}</h4>
                <p>{s.d}</p>
              </div>
            ))}
          </div>

          <div className="cta" style={{ marginTop: 32 }}>
            <Link className="btn dark" href="/ecosystem/how-it-works">Full breakdown →</Link>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="band-in">
            <h3>Ready to build with BULL?</h3>
            <p>Tell us what you&apos;re working on. We&apos;ll tell you honestly whether we can help.</p>
            <div className="cta">
              <Link className="btn fill" href="/contact/submit">Submit your project →</Link>
              <Link className="btn dark" href="/ecosystem/partnerships">Partnership options</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
