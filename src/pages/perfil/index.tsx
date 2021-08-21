import Head from "next/head";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import Wrapper from "./styles";

import { Container } from "../../components/Container";

interface FormProps {
  name: string;
  salary: string;
  salaryType: "mensal" | "quinzenal" | "";
  // date: Date;
}

export default function Perfil() {
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
                  placeholder="00/00/0000"
                  type="date"
                  onChange={(e) => setDate(e.target.value)}
                  required
                />
                <input
                  placeholder="Preço"
                  type="number"
                  {...register("salary", { required: true })}
                  className={errors.salary ? "errorForm" : ""}
                />
                {errors.salary && (
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
                        onChange={(e) => setDate(e.target.value)}
                        required
                      />
                      <input
                        placeholder="Preço"
                        type="number"
                        {...register("salary", { required: true })}
                        className={errors.salary ? "errorForm" : ""}
                      />
                      {errors.salary && (
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
                        {...register("salary", { required: true })}
                        className={errors.salary ? "errorForm" : ""}
                      />
                      {errors.salary && (
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
