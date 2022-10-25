import { useRouter } from "next/router";
import { MdRemoveCircleOutline } from "react-icons/md";

import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";

import { months, payments } from "./typeTable";
import { format } from "date-fns";

import * as S from "./styles";

interface DataProps {
  month: string;
  amount: number;
  salaryType: "quinzenal" | "mensal";
  salaryOneDate: string;
  salaryTwoDate: string;
}

interface TransactionTableProps {
  type: "months" | "payments";
  data: DataProps[];
}

export function TransactionTable({ type, data }: TransactionTableProps) {
  const router = useRouter();
  let tableType;

  switch (type) {
    case "months":
      tableType = data;
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
            {months.title?.map((menu, index) => (
              <>
                <th key={index}>{menu}</th>
              </>
            ))}
          </tr>
        </thead>
        <tbody>
          {type === "months" ? (
            <>
              {tableType?.map((values, index) => (
                <tr key={index}>
                  <td onClick={goToPage}>{values.month}</td>
                  <td onClick={goToPage} className="deposit">
                    {formatCurrency(values.amount)}
                  </td>
                  <td>
                    <select
                      onChange={(value) => changeValuesByMonth(value)}
                      disabled={values.salaryType === "mensal"}
                    >
                      {values.salaryType !== "mensal" ? (
                        <>
                          <option value="Todos" defaultChecked>
                            Todos
                          </option>
                          <option value={values.salaryOneDate}>
                            {format(
                              new Date(values.salaryOneDate),
                              "dd/MM/yyyy"
                            )}
                          </option>
                          <option value={values.salaryTwoDate}>
                            {format(
                              new Date(values.salaryTwoDate),
                              "dd/MM/yyyy"
                            )}
                          </option>
                        </>
                      ) : (
                        <option value={values.salaryOneDate} defaultChecked>
                          {format(new Date(values.salaryOneDate), "dd/MM/yyyy")}
                        </option>
                      )}
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
