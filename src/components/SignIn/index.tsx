import Head from "next/head";
import { FcGoogle } from "react-icons/fc";

import { useAuth } from "../../contexts/AuthContext";

import { Wrapper, Image, Section } from "./styles";

export default function SignIn() {
  const { signInWithGoogle } = useAuth();

  async function handleSignUp() {
    await signInWithGoogle();
  }
  return (
    <>
      <Head>
        <title>Finance</title>
      </Head>

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

          <button onClick={handleSignUp}>
            <FcGoogle className="icon-google" size={35} />
            Entrar com conta google
          </button>
        </Section>
      </Wrapper>
    </>
  );
}
