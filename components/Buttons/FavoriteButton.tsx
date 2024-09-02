import { FavoriteButtonProps } from "@/types/types";
import React from "react";

const FavoriteButton: React.FC<FavoriteButtonProps> = ({
  isFavorite,
  onToggle,
}) => {
  return (
    <button
      onClick={onToggle}
      aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
    >
      {isFavorite ? "❤️" : "🤍"}
    </button>
  );
};

export default FavoriteButton;
