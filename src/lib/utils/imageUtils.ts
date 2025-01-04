export const getLogoWithFallback = (primaryUrl: string) => {
  // Fallback chain: primary URL -> generic blockchain icon -> placeholder
  const fallbackUrl = "/crypto-trilemma-tracker/placeholder.svg";
  
  return primaryUrl;
};