import { useState, useMemo } from "react";
import { ScoreCard } from "@/components/ScoreCard";
import { CategoryToggle } from "@/components/CategoryToggle";
import { blockchainData } from "@/lib/blockchain-data";
import { ScoreCategory } from "@/lib/types";

const Index = () => {
  const [selectedCategories, setSelectedCategories] = useState<ScoreCategory[]>([
    "decentralization",
    "security",
    "scalability",
  ]);

  const sortedBlockchains = useMemo(() => {
    return [...blockchainData].sort((a, b) => {
      const aScore = selectedCategories.reduce((acc, category) => acc + a[category], 0);
      const bScore = selectedCategories.reduce((acc, category) => acc + b[category], 0);
      return bScore - aScore;
    });
  }, [selectedCategories]);

  const toggleCategory = (category: ScoreCategory) => {
    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        if (prev.length === 1) return prev;
        return prev.filter((c) => c !== category);
      }
      return [...prev, category];
    });
  };

  const categories: ScoreCategory[] = [
    "decentralization",
    "security",
    "scalability",
    "tps",
    "finalityTime",
    "activeValidators"
  ];

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
    <div className="min-h-screen bg-[radial-gradient(circle_at_50%_50%,#1a1a1a_0%,#000000_100%)] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
            The Internet-Scale Blockchain
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Compare blockchain platforms across key performance metrics
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <CategoryToggle
                key={category}
                category={category}
                displayName={getCategoryDisplayName(category)}
                isSelected={selectedCategories.includes(category)}
                onToggle={toggleCategory}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedBlockchains.map((blockchain) => (
            <ScoreCard
              key={blockchain.id}
              blockchain={blockchain}
              selectedCategories={selectedCategories}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;