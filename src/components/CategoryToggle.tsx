import { Button } from "@/components/ui/button";
import { ScoreCategory } from "@/lib/types";
import { cn } from "@/lib/utils";

interface CategoryToggleProps {
  category: ScoreCategory;
  isSelected: boolean;
  onToggle: (category: ScoreCategory) => void;
}

export const CategoryToggle = ({
  category,
  isSelected,
  onToggle,
}: CategoryToggleProps) => {
  return (
    <Button
      variant="outline"
      className={cn(
        "border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 px-6 py-2 text-sm font-medium bg-black/40 backdrop-blur-sm",
        isSelected && "bg-primary text-secondary border-primary hover:bg-primary/90 hover:border-primary"
      )}
      onClick={() => onToggle(category)}
    >
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </Button>
  );
};