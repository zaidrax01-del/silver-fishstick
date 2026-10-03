import Link from 'next/link';
import PageHero from '@/components/PageHero';

const SERVICES = [
  {
    title: 'Token Marketing',
    body: 'A rollout plan built around your launch date — not a checklist applied to every project.',
    items: [
      'Campaign strategy and messaging',
      'Social rollouts across X and Telegram',
      'KOL and influencer coordination',
      'Content calendar and asset support',
    ],
    icon: <path d="M3 10v4h4l7 4V6L7 10zM18 9a4 4 0 0 1 0 6" />,
  },
  {
    title: 'Web Development',
    body: 'Fast, clean pages that hold up under launch-day traffic and tell visitors what to do next.',
    items: [
      'Landing pages and token sites',
      'Dashboards and data views',
      'Mobile-first responsive builds',
      'Performance and SEO basics',
    ],
    icon: <path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 5l-4 14" />,
  },
  {
    title: 'Growth & Engagement',
    body: 'The work that keeps a community alive after the first spike fades.',
    items: [
      'Community management support',
      'Engagement programmes and events',
      'Raid and activity coordination',
      'Basic analytics and reporting',
    ],
    icon: <path d="M4 20V14M10 20V9M16 20v-6M22 20V4M3 20h19" />,
  },
  {
    title: 'Token Partnerships',
    body: 'Warm introductions to teams in the network who are looking for the same thing you are.',
    items: [
      'Cross-project collaborations',
      'Joint campaigns and AMAs',
      'Ecosystem introductions',
      'Co-marketing opportunities',
    ],
    icon: <path d="m3 12 5-4 4 2 5-3 4 4-6 8-4-1-4 1zM8 8l5 6" />,
  },
  {
    title: 'Launch & Promotion',
    body: 'Support through the window where visibility matters most.',
    items: [
      'Launch sequencing and timing',
      'Pre-launch visibility pushes',
      'Post-launch momentum support',
      'Listing and discovery coordination',
    ],
    icon: <path d="M5 19c0-4 3-9 14-14 0 11-5 14-9 14zM9 15l-5 1 3-5M13 19l-1 5 5-3" />,
  },
  {
    title: 'Project Radar Listing',
    body: 'Appear in the discovery feeds BULL users actually browse.',
    items: [
      'Listing in the Radar dashboard',
      'Eligibility for trending surfaces',
      'Verified project review',
      'Ongoing visibility as you grow',
    ],
    icon: <><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="3.5" /><path d="M12 12l7-4" /></>,
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Ecosystem / Services"
        title={<>What BULL <b>actually does</b></>}
        lead="Six services, each standalone. Take one or take all six — scoped and priced before any work begins."
        trail={[{ label: 'Ecosystem', href: '/ecosystem' }, { label: 'Services' }]}
      />

      <section className="sect">
        <div className="wrap">
          <div className="svcs">
            {SERVICES.map(s => (
              <article key={s.title} className="svc">
                <i><svg viewBox="0 0 24 24">{s.icon}</svg></i>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
                <ul>
                  {s.items.map(i => <li key={i}>{i}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="band-in">
            <h3>Not sure which one you need?</h3>
            <p>Send us your project. We&apos;ll tell you what we&apos;d prioritise and what we&apos;d skip.</p>
            <div className="cta">
              <Link className="btn fill" href="/contact/submit">Submit your project →</Link>
              <Link className="btn dark" href="/ecosystem/how-it-works">How it works</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
