import { useState } from "react";
import { ArrowLeft, ArrowRight } from "phosphor-react";
import { addYears, subYears } from "date-fns";
import DatePicker from "react-datepicker";
import theme from "../../styles/themes/normal";

import { ContainerYear } from "./styles";

type TypeProps = "next" | "sub";

interface YearSelectProps {
  onChangeYear: (value: Date) => void;
  date: Date;
}

export default function YearSelect({ onChangeYear, date }: YearSelectProps) {
  const handleChangeYearsArrows = (type: TypeProps) => {
    if (type === "sub") {
      const changedDate = subYears(date, 1);
      onChangeYear(changedDate);
    } else {
      const changedDate = addYears(date, 1);
      onChangeYear(changedDate);
    }
  };

  const handleChangeYears = (date: Date) => {
    onChangeYear(date);
  };
  return (
    <ContainerYear>
      <ArrowLeft
        className="left"
        size={24}
        onClick={() => handleChangeYearsArrows("sub")}
        color={theme.colors.orange}
      />
      <label htmlFor="datePicker">Ano atual: </label>
      <DatePicker
        id="datePicker"
        selected={date}
        onChange={handleChangeYears}
        showYearPicker
        dateFormat="yyyy"
      />
      <ArrowRight
        className="right"
        size={24}
        onClick={() => handleChangeYearsArrows("next")}
        color={theme.colors.orange}
      />
    </ContainerYear>
  );
}
