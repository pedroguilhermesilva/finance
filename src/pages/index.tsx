import Head from "next/head";
import { TransactionTable } from "../components/TransactionTable";

import * as S from "./styles";

export default function Home() {
  return (
    <>
      <Head>
        <title>Meses | Finance</title>
      </Head>

      <S.Wrapper>
        <h1>Meses</h1>
        <TransactionTable />
      </S.Wrapper>
    </>
  );
}
