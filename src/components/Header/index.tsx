import Link from "next/link";
import { useRouter } from "next/router";

import * as S from "./styles";

export function Header() {
  const { asPath } = useRouter();

  return (
    <S.Header pathActive={asPath}>
      <S.Wrapper>
        <Link href="/">
          <div className="icone">
            <img src="/images/money.svg" alt="Finance" />
            <p>My Finance</p>
          </div>
        </Link>

        <nav>
          <S.Links href="/" pathActive={asPath}>
            Meses
          </S.Links>
          <S.Links href="/nova-transacao" pathActive={asPath}>
            Nova transação
          </S.Links>
          <S.Links href="/nova-categoria" pathActive={asPath}>
            Nova categoria
          </S.Links>
          <S.Links href="/perfil" pathActive={asPath}>
            Perfil
          </S.Links>
        </nav>
      </S.Wrapper>
    </S.Header>
  );
}
