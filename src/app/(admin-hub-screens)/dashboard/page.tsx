"use client";
import { Button, Divider } from "@mui/material";
import { NextPage } from "next/types";
import { useEffect } from "react";
import CountryList from "@/components/list/country-list";
import { signOut, useSession } from "next-auth/react";

const Dashboard: NextPage = () => {
  const { data: session } = useSession();

  useEffect(() => {});
  return (
    <>
      <h1> {"Admin Dashboard"}</h1>
      <Divider></Divider>
      <h3>{`Hello ${session?.user?.firstName} !! `}</h3>
      <Button variant="outlined" onClick={() => signOut()}>
        Sign Out
      </Button>
      <h3>{`Client Component`}</h3>
      <CountryList componentType={null}></CountryList>
      <br></br>
      <h3>{`Server Component`}</h3>
      <CountryList componentType={"server"}></CountryList>
    </>
  );
};
export default Dashboard;
