import Link from 'next/link';
import PageHero from '@/components/PageHero';

const PILLARS = [
  {
    title: 'Discovery',
    body: 'A place where users find projects based on data and track record, not who paid for the loudest banner.',
    items: [
      'Project Radar dashboard',
      'Trending and new launch feeds',
      'Verified project review',
      'Filterable by real metrics',
    ],
  },
  {
    title: 'Growth Services',
    body: 'The practical work a project needs in its first year — marketing, development, and community.',
    items: [
      'Token marketing campaigns',
      'Web and dashboard builds',
      'Community engagement programmes',
      'Launch and promotion support',
    ],
  },
  {
    title: 'Connection',
    body: 'A network effect. Every project that joins makes the next one more likely to find the right partner.',
    items: [
      'Cross-project collaborations',
      'KOL and community partnerships',
      'Ecosystem introductions',
      'Joint campaigns and events',
    ],
  },
];

export default function VisionPage() {
  return (
    <>
      <PageHero
        eyebrow="About / Our Vision"
        title={<>A growth network, <b>not a launchpad</b></>}
        lead="BULL isn't trying to be another place to launch a token. It's trying to be the layer between a project and the audience it deserves."
        trail={[{ label: 'About', href: '/about' }, { label: 'Our Vision' }]}
      />

      <section className="sect">
        <div className="wrap">
          <div className="sect-head">
            <div className="kicker">The idea</div>
            <h2>What &quot;Web3 growth network&quot; means</h2>
            <p>
              Launchpads solve one problem: getting a token into existence. That&apos;s the easy
              part. The hard part starts the day after — finding users, keeping them, and building
              something that outlasts the first week.
            </p>
            <p>
              A growth network solves the second problem. It connects projects to the services,
              partners, and exposure they need, and it gets more useful as more projects join.
            </p>
          </div>

          <div className="svcs">
            {PILLARS.map(p => (
              <article key={p.title} className="svc">
                <h4>{p.title}</h4>
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
            <div className="kicker">What success looks like</div>
            <h2>How we&apos;ll know it&apos;s working</h2>
            <p>
              Not by token price. By whether projects that came to BULL are still building a year
              later, and whether they&apos;d recommend it to another team.
            </p>
          </div>

          <div className="steps cols-3">
            <div className="step">
              <h4>Projects stay</h4>
              <p>Teams that join keep building here instead of moving on after one campaign.</p>
            </div>
            <div className="step">
              <h4>Users return</h4>
              <p>People come back to the Radar to find projects — not because they were pushed a link.</p>
            </div>
            <div className="step">
              <h4>Partners refer</h4>
              <p>Other platforms send teams our way because the work held up.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="sect">
        <div className="wrap">
          <div className="sect-head">
            <div className="kicker">Honest limits</div>
            <h2>What we can&apos;t do</h2>
          </div>

          <div className="svcs cols-2">
            <article className="svc">
              <h4>We can&apos;t make a project good</h4>
              <p>
                Marketing amplifies what&apos;s already there. If the product is weak or the team
                won&apos;t show up, no amount of exposure fixes that — it just makes the problem
                more visible.
              </p>
            </article>
            <article className="svc">
              <h4>We can&apos;t control price</h4>
              <p>
                Nothing in a growth network moves markets. Anyone claiming otherwise is describing
                market manipulation, and we&apos;re not interested in that business.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="band-in">
            <h3>See where we are now</h3>
            <p>The roadmap lays out the phases we&apos;re working through.</p>
            <div className="cta">
              <Link className="btn fill" href="/about/roadmap">View roadmap →</Link>
              <Link className="btn dark" href="/ecosystem">Explore the ecosystem</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
