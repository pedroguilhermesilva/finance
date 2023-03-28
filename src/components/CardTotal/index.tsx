import formatCurrency from "../../utils/formatCurrency";
import * as S from "./styles";

export default function CardTotal({ month, price }) {
  return (
    <S.Container>
      <S.Card>
        <S.Header>
          <h1>Total {month}</h1>
          <img src="/images/icon-dolar.svg" alt="icone dolar" />
        </S.Header>
        <p>{formatCurrency(price)}</p>
      </S.Card>
    </S.Container>
  );
}
