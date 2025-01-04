import { useState, useMemo } from "react";
import { ScoreCard } from "@/components/ScoreCard";
import { CategoryToggle } from "@/components/CategoryToggle";
import { blockchainData } from "@/lib/blockchain-data";
import { ScoreCategory } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [selectedCategories, setSelectedCategories] = useState<ScoreCategory[]>([
    "decentralization",
    "security",
    "scalability",
  ]);
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
        return "Measures the distribution of network control and decision-making power across nodes. Data sourced from network statistics, Nakamoto coefficients, and validator distribution metrics from each blockchain's official documentation and network explorers.";
      case "security":
        return "Evaluates network resistance to attacks and overall protocol safety. Based on historical security track record, independent security audits, and formal verification reports from firms like Runtime Verification and Certik.";
      case "scalability":
        return "Assesses the network's ability to handle increased transaction load. Derived from stress test results, network upgrades documentation, and real-world performance data during peak usage periods.";
      case "tps":
        return "Transactions Per Second - Maximum number of transactions the network can process. Data collected from official network metrics, validator nodes, and blockchain explorers during both normal and peak network conditions.";
      case "finalityTime":
        return "Time taken for a transaction to become irreversible. Measured through network monitoring tools and official documentation of consensus mechanisms from each blockchain platform.";
      case "activeValidators":
        return "Number of active nodes participating in network consensus. Data obtained directly from network statistics, staking dashboards, and real-time blockchain explorer data.";
      default:
        return "";
    }
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
          {sortedBlockchains.map((blockchain, index) => (
            <ScoreCard
              key={`${blockchain.id}-${refreshKey}`}
              blockchain={blockchain}
              selectedCategories={selectedCategories}
              rank={index + 1}
            />
          ))}
        </div>

        <footer className="mt-16 border-t border-muted pt-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Scoring Criteria Explained</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {categories.map((category) => (
              <div key={category} className="glass-card p-4 rounded-lg">
                <h3 className="font-semibold mb-2">{getCategoryDisplayName(category)}</h3>
                <p className="text-sm text-muted-foreground">{getCategoryDescription(category)}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center text-muted-foreground py-6 border-t border-muted">
            <p className="text-sm">
              Made with ❤️ by drew for the mofos at{" "}
              <a 
                href="https://twitter.com/ApeStaking" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:text-primary-light transition-colors"
              >
                @ApeStaking
              </a>
              ,{" "}
              <a 
                href="https://twitter.com/EGLDHeist" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:text-primary-light transition-colors"
              >
                @EGLDHeist
              </a>
              , &{" "}
              <a 
                href="https://twitter.com/theFUCollective" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-primary hover:text-primary-light transition-colors"
              >
                @theFUCollective
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;