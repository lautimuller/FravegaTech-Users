import { Box } from "@mui/material";
import SearchBar from "@/components/Bars/SearchBar";
import { useUserContext } from "@/context/UserContext";
import React, { useEffect } from "react";
import Header from "@/components/Bars/Header";
import UserList from "@/components/Lists/UserList";
import styles from "@/styles/Home.module.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function Home() {
  const { users, fetchAllUsers, isLoading } = useUserContext();

  useEffect(() => {
    fetchAllUsers();
  }, []);

  return (
    <Box component="main" className={styles.main}>
      <Header />
      <SearchBar />
      <UserList users={users} isLoading={isLoading} />
      <ToastContainer />
    </Box>
  );
}
