import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaAlignLeft, FaTimes } from "react-icons/fa";

import * as S from "./styles";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const { asPath } = useRouter();

  return (
    <S.Header pathActive={asPath}>
      <S.Wrapper>
        <FaAlignLeft
          className="menu-mobile-open"
          size={35}
          onClick={() => setIsOpen(true)}
        />

        <Link href="/home">
          <div className="icone">
            <img src="/images/money.svg" alt="Finance" />
            <p>My Finance</p>
          </div>
        </Link>

        <S.MenuMobile isOpen={isOpen}>
          <FaTimes
            className="menu-mobile-close"
            size={35}
            onClick={() => setIsOpen(false)}
          />

          <S.LinksMobile href="/home" pathActive={asPath}>
            Meses
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
        </S.MenuMobile>

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
        </nav>
      </S.Wrapper>
    </S.Header>
  );
}
