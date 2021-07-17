import Head from "next/head";

import { Container } from "../../components/Container";
import { TransactionTable } from "../../components/TransactionTable";

import Wrapper from "./styles";

export default function SignIn() {
  return (
    <>
      <Head>
        <title>Finance</title>
      </Head>

      <Container>
        <Wrapper>
          <h1>Meses</h1>
          <TransactionTable type="months" />
        </Wrapper>
      </Container>
    </>
  );
}
