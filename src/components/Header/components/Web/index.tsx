import React from "react";
import { signOut } from "next-auth/react";

import * as S from "./styles";

export function Web({ asPath }) {
  return (
    <nav>
      <S.Links href="/home" pathActive={asPath}>
        Relatórios
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
      <S.Links
        onClick={() => signOut({ callbackUrl: "/" })}
        pathActive={asPath}
      >
        Sair
      </S.Links>
    </nav>
  );
}

export default Web;
