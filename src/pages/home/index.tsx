import { useEffect, useState } from "react";
import Head from "next/head";

import "react-datepicker/dist/react-datepicker.css";

import { getSession, useSession } from "next-auth/react";

import { Container } from "../../components/Container";
import { TransactionTable } from "../../components/TransactionTable";

import { Wrapper } from "./styles";
import { useRouter } from "next/router";
import YearSelect from "../../components/YearSelect";

type UserInfo = {
  id: string;
  name: string;
  avatar: string;
};

type User = {
  user: UserInfo;
};

export default function Home() {
  const { status } = useSession();
  const [data, setData] = useState([]);
  const [today, setToday] = useState<Date>(new Date());

  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status]);

  const handleChangeYears = async (date: Date) => {
    const session = await getSession();
    console.log("session", session);
    setToday(date);
  };

  return (
    <>
      <Head>
        <title>Finance</title>
      </Head>
      <Container>
        {data.length > 0 ? (
          <Wrapper>
            <YearSelect onChangeYear={handleChangeYears} date={today} />
            <TransactionTable type="months" />
          </Wrapper>
        ) : (
          <p>Ainda não há dado nenhum a ser exibido.</p>
        )}
      </Container>
    </>
  );
}
