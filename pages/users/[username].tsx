import BackButton from "@/components/Buttons/BackButton";
import { useFavorites } from "@/context/FavoriteContext";
import { fetchUserDetails } from "@/utils/api";
import { GetServerSideProps } from "next";
import { useState } from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Avatar,
  IconButton,
  Paper,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { UserDetailProps } from "@/types/types";
import { styled } from "@mui/material/styles";
import { colors } from "@/utils/colors";

const MainContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
  marginBottom: theme.spacing(4),
  width: "60%",
}));

const HeaderContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  marginBottom: theme.spacing(3),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const Title = styled(Typography)(({ theme }) => ({
  flexGrow: 1,
  textAlign: "center",
  marginBottom: theme.spacing(3),
  fontSize: 24,
  fontWeight: "600",
}));

const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(4),
  boxShadow: `0px 0px 20px ${colors.violet}`,
}));

const StyledAvatar = styled(Avatar)(({ theme }) => ({
  width: 100,
  height: 100,
  marginBottom: theme.spacing(2),
}));

const FavoriteButton = styled(IconButton, {
  shouldForwardProp: (prop) => prop !== "favorite",
})<{}>(({}) => ({
  color: colors.violet,
  borderRadius: "50%",
}));

const UserDetail: React.FC<UserDetailProps> = ({ user }) => {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const [isUserFavorite, setIsUserFavorite] = useState(isFavorite(user));

  const handleFavoriteToggle = () => {
    if (isUserFavorite) {
      removeFavorite(user);
    } else {
      addFavorite(user);
    }
    setIsUserFavorite(!isUserFavorite);
  };

  return (
    <MainContainer>
      <HeaderContainer>
        <BackButton />
      </HeaderContainer>
      <StyledPaper elevation={2}>
        <Title variant="h4">{user.login}</Title>
        <StyledCard>
          <StyledAvatar src={user.avatar_url} alt={user.login} />
          <CardContent>
            <Typography variant="body1" gutterBottom align="center">
              {user.bio}
            </Typography>
            <Typography variant="body2" color="textSecondary">
              Public Repos: {user.public_repos}
            </Typography>
          </CardContent>
          <FavoriteButton onClick={handleFavoriteToggle}>
            {isUserFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </FavoriteButton>
        </StyledCard>
      </StyledPaper>
    </MainContainer>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { username } = context.params!;
  const user = await fetchUserDetails(username as string);

  return {
    props: {
      user,
    },
  };
};

export default UserDetail;
