import Link from 'next/link';
import PageHero from '@/components/PageHero';

/**
 * Add real team members here. The grid below renders nothing until this
 * array has entries — no placeholder cards ship to production.
 *
 * image: put files in /public/team/ and reference them as '/team/name.jpg'
 */
type Member = {
  name: string;
  role: string;
  bio: string;
  image?: string;
  link?: string;
};

const TEAM: Member[] = [
  // {
  //   name: 'Full Name',
  //   role: 'Founder',
  //   bio: 'One or two sentences on background and what they do at BULL.',
  //   image: '/team/name.jpg',
  //   link: 'https://x.com/handle',
  // },
];

const PRINCIPLES = [
  {
    title: 'Accountable, not anonymous',
    body: 'Whoever is on this page is putting their name and reputation behind BULL. If we can\'t do that for a role, we don\'t list it.',
  },
  {
    title: 'Small and senior',
    body: 'A tight team of people who have shipped before beats a large team of people learning on your project.',
  },
  {
    title: 'Contributors over titles',
    body: 'Work gets credited to whoever did it. We don\'t hand out advisor titles for promotion.',
  },
];

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="About / Team"
        title={<>Who&apos;s behind <b>BULL</b></>}
        lead="The people building and running BULL, and the principles we hold ourselves to."
        trail={[{ label: 'About', href: '/about' }, { label: 'Team' }]}
      />

      {TEAM.length > 0 ? (
        <section className="sect">
          <div className="wrap">
            <div className="sect-head">
              <div className="kicker">The team</div>
              <h2>People behind the project</h2>
            </div>

            <div className="svcs">
              {TEAM.map(m => (
                <article key={m.name} className="svc">
                  <h4>{m.name}</h4>
                  <div style={{
                    fontFamily: 'var(--font-rajdhani), sans-serif',
                    fontSize: 11,
                    letterSpacing: 2,
                    textTransform: 'uppercase',
                    color: '#7f918d',
                    marginBottom: 12,
                  }}>
                    {m.role}
                  </div>
                  <p>{m.bio}</p>
                  {m.link && (
                    <ul>
                      <li><a href={m.link} target="_blank" rel="noreferrer">Profile →</a></li>
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="sect">
          <div className="wrap">
            <div className="sect-head">
              <div className="kicker">The team</div>
              <h2>Profiles coming soon</h2>
              <p>
                We&apos;re not going to list names until the people behind them are ready to be
                public with it. When that happens, they&apos;ll appear here with a real background
                and a way to verify it.
              </p>
              <p>
                In the meantime, the principles below are how we operate — and you can hold us to
                them.
              </p>
            </div>
          </div>
        </section>
      )}

      <section className="sect sect-alt">
        <div className="wrap">
          <div className="sect-head">
            <div className="kicker">How we operate</div>
            <h2>Three things we hold to</h2>
          </div>

          <div className="svcs">
            {PRINCIPLES.map(p => (
              <article key={p.title} className="svc">
                <h4>{p.title}</h4>
                <p>{p.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="sect">
        <div className="wrap">
          <div className="sect-head">
            <div className="kicker">Working with us</div>
            <h2>Roles and contributions</h2>
            <p>
              We bring in contributors for specific work rather than hiring broadly. If you build,
              market, or run communities in crypto and want to work on something with a longer
              horizon than a single launch, get in touch.
            </p>
          </div>

          <div className="steps cols-2">
            <div className="step">
              <h4>Contributors</h4>
              <p>Scoped work on campaigns, builds, or community programmes. Paid per engagement.</p>
            </div>
            <div className="step">
              <h4>Partners</h4>
              <p>Longer-term arrangements with teams whose work complements what BULL offers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="band-in">
            <h3>Want to work with BULL?</h3>
            <p>Tell us what you do and what you&apos;re looking for.</p>
            <div className="cta">
              <Link className="btn fill" href="/contact">Get in touch →</Link>
              <Link className="btn dark" href="/about/vision">Read our vision</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
