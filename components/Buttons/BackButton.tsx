import { useRouter } from "next/router";
import React from "react";
import { IconButton, Tooltip, Typography } from "@mui/material";
import BackArrowIcon from "../Icons/BackArrowIcon";

const BackButton: React.FC = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/");
  };

  return (
    <Tooltip title="Volver">
      <IconButton onClick={handleGoBack} color="primary">
        <BackArrowIcon />
        <Typography color="black" variant="subtitle1">
          Volver
        </Typography>
      </IconButton>
    </Tooltip>
  );
};

export default BackButton;
