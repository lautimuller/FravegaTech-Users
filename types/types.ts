export interface User {
  id: number;
  login: string;
  avatar_url: string;
  url: string;
}

export interface UserContextProps {
  users: User[];
  allUsers: User[];
  fetchAllUsers: () => void;
  searchUsers: (query: string) => void;
  isLoading: boolean;
}

export interface UserCardProps {
  user: User;
}

export interface UserDetailProps {
  user: any;
}

export interface FavoriteButtonProps {
  isFavorite: boolean;
  onToggle: () => void;
}
