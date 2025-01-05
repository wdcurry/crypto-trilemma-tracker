import { Share2 } from "lucide-react";
import { Button } from "./ui/button";

export const Footer = () => {
  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'per AI: Internet-Scale Blockchains',
        url: window.location.href
      });
    } catch (err) {
      // If Web Share API is not supported, copy to clipboard
      await navigator.clipboard.writeText(window.location.href);
    }
  };

  return (
    <footer className="mt-16 border-t border-muted pt-8">
      <h2 className="text-2xl font-semibold mb-6 text-center">Scoring Criteria Explained</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {["decentralization", "security", "scalability", "tps", "finalityTime", "activeValidators"].map((category) => (
          <div key={category} className="glass-card p-4 rounded-lg">
            <h3 className="font-semibold mb-2">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <p className="text-sm text-muted-foreground">{getCategoryDescription(category)}</p>
          </div>
        ))}
      </div>
      
      <div className="text-center text-muted-foreground py-6 border-t border-muted">
        <p className="text-sm mb-4">
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
        <div className="h-px w-48 bg-muted/50 mx-auto mb-4"></div>
        <div className="flex items-center justify-center gap-4 mb-4">
          <a 
            href="https://wallet.multiversx.com/unlock" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            tips & coffee money to herotag @drew
          </a>
          <div className="h-px w-8 bg-muted/50 rotate-90"></div>
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-primary"
            onClick={handleShare}
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </Button>
        </div>
      </div>
    </footer>
  );
};

const getCategoryDescription = (category: string): string => {
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