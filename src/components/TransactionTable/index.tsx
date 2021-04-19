import { useRouter } from "next/router";
import { useState } from "react";
import * as S from "./styles";
import { months, payments } from "./typeTable";

export function TransactionTable({ type }) {
  const [selectedOption, setSelectedOption] = useState("Todos");

  const router = useRouter();
  let tableType;

  switch (type) {
    case "months":
      tableType = months;
      break;
    case "payments":
      tableType = payments;
      break;
  }

  function goToPage(value) {
    router.push(`/transacoes/${value.target.innerText}`);
  }

  function changeValuesByMonth(e) {
    console.log(e.target.value);
  }

  return (
    <S.Wrapper mouseNotPointer={type === "months"}>
      <table>
        <thead>
          <tr>
            {tableType?.title.map((menu, index) => (
              <th key={index}>{menu}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {type === "months" ? (
            <>
              {tableType?.value?.map((values, index) => (
                <tr key={index}>
                  <td onClick={goToPage}>{values.title}</td>
                  <td className="deposit">{values.price}</td>
                  <td>
                    <select onChange={(value) => changeValuesByMonth(value)}>
                      <option value="Todos" defaultChecked>
                        Todos
                      </option>
                      <option value="05/05/2021">05/05/2021</option>
                      <option value="25/05/2021">25/05/2021</option>
                    </select>
                  </td>
                </tr>
              ))}
            </>
          ) : (
            <>
              {tableType.value.map((values, index) => (
                <tr key={index}>
                  <td>{values.title}</td>
                  <td className="deposit">{values.price}</td>
                  <td>{values.category}</td>
                  <td>{values.date}</td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </S.Wrapper>
  );
}
