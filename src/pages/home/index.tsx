import { useEffect, useState } from "react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { parseCookies } from "nookies";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ArrowLeft, ArrowRight } from "phosphor-react";
import { addYears, subYears } from "date-fns";
import { useSession } from "next-auth/react";

import { Container } from "../../components/Container";
import { TransactionTable } from "../../components/TransactionTable";
import theme from "../../styles/themes/normal";
import { api } from "../../services/api";

import { Wrapper, ContainerYear } from "./styles";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/router";

type UserInfo = {
  id: string;
  name: string;
  avatar: string;
};

type User = {
  user: UserInfo;
};

export default function Home({ user }: User) {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [today, setToday] = useState<Date>(new Date());

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status]);

  return (
    <>
      <Head>
        <title>Finance</title>
      </Head>

      <Container>
        <Wrapper>
          <ContainerYear>
            <ArrowLeft
              className="left"
              size={24}
              onClick={() => setToday((date) => subYears(date, 1))}
              color={theme.colors.orange}
            />
            <label htmlFor="datePicker">Ano atual: </label>
            <DatePicker
              id="datePicker"
              selected={today}
              onChange={(date: Date) => setToday(date)}
              showYearPicker
              dateFormat="yyyy"
            />
            <ArrowRight
              className="right"
              size={24}
              onClick={() => setToday((date) => addYears(date, 1))}
              color={theme.colors.orange}
            />
          </ContainerYear>
          <TransactionTable type="months" />
        </Wrapper>
      </Container>
    </>
  );
}
