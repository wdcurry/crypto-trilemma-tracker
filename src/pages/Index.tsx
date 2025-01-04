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

  const getMaxPossibleScore = () => {
    return selectedCategories.length * 100;
  };

  const getCategoryDescription = (category: ScoreCategory): string => {
    switch (category) {
      case "decentralization":
        return "Measures the distribution of network control and decision-making power across nodes";
      case "security":
        return "Evaluates network resistance to attacks and overall protocol safety";
      case "scalability":
        return "Assesses the network's ability to handle increased transaction load";
      case "tps":
        return "Transactions Per Second - Maximum number of transactions the network can process";
      case "finalityTime":
        return "Time taken for a transaction to become irreversible";
      case "activeValidators":
        return "Number of active nodes participating in network consensus";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_50%_50%,#1a1a1a_0%,#000000_100%)] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
            The Internet-Scale Blockchain
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4">
            Compare blockchain platforms across key performance metrics
          </p>
          <p className="text-lg text-muted-foreground mb-12">
            Current maximum score: {getMaxPossibleScore()} ({selectedCategories.length} categories selected)
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sortedBlockchains.map((blockchain) => (
            <ScoreCard
              key={blockchain.id}
              blockchain={blockchain}
              selectedCategories={selectedCategories}
            />
          ))}
        </div>

        <footer className="mt-16 border-t border-muted pt-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Scoring Criteria Explained</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category} className="glass-card p-4 rounded-lg">
                <h3 className="font-semibold mb-2">{getCategoryDisplayName(category)}</h3>
                <p className="text-sm text-muted-foreground">{getCategoryDescription(category)}</p>
              </div>
            ))}
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;