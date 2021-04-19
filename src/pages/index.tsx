import Head from "next/head";
import { TransactionTable } from "../components/TransactionTable";

import Wrapper from "./styles";

export default function Home() {
  return (
    <>
      <Head>
        <title>Meses | Finance</title>
      </Head>

      <Wrapper>
        <h1>Meses</h1>
        <TransactionTable type="months" />
      </Wrapper>
    </>
  );
}
