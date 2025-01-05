import { useState, useMemo } from "react";
import { ScoreCard } from "@/components/ScoreCard";
import { CategoryToggle } from "@/components/CategoryToggle";
import { blockchainData } from "@/lib/blockchain-data";
import { ScoreCategory } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { RefreshCw } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Footer } from "@/components/Footer";

const Index = () => {
  const [selectedCategories, setSelectedCategories] = useState<ScoreCategory[]>([
    "decentralization",
    "security",
    "scalability",
  ]);
  const [trilemmaOnly, setTrilemmaOnly] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const { toast } = useToast();

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1);
    toast({
      title: "Data Refreshed",
      description: "The blockchain metrics have been updated.",
    });
  };

  const sortedBlockchains = useMemo(() => {
    return [...blockchainData].sort((a, b) => {
      const aScore = selectedCategories.reduce((acc, category) => acc + a[category], 0);
      const bScore = selectedCategories.reduce((acc, category) => acc + b[category], 0);
      return bScore - aScore;
    });
  }, [selectedCategories, refreshKey]);

  const toggleCategory = (category: ScoreCategory) => {
    if (trilemmaOnly && ["tps", "finalityTime", "activeValidators"].includes(category)) {
      return;
    }

    setSelectedCategories((prev) => {
      if (prev.includes(category)) {
        if (prev.length === 1) return prev;
        return prev.filter((c) => c !== category);
      }
      return [...prev, category];
    });
  };

  const handleTrilemmaToggle = (checked: boolean) => {
    setTrilemmaOnly(checked);
    if (checked) {
      setSelectedCategories(["decentralization", "security", "scalability"]);
    }
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

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_50%_50%,#1a1a1a_0%,#000000_100%)] p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="flex justify-end mb-4">
            <Button 
              onClick={handleRefresh}
              variant="outline"
              className="gap-2"
            >
              <RefreshCw className="h-4 w-4" />
              Refresh Data
            </Button>
          </div>
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary-light to-primary bg-clip-text text-transparent">
            per AI: Internet-Scale Blockchains
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-4 italic">
            Compare blockchain platforms across key performance metrics
          </p>
          <p className="text-lg text-muted-foreground mb-8">
            max score: {getMaxPossibleScore()} ({selectedCategories.length} categories selected)
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            {categories.map((category) => (
              <CategoryToggle
                key={category}
                category={category}
                displayName={getCategoryDisplayName(category)}
                isSelected={selectedCategories.includes(category)}
                onToggle={toggleCategory}
                disabled={trilemmaOnly && ["tps", "finalityTime", "activeValidators"].includes(category)}
              />
            ))}
          </div>

          <div className="flex justify-end items-center gap-2 mb-8 opacity-80">
            <label 
              htmlFor="trilemma-toggle" 
              className="text-sm text-muted-foreground cursor-pointer"
            >
              crypto trilemma only
            </label>
            <Checkbox
              id="trilemma-toggle"
              checked={trilemmaOnly}
              onCheckedChange={handleTrilemmaToggle}
              className="h-4 w-4 bg-[#f3f3f3] text-[#555555]"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {sortedBlockchains.map((blockchain, index) => (
            <ScoreCard
              key={`${blockchain.id}-${refreshKey}`}
              blockchain={blockchain}
              selectedCategories={selectedCategories}
              rank={index + 1}
            />
          ))}
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Index;