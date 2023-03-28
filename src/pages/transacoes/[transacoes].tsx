import { useRouter } from "next/router";
import Head from "next/head";

import { Container } from "../../components/Container";
import { TransactionTable } from "../../components/TransactionTable";
import CardTotal from "../../components/CardTotal";

import Wrapper from "../../styles/pages/transacoes";
import { useEffect, useState } from "react";
import { getSession } from "next-auth/react";
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

interface CategoriesProps {
  id: string;
  title: string;
}

interface TransactionsProps {
  categories: CategoriesProps;
  date: string;
  id: string;
  price: string;
  title: string;
}

export default function Transations({
  month,
  data,
}: {
  month: string;
  data: TransactionsProps[];
}) {
  const { asPath } = useRouter();
  const [transactions, setTransactions] = useState([]);
  const [amount, setAmount] = useState<number>(0);

  useEffect(() => {
    if (data) {
      const total = data.reduce((acc, item) => {
        const price = Number(item.price);
        acc += price;
        return acc;
      }, 0);
      setAmount(total);
      setTransactions(data);
    }
  }, [data]);

  return (
    <>
      <Head>
        <title>Transações | Finance</title>
      </Head>

      <Container>
        <Wrapper pathActive={asPath}>
          <CardTotal month={month} price={amount} />
          {transactions.length > 0 && (
            <TransactionTable data={transactions} type="payments" />
          )}
        </Wrapper>
      </Container>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const { query } = context;
  const { transacoes, date, year } = query;

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

  return {
    props: {
      month: transacoes,
      data: response.data,
    },
  };
}
