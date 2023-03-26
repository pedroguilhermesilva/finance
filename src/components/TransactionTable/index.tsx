import { useRouter } from "next/router";
import { MdRemoveCircleOutline } from "react-icons/md";

import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";

import { months, payments } from "./typeTable";
import { format, getDay, getYear } from "date-fns";

import * as S from "./styles";
import { useState } from "react";

interface DataProps {
  month: string;
  amount: number;
  monthInNumber: number;
  salaryType: "quinzenal" | "mensal";
  salaryOneDate: string;
  salaryTwoDate: string;
}

interface TransactionTableProps {
  type: "months" | "payments";
  data: DataProps[];
  year?: Date;
}

const monthsNames = {
  January: "01",
  February: "02",
  March: "03",
  April: "04",
  May: "05",
  June: "06",
  July: "07",
  August: "08",
  September: "09",
  October: "10",
  November: "11",
  December: "12",
};

export function TransactionTable({ type, data, year }: TransactionTableProps) {
  const [typePayment, setTypePayment] = useState("all");

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
    router.push(
      typePayment === "all"
        ? `/transacoes/${value}?date=${typePayment}&year=${getYear(year)}`
        : `/transacoes/${value}?date=${typePayment}`
    );
  }

  function transformerFormattedDateYearAndMonth(
    value: string,
    month: string
  ): string {
    const [day] = format(new Date(value), "dd-MM-yyyy").split("-");
    const currentMonthAndYear = `${day}/${monthsNames[month]}/${getYear(year)}`;
    return currentMonthAndYear;
  }

  function changeValuesByMonth(e, index, month) {
    let type: string;
    transformerFormattedDateYearAndMonth(data[index].salaryOneDate, month);
    transformerFormattedDateYearAndMonth(data[index].salaryTwoDate, month);

    switch (e.target.value) {
      case "Todos":
        type = "all";
        break;
      case data[index].salaryOneDate:
        type = `${transformerFormattedDateYearAndMonth(
          data[index].salaryOneDate,
          month
        )}`;
        break;
      case data[index].salaryTwoDate:
        type = `${transformerFormattedDateYearAndMonth(
          data[index].salaryTwoDate,
          month
        )}`;
        break;
    }

    setTypePayment(type);
  }

  function removeValue(value) {
    console.log(value);
  }

  return (
    <S.Wrapper mouseNotPointer={type === "months"}>
      <table>
        <thead>
          <tr>
            {tableType.title?.map((menu, index) => (
              <th key={index}>{menu}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {type === "months" ? (
            <>
              {tableType?.map((values, index) => (
                <tr key={index}>
                  <td onClick={() => goToPage(values.month)}>{values.month}</td>
                  <td
                    onClick={() => goToPage(values.month)}
                    className="deposit"
                  >
                    {formatCurrency(values.amount)}
                  </td>
                  <td>
                    <select
                      onChange={(value) =>
                        changeValuesByMonth(value, index, values.month)
                      }
                      disabled={values.salaryType === "mensal"}
                      defaultValue={typePayment}
                    >
                      {values.salaryType !== "mensal" ? (
                        <>
                          <option value="Todos" defaultChecked>
                            Todos
                          </option>
                          <option value={values.salaryOneDate}>
                            {format(new Date(values.salaryOneDate), "dd/MM")}
                          </option>
                          <option value={values.salaryTwoDate}>
                            {format(new Date(values.salaryTwoDate), "dd/MM")}
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
