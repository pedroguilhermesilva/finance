import React from "react";
import { Loader } from "../components/Loader";
import SignIn from "../components/SignIn";
import { useAuth } from "../contexts/AuthContext";

const Index = () => {
  const { user } = useAuth();
  return (
    <>
      <Loader isLoading={!!user} />
      <SignIn />
    </>
  );
};

export default Index;
