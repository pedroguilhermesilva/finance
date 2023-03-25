import React from "react";
import { signOut } from "next-auth/react";
import { FaTimes } from "react-icons/fa";

import * as S from "./styles";

export function Mobile({ isOpen, asPath, setIsOpen }) {
  return (
    <S.MenuMobile isOpen={isOpen}>
      <FaTimes
        className="menu-mobile-close"
        size={35}
        onClick={() => setIsOpen(false)}
      />

      <S.LinksMobile href="/home" pathActive={asPath}>
        Relatórios
      </S.LinksMobile>
      <S.LinksMobile href="/nova-transacao" pathActive={asPath}>
        Nova transação
      </S.LinksMobile>
      <S.LinksMobile href="/nova-categoria" pathActive={asPath}>
        Nova categoria
      </S.LinksMobile>
      <S.LinksMobile href="/perfil" pathActive={asPath}>
        Perfil
      </S.LinksMobile>
      <S.LinksMobile
        onClick={() => signOut({ callbackUrl: "/" })}
        pathActive={asPath}
      >
        Sair
      </S.LinksMobile>
    </S.MenuMobile>
  );
}

export default Mobile;
