import { BlockchainScore } from './types';

export const blockchainData: BlockchainScore[] = [
  {
    id: "multiversx",
    name: "MultiversX",
    decentralization: 85, // Good geographic distribution
    security: 92, // Multiple security audits, no major incidents
    scalability: 95, // Adaptive State Sharding
    tps: 100,  // ~45,000 TPS with three shards
    finalityTime: 96,  // ~6 seconds finality
    activeValidators: 92, // 3,256 validators as of March 2024 (maximum allowed)
    logo: "/crypto-trilemma-tracker/lovable-uploads/5c6c5669-5ca8-4fbb-9982-4334e1d084f8.png"
  },
  {
    id: "ethereum",
    name: "Ethereum",
    decentralization: 98, // Highest number of nodes (~500,000)
    security: 98, // Longest track record, highest security budget
    scalability: 70, // Limited by L1, improved by L2 solutions
    tps: 30,  // ~15-30 TPS on mainnet
    finalityTime: 82, // ~12-15 minutes for full finality
    activeValidators: 100, // 907,000+ validators as of March 2024
    logo: "https://cryptologos.cc/logos/ethereum-eth-logo.svg"
  },
  {
    id: "solana",
    name: "Solana",
    decentralization: 75, // More centralized
    security: 80, // Multiple outages historically
    scalability: 98, // High throughput architecture
    tps: 95,  // ~3,000-4,000 TPS sustained
    finalityTime: 99,  // ~400ms finality
    activeValidators: 85, // 1,967 active validators as of March 2024
    logo: "https://cryptologos.cc/logos/solana-sol-logo.svg"
  },
  {
    id: "cardano",
    name: "Cardano",
    decentralization: 90, // Well distributed stake pools
    security: 95, // Formal verification, peer-reviewed
    scalability: 80, // Hydra scaling solution
    tps: 75,  // ~250-270 TPS sustained
    finalityTime: 85, // ~20 blocks (~20 minutes)
    activeValidators: 88, // ~2,900 stake pools as of March 2024
    logo: "https://cryptologos.cc/logos/cardano-ada-logo.svg"
  },
  {
    id: "polkadot",
    name: "Polkadot",
    decentralization: 85, // Distributed validator set
    security: 90, // Shared security model
    scalability: 88, // Parallel processing via parachains
    tps: 80,  // ~1,000 TPS with parachains
    finalityTime: 85, // ~12-60 seconds
    activeValidators: 82, // 297 active validators as of March 2024
    logo: "https://cryptologos.cc/logos/polkadot-new-dot-logo.svg"
  },
  {
    id: "avalanche",
    name: "Avalanche",
    decentralization: 82, // Distributed validator set
    security: 88, // Snow protocol
    scalability: 92, // Subnets architecture
    tps: 85,  // ~4,500 TPS sustained
    finalityTime: 95, // ~2 seconds
    activeValidators: 75, // 1,498 active validators as of March 2024
    logo: "https://cryptologos.cc/logos/avalanche-avax-logo.svg"
  },
  {
    id: "cosmos",
    name: "Cosmos",
    decentralization: 88, // Independent zones
    security: 85, // Zone-specific security
    scalability: 90, // Independent parallel chains
    tps: 78,  // ~1,000 TPS per chain
    finalityTime: 86, // ~6-7 seconds
    activeValidators: 83, // 175 active validators on Cosmos Hub as of March 2024
    logo: "https://cryptologos.cc/logos/cosmos-atom-logo.svg"
  },
  {
    id: "near",
    name: "NEAR Protocol",
    decentralization: 80, // Distributed validator set
    security: 85, // Nightshade sharding
    scalability: 92, // Dynamic sharding
    tps: 83,  // ~1,500-2,000 TPS sustained
    finalityTime: 90, // ~2-3 seconds
    activeValidators: 80, // 100 active validators as of March 2024
    logo: "/crypto-trilemma-tracker/near-protocol-near-logo.svg"
  },
  {
    id: "algorand",
    name: "Algorand",
    decentralization: 82, // Pure PoS
    security: 90, // Byzantine agreement
    scalability: 88, // State Proofs
    tps: 82,  // ~1,000-1,200 TPS sustained
    finalityTime: 93, // ~4.5 seconds
    activeValidators: 81, // 120+ participation nodes as of March 2024
    logo: "/crypto-trilemma-tracker/algorand-algo-logo.svg"
  },
  {
    id: "tezos",
    name: "Tezos",
    decentralization: 85, // Distributed baker set
    security: 88, // Formal verification
    scalability: 80, // Optimistic rollups
    tps: 70,  // ~40-50 TPS sustained
    finalityTime: 83, // ~30 minutes
    activeValidators: 84, // 400+ active bakers as of March 2024
    logo: "https://cryptologos.cc/logos/tezos-xtz-logo.svg"
  }
];
