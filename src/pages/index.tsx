import React from "react";
import { Loader } from "../components/Loader";
import SignIn from "../components/SignIn";

const Index = () => {
  return (
    <>
      {/* <Loader isLoading={status === "loading"} /> */}
      <SignIn />
    </>
  );
};

export default Index;
