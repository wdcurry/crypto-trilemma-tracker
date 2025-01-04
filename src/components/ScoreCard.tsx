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
    }, 0);
  };

  const getCategoryDisplayName = (category: ScoreCategory): string => {
    switch (category) {
      case "tps":
        return "TPS";
      case "finalityTime":
        return "Finality Time";
      case "activeValidators":
        return "Active Validators";
      default:
        return category.charAt(0).toUpperCase() + category.slice(1);
    }
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
            Total Score: {getTotalScore()}
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {selectedCategories.map((category) => (
          <div key={category}>
            <div className="flex justify-between mb-1">
              <span className="text-sm">{getCategoryDisplayName(category)}</span>
              <span className="text-sm font-medium">{blockchain[category]}</span>
            </div>
            <div className="bg-secondary rounded-full">
              <div
                className="score-bar"
                style={{ width: `${blockchain[category]}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};