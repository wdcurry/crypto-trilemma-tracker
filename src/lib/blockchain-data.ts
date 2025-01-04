import { BlockchainScore } from './types';

export const blockchainData: BlockchainScore[] = [
  {
    id: "multiversx",
    name: "MultiversX",
    decentralization: 92,
    security: 95,
    scalability: 98,
    tps: 100,  // ~15,000 TPS in testing, but real-world sustained is lower
    finalityTime: 98,  // ~6 seconds finality
    activeValidators: 88,
    logo: "/lovable-uploads/5c6c5669-5ca8-4fbb-9982-4334e1d084f8.png"
  },
  {
    id: "ethereum",
    name: "Ethereum",
    decentralization: 95,
    security: 98,
    scalability: 75,
    tps: 30,  // ~15-30 TPS on mainnet
    finalityTime: 85,
    activeValidators: 98,
    logo: "https://cryptologos.cc/logos/ethereum-eth-logo.svg"
  },
  {
    id: "solana",
    name: "Solana",
    decentralization: 78,
    security: 85,
    scalability: 99,
    tps: 95,  // ~3,000-4,000 TPS sustained, theoretical max much higher
    finalityTime: 99,  // ~400ms finality
    activeValidators: 82,
    logo: "https://cryptologos.cc/logos/solana-sol-logo.svg"
  },
  {
    id: "cardano",
    name: "Cardano",
    decentralization: 90,
    security: 96,
    scalability: 82,
    tps: 75,  // ~250-270 TPS sustained
    finalityTime: 88,
    activeValidators: 92,
    logo: "https://cryptologos.cc/logos/cardano-ada-logo.svg"
  },
  {
    id: "polkadot",
    name: "Polkadot",
    decentralization: 88,
    security: 92,
    scalability: 90,
    tps: 80,  // ~1,000 TPS with parachains
    finalityTime: 87,
    activeValidators: 85,
    logo: "https://cryptologos.cc/logos/polkadot-new-dot-logo.svg"
  },
  {
    id: "avalanche",
    name: "Avalanche",
    decentralization: 85,
    security: 93,
    scalability: 95,
    tps: 85,  // ~4,500 TPS sustained
    finalityTime: 93,
    activeValidators: 84,
    logo: "https://cryptologos.cc/logos/avalanche-avax-logo.svg"
  },
  {
    id: "cosmos",
    name: "Cosmos",
    decentralization: 89,
    security: 91,
    scalability: 88,
    tps: 78,  // ~1,000 TPS per chain
    finalityTime: 86,
    activeValidators: 88,
    logo: "https://cryptologos.cc/logos/cosmos-atom-logo.svg"
  },
  {
    id: "near",
    name: "NEAR Protocol",
    decentralization: 86,
    security: 90,
    scalability: 94,
    tps: 83,  // ~1,500-2,000 TPS sustained
    finalityTime: 89,
    activeValidators: 83,
    logo: "https://cryptologos.cc/logos/near-protocol-near-logo.svg"
  },
  {
    id: "algorand",
    name: "Algorand",
    decentralization: 87,
    security: 94,
    scalability: 91,
    tps: 82,  // ~1,000-1,200 TPS sustained
    finalityTime: 92,
    activeValidators: 85,
    logo: "https://cryptologos.cc/logos/algorand-algo-logo.svg"
  },
  {
    id: "tezos",
    name: "Tezos",
    decentralization: 88,
    security: 93,
    scalability: 85,
    tps: 70,  // ~40-50 TPS sustained
    finalityTime: 85,
    activeValidators: 87,
    logo: "https://cryptologos.cc/logos/tezos-xtz-logo.svg"
  }
];