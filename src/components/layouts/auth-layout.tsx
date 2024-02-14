"use client";
import ArcLogoBlack from "@/icons/ArcLogoBlack";
import { BLURRED_PRELOAD, NONBLURREDIMAGE } from "@/utils/images";
import { Grid, Stack, useTheme } from "@mui/material";
import Image from "next/image";
import React from "react";
import styled from "@emotion/styled";

interface Props {
  children: React.ReactNode;
}

const ImageColumn = styled(Grid)({
  display: "flex",
  justifyContent: "stretch",
  height: "100vh",
  position: "relative",
});

const ContentColumn = styled(Grid)({
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
  position: "absolute",
  top: "0",
  right: "0",
  bottom: "0",
  width: "50%",
});

const AuthLayout = ({ children }: Props): JSX.Element => {
  const theme = useTheme();

  return (
    <Grid container>
      <ImageColumn item xs={12} md={6} lg={6}>
        <Stack sx={{ width: "100%" }}>
          <Image
            alt="Farm view"
            blurDataURL={BLURRED_PRELOAD}
            layout="fill"
            placeholder="blur"
            priority
            src={NONBLURREDIMAGE}
            objectFit="cover"
          />
        </Stack>
      </ImageColumn>

      <ContentColumn item xs={12} md={6} lg={6}>
        <Stack sx={{ padding: theme.spacing(7.5, 10) }}>
          <Stack sx={{ marginBottom: theme.spacing(9), pl: 0 }}>
            <ArcLogoBlack />
          </Stack>
          {children}
        </Stack>
      </ContentColumn>
    </Grid>
  );
};

export default AuthLayout;
