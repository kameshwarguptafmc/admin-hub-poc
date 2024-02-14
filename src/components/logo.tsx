"use client";
import ArcLogoWhite from "@/icons/ArcLogoWhite";
import { Box, BoxProps, Link as MuiLink } from "@mui/material";
import Link from "next/link";
import { forwardRef } from "react";

export interface LogoProps extends BoxProps {
  disabledLink?: boolean;
}

const Logo = forwardRef<HTMLDivElement, LogoProps>(
  ({ disabledLink = false, sx, ...other }, ref) => {
    const logo = (
      <Box
        ref={ref}
        sx={{
          height: 53,
          paddingX: 1.5,
          ...sx,
        }}
        {...other}
      >
        <ArcLogoWhite />
      </Box>
    );

    if (disabledLink) {
      return logo;
    }

    return (
      <MuiLink component={Link} sx={{ display: "contents" }} href="/">
        {logo}
      </MuiLink>
    );
  },
);

export default Logo;
