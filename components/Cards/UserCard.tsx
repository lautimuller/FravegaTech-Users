import { useFavorites } from "@/context/FavoriteContext";
import Link from "next/link";
import React from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { UserCardProps } from "@/types/types";
import { styled } from "@mui/material/styles";
import { colors } from "@/utils/colors";

const CardContainer = styled("div")(({ theme }) => ({
  padding: theme.spacing(2),
  border: `1px solid rgb(128, 29, 217)`,
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const UserLink = styled(Link)(({ theme }) => ({
  marginBottom: theme.spacing(2),
  textDecoration: "none",
  textAlign: "center",
}));

const UserImage = styled("img")(({ theme }) => ({
  width: theme.spacing(12),
  height: theme.spacing(12),
  borderRadius: "50%",
  marginBottom: theme.spacing(1),
}));

const UserName = styled("h2")(({ theme }) => ({
  fontSize: theme.typography.h6.fontSize,
  fontWeight: theme.typography.fontWeightMedium,
  color: theme.palette.text.primary,
}));

const UserCard: React.FC<UserCardProps> = ({ user }) => {
  const { isFavorite } = useFavorites();

  return (
    <CardContainer>
      <UserLink href={`/users/${user.login}`}>
        <UserImage src={user.avatar_url} alt={user.login} />
        <UserName>{user.login}</UserName>
      </UserLink>
      {isFavorite(user) ? (
        <FavoriteIcon sx={{ color: colors.violet }} />
      ) : (
        <FavoriteBorderIcon sx={{ color: colors.violet }} />
      )}
    </CardContainer>
  );
};

export default UserCard;