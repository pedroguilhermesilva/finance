import * as S from "./styles";

export function TransactionTable() {
  return (
    <S.Wrapper>
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
            <td className="deposit">R$ 12.000,00</td>
            <td>
              <select>
                <option value="" disabled selected>
                  Selecione
                </option>
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
            <td className="deposit">R$ 12.000,00</td>
            <td>
              <select>
                <option value="" disabled selected>
                  Selecione
                </option>
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
  );
}
