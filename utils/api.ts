import { toast } from 'react-toastify';

export const fetchUserDetails = async (username: string) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      toast.error(`Error al buscar ${username}. Porfavor intente nuevamente.`);
    }
    return await response.json();
  } catch (error) {
    toast.error(`Error al buscar ${username}. Porfavor intente nuevamente.`);
    return null;
  }
};

export const fetchAllUsers = async (): Promise<any[]> => {
  try {
    const response = await fetch("https://api.github.com/users");
    if (!response.ok) {
      toast.error(`Error al obtener usuarios. Porfavor intente nuevamente 😀`);
    }
    return await response.json();
  } catch (error: any) {
    toast.error(`Error al obtener usuarios. Porfavor intente nuevamente 😀`);
    return [];
  }
};

export const searchUsers = async (query: string): Promise<any[]> => {
  try {
    const response = await fetch(
      `https://api.github.com/search/users?q=${query}`
    );
    if (!response.ok) {
      toast.error(`Error al buscar ${query}. Porfavor intente nuevamente.`);
    }
    const data = await response.json();
    return data.items || [];
  } catch (error) {
    toast.error(`Error al buscar ${query}. Porfavor intente nuevamente.`);
    return [];
  }
};
