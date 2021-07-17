import Head from "next/head";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";

import { Container } from "../../components/Container";

import Wrapper from "./styles";

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

  const onSubmit = async (data: FormProps) => {
    const values = { ...data, date };
    try {
      const response = await api.post("/new-category", values);
      alert(`${response.data}`);
      setDate("");
      reset();
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <>
      <Head>
        <title>Nova Categoria | Finance</title>
      </Head>
      <Container>
        <Wrapper>
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
        </Wrapper>
      </Container>
    </>
  );
}
