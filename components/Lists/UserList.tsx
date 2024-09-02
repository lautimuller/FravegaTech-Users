import React from "react";
import { Grid, Container } from "@mui/material";
import UserCard from "@/components/Cards/UserCard";
import { User } from "@/types/types";
import Image from "next/image";
import UserCardSkeleton from "../Skeletons/CardContainerSkeleton";

interface UserListProps {
  users: User[];
  isLoading: boolean;
}

const UserList: React.FC<UserListProps> = ({ users, isLoading }) => (
  <Grid container spacing={4} paddingBottom={4}>
    {isLoading ? (
      Array.from(new Array(8)).map((_, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <UserCardSkeleton />
        </Grid>
      ))
    ) : users.length > 0 ? (
      users.map((user: User) => (
        <Grid item key={user.id} xs={12} sm={6} md={4} lg={3}>
          <UserCard user={user} />
        </Grid>
      ))
    ) : (
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          marginTop: "10%",
        }}
      >
        <Image src={require("../Images/NoData.png")} alt="NoDataFound" />
      </Container>
    )}
  </Grid>
);

export default UserList;
