import Head from "next/head";
import { FcGoogle } from "react-icons/fc";
import { AiFillGithub } from "react-icons/ai";
import { signIn } from "next-auth/react";
import { Loader } from "../../components/Loader";

import { Wrapper, Image, Section } from "./styles";
import { useState } from "react";

export default function SignIn() {
  const [loading, setLoading] = useState(false);
  return (
    <>
      <Head>
        <title>Finance</title>
      </Head>

      <Loader isLoading={loading} />

      <Wrapper>
        <Image
          src="https://images.unsplash.com/photo-1561414926-7f3f921a2e18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80"
          alt="Finance saving money"
        />
        <Section>
          <div>
            <img src={"/images/money.svg"} alt="Be The Hero" />
            <p>My Finance</p>
          </div>

          <button
            onClick={() => {
              signIn("google", {
                callbackUrl: "/home",
              });
              setLoading(true);
            }}
          >
            <FcGoogle className="icon-google" size={35} />
            Entrar com Google
          </button>
          <button
            onClick={() => {
              signIn("github", {
                callbackUrl: "/home",
              });
              setLoading(true);
            }}
          >
            <AiFillGithub className="icon-google" size={35} />
            Entrar com GitHub
          </button>
        </Section>
      </Wrapper>
    </>
  );
}
