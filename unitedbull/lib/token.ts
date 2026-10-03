export const TOKEN = {
  symbol: 'BULL',
  name: 'UnitedBull',
  chain: 'Solana',
  totalSupply: '1,000,000,000',
  initialLiquidity: '$500',
  buyTax: '0%',
  sellTax: '0%',
  presale: 'None',
  teamAllocation: '0%',
  charityAllocation: '20%',
  decimals: 6,

  // TODO: replace both of these before the token goes live.
  contract: 'CONTRACT_ADDRESS_PLACEHOLDER',
  buyUrl: 'https://pump.fun/',
} as const;

export const isContractLive = !TOKEN.contract.includes('PLACEHOLDER');
