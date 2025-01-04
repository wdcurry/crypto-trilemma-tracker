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
      const aScore =
        selectedCategories.reduce((acc, category) => acc + a[category], 0) /
        selectedCategories.length;
      const bScore =
        selectedCategories.reduce((acc, category) => acc + b[category], 0) /
        selectedCategories.length;
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

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_50%_50%,#1a1a1a_0%,#000000_100%)] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
            The Internet-Scale Blockchain
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
            Compare blockchain platforms across the crypto trilemma metrics: decentralization, security, and scalability
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <CategoryToggle
              category="decentralization"
              isSelected={selectedCategories.includes("decentralization")}
              onToggle={toggleCategory}
            />
            <CategoryToggle
              category="security"
              isSelected={selectedCategories.includes("security")}
              onToggle={toggleCategory}
            />
            <CategoryToggle
              category="scalability"
              isSelected={selectedCategories.includes("scalability")}
              onToggle={toggleCategory}
            />
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