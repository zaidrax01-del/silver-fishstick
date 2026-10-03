import Link from 'next/link';
import PageHero from '@/components/PageHero';

const MODELS = [
  {
    title: 'Project Partnerships',
    tag: 'For token teams',
    body: 'For teams who need marketing, development, or launch support and want a partner who understands the timeline pressure of a token launch.',
    items: [
      'Scoped service engagements',
      'Launch-window support',
      'Radar listing and visibility',
      'Ongoing growth support',
    ],
  },
  {
    title: 'Community & KOL Partnerships',
    tag: 'For creators and communities',
    body: 'For community leaders, KOLs, and channels who want access to a steady stream of projects that fit their audience.',
    items: [
      'Access to project pipeline',
      'Coordinated campaign work',
      'Cross-promotion opportunities',
      'Long-term collaboration',
    ],
  },
  {
    title: 'Strategic Partnerships',
    tag: 'For platforms and infra',
    body: 'For DEXes, tools, and infrastructure providers whose services complement what BULL offers its projects.',
    items: [
      'Integration discussions',
      'Joint ecosystem initiatives',
      'Co-marketing and events',
      'Referral arrangements',
    ],
  },
];

export default function PartnershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="Ecosystem / Partnerships"
        title={<>Work with <b>BULL</b></>}
        lead="Three ways to partner, depending on what you bring. Every arrangement is scoped individually — no fixed tiers, no one-size contracts."
        trail={[{ label: 'Ecosystem', href: '/ecosystem' }, { label: 'Partnerships' }]}
      />

      <section className="sect">
        <div className="wrap">
          <div className="svcs">
            {MODELS.map(m => (
              <article key={m.title} className="svc">
                <h4>{m.title}</h4>
                <div style={{
                  fontFamily: 'var(--font-rajdhani), sans-serif',
                  fontSize: 11,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  color: '#7f918d',
                  marginBottom: 14,
                }}>
                  {m.tag}
                </div>
                <p>{m.body}</p>
                <ul>
                  {m.items.map(i => <li key={i}>{i}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sect sect-alt">
        <div className="wrap">
          <div className="sect-head">
            <div className="kicker">What we look for</div>
            <h2>Not every project is a fit</h2>
            <p>
              We&apos;d rather turn down a partnership than take one we can&apos;t deliver on. Before
              agreeing to anything we look at the team, the token structure, and whether there&apos;s
              a real community behind it.
            </p>
          </div>

          <div className="steps" style={{ gridTemplateColumns: 'repeat(3, 1fr)' }}>
            <div className="step">
              <h4>Real team</h4>
              <p>Identifiable people with a track record, not an anonymous deployer.</p>
            </div>
            <div className="step">
              <h4>Sound tokenomics</h4>
              <p>A structure that doesn&apos;t rely on new buyers to pay earlier ones.</p>
            </div>
            <div className="step">
              <h4>Active community</h4>
              <p>Holders who show up when nothing is being given away.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="band-in">
            <h3>Think there&apos;s a fit?</h3>
            <p>Tell us who you are and what you&apos;re building. We&apos;ll reply either way.</p>
            <div className="cta">
              <Link className="btn fill" href="/contact/partner">Partner with BULL →</Link>
              <Link className="btn dark" href="/ecosystem/services">See our services</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
