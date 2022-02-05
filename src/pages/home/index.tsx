import { GetServerSideProps } from "next";
import Head from "next/head";
import { parseCookies } from "nookies";

import { Container } from "../../components/Container";
import { TransactionTable } from "../../components/TransactionTable";

import Wrapper from "./styles";

type UserInfo = {
  id: string;
  name: string;
  avatar: string;
};

type User = {
  user: UserInfo;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { userInfo } = parseCookies(context);
  const user = userInfo ? JSON.parse(userInfo) : null;

  return {
    redirect: !user && {
      destination: "/",
    },
    props: {
      user,
    },
  };
};

export default function Home({ user }: User) {
  return (
    <>
      <Head>
        <title>Finance</title>
      </Head>

      <Container>
        <Wrapper>
          <h1>Meses</h1>
          <h1>{user.name}</h1>
          <TransactionTable type="months" />
        </Wrapper>
      </Container>
    </>
  );
}
