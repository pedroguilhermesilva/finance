import Head from "next/head";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { api } from "../../services/api";
import Wrapper from "./../../styles/pages/novaTransacao";

import { Container } from "../../components/Container";
import { getSession } from "next-auth/react";
import { NUMBER_INSTALLMENTS } from "../../utils/constants";

interface FormProps {
  title: string;
  price: string;
  date: Date;
  categoryId: string;
  installments: boolean;
  quantity: number;
}

interface RequestProps extends FormProps {
  userId: string;
}

interface Categories {
  id: string;
  title: string;
  date: Date;
}

interface ResponseSSRProps {
  userId: string;
  categories: Categories[];
}

export default function NewTransaction({
  categories,
  userId,
}: ResponseSSRProps) {
  const [date, setDate] = useState("");
  const [errorDateInput, setErrorDateInput] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    getValues,
  } = useForm<FormProps>();

  const wacthField = watch(["installments"]);

  const onSubmit = async (data: FormProps) => {
    console.log("data", data);
    const dateCorrectFormat = new Date(date);
    if (date !== "") {
      const values: RequestProps = { ...data, date: dateCorrectFormat, userId };
      console.log("values", values);
      try {
        const response = await api.post("/transactions", { ...values });
        alert(response.data);
        console.log(response.data);
        // setDate("");
        // reset();
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

      <Container>
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
            <div>
              <input
                id="installmentsForm"
                type="checkbox"
                name="installments"
                {...register("installments")}
                className={errors.price ? "errorForm" : ""}
              />
              <label htmlFor="installmentsForm">Compra Parcelada</label>
            </div>
            {wacthField[0] && (
              <>
                <select
                  {...register("quantity", {
                    required: getValues("installments") === true ? true : false,
                  })}
                  className={errors.quantity ? "errorForm" : ""}
                  name="quantity"
                >
                  <option value="" defaultChecked>
                    Selecione a quantidade de parcelas
                  </option>
                  {NUMBER_INSTALLMENTS.map((value, index) => (
                    <option key={index} value={index + 1}>
                      {value}x
                    </option>
                  ))}
                </select>
                {errors.quantity && (
                  <span>Por favor, selecione uma categoria</span>
                )}
              </>
            )}
            <label htmlFor="dateForm">Data da transação</label>
            <input
              id="dateForm"
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
              {...register("categoryId", { required: true })}
              className={errors.categoryId ? "errorForm" : ""}
              name="categoryId"
            >
              <option value="" defaultChecked>
                Selecione a categoria
              </option>
              {categories.map((category) => (
                <React.Fragment key={category.id}>
                  <option value={category.id}>{category.title}</option>
                </React.Fragment>
              ))}
            </select>
            {errors.categoryId && (
              <span>Por favor, selecione uma categoria</span>
            )}
            <button type="submit">Cadastrar</button>
          </form>
        </Wrapper>
      </Container>
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const response = await api.get(`/categories?id=${session.user.id}`);

  return {
    props: {
      userId: session.user.id,
      categories: response.data,
    },
  };
}
