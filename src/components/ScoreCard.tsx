import { BlockchainScore, ScoreCategory } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ScoreCardProps {
  blockchain: BlockchainScore;
  selectedCategories: ScoreCategory[];
}

export const ScoreCard = ({ blockchain, selectedCategories }: ScoreCardProps) => {
  const [imgError, setImgError] = useState(false);

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

  const handleImageError = () => {
    setImgError(true);
  };

  return (
    <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:animate-card-hover">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={imgError ? "/crypto-trilemma-tracker/placeholder.svg" : blockchain.logo}
          alt={`${blockchain.name} logo`}
          className="w-12 h-12 rounded-full object-contain bg-white/10"
          onError={handleImageError}
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