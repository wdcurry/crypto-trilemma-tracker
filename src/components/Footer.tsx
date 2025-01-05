import { Share2, X } from "lucide-react";
import md5 from "md5";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "./ui/dialog";
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar";

export const Footer = () => {
  const handleShare = async () => {
    try {
      await navigator.share({
        title: 'per AI: Internet-Scale Blockchains',
        url: window.location.href
      });
    } catch (err) {
      await navigator.clipboard.writeText(window.location.href);
    }
  };

  // Generate Gravatar URL using MD5 hash of email
  const email = "drew@drew.mx";  // Using the actual email address
  const gravatarUrl = `https://gravatar.com/avatar/81db1417d343b4a2929be220a7853857?s=400&d=robohash&r=x`;

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
          Made with ❤️{" "}
          <Dialog>
            <DialogTrigger asChild>
              <button className="text-primary hover:text-primary-light transition-colors">by drew</button>
            </DialogTrigger>
            <DialogContent className="glass-card border-primary/20">
              <Button 
                variant="ghost" 
                className="absolute right-4 top-4 p-0 h-auto hover:bg-transparent"
                aria-label="Close"
              >
                <X className="h-4 w-4 text-muted-foreground hover:text-primary transition-colors" />
              </Button>
              <div className="p-4 flex gap-8">
                <Avatar className="w-32 h-32 shrink-0">
                  <AvatarImage 
                    src={gravatarUrl}
                    alt="Drew's avatar"
                  />
                  <AvatarFallback delayMs={600}>DC</AvatarFallback>
                </Avatar>
                <div className="flex flex-col">
                  <h2 className="text-xl font-semibold mb-4">Hi, I'm drew..</h2>
                  <p className="text-muted-foreground font-light leading-relaxed">
                    multiversX OG, validator, godfather of the mvx Guardian, EGLDHeist, and part of the team bringing you theFUCollective, creator of mxConsole, and more in the works.
                    <br /><br />
                    I believe strongly in sovereignty, accountability, and altruactions.
                  </p>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          {" "}for the mofos at{" "}
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
        <div className="h-px w-48 bg-muted/50 mx-auto mb-6"></div>
        <div className="flex items-center justify-center gap-6 mb-4">
          <a 
            href="https://wallet.multiversx.com/unlock" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            tips & coffee money to herotag @drew
          </a>
          <div className="h-4 w-px bg-muted/50"></div>
          <Button
            variant="ghost"
            size="sm"
            className="text-muted-foreground hover:text-primary hover:bg-transparent"
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
