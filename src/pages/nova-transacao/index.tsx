import Head from "next/head";
import Link from "next/link";

import * as S from "./styles";

export default function NewTransaction() {
  return (
    <>
      <Head>
        <title>Nova Transação | Finance</title>
      </Head>

      <S.Wrapper>
        <h1>Meses</h1>
        <table>
          <tr>
            <th>Meses</th>
            <th>Preço</th>
            <th>Data salário</th>
          </tr>
          <tr>
            <td>Maio</td>
            <td>R$ 12.000,00</td>
            <td>
              <select>
                <option value="Todos">Todos</option>
                <option value="05-05">05/05/2021</option>
                <option value="25-05">25/05/2021</option>
              </select>
            </td>
          </tr>
        </table>
      </S.Wrapper>
    </>
  );
}
