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
      <S.Wrapper isOpen={isOpen}>
        <FaAlignLeft
          className="menu-mobile-open"
          size={35}
          onClick={() => setIsOpen(true)}
        />

        <Link href="/">
          <div className="icone">
            <img src="/images/money.svg" alt="Finance" />
            <p>My Finance</p>
          </div>
        </Link>

        {isOpen && (
          <S.StyledMenu>
            <FaTimes
              className="menu-mobile-close"
              size={35}
              onClick={() => setIsOpen(false)}
            />

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

            {/* <a href="/">
              <span role="img" aria-label="about us">
                &#x1f481;&#x1f3fb;&#x200d;&#x2642;&#xfe0f;
              </span>
              About us
            </a>
            <a href="/">
              <span role="img" aria-label="price">
                &#x1f4b8;
              </span>
              Pricing
            </a>
            <a href="/">
              <span role="img" aria-label="contact">
                &#x1f4e9;
              </span>
              Contact
            </a> */}
          </S.StyledMenu>
        )}

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
