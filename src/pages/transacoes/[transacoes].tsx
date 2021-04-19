import { useRouter } from "next/router";
import Head from "next/head";
import { TransactionTable } from "../../components/TransactionTable";

import Wrapper from "./styles";
import CardTotal from "../../components/CardTotal";

export default function Transations() {
  const { query, asPath } = useRouter();
  const { transacoes } = query;

  return (
    <>
      <Head>
        <title>Nova Transação | Finance</title>
      </Head>

      <Wrapper pathActive={asPath}>
        <CardTotal month={transacoes} />
        {/* <h1>Mês {transacoes}</h1> */}
        <TransactionTable type="payments" />
      </Wrapper>
    </>
  );
}
