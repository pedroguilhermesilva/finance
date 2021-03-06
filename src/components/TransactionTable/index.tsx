import { useRouter } from "next/router";
import { useState } from "react";

import { MdRemoveCircleOutline } from "react-icons/md";

import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";

import { months, payments } from "./typeTable";

import * as S from "./styles";

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
    // console.log(e.target.value);
  }

  function removeValue(value) {
    console.log(value);
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
                  <td onClick={goToPage} className="deposit">
                    {formatCurrency(values.price)}
                  </td>
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
                  <td className="deposit">{formatCurrency(values.price)}</td>
                  <td>{values.category}</td>
                  <td>{formatDate(values.date)}</td>
                  <td>
                    <MdRemoveCircleOutline
                      className="remove-transaction-icon"
                      size={25}
                      color="#c70a0a"
                      onClick={() => removeValue(values)}
                      cursor="pointer"
                    />
                  </td>
                </tr>
              ))}
            </>
          )}
        </tbody>
      </table>
    </S.Wrapper>
  );
}
