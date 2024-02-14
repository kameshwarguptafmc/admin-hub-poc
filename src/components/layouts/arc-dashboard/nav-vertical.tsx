"use client";
import { Box, Stack, useTheme } from "@mui/material";
import Logo from "../../logo";

const NavVertical = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: 120 },
        backgroundColor: "gray",
        color: theme.palette.common.white,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
      pt={5}
    >
      <Stack sx={{ height: 200, justifyContent: "space-between" }}>
        <Logo />
      </Stack>
    </Box>
  );
};

export default NavVertical;
