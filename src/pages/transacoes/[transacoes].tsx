import { useRouter } from "next/router";
import Head from "next/head";

import { Container } from "../../components/Container";
import { TransactionTable } from "../../components/TransactionTable";
import CardTotal from "../../components/CardTotal";

import Wrapper from "../../styles/pages/transacoes";
import { useEffect } from "react";
import { getMonth, parseISO } from "date-fns";
import { useSession } from "next-auth/react";
import { api } from "../../services/api";

const monthsNumber = {
  January: "01",
  February: "02",
  March: "03",
  April: "04",
  May: "05",
  June: "06",
  July: "07",
  August: "08",
  September: "09",
  October: "10",
  November: "11",
  December: "12",
};

export default function Transations() {
  const { data: session } = useSession();
  const { query, asPath } = useRouter();
  const { transacoes, date, year } = query;

  useEffect(() => {
    const getReports = async (date) => {
      const url =
        date === "all"
          ? `/reports/transactions?date=${date}&month=${
              monthsNumber[`${transacoes}`]
            }&year=${year}`
          : `/reports/transactions?date=${date}`;
      const response = await api.get(`${url}`, {
        headers: {
          "user-id": session?.user?.id,
        },
      });
    };

    getReports(date);
  }, [query]);

  return (
    <>
      <Head>
        <title>Transações | Finance</title>
      </Head>

      <Container>
        <Wrapper pathActive={asPath}>
          <CardTotal month={transacoes} />
          <TransactionTable data={[]} type="payments" />
        </Wrapper>
      </Container>
    </>
  );
}
