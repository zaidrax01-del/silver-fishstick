import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ContactForm, { type FormField } from '@/components/ContactForm';

const FIELDS: FormField[] = [
  { name: 'project',  label: 'Project name',  required: true, placeholder: 'What it\'s called' },
  { name: 'ticker',   label: 'Ticker',        required: true, placeholder: 'BULL' },
  {
    name: 'chain',
    label: 'Chain',
    required: true,
    type: 'select',
    options: ['Solana', 'Ethereum', 'Base', 'BNB Chain', 'Arbitrum', 'Other'],
  },
  {
    name: 'contract',
    label: 'Contract address',
    required: true,
    placeholder: 'Paste the token mint or contract',
    hint: 'We check this before anything else. A wrong address means the submission can\'t be reviewed.',
  },
  {
    name: 'stage',
    label: 'Current stage',
    required: true,
    type: 'select',
    options: ['Pre-launch', 'Just launched (under 30 days)', 'Launched, building traction', 'Established project'],
  },
  { name: 'email',    label: 'Contact email',   required: true, type: 'email', placeholder: 'you@example.com' },
  { name: 'telegram', label: 'Telegram handle', placeholder: '@yourhandle' },
  { name: 'website',  label: 'Website',         type: 'url',   placeholder: 'https://' },
  { name: 'x',        label: 'X profile',       type: 'url',   placeholder: 'https://x.com/' },
  {
    name: 'needs',
    label: 'What do you need help with',
    required: true,
    type: 'checks',
    options: [
      'Token marketing',
      'Web development',
      'Growth & engagement',
      'Token partnerships',
      'Launch support',
      'Radar listing',
    ],
    hint: 'Pick everything that applies — we\'ll tell you which ones we\'d actually prioritise.',
  },
  {
    name: 'about',
    label: 'Tell us about the project',
    required: true,
    type: 'textarea',
    placeholder: 'What it does, who\'s behind it, what you\'ve tried so far, and what success looks like for you.',
  },
];

const LOOK_FOR = [
  { t: 'A real team',       d: 'People willing to put their names to the project, with something they\'ve done before.' },
  { t: 'Sound tokenomics',  d: 'A structure that doesn\'t require new buyers to pay earlier ones.' },
  { t: 'An active community', d: 'Holders who show up when nothing is being given away.' },
  { t: 'A working product', d: 'Or at least a credible plan to get to one that isn\'t "after the token pumps".' },
];

export default function SubmitPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact / Submit Your Project"
        title={<>Submit your <b>project</b></>}
        lead="Tell us what you're building. We review every submission and reply either way — including when the answer is no."
        trail={[{ label: 'Contact', href: '/contact' }, { label: 'Submit Your Project' }]}
      />

      <section className="sect">
        <div className="wrap">
          <div className="contact-grid">
            <ContactForm
              fields={FIELDS}
              subject="BULL — Project submission"
              submitLabel="Submit project →"
              note="Everything you send is read by a person. We don't use it for anything other than reviewing your submission."
            />

            <aside className="side">
              <div className="side-block">
                <h4>What we look for</h4>
                <ul className="side-links">
                  {LOOK_FOR.map(l => (
                    <li key={l.t}>
                      <span style={{ color: 'var(--g)', fontSize: 13, display: 'block', marginBottom: 2 }}>{l.t}</span>
                      <span>{l.d}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="side-block">
                <h4>What happens next</h4>
                <p>
                  We review submissions weekly. If it&apos;s a fit, we&apos;ll come back with
                  questions and a proposed scope. If it isn&apos;t, we&apos;ll tell you why —
                  briefly, but honestly.
                </p>
                <p style={{ marginTop: 14 }}>
                  <Link href="/ecosystem/how-it-works" style={{ color: 'var(--g)' }}>
                    Full process →
                  </Link>
                </p>
              </div>

              <div className="side-block">
                <h4>Before you submit</h4>
                <p>
                  Check the contract address twice. We can&apos;t review a submission where the
                  address doesn&apos;t resolve to a live token.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="band-in">
            <h3>Not sure this is the right form?</h3>
            <p>Partnerships and general enquiries have their own routes.</p>
            <div className="cta">
              <Link className="btn dark" href="/contact/partner">Partner with BULL</Link>
              <Link className="btn dark" href="/contact">General contact</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
