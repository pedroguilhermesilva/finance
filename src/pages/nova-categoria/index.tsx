import Head from "next/head";
import { useState } from "react";
import { useForm } from "react-hook-form";

import * as S from "./styles";

interface FormProps {
  title: string;
  price: string;
  // date: Date;
  category: string;
}

export default function NewCategory() {
  const [date, setDate] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormProps>();

  const onSubmit = (data: FormProps) => {
    console.log({ ...data, date });
    reset();
    setDate("");
  };

  return (
    <>
      <Head>
        <title>Nova Categoria | Finance</title>
      </Head>

      <S.Wrapper>
        <h1>Nova categoria</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Título"
            type="text"
            {...register("title", { required: true })}
            className={errors.title ? "errorForm" : ""}
          />
          {errors.title && <span>Por favor, preencha o campo título</span>}
          <label htmlFor="dateForm">Data de vencimento</label>
          <input
            placeholder="00/00/0000"
            type="date"
            onChange={(e) => setDate(e.target.value)}
            required
            id="dateForm"
          />
          <button type="submit">Cadastrar</button>
        </form>
      </S.Wrapper>
    </>
  );
}
