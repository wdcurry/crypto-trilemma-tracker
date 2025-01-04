export interface BlockchainScore {
  id: string;
  name: string;
  decentralization: number;
  security: number;
  scalability: number;
  logo: string;
}

export type ScoreCategory = 'decentralization' | 'security' | 'scalability';