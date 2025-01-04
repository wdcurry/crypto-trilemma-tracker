export interface BlockchainScore {
  id: string;
  name: string;
  decentralization: number;
  security: number;
  scalability: number;
  tps: number;
  finalityTime: number;
  activeValidators: number;
  logo: string;
}

export type ScoreCategory = 
  | 'decentralization' 
  | 'security' 
  | 'scalability' 
  | 'tps' 
  | 'finalityTime' 
  | 'activeValidators';