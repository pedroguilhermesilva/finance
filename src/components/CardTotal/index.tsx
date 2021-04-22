import * as S from "./styles";

export default function CardTotal({ month }) {
  return (
    <S.Container>
      <S.Card>
        <S.Header>
          <h1>Total {month}</h1>
          <img src="/images/icon-dolar.svg" alt="icone dolar" />
        </S.Header>
        <p>R$ 24.000,00</p>
      </S.Card>
    </S.Container>
  );
}
