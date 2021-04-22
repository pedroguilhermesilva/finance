import Head from "next/head";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import Wrapper from "./styles";

interface FormProps {
  title: string;
  price: string;
  // date: Date;
  category: string;
}

export default function NewTransaction() {
  const [date, setDate] = useState("");
  const [errorDateInput, setErrorDateInput] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormProps>();

  const onSubmit = async (data: FormProps) => {
    if (date !== "") {
      const values = { ...data, date };

      try {
        const response = await api.post("/new-transaction", { ...values });
        alert(`${response.data}`);
        setDate("");
        reset();
      } catch (err) {
        alert(err.message);
      }
    } else {
      setErrorDateInput(true);
    }
  };

  return (
    <>
      <Head>
        <title>Nova Transação | Finance</title>
      </Head>

      <Wrapper>
        <h1>Nova transação</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            placeholder="Título"
            type="text"
            {...register("title", { required: true })}
            className={errors.title ? "errorForm" : ""}
          />
          {errors.title && <span>Por favor, preencha o campo título</span>}
          <input
            placeholder="Preço"
            type="number"
            {...register("price", { required: true })}
            className={errors.price ? "errorForm" : ""}
          />
          {errors.price && <span>Por favor, preencha o campo preço</span>}
          <label htmlFor="dateForm">Data da transação</label>
          <input
            placeholder="00/00/0000"
            type="date"
            onChange={(e) => {
              setDate(e.target.value),
                errorDateInput && setErrorDateInput(false);
            }}
            required
            className={errorDateInput ? "errorForm" : ""}
          />
          {errorDateInput && <span>Por favor, preencha o campo data</span>}
          <select
            {...register("category", { required: true })}
            className={errors.category ? "errorForm" : ""}
          >
            <option value="" defaultChecked>
              Selecione a categoria
            </option>
            <option value="itau">Cartão Itau</option>
            <option value="nubank">Cartão Nubank</option>
            <option value="santander">Cartão Santander</option>
          </select>
          {errors.category && <span>Por favor, selecione uma categoria</span>}
          <button type="submit">Cadastrar</button>
        </form>
      </Wrapper>
    </>
  );
}
