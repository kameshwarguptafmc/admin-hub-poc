"use client";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button/Button";
import { signIn } from "next-auth/react";
import React from "react";

const LoginEvents = () => {
  return (
    <>
      <Button
        variant="contained"
        onClick={() => {
          signIn("azure-ad");
        }}
      >
        Azure SSO
      </Button>
      <Box sx={{ p: 2 }} />
      <Button
        variant="contained"
        onClick={() => {
          signIn("github");
        }}
      >
        Github SSO
      </Button>{" "}
    </>
  );
};

export default LoginEvents;
