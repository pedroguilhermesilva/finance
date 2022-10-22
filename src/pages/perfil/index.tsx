import Head from "next/head";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import Wrapper from "./styles";

import { Container } from "../../components/Container";
import { getCsrfToken, getSession, useSession } from "next-auth/react";
import { Session } from "next-auth";

interface FormProps {
  salary1: number;
  salary2?: number;
  salaryType: "mensal" | "quinzenal" | "";
}

interface ValuesToRequestProps extends FormProps {
  date: Date;
  date2?: Date;
}

export default function Perfil({ userId }: { userId: string }) {
  const [date, setDate] = useState("");
  const [date2, setDate2] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    reset,
  } = useForm<FormProps>();

  const wacthField = watch(["salaryType"]);

  const onSubmit = async (data: FormProps) => {
    let values: ValuesToRequestProps;
    const dateCorrectFormat1 = new Date(date);
    const dateCorrectFormat2 = new Date(date2);

    date2 !== ""
      ? (values = {
          ...data,
          date: dateCorrectFormat1,
          date2: dateCorrectFormat2,
        })
      : (values = { ...data, date: dateCorrectFormat1 });

    try {
      const response = await api.post(`/profile`, {
        userId,
        salaryType: values.salaryType,
        salaryOneDate: values.date,
        salaryOneValue: Number(values.salary1),
        salaryTwoDate: values.date2 ? values.date2 : null,
        salaryTwoValue: values.salary2 ? Number(values.salary2) : null,
      });
      console.log(response.data);
      alert(response.data);
      setDate("");
      setDate2("");
      reset();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <Head>
        <title>Meu Perfil | Finance</title>
      </Head>

      <Container>
        <Wrapper>
          <h1>Meu Perfil</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <select
              {...register("salaryType", { required: true })}
              className={errors.salaryType ? "errorForm" : ""}
            >
              <option value="" defaultChecked>
                Selecione um tipo de recebimento de salário
              </option>
              <option value="quinzenal">Quinzenal</option>
              <option value="mensal">Mensal</option>
            </select>
            {errors.salaryType && (
              <span>Por favor, selecione um tipo de recebimento</span>
            )}

            {wacthField[0] && wacthField[0] !== "quinzenal" ? (
              <>
                <label htmlFor="dateForm">Data do salário</label>
                <input
                  placeholder="00/00/0000"
                  type="date"
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
                <input
                  placeholder="Preço"
                  type="number"
                  {...register("salary1", { required: true })}
                  className={errors.salary1 ? "errorForm" : ""}
                />
                {errors.salary1 && (
                  <span>Por favor, preencha o campo preço</span>
                )}
              </>
            ) : (
              <>
                {wacthField[0] && wacthField[0] !== "mensal" && (
                  <>
                    <label htmlFor="dateForm">Data da salário 1</label>
                    <input
                      placeholder="00/00/0000"
                      type="date"
                      onChange={(e) => setDate(e.target.value)}
                      required
                    />
                    <input
                      placeholder="Preço"
                      type="number"
                      {...register("salary1", { required: true })}
                      className={errors.salary1 ? "errorForm" : ""}
                    />
                    {errors.salary1 && (
                      <span>Por favor, preencha o campo preço</span>
                    )}
                    <label htmlFor="dateForm">Data da salário 2</label>
                    <input
                      placeholder="00/00/0000"
                      type="date"
                      onChange={(e) => setDate2(e.target.value)}
                      required
                    />
                    <input
                      placeholder="Preço"
                      type="number"
                      {...register("salary2", {
                        required: wacthField[0] === "quinzenal" ? true : false,
                      })}
                      className={errors.salary2 ? "errorForm" : ""}
                    />
                    {errors.salary2 && (
                      <span>Por favor, preencha o campo preço</span>
                    )}
                  </>
                )}
              </>
            )}
            <button type="submit">Cadastrar</button>
          </form>
        </Wrapper>
      </Container>
    </>
  );
}

// interface SessionServeSideProps extends Session {
//   id: string;
// }

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      userId: session.user.id,
    },
  };
}
