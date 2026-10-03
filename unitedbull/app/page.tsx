import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <section className="hero">
        <div className="wrap">
          <div className="copy">
            <div className="eyebrow">The Bullish Web3 Growth Network</div>
            <h1>UNITED<b>BULL</b></h1>
            <p className="lead">
              BULL is being built to help promising crypto projects launch, grow, market, and connect.
            </p>

            <div className="icons">
              <div className="ic">
                <i><svg viewBox="0 0 24 24"><path d="M3 10v4h4l7 4V6L7 10zM18 9a4 4 0 0 1 0 6" /></svg></i>
                Token Marketing
              </div>
              <div className="ic">
                <i><svg viewBox="0 0 24 24"><path d="m8 7-5 5 5 5M16 7l5 5-5 5M14 5l-4 14" /></svg></i>
                Web Development
              </div>
              <div className="ic">
                <i><svg viewBox="0 0 24 24"><path d="M4 20V14M10 20V9M16 20v-6M22 20V4M3 20h19" /></svg></i>
                Growth &amp; Engagement
              </div>
              <div className="ic">
                <i><svg viewBox="0 0 24 24"><path d="m3 12 5-4 4 2 5-3 4 4-6 8-4-1-4 1zM8 8l5 6" /></svg></i>
                Token Partnerships
              </div>
              <div className="ic">
                <i><svg viewBox="0 0 24 24"><path d="M5 19c0-4 3-9 14-14 0 11-5 14-9 14zM9 15l-5 1 3-5M13 19l-1 5 5-3" /></svg></i>
                Launch &amp; Promotion Support
              </div>
            </div>

            <div className="cta">
              <Link className="btn fill" href="/join">Join the Ecosystem →</Link>
              <a className="btn dark" href="#tokenomics">◉ View Tokenomics</a>
            </div>
          </div>
        </div>
      </section>

      <main className="wrap">
        <div className="cards">
          <article className="card" id="mission">
            <h3>
              <svg viewBox="0 0 24 24">
                <circle cx="6" cy="6" r="3" /><circle cx="18" cy="18" r="3" />
                <path d="m8 8 8 8M14 4h6v6" />
              </svg>
              Our Mission
            </h3>
            <strong>BULL is being built to help promising crypto projects launch, grow, market, and connect.</strong>
            <p>Our long-term vision is to create a Web3 growth network where projects can access marketing, development, exposure, partnerships, and collaborative opportunities.</p>
            <div className="slogan">
              <span>Build</span><span>Connect</span><span>Market</span><span>Grow</span><span>Give Back</span>
            </div>
          </article>

          <article className="card tok" id="tokenomics">
            <h3>
              <svg viewBox="0 0 24 24">
                <circle cx="12" cy="14" r="7" /><path d="M12 10v4l3 2M9 3h6" />
              </svg>
              Launch Tokenomics
            </h3>
            <div><span>Token:</span><b>BULL</b></div>
            <div><span>Total Supply:</span><b>1,000,000,000 BULL</b></div>
            <div><span>Initial Liquidity:</span><b>$500</b></div>
            <div><span>Buy/Sell Tax:</span><b>0%</b></div>
            <div><span>Presale:</span><b>None</b></div>
            <div><span>Team Allocation:</span><b>0%</b></div>
            <div className="charity">
              <h4>♥ 20% Charity Allocation</h4>
              20% of BULL&apos;s creator-fee allocation will be directed toward charitable giving through the available Pump.fun charity infrastructure.
            </div>
          </article>

          <article className="card vis">
            <h3><svg viewBox="0 0 24 24"><use href="#head" /></svg>The Vision</h3>
            <p>BULL isn&apos;t designed to be just another token.</p>
            <p>We&apos;re building a platform around growth, marketing, partnerships, and community — helping projects find their audience while creating opportunities to work together.</p>
            <div className="grn">Build. Connect. Market.<br />Grow. Give Back.</div>
            <p>BULL — Built for the bullish.</p>
          </article>

          <article className="card vid">
            <svg className="b" viewBox="0 0 700 420"><use href="#bull" /></svg>
            <button type="button" className="play" aria-label="Play video" />
            <div className="cap">
              UNITED<b>BULL</b>
              <small>More than a token · a growth network</small>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
