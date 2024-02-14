"use client";
import { Stack } from "@mui/material";
import React from "react";
import NavVertical from "./nav-vertical";
import styled from "@emotion/styled";
interface Props {
  children: React.ReactNode;
}

const Layout = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  height: "100vh",
});

const ContentLayout = styled(Stack)({
  display: "flex",
  flexDirection: "column",
  overflowY: "auto",
  width: "100%",
});

const ArcDashboardLayout = ({ children }: Props): JSX.Element => {
  return (
    <Layout>
      <NavVertical />
      <ContentLayout>
        <Stack px={6} py={4}>
          {children}
        </Stack>
      </ContentLayout>
    </Layout>
  );
};

export default ArcDashboardLayout;
