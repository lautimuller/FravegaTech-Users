import React from "react";
import { Box, Skeleton } from "@mui/material";
import { styled } from "@mui/material/styles";

const CardContainerSkeleton = styled(Box)(({ theme }) => ({
  padding: theme.spacing(2),
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: theme.shape.borderRadius,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
}));

const UserCardSkeleton: React.FC = () => {
  return (
    <CardContainerSkeleton>
      <Skeleton variant="circular" width={96} height={96} />
      <Skeleton variant="text" width={80} height={24} sx={{ mt: 2, mb: 2 }} />
      <Skeleton variant="rectangular" width={24} height={24} />
    </CardContainerSkeleton>
  );
};

export default UserCardSkeleton;
