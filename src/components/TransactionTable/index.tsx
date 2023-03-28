import { useRouter } from "next/router";
import { MdRemoveCircleOutline } from "react-icons/md";

import formatCurrency from "../../utils/formatCurrency";
import formatDate from "../../utils/formatDate";

import { months, payments } from "./typeTable";
import { format, getYear } from "date-fns";

import * as S from "./styles";
import { useEffect, useState } from "react";

interface CategoriesProps {
  id: string;
  title: string;
}

interface TransactionsProps {
  categories: CategoriesProps;
  date: string;
  id: string;
  price: string;
  title: string;
}
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
  data: DataProps[] | TransactionTableProps[];
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
  const [tableType, setTableType] = useState([]);

  const router = useRouter();
  let tableTitle: string[];

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
    let setType: string;

    transformerFormattedDateYearAndMonth(tableType[index].salaryOneDate, month);
    transformerFormattedDateYearAndMonth(tableType[index].salaryTwoDate, month);

    switch (e.target.value) {
      case "Todos":
        setType = "all";
        break;
      case tableType[index].salaryOneDate:
        setType = `${transformerFormattedDateYearAndMonth(
          tableType[index].salaryOneDate,
          month
        )}`;
        break;
      case tableType[index].salaryTwoDate:
        setType = `${transformerFormattedDateYearAndMonth(
          tableType[index].salaryTwoDate,
          month
        )}`;
        break;
    }

    setTypePayment(setType);
  }

  function removeValue(value) {
    console.log(value);
  }

  useEffect(() => {
    if (data) {
      type === "months"
        ? (tableTitle = months.title)
        : (tableTitle = payments.title);
      setTableType(data);
    }
  }, [data]);

  return (
    <S.Wrapper mouseNotPointer={type === "months"}>
      {tableType.length > 0 && (
        <table>
          <thead>
            <tr>
              {tableTitle?.map((menu, index) => (
                <th key={index}>{menu}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {type === "months" ? (
              <>
                {tableType?.map((values, index) => (
                  <tr key={index}>
                    <td onClick={() => goToPage(values.month)}>
                      {values.month}
                    </td>
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
                            {format(
                              new Date(values.salaryOneDate),
                              "dd/MM/yyyy"
                            )}
                          </option>
                        )}
                      </select>
                    </td>
                  </tr>
                ))}
              </>
            ) : (
              <>
                {tableType.map((values, index) => (
                  <tr key={index}>
                    <td>{values.title}</td>
                    <td className="deposit">{formatCurrency(values.price)}</td>
                    <td>{values.categories.title}</td>
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
      )}
    </S.Wrapper>
  );
}
