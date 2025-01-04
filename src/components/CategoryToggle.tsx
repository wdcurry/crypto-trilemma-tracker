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
        "transition-all duration-300",
        isSelected && "bg-primary text-primary-foreground"
      )}
      onClick={() => onToggle(category)}
    >
      {category.charAt(0).toUpperCase() + category.slice(1)}
    </Button>
  );
};