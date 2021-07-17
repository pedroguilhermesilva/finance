import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { FcGoogle } from "react-icons/fc";

import { useAuth } from "../contexts/AuthContext";
// import { TransactionTable } from "../components/TransactionTable";

// import Wrapper from "./styles";

export default function SignIn() {
  const router = useRouter();
  const { user, signInWithGoogle } = useAuth();

  useEffect(() => {
    if (user) {
      router.push("/home");
    } else {
      router.push("/");
    }
  }, [user]);

  async function handleSignUp() {
    await signInWithGoogle();
  }
  return (
    <>
      <Head>
        <title>Meses | Finance</title>
      </Head>

      {/* <Wrapper>
        <h1>Meses</h1>
        <TransactionTable type="months" />
      </Wrapper> */}

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#5636D3",
        }}
      >
        <img
          style={{
            height: "100vh",
            objectFit: "cover",
            width: "50%",
          }}
          src="https://images.unsplash.com/photo-1561414926-7f3f921a2e18?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1952&q=80"
          alt=""
        />
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            // width: "100%",
            // maxWidth: "350px",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <img
              style={{
                height: "64px",
              }}
              src={"/images/money.svg"}
              alt="Be The Hero"
            />

            <p
              style={{
                marginLeft: "0.8rem",
                fontSize: "2.5rem",
                fontWeight: "bold",
                whiteSpace: "nowrap",
                color: "#fff",
              }}
            >
              My Finance
            </p>
          </div>

          <button
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "1rem",
              padding: "0.6rem",
              borderRadius: "0.5rem",
              border: "0",
              fontSize: "1rem",
            }}
            onClick={handleSignUp}
          >
            <FcGoogle size={35} />
            Entrar com conta google
          </button>
          {/* <button onClick={handleSignUp}>Entrar com conta facebook</button> */}
        </section>
      </div>
    </>
  );
}
