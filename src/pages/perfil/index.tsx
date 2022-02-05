import Head from "next/head";
import { parseCookies } from "nookies";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { api } from "../../services/api";

import { Container } from "../../components/Container";
import Wrapper from "./styles";
import { GetServerSideProps } from "next/types";
import { getDataSearchByOne } from "../../services/profile";
import formatDate from "../../utils/formatDate";
import fomartDateToSetDefaultInputDate from "../../utils/fomartDateToSetDefaultInputDate";

interface FormProps {
  name: string;
  salaryType: "mensal" | "quinzenal" | "";
  dateSalaryFirst: string;
  dateSalaryFirstPrice: string;
  dateSalarySecond: string;
  dateSalarySecondPrice: string;
}

export type ProfileData = {
  date_salary_first: string;
  date_salary_first_price: string;
  date_salary_second: string;
  date_salary_second_price: string;
  id: string;
  name: string;
  salary_type: "mensal" | "quinzenal" | "";
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const cookies: any = parseCookies(ctx);

  const response = await getDataSearchByOne(
    cookies["userInfo"],
    "users",
    "name",
    "Pedro",
    "=="
  );

  return {
    props: {
      profile: response,
    },
  };
};

export default function Perfil({ profile }: { profile: ProfileData }) {
  const [date, setDate] = useState("");
  const [date2, setDate2] = useState("");
  const [profileData] = useState<ProfileData>(profile[0]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    getValues,
    reset,
  } = useForm<FormProps>({
    defaultValues: {
      name: profileData.name,
      salaryType: profileData.salary_type,
      dateSalaryFirst: fomartDateToSetDefaultInputDate(
        profileData.date_salary_first
      ),
      dateSalaryFirstPrice: profileData.date_salary_first_price
        ? profileData.date_salary_first_price
        : "",
      dateSalarySecond: fomartDateToSetDefaultInputDate(
        profileData.date_salary_second
      ),
      dateSalarySecondPrice: profileData.date_salary_second_price,
    },
  });

  const wacthField = watch(["salaryType"]);

  const onSubmit = async (data: FormProps) => {
    let values;

    date2 !== ""
      ? (values = { ...data, date, date2 })
      : (values = { ...data, date });

    try {
      const response = await api.post("/register", values);
      alert(`${response.data}`);
      setDate("");
      setDate2("");
      reset();
    } catch (err) {
      alert(err.message);
    }
  };

  // useEffect(() => {
  //   if (profileData) {
  //     setValue("name", profileData.name);
  //     setValue("salaryType", profileData.salary_type);
  //     setValue(
  //       "dateSalaryFirst",
  //       new Date(profileData.date_salary_first).toISOString().substring(0, 10)
  //     );
  //     setValue("dateSalaryFirstPrice", profileData.date_salary_first_price);
  //   }
  // }, [profileData]);

  useEffect(() => {
    const test = getValues();
    console.log("test", test);
  }, [getValues]);

  return (
    <>
      <Head>
        <title>Meu Perfil | Finance</title>
      </Head>

      <Container>
        <Wrapper>
          <h1>Meu Perfil</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              placeholder="Nome"
              type="text"
              {...register("name", { required: true })}
              className={errors.name ? "errorForm" : ""}
            />
            {errors.name && <span>Por favor, preencha o campo título</span>}
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

            {wacthField[0] !== undefined &&
            wacthField[0] !== "" &&
            wacthField[0] !== "quinzenal" ? (
              <>
                <label htmlFor="dateForm">Data do salário</label>
                <input
                  defaultValue={profile.date_salary_first}
                  placeholder="00/00/0000"
                  type="date"
                  {...register("dateSalaryFirst", { required: true })}
                  className={errors.dateSalaryFirst ? "errorForm" : ""}
                  onChange={(e) => setDate(e.target.value)}
                />
                {errors.dateSalaryFirst && (
                  <span>Por favor, preencha o campo data salário</span>
                )}
                <input
                  placeholder="Preço"
                  type="number"
                  {...register("dateSalaryFirstPrice", { required: true })}
                  className={errors.dateSalaryFirstPrice ? "errorForm" : ""}
                />
                {errors.dateSalaryFirstPrice && (
                  <span>Por favor, preencha o campo preço</span>
                )}
              </>
            ) : (
              <>
                {wacthField[0] !== undefined &&
                  wacthField[0] !== "" &&
                  wacthField[0] !== "mensal" && (
                    <>
                      <label htmlFor="dateForm">Data da salário 1</label>
                      <input
                        placeholder="00/00/0000"
                        type="date"
                        {...register("dateSalaryFirst", {
                          required: true,
                        })}
                        className={errors.dateSalaryFirst ? "errorForm" : ""}
                        {...register("dateSalaryFirst", {
                          required: true,
                        })}
                        onChange={(e) => setDate(e.target.value)}
                      />
                      {errors.dateSalaryFirst && (
                        <span>Por favor, preencha o campo data salário</span>
                      )}
                      <input
                        placeholder="Preço"
                        type="number"
                        {...register("dateSalaryFirstPrice", {
                          required: true,
                        })}
                        className={
                          errors.dateSalaryFirstPrice ? "errorForm" : ""
                        }
                      />
                      {errors.dateSalaryFirstPrice && (
                        <span>Por favor, preencha o campo preço</span>
                      )}
                      <label htmlFor="dateForm">Data da salário 2</label>
                      <input
                        placeholder="00/00/0000"
                        type="date"
                        onChange={(e) => setDate2(e.target.value)}
                        className={errors.dateSalarySecond ? "errorForm" : ""}
                        {...register("dateSalarySecond", {
                          required: true,
                        })}
                      />
                      {errors.dateSalarySecond && (
                        <span>Por favor, preencha o campo data salário</span>
                      )}
                      <input
                        placeholder="Preço"
                        type="number"
                        {...register("dateSalarySecondPrice", {
                          required: true,
                        })}
                        className={
                          errors.dateSalarySecondPrice ? "errorForm" : ""
                        }
                      />
                      {errors.dateSalarySecondPrice && (
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
