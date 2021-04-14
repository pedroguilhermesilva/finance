import Head from "next/head";
import Link from "next/link";

import * as S from "./styles";

export default function Meses() {
  function changeSelect(value) {
    console.log(value);
  }

  return (
    <>
      <Head>
        <title>Meses | Finance</title>
      </Head>

      <S.Wrapper>
        <h1>Meses</h1>
        <table>
          <thead>
            <tr>
              <th>Meses</th>
              <th>Preço</th>
              <th>Data salário</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Maio</td>
              <td>R$ 12.000,00</td>
              <td>
                <select onChange={changeSelect}>
                  <option value="Todos" defaultChecked>
                    Todos
                  </option>
                  <option value="05-05">05/05/2021</option>
                  <option value="25-05">25/05/2021</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>Abril</td>
              <td>R$ 12.000,00</td>
              <td>
                <select onChange={changeSelect}>
                  <option value="Todos" defaultChecked>
                    Todos
                  </option>
                  <option value="05-05">05/05/2021</option>
                  <option value="25-05">25/05/2021</option>
                </select>
              </td>
            </tr>
          </tbody>
        </table>
      </S.Wrapper>
    </>
  );
}
