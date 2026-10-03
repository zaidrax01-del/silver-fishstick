'use client';

import { useState } from 'react';

export default function CopyField({ value }: { value: string }) {
  const [state, setState] = useState<'idle' | 'copied' | 'failed'>('idle');

  async function copy() {
    try {
      await navigator.clipboard.writeText(value);
      setState('copied');
      setTimeout(() => setState('idle'), 1800);
    } catch {
      setState('failed');
      setTimeout(() => setState('idle'), 2400);
    }
  }

  const placeholder = value.includes('PLACEHOLDER');

  return (
    <div className="code-box">
      <code>{value}</code>
      {!placeholder && (
        <button type="button" className="btn dark" onClick={copy}>
          {state === 'copied' ? 'Copied' : state === 'failed' ? 'Copy failed' : 'Copy'}
        </button>
      )}
    </div>
  );
}
