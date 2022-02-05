import React from "react";
import { useAuth } from "../../../../contexts/AuthContext";

import * as S from "./styles";

export function Web({ asPath }) {
  const { removeUser } = useAuth();

  return (
    <nav>
      <S.Links href="/home" pathActive={asPath}>
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
      <S.Links onClick={removeUser} pathActive={asPath}>
        Sair
      </S.Links>
    </nav>
  );
}

export default Web;
