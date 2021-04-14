import Link from "next/link";

import * as S from "./styles";

export function Header() {
  return (
    <S.Header>
      <S.Wrapper>
        <Link href="/meses">
          <img src="/images/icon-finance.svg" alt="Finance" />
        </Link>
        <nav>
          <S.Links href="/meses">Meses</S.Links>
          <S.Links href="/nova-transacao">Nova transação</S.Links>
          <S.Links href="#">Nova categoria</S.Links>
          <S.Links href="#">Perfil</S.Links>
        </nav>
      </S.Wrapper>
    </S.Header>
  );
}
