import { UserContextProps, User } from "@/types/types";
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { fetchAllUsers, searchUsers } from "@/utils/api";
import { toast } from "react-toastify";

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const useUserContext = (): UserContextProps => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUserContext debe ser usado dentro de UserProvider");
  }
  return context;
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [users, setUsers] = useState<User[]>([]);
  const [allUsers, setAllUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handleFetchAllUsers = async () => {
    setIsLoading(true);
    let data: User[] = [];
    if (allUsers.length == 0) {
      data = await fetchAllUsers();
      setUsers(data);
      setAllUsers(data);
    } else {
      setUsers(allUsers);
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 800);
  };

  const handleSearchUsers = async (query: string) => {
    setIsLoading(true);
    const data = await searchUsers(query);
    setUsers(data);
    setIsLoading(false);
  };

  useEffect(() => {
    handleFetchAllUsers();
  }, []);

  return (
    <UserContext.Provider
      value={{
        users,
        allUsers,
        fetchAllUsers: handleFetchAllUsers,
        searchUsers: handleSearchUsers,
        isLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
