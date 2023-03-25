import { useEffect, useState } from "react";
import Head from "next/head";

import "react-datepicker/dist/react-datepicker.css";

import { getSession, useSession } from "next-auth/react";

import { Container } from "../../components/Container";
import { TransactionTable } from "../../components/TransactionTable";

import { Wrapper } from "./styles";
import { useRouter } from "next/router";
import YearSelect from "../../components/YearSelect";
import { api } from "../../services/api";

type UserInfo = {
  id: string;
  name: string;
  avatar: string;
};

type User = {
  user: UserInfo;
};

// interface ReportsProps {
//   id: string;
//   title: string;
//   price: string;
//   date: string;
//   categoriesId: string;
//   profileId: string;
// }

interface ReportsProps {
  month: string;
  amount: number;
  salaryType: "quinzenal" | "mensal";
  salaryOneDate: string;
  salaryTwoDate: string;
}

export default function Home({ data, userId }) {
  const { status, data: sesssion } = useSession();
  const [today, setToday] = useState<Date>(new Date());
  const [reports, setReports] = useState<ReportsProps[]>([] as ReportsProps[]);

  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/");
    }
  }, [status]);

  const handleChangeYears = async (date: Date) => {
    setToday(date);
  };

  useEffect(() => {
    const getReports = async (date: Date) => {
      const response = await api.get(`/reports?year=${date}`, {
        headers: {
          "user-id": userId,
        },
      });
      setReports(response.data);
    };
    if (today) {
      getReports(today);
    }
  }, [today]);

  useEffect(() => {
    if (data) {
      setReports(data);
    }
  }, [data]);

  return (
    <>
      <Head>
        <title>Finance</title>
      </Head>
      <Container>
        <Wrapper>
          <YearSelect onChangeYear={handleChangeYears} date={today} />
          {reports.length > 0 ? (
            <TransactionTable type="months" data={reports} />
          ) : (
            <p>Não há dado nenhum para o ano selecionado.</p>
          )}
        </Wrapper>
      </Container>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const date = new Date();

  const response = await api.get(`/reports?year=${date}`, {
    headers: {
      "user-id": session.user?.id,
    },
  });

  return {
    props: {
      userId: session.user.id,
      data: response.data,
    },
  };
}
