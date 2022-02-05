import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { FaAlignLeft } from "react-icons/fa";
import Mobile from "./components/Mobile";
import Web from "./components/Web";

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

        <Mobile isOpen={isOpen} setIsOpen={setIsOpen} asPath={asPath} />

        <Web asPath={asPath} />
      </S.Wrapper>
    </S.Header>
  );
}
