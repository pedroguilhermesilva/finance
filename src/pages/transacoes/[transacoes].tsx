import { useRouter } from "next/router";
import Head from "next/head";
import { TransactionTable } from "../../components/TransactionTable";

import * as S from "./styles";
import CardTotal from "../../components/CardTotal";

export default function Transations() {
  const router = useRouter();
  const { transacoes } = router.query;

  return (
    <>
      <Head>
        <title>Nova Transação | Finance</title>
      </Head>

      <S.Wrapper>
        <CardTotal month={transacoes} />
        {/* <h1>Mês {transacoes}</h1> */}
        <TransactionTable type="payments" />
      </S.Wrapper>
    </>
  );
}
