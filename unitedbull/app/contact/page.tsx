import Link from 'next/link';
import PageHero from '@/components/PageHero';
import ContactForm, { type FormField } from '@/components/ContactForm';

const FIELDS: FormField[] = [
  { name: 'name',  label: 'Your name',  required: true,  placeholder: 'Jane Doe' },
  { name: 'email', label: 'Email',      required: true,  type: 'email', placeholder: 'you@example.com' },
  {
    name: 'topic',
    label: 'What is this about',
    required: true,
    type: 'select',
    options: ['General enquiry', 'Submitting a project', 'Partnership', 'Media / press', 'Something else'],
  },
  {
    name: 'message',
    label: 'Message',
    required: true,
    type: 'textarea',
    placeholder: 'Tell us what you need and we\'ll point you in the right direction.',
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title={<>Get in <b>touch</b></>}
        lead="Questions, submissions, partnerships, or something we haven't thought of. All of it lands in the same inbox and gets read."
        trail={[{ label: 'Contact' }]}
      />

      <section className="sect">
        <div className="wrap">
          <div className="contact-grid">
            <ContactForm
              fields={FIELDS}
              subject="BULL — Contact enquiry"
              submitLabel="Send message →"
              note="We reply to everything. If you don't hear back within a week, check your spam folder before assuming we ignored you."
            />

            <aside className="side">
              <div className="side-block">
                <h4>Faster routes</h4>
                <ul className="side-links">
                  <li>
                    <Link href="/contact/submit">Submit your project</Link>
                    <span>For token teams looking for growth support</span>
                  </li>
                  <li>
                    <Link href="/contact/partner">Partner with BULL</Link>
                    <span>For communities, KOLs, and platforms</span>
                  </li>
                  <li>
                    <Link href="/ecosystem/how-it-works">How it works</Link>
                    <span>What happens after you submit</span>
                  </li>
                </ul>
              </div>

              <div className="side-block">
                <h4>Elsewhere</h4>
                <ul className="side-links">
                  <li>
                    <a href="https://x.com/" target="_blank" rel="noreferrer">X</a>
                    <span>Announcements and updates</span>
                  </li>
                  <li>
                    <a href="https://t.me/" target="_blank" rel="noreferrer">Telegram</a>
                    <span>Community chat</span>
                  </li>
                  <li>
                    <a href="https://discord.com/" target="_blank" rel="noreferrer">Discord</a>
                    <span>Longer-form discussion</span>
                  </li>
                </ul>
              </div>

              <div className="side-block">
                <h4>Response times</h4>
                <p>
                  General enquiries: a few days. Project submissions: reviewed weekly.
                  Partnership requests: usually within a week.
                </p>
                <p style={{ marginTop: 12, color: '#7f918d', fontSize: 12 }}>
                  Nobody from BULL will ever DM you first about an investment. If someone does,
                  they&apos;re not us.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
