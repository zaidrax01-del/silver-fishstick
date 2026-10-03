import Link from 'next/link';

export type Crumb = { label: string; href?: string };

export default function PageHero({
  eyebrow,
  title,
  lead,
  trail,
}: {
  eyebrow: string;
  title: React.ReactNode;
  lead: string;
  trail: Crumb[];
}) {
  return (
    <section className="page-hero">
      <div className="wrap">
        <nav className="crumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          {trail.map(c => (
            <span key={c.label} className="sep">
              <span aria-hidden="true">/</span>
              {c.href ? <Link href={c.href}>{c.label}</Link> : <b>{c.label}</b>}
            </span>
          ))}
        </nav>
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <p className="lead">{lead}</p>
      </div>
    </section>
  );
}
