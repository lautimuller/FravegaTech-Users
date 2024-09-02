import { TextField, Stack } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useUserContext } from "@/context/UserContext";
import React, { useState, useEffect } from "react";
import { colors } from "@/utils/colors";

const StyledTextField = styled(TextField)(() => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: colors.violet,
    },
    "&:hover fieldset": {
      borderColor: colors.darkViolet,
    },
    "&.Mui-focused fieldset": {
      borderColor: colors.lightViolet,
    },
    "& input": {
      color: colors.black,
    },
    "& input::placeholder": {
      color: colors.lightViolet,
    },
  },
  "& .MuiInputLabel-root": {
    color: colors.lightViolet,
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: colors.lightViolet,
  },
}));

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState("");
  const { searchUsers, fetchAllUsers } = useUserContext();

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query.trim()) {
        searchUsers(query);
      } else {
        fetchAllUsers();
      }
    }, 800);

    return () => clearTimeout(delayDebounceFn);
  }, [query]);

  return (
    <Stack direction="row" spacing={2} alignItems="center" mb={4}>
      <StyledTextField
        label="Search GitHub Users"
        variant="outlined"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        fullWidth
      />
    </Stack>
  );
};

export default SearchBar;
