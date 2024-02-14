"use client";

import React from "react";
import NavVertical from "./nav-vertical";
import styled from "@emotion/styled";
import { Stack } from "@mui/material";

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

const DashboardLayout = ({ children }: Props): JSX.Element => {
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

export default DashboardLayout;
