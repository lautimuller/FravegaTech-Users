import { User } from "@/types/types";
import React, { createContext, useContext, useState } from "react";

interface FavoritesContextType {
  favorites: User[];
  isFavorite: (user: User) => boolean;
  addFavorite: (user: User) => void;
  removeFavorite: (user: User) => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [favorites, setFavorites] = useState<User[]>([]);

  const isFavorite = (user: User) =>
    favorites.some((fav) => fav.login === user.login);

  const addFavorite = (user: User) => {
    if (!isFavorite(user)) {
      setFavorites([...favorites, user]);
    }
  };

  const removeFavorite = (user: User) => {
    setFavorites(favorites.filter((fav) => fav.login !== user.login));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, isFavorite, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
