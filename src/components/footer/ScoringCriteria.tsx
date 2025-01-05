import React from 'react';

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

export const ScoringCriteria = () => {
  const categories = ["decentralization", "security", "scalability", "tps", "finalityTime", "activeValidators"];
  
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-6 text-center">Scoring Criteria Explained</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {categories.map((category) => (
          <div key={category} className="glass-card p-4 rounded-lg">
            <h3 className="font-semibold mb-2">{category.charAt(0).toUpperCase() + category.slice(1)}</h3>
            <p className="text-sm text-muted-foreground">{getCategoryDescription(category)}</p>
          </div>
        ))}
      </div>
    </div>
  );
};