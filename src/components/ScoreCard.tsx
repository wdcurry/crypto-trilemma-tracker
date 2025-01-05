import { BlockchainScore, ScoreCategory } from "@/lib/types";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Trophy } from "lucide-react";

interface ScoreCardProps {
  blockchain: BlockchainScore;
  selectedCategories: ScoreCategory[];
  rank?: number;
}

export const ScoreCard = ({ blockchain, selectedCategories, rank }: ScoreCardProps) => {
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

  const getRankBadge = () => {
    if (!rank) return null;

    const badgeClasses = "absolute -top-4 -right-4 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br shadow-lg transform transition-transform duration-300 hover:scale-110";

    if (rank === 1) {
      return (
        <div className={cn(badgeClasses, "from-yellow-400 to-yellow-600")}>
          <Trophy className="w-6 h-6 text-white" />
        </div>
      );
    }

    return (
      <div className={cn(badgeClasses, "from-primary/50 to-primary")}>
        <span className="text-lg font-bold text-white" style={{ fontFamily: 'Abril Fatface, cursive' }}>{rank}</span>
      </div>
    );
  };

  return (
    <div className="glass-card rounded-xl p-6 transition-all duration-300 hover:animate-card-hover relative">
      {getRankBadge()}
      <div className="flex items-center gap-4 mb-4">
        <img
          src={imgError ? "/crypto-trilemma-tracker/placeholder.svg" : blockchain.logo}
          alt={`${blockchain.name} logo`}
          className="w-12 h-12 rounded-full object-contain bg-white/10"
          onError={handleImageError}
        />
        <div>
          <a
            href={blockchain.website}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-lg hover:text-primary transition-colors"
          >
            {blockchain.name}
          </a>
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
            <div className="score-bar-background">
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