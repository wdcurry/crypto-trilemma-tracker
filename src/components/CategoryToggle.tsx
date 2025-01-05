import { Button } from "@/components/ui/button";
import { ScoreCategory } from "@/lib/types";
import { cn } from "@/lib/utils";

interface CategoryToggleProps {
  category: ScoreCategory;
  displayName: string;
  isSelected: boolean;
  onToggle: (category: ScoreCategory) => void;
  disabled?: boolean;
}

export const CategoryToggle = ({
  category,
  displayName,
  isSelected,
  onToggle,
  disabled = false,
}: CategoryToggleProps) => {
  return (
    <Button
      variant="outline"
      className={cn(
        "border-2 border-primary/20 hover:border-primary/40 hover:bg-black/60 transition-all duration-300 px-6 py-2 text-sm font-medium bg-black/40 backdrop-blur-sm",
        isSelected && "bg-primary text-secondary border-primary hover:bg-primary hover:border-primary",
        disabled && "opacity-50 cursor-not-allowed hover:border-primary/20 hover:bg-transparent"
      )}
      onClick={() => onToggle(category)}
      disabled={disabled}
    >
      {displayName}
    </Button>
  );
};