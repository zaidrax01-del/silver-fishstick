import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ContactForm, { type FormField } from '@/components/ContactForm';

const FIELDS: FormField[] = [
  { name: 'name',  label: 'Your name',  required: true, placeholder: 'Jane Doe' },
  { name: 'org',   label: 'Organisation', placeholder: 'Company, community, or channel name' },
  { name: 'email', label: 'Email',      required: true, type: 'email', placeholder: 'you@example.com' },
  {
    name: 'type',
    label: 'Partnership type',
    required: true,
    type: 'select',
    options: [
      'Project partnership — I run a token team',
      'Community / KOL partnership',
      'Strategic partnership — platform or infra',
      'Not sure yet',
    ],
  },
  { name: 'x',        label: 'X profile',       type: 'url', placeholder: 'https://x.com/' },
  { name: 'telegram', label: 'Telegram handle', placeholder: '@yourhandle' },
  { name: 'audience', label: 'Audience size',   placeholder: 'Approximate reach, if you have one' },
  {
    name: 'details',
    label: 'What are you proposing',
    required: true,
    type: 'textarea',
    placeholder: 'What you bring, what you\'re looking for, and what a good outcome looks like for you.',
  },
];

export default function PartnerPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact / Partner With BULL"
        title={<>Partner with <b>BULL</b></>}
        lead="Three kinds of partnership, depending on what you bring. Every arrangement is scoped individually."
        trail={[{ label: 'Contact', href: '/contact' }, { label: 'Partner With BULL' }]}
      />

      <section className="sect">
        <div className="wrap">
          <div className="contact-grid">
            <ContactForm
              fields={FIELDS}
              subject="BULL — Partnership enquiry"
              submitLabel="Send proposal →"
              note="We read every proposal. If there's no fit right now, we'll say so rather than leave you waiting."
            />

            <aside className="side">
              <div className="side-block">
                <h4>Project partnerships</h4>
                <p>
                  For token teams who need marketing, development, or launch support and want a
                  partner who understands launch-window pressure.
                </p>
              </div>

              <div className="side-block">
                <h4>Community &amp; KOL</h4>
                <p>
                  For community leaders and creators who want access to a steady stream of projects
                  that fit their audience, plus coordinated campaign work.
                </p>
              </div>

              <div className="side-block">
                <h4>Strategic</h4>
                <p>
                  For DEXes, tools, and infrastructure providers whose services complement what
                  BULL offers its projects.
                </p>
                <p style={{ marginTop: 14 }}>
                  <Link href="/ecosystem/partnerships" style={{ color: 'var(--g)' }}>
                    Full breakdown →
                  </Link>
                </p>
              </div>

              <div className="side-block">
                <h4>What we won&apos;t do</h4>
                <p>
                  Paid promotion dressed up as a partnership. If the only thing you&apos;re
                  offering is a shoutout, that&apos;s an ad — and we don&apos;t run those.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="band-in">
            <h3>Running a token project instead?</h3>
            <p>Submissions go through a different form with different questions.</p>
            <div className="cta">
              <Link className="btn fill" href="/contact/submit">Submit your project →</Link>
              <Link className="btn dark" href="/contact">General contact</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
