import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CopyField from '@/components/CopyField';
import { TOKEN, isContractLive } from '@/lib/token';

const STEPS = [
  {
    t: 'Get a Solana wallet',
    d: 'Phantom or Solflare both work. Install the browser extension or mobile app and set it up.',
    extra: 'Write the recovery phrase down on paper. Anyone who has it has your funds.',
  },
  {
    t: 'Fund it with SOL',
    d: 'Buy SOL on any exchange and send it to your wallet address. You\'ll need a small amount for the swap plus gas.',
    extra: 'Send a small test amount first if this is your first time.',
  },
  {
    t: 'Verify the contract',
    d: 'Copy the contract address from this page. Compare it character by character against what\'s shown on an official BULL channel.',
    extra: 'Fake tokens with the same name exist. The address is the only thing that matters.',
  },
  {
    t: 'Swap on Pump.fun',
    d: 'Open the official BULL page on Pump.fun, connect your wallet, and swap SOL for BULL.',
    extra: 'Set slippage appropriately — thin liquidity means you may need to adjust it.',
  },
];

export default function BuyPage() {
  return (
    <>
      <PageHero
        eyebrow="Token / Contract"
        title={<>How to buy <b>BULL</b></>}
        lead="Four steps, plus the warnings we'd want to read before buying any token — including ours."
        trail={[{ label: 'Token', href: '/token' }, { label: 'Contract / Buy' }]}
      />

      <section className="sect">
        <div className="wrap">
          <div className="sect-head">
            <div className="kicker">Step zero</div>
            <h2>Verify the contract address</h2>
            <p>
              This is the address for {TOKEN.name} ({TOKEN.symbol}) on {TOKEN.chain}. Confirm it
              against an official BULL channel before you do anything else.
            </p>
          </div>

          <CopyField value={TOKEN.contract} />

          {!isContractLive && (
            <div className="warn" style={{ marginTop: 16 }}>
              <h4>Not yet live</h4>
              <p>
                The address above is a placeholder — the token hasn&apos;t been deployed yet. Check
                back here or follow BULL on X for the announcement.
              </p>
            </div>
          )}

          <div className="warn" style={{ marginTop: 16 }}>
            <h4>Before you buy anything</h4>
            <p>
              No token is a safe investment. BULL has thin initial liquidity, no presale, and no
              team allocation — which means the price is set entirely by the market and can move
              sharply in either direction.
            </p>
            <p>
              Never spend money you can&apos;t afford to lose. Nothing on this site is financial
              advice.
            </p>
          </div>
        </div>
      </section>

      <section className="sect sect-alt">
        <div className="wrap">
          <div className="sect-head">
            <div className="kicker">The process</div>
            <h2>Four steps</h2>
          </div>

          <div className="buy-steps">
            {STEPS.map(s => (
              <div key={s.t} className="buy-step">
                <div>
                  <h4>{s.t}</h4>
                  <p>{s.d}</p>
                  <p style={{
                    marginTop: 12,
                    paddingTop: 12,
                    borderTop: '1px solid #12201d',
                    color: '#7f918d',
                    fontSize: 12,
                  }}>
                    {s.extra}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {isContractLive && (
            <div className="cta" style={{ marginTop: 28 }}>
              <a
                className="btn fill"
                href={TOKEN.buyUrl}
                target="_blank"
                rel="noreferrer"
              >
                Buy on Pump.fun →
              </a>
            </div>
          )}
        </div>
      </section>

      <section className="sect">
        <div className="wrap">
          <div className="sect-head">
            <div className="kicker">Scams to watch for</div>
            <h2>Three things that should stop you</h2>
          </div>

          <div className="svcs">
            <article className="svc">
              <h4>Someone DMs you first</h4>
              <p>
                Real teams don&apos;t message you about buying. Anyone who does — claiming to be
                support, an admin, or a founder — is trying to take your funds.
              </p>
            </article>
            <article className="svc">
              <h4>The address doesn&apos;t match</h4>
              <p>
                Even one character off is a different token. Copy it from this page, not from a
                screenshot, a chat message, or a search result.
              </p>
            </article>
            <article className="svc">
              <h4>They promise a return</h4>
              <p>
                No legitimate project guarantees price outcomes. If someone tells you BULL will
                go to a specific number, they&apos;re either lying or trying to use you as exit
                liquidity.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="band-in">
            <h3>Understand what you&apos;re buying</h3>
            <p>The tokenomics page has the full breakdown, including the parts that aren&apos;t flattering.</p>
            <div className="cta">
              <Link className="btn fill" href="/token">Full tokenomics →</Link>
              <Link className="btn dark" href="/token/utility">Token utility</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
