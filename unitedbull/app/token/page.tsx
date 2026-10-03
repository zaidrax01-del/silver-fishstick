import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CopyField from '@/components/CopyField';
import { TOKEN, isContractLive } from '@/lib/token';

const ALLOCATION = [
  { label: 'Public / circulating', pct: 100, width: '100%' },
  { label: 'Team',                 pct: 0,   width: '0%' },
  { label: 'Presale',              pct: 0,   width: '0%' },
  { label: 'Private sale',         pct: 0,   width: '0%' },
];

export default function TokenPage() {
  return (
    <>
      <PageHero
        eyebrow="Token"
        title={<>The <b>BULL</b> token</>}
        lead="A fixed-supply token with no presale, no team allocation, and no tax on buys or sells. Everything below is what's actually true — including the parts that are less flattering."
        trail={[{ label: 'Token' }]}
      />

      <section className="sect">
        <div className="wrap">
          <div className="tstats">
            <div className="tstat"><b>1B</b><span>Total supply</span></div>
            <div className="tstat"><b>0%</b><span>Buy / sell tax</span></div>
            <div className="tstat"><b>None</b><span>Presale</span></div>
            <div className="tstat"><b>0%</b><span>Team allocation</span></div>
          </div>

          <div className="sect-head" style={{ marginTop: 56 }}>
            <div className="kicker">Contract</div>
            <h2>Verify before you interact</h2>
            <p>
              Always confirm the contract address from an official BULL channel. Anyone can create
              a token with the same name and ticker.
            </p>
          </div>

          <CopyField value={TOKEN.contract} />

          {!isContractLive && (
            <div className="warn" style={{ marginTop: 16 }}>
              <h4>Not yet live</h4>
              <p>
                The contract address above is a placeholder. It&apos;ll be replaced here the moment
                the token is deployed — and nowhere else.
              </p>
            </div>
          )}
        </div>
      </section>

      <section className="sect sect-alt">
        <div className="wrap">
          <div className="sect-head">
            <div className="kicker">Tokenomics</div>
            <h2>Full breakdown</h2>
            <p>Every number on this page is the launch configuration. Nothing is planned to change after launch.</p>
          </div>

          <div className="kv">
            <div><span>Token</span><b>{TOKEN.name} ({TOKEN.symbol})</b></div>
            <div><span>Chain</span><b>{TOKEN.chain}</b></div>
            <div><span>Total supply</span><b>{TOKEN.totalSupply} {TOKEN.symbol}</b></div>
            <div><span>Decimals</span><b>{TOKEN.decimals}</b></div>
            <div><span>Initial liquidity</span><b>{TOKEN.initialLiquidity}</b></div>
            <div><span>Buy tax</span><b>{TOKEN.buyTax}</b></div>
            <div><span>Sell tax</span><b>{TOKEN.sellTax}</b></div>
            <div><span>Presale</span><b>{TOKEN.presale}</b></div>
            <div><span>Team allocation</span><b>{TOKEN.teamAllocation}</b></div>
            <div><span>Charity allocation</span><b>{TOKEN.charityAllocation} of creator fees</b></div>
          </div>
        </div>
      </section>

      <section className="sect">
        <div className="wrap">
          <div className="sect-head">
            <div className="kicker">Supply distribution</div>
            <h2>Where the supply goes</h2>
          </div>

          <div className="alloc">
            {ALLOCATION.map(a => (
              <div key={a.label} className="alloc-row">
                <span>{a.label}</span>
                <div className="alloc-bar">
                  <i style={{ width: a.width }} />
                </div>
                <b>{a.pct}%</b>
              </div>
            ))}
          </div>

          <div className="warn" style={{ marginTop: 20 }}>
            <h4>About the charity allocation</h4>
            <p>
              The 20% figure is a share of <strong>creator fees</strong>, not of token supply. It&apos;s
              configured through Pump.fun&apos;s charity infrastructure, which means the split is
              enforced on their side — not by this site, and not by a contract we control.
            </p>
          </div>
        </div>
      </section>

      <section className="sect sect-alt">
        <div className="wrap">
          <div className="sect-head">
            <div className="kicker">Straight answer</div>
            <h2>What the $500 liquidity means</h2>
            <p>
              It means the pool is thin. Small trades can move the price significantly, and the
              token can be volatile in ways that have nothing to do with the project. That&apos;s
              the reality of launching without a presale or private raise — the trade-off is that
              nobody got in early at your expense.
            </p>
            <p>
              We&apos;d rather put that on the page than have you find out after buying.
            </p>
          </div>

          <div className="svcs cols-2">
            <article className="svc">
              <h4>What it is</h4>
              <ul>
                <li>Fixed supply, no mint function</li>
                <li>No team wallet allocation</li>
                <li>No presale or private round</li>
                <li>Zero tax on transactions</li>
              </ul>
            </article>
            <article className="svc">
              <h4>What it isn&apos;t</h4>
              <ul>
                <li>A guaranteed return of any kind</li>
                <li>Backed by anything other than the market</li>
                <li>Protected against price volatility</li>
                <li>A substitute for your own research</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="band">
        <div className="wrap">
          <div className="band-in">
            <h3>Ready to go deeper?</h3>
            <p>See what the token does, or how to buy it.</p>
            <div className="cta">
              <Link className="btn fill" href="/token/utility">Token utility →</Link>
              <Link className="btn dark" href="/token/buy">How to buy</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
