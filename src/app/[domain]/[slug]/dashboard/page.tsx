"use client";
import { Button, Divider } from "@mui/material";
import { NextPage } from "next/types";
import { useEffect } from "react";
import CountryListArc from "@/components/list/country-list-arc";
import { signOut, useSession } from "next-auth/react";
const Dashboard: NextPage = () => {
  const { data: session } = useSession();
  useEffect(() => {});
  return (
    <>
      <h1> {"Arc Dashboard Page"}</h1>
      <Divider></Divider>
      <h3>{`Hello ${session?.user?.firstName} !! `}</h3>
      <Button variant="outlined" onClick={() => signOut()}>
        Sign Out
      </Button>
      <h3>{`Client Component`}</h3>
      <CountryListArc componentType={null}></CountryListArc>
      <br></br>
      <h3>{`Server Component`}</h3>
      <CountryListArc componentType={"server"}></CountryListArc>
    </>
  );
};
export default Dashboard;
