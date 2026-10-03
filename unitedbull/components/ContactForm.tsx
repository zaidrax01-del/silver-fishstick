'use client';

import { useState } from 'react';

export type FormField = {
  name: string;
  label: string;
  hint?: string;
  type?: 'text' | 'email' | 'url' | 'tel' | 'textarea' | 'select' | 'checks';
  options?: string[];
  required?: boolean;
  placeholder?: string;
  full?: boolean;
};

type Props = {
  fields: FormField[];
  subject: string;
  submitLabel: string;
  to?: string;
  endpoint?: string;
  note?: string;
};

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm({
  fields,
  subject,
  submitLabel,
  to = 'hello@unitedbull.io',
  endpoint,
  note,
}: Props) {
  const [values, setValues] = useState<Record<string, string>>({});
  const [picked, setPicked] = useState<Record<string, string[]>>({});
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<'idle' | 'sending' | 'ok' | 'err'>('idle');

  const set = (name: string, v: string) => {
    setValues(p => ({ ...p, [name]: v }));
    if (errors[name]) setErrors(p => { const n = { ...p }; delete n[name]; return n; });
  };

  const toggle = (name: string, opt: string) => {
    setPicked(p => {
      const cur = p[name] ?? [];
      return { ...p, [name]: cur.includes(opt) ? cur.filter(o => o !== opt) : [...cur, opt] };
    });
    if (errors[name]) setErrors(p => { const n = { ...p }; delete n[name]; return n; });
  };

  function validate() {
    const e: Record<string, string> = {};
    for (const f of fields) {
      if (!f.required) continue;
      if (f.type === 'checks') {
        if (!picked[f.name]?.length) e[f.name] = 'Choose at least one option';
        continue;
      }
      const v = (values[f.name] ?? '').trim();
      if (!v) { e[f.name] = 'This field is required'; continue; }
      if (f.type === 'email' && !EMAIL.test(v)) e[f.name] = 'Enter a valid email address';
      if (f.type === 'url' && !/^https?:\/\//i.test(v)) e[f.name] = 'Include https://';
    }
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function submit(ev: React.FormEvent) {
    ev.preventDefault();
    if (!validate()) return;
    setStatus('sending');

    const payload: Record<string, string> = { ...values };
    for (const [k, v] of Object.entries(picked)) if (v.length) payload[k] = v.join(', ');

    if (endpoint) {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        setStatus(res.ok ? 'ok' : 'err');
      } catch {
        setStatus('err');
      }
      return;
    }

    // No endpoint configured yet — hand off to the visitor's mail client
    // so the form is still usable. Delete this block once `endpoint` is set.
    const labels = Object.fromEntries(fields.map(f => [f.name, f.label]));
    const body = Object.entries(payload)
      .filter(([, v]) => v)
      .map(([k, v]) => `${labels[k] ?? k}:\n${v}`)
      .join('\n\n');
    window.location.href =
      `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setStatus('ok');
  }

  function reset() {
    setValues({});
    setPicked({});
    setErrors({});
    setStatus('idle');
  }

  if (status === 'ok') {
    return (
      <div className="form-status ok">
        <b>{endpoint ? 'Message sent' : 'Your email client should be open'}</b>
        {endpoint
          ? "We've got it. You'll hear back within a few days — sooner if it's urgent."
          : 'Your message is pre-filled and ready to send. If nothing opened, email us directly at ' + to + '.'}
        <button type="button" onClick={reset}>Send another</button>
      </div>
    );
  }

  if (status === 'err') {
    return (
      <div className="form-status err">
        <b>Something went wrong</b>
        Nothing was sent. Try again, or email us directly at {to}.
        <button type="button" onClick={() => setStatus('idle')}>Try again</button>
      </div>
    );
  }

  return (
    <form className="form" onSubmit={submit} noValidate>
      {fields.map(f => {
        const bad = !!errors[f.name];
        const wrap = f.type === 'textarea' || f.type === 'checks' || f.full
          ? 'field'
          : 'field';

        return (
          <div key={f.name} className={wrap} style={f.full || f.type === 'textarea' || f.type === 'checks' ? { gridColumn: '1 / -1' } : undefined}>
            <label htmlFor={f.name}>
              {f.label}
              {!f.required && <em>optional</em>}
            </label>

            {f.type === 'textarea' && (
              <textarea
                id={f.name}
                name={f.name}
                placeholder={f.placeholder}
                value={values[f.name] ?? ''}
                onChange={e => set(f.name, e.target.value)}
                className={bad ? 'bad' : undefined}
              />
            )}

            {f.type === 'select' && (
              <select
                id={f.name}
                name={f.name}
                value={values[f.name] ?? ''}
                onChange={e => set(f.name, e.target.value)}
              >
                <option value="">Select…</option>
                {f.options?.map(o => <option key={o} value={o}>{o}</option>)}
              </select>
            )}

            {f.type === 'checks' && (
              <div className="checks">
                {f.options?.map(o => {
                  const on = picked[f.name]?.includes(o) ?? false;
                  return (
                    <label key={o} className={on ? 'check on' : 'check'}>
                      <input
                        type="checkbox"
                        checked={on}
                        onChange={() => toggle(f.name, o)}
                      />
                      {o}
                    </label>
                  );
                })}
              </div>
            )}

            {(!f.type || f.type === 'text' || f.type === 'email' || f.type === 'url' || f.type === 'tel') && (
              <input
                id={f.name}
                name={f.name}
                type={f.type ?? 'text'}
                placeholder={f.placeholder}
                value={values[f.name] ?? ''}
                onChange={e => set(f.name, e.target.value)}
                className={bad ? 'bad' : undefined}
              />
            )}

            {bad && <div className="field-err">{errors[f.name]}</div>}
            {!bad && f.hint && <div className="field-err" style={{ color: '#7f918d' }}>{f.hint}</div>}
          </div>
        );
      })}

      <div className="form-foot">
        <button className="btn fill" type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : submitLabel}
        </button>
        {note && <p className="form-note">{note}</p>}
      </div>
    </form>
  );
}
