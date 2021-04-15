import Head from "next/head";
import Link from "next/link";
import { TransactionTable } from "../../components/TransactionTable";

import * as S from "./styles";

export default function NewTransaction() {
  return (
    <>
      <Head>
        <title>Nova Transação | Finance</title>
      </Head>

      <S.Wrapper>
        <h1>Nova transação</h1>
        <TransactionTable />
      </S.Wrapper>
    </>
  );
}
