export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="soc">
          <a href="https://x.com/" aria-label="X" target="_blank" rel="noreferrer">
            <svg aria-hidden="true"><use href="#x" /></svg>
          </a>
          <a href="https://t.me/" aria-label="Telegram" target="_blank" rel="noreferrer">
            <svg aria-hidden="true"><use href="#tg" /></svg>
          </a>
        </div>
        <p>
          BULL is a cryptocurrency project and does not guarantee profits, returns,
          liquidity, or token appreciation. Nothing here constitutes financial advice.
        </p>
      </div>
    </footer>
  );
}
