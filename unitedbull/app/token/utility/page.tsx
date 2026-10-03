import Link from 'next/link';
import PageHero from '@/components/PageHero';
import { TOKEN } from '@/lib/token';

const LIVE = [
  {
    title: 'Transferable asset',
    body: 'BULL trades freely on Solana with no buy or sell tax and no transfer restrictions.',
    items: [
      'No tax on any transaction',
      'No blacklist or transfer limits',
      'Standard SPL token',
      'Fixed supply — no mint authority',
    ],
  },
  {
    title: 'Charity funding',
    body: 'A share of creator fees is directed to charitable giving through Pump.fun\'s infrastructure.',
    items: [
      `${TOKEN.charityAllocation} of creator fees`,
      'Enforced on Pump.fun\'s side',
      'Recipients published as they\'re set',
      'Independent of token price',
    ],
  },
];

const PLANNED = [
  {
    title: 'Access to growth services',
    body: 'Projects holding BULL may get priority access or reduced rates on BULL ecosystem services.',
    items: [
      'Priority submission review',
      'Reduced service fees',
      'Earlier access to new tools',
      'Not yet live — design stage',
    ],
  },
  {
    title: 'Radar visibility',
    body: 'Holders could get enhanced access to the Project Radar — deeper data, alerts, and filters.',
    items: [
      'Advanced filtering',
      'Launch alerts',
      'Deeper project data',
      'Not yet live — depends on Radar shipping',
    ],
  },
  {
    title: 'Community governance',
    body: 'A voice in which projects get featured, which partners get onboarded, and where charity funds go.',
    items: [
      'Voting on featured projects',
      'Charity recipient votes',
      'Partner approval',
      'Not yet live — requires tooling',
    ],
  },
];

export default function UtilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Token / Utility"
        title={<>What <b>BULL</b> actually does</>}
        lead="Most token utility pages describe things that don't exist yet as if they do. This one separates what's live from what's planned, and says plainly which is which."
        trail={[{ label: 'Token', href: '/token' }, { label: 'Utility' }]}
      />

      <section className="sect">
        <div className="wrap">
          <div className="sect-head">
            <div className="kicker">Live now</div>
            <h2>What the token does today</h2>
            <p>
              Short list. We&apos;d rather it be accurate than impressive.
            </p>
          </div>

          <div className="svcs cols-2">
            {LIVE.map(u => (
              <article key={u.title} className="svc">
                <h4>{u.title}</h4>
                <p>{u.body}</p>
                <ul>{u.items.map(i => <li key={i}>{i}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sect sect-alt">
        <div className="wrap">
          <div className="sect-head">
            <div className="kicker">Planned</div>
            <h2>What we&apos;re working toward</h2>
            <p>
              None of this is live. Some of it depends on the Radar shipping first. Treat everything
              below as direction, not as a feature you can use today.
            </p>
          </div>

          <div className="svcs">
            {PLANNED.map(u => (
              <article key={u.title} className="svc">
                <div style={{
                  fontFamily: 'var(--font-rajdhani), sans-serif',
                  fontSize: 11,
                  letterSpacing: 2,
                  textTransform: 'uppercase',
                  color: '#7f918d',
                  marginBottom: 12,
                }}>
                  Planned
                </div>
                <h4>{u.title}</h4>
                <p>{u.body}</p>
                <ul>{u.items.map(i => <li key={i}>{i}</li>)}</ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sect">
        <div className="wrap">
          <div className="sect-head">
            <div className="kicker">Straight answer</div>
            <h2>What the token isn&apos;t</h2>
            <p>
              BULL isn&apos;t a share in the business. Holding it doesn&apos;t entitle you to
              revenue, profit, or any claim on BULL&apos;s operations. It doesn&apos;t represent
              equity in anything. It&apos;s a token whose value depends entirely on whether other
              people want to buy it.
            </p>
            <p>
              If you&apos;re looking for a token with a contractual claim on cash flows, this
              isn&apos;t that and never will be.
            </p>
          </div>

          <div className="warn">
            <h4>No price promises</h4>
            <p>
              Nothing on this site — including the roadmap, the utility plans, or any partnership
              announcement — should be read as a price prediction. Utility doesn&apos;t guarantee
              demand, and demand doesn&apos;t guarantee price.
            </p>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="band-in">
            <h3>Seen enough?</h3>
            <p>Next step is either buying, or checking the full tokenomics.</p>
            <div className="cta">
              <Link className="btn fill" href="/token/buy">How to buy BULL →</Link>
              <Link className="btn dark" href="/token">Full tokenomics</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
