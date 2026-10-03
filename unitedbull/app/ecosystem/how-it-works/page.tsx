import Link from 'next/link';
import PageHero from '@/components/PageHero';

const STEPS = [
  {
    t: 'Connect',
    d: 'Submit your project through the form. We ask for the token address, your goals, your timeline, and what you&apos;ve already tried.',
    detail: 'Takes about five minutes. No call required at this stage.',
  },
  {
    t: 'Review',
    d: 'We look at the token, the team, the community, and the competitive picture. If it&apos;s not a fit we tell you straight away.',
    detail: 'Usually within a few days. You&apos;ll get a real answer, not silence.',
  },
  {
    t: 'Build',
    d: 'If it is a fit, we scope the work. What services, what timeline, what it costs, and what success looks like.',
    detail: 'Everything agreed in writing before any work starts.',
  },
  {
    t: 'Grow',
    d: 'We run the work, report on it, and adjust as the data comes in. Visibility through the Radar continues after the engagement.',
    detail: 'Ongoing — not a one-off push that fades in a week.',
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <PageHero
        eyebrow="Ecosystem / How It Works"
        title={<>From submission to <b>launch</b></>}
        lead="Four steps. No retainer before you know what you're getting, and no vague deliverables."
        trail={[{ label: 'Ecosystem', href: '/ecosystem' }, { label: 'How It Works' }]}
      />

      <section className="sect">
        <div className="wrap">
          <div className="steps">
            {STEPS.map(s => (
              <div key={s.t} className="step">
                <h4>{s.t}</h4>
                <p dangerouslySetInnerHTML={{ __html: s.d }} />
                <p style={{
                  marginTop: 14,
                  paddingTop: 14,
                  borderTop: '1px solid #12201d',
                  color: '#7f918d',
                  fontSize: 12,
                }}>
                  {s.detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sect sect-alt">
        <div className="wrap">
          <div className="sect-head">
            <div className="kicker">What we don&apos;t do</div>
            <h2>Being clear about the limits</h2>
          </div>

          <div className="svcs" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <article className="svc">
              <h4>We don&apos;t guarantee price</h4>
              <p>
                No marketing service can. Anyone promising a price outcome is either lying or
                planning to manufacture volume. We won&apos;t do either.
              </p>
            </article>
            <article className="svc">
              <h4>We don&apos;t take payment in your token</h4>
              <p>
                It creates the wrong incentives and ties our work to a price we don&apos;t control.
                Engagements are priced and paid in stable terms.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="band-in">
            <h3>Start at step one</h3>
            <p>Submit your project and we&apos;ll take it from there.</p>
            <div className="cta">
              <Link className="btn fill" href="/contact/submit">Submit your project →</Link>
              <Link className="btn dark" href="/ecosystem">Back to ecosystem</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
