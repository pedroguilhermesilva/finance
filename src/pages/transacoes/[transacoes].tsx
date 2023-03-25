import { useRouter } from "next/router";
import Head from "next/head";

import { Container } from "../../components/Container";
import { TransactionTable } from "../../components/TransactionTable";
import CardTotal from "../../components/CardTotal";

import Wrapper from "../../styles/pages/transacoes";

export default function Transations() {
  const { query, asPath } = useRouter();
  const { transacoes } = query;

  return (
    <>
      <Head>
        <title>Transações | Finance</title>
      </Head>

      <Container>
        <Wrapper pathActive={asPath}>
          <CardTotal month={transacoes} />
          {/* <h1>Mês {transacoes}</h1> */}
          <TransactionTable data={[]} type="payments" />
        </Wrapper>
      </Container>
    </>
  );
}
