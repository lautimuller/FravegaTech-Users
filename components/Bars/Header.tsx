import { Grid, Typography, Box, useMediaQuery } from "@mui/material";
import FravegaLogo from "@/components/Icons/FravegaLogo";
import { styled, useTheme } from "@mui/material/styles";
import { colors } from "@/utils/colors";

const HeaderContainer = styled(Grid)(({ theme }) => ({
  marginBottom: theme.spacing(4),
  padding: theme.spacing(2, 0),
}));

const LogoContainer = styled(Box)(({ theme }) => ({
  width: 90,
  height: "auto",
  [theme.breakpoints.down("sm")]: {
    width: 60,
  },
}));

const HeaderTitle = styled(Typography)(({ theme }) => ({
  textAlign: "center",
  color: colors.black,
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.25rem",
  },
}));

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <HeaderContainer
      container
      alignItems="center"
      justifyContent={isMobile ? "center" : "flex-start"}
    >
      <Grid
        item
        xs={12}
        sm={1}
        container
        justifyContent={isMobile ? "center" : "flex-start"}
      >
        <LogoContainer>
          <FravegaLogo />
        </LogoContainer>
      </Grid>
      <Grid item xs={12} sm={11}>
        <HeaderTitle variant={isMobile ? "h6" : "h5"}>
          Fravega Tech - Git Users
        </HeaderTitle>
      </Grid>
    </HeaderContainer>
  );
};

export default Header;
