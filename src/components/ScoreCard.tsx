import { BlockchainScore, ScoreCategory } from "@/lib/types";
import { cn } from "@/lib/utils";

interface ScoreCardProps {
  blockchain: BlockchainScore;
  selectedCategories: ScoreCategory[];
}

export const ScoreCard = ({ blockchain, selectedCategories }: ScoreCardProps) => {
  const getTotalScore = () => {
    return selectedCategories.reduce((acc, category) => {
      return acc + blockchain[category];
    }, 0) / selectedCategories.length;
  };

  return (
    <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:animate-card-hover">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={blockchain.logo}
          alt={`${blockchain.name} logo`}
          className="w-12 h-12 rounded-full"
        />
        <div>
          <h3 className="font-semibold text-lg">{blockchain.name}</h3>
          <p className="text-sm text-muted-foreground">
            Score: {getTotalScore().toFixed(1)}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {selectedCategories.includes("decentralization") && (
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm">Decentralization</span>
              <span className="text-sm font-medium">{blockchain.decentralization}</span>
            </div>
            <div className="bg-secondary rounded-full">
              <div
                className="score-bar"
                style={{ width: `${blockchain.decentralization}%` }}
              />
            </div>
          </div>
        )}

        {selectedCategories.includes("security") && (
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm">Security</span>
              <span className="text-sm font-medium">{blockchain.security}</span>
            </div>
            <div className="bg-secondary rounded-full">
              <div
                className="score-bar"
                style={{ width: `${blockchain.security}%` }}
              />
            </div>
          </div>
        )}

        {selectedCategories.includes("scalability") && (
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-sm">Scalability</span>
              <span className="text-sm font-medium">{blockchain.scalability}</span>
            </div>
            <div className="bg-secondary rounded-full">
              <div
                className="score-bar"
                style={{ width: `${blockchain.scalability}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};