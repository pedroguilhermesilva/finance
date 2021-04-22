import styled, { css } from "styled-components";

interface statuMenuMobileProps {
  isOpen: boolean;
}
interface MenuActiveProps {
  pathActive: string;
}

export const Header = styled.header<MenuActiveProps>`
  background: ${({ theme }) => theme.colors.purple};
  height: ${({ pathActive }) =>
    pathActive.indexOf("transacoes") >= 0 ? "15rem" : ""};
`;

export const Wrapper = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .menu-mobile-open {
    display: none;
    color: ${({ theme }) => theme.colors.primary};
  }

  @media (max-width: 604px) {
    .menu-mobile-open {
      display: block;
    }
  }

  .icone {
    cursor: pointer;
    display: flex;

    p {
      margin: 0 1rem;
      color: ${({ theme }) => theme.colors.primary};
      font-size: 1.5rem;
      font-weight: bold;
      white-space: nowrap;
    }
  }

  img {
    cursor: pointer;
  }
`;

export const Links = styled.a<MenuActiveProps>`
  margin-right: 21px;
  color: ${({ theme }) => theme.colors.primary};
  transition: filter 0.3s;
  position: relative;

  :last-child {
    margin-right: 0;
  }

  @media (max-width: 604px) {
    display: none;
  }

  ${({ pathActive, href }) =>
    (pathActive === href || href === "") &&
    css`
      font-weight: 600;

      &::after {
        content: "";
        height: 3px;
        width: 100%;
        position: absolute;
        bottom: -5px;
        left: 0;
        background: ${({ theme }) => theme.colors.orange};
      }
    `}

  :hover {
    filter: brightness(0.6);
  }
`;

export const LinksMobile = styled.a<MenuActiveProps>`
  font-size: 2rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;

  @media (max-width: 604px) {
    font-size: 1.5rem;
    text-align: center;
  }

  ${({ pathActive, href }) =>
    (pathActive === href || href === "") &&
    css`
      font-weight: 600;
      color: ${({ theme }) => theme.colors.orange};
    `}

  :hover {
    filter: brightness(0.6);
  }
`;

export const MenuMobile = styled.nav<statuMenuMobileProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.purple};
  height: 100vh;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: opacity 0.3s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  pointer-events: ${({ isOpen }) => (isOpen ? "all" : "none")};

  .menu-mobile-close {
    position: absolute;
    top: 2rem;
    right: 2rem;
    color: ${({ theme }) => theme.colors.orange};
  }

  @media (max-width: 604px) {
    width: 100%;
    position: fixed;
  }

  ${LinksMobile} {
    transform: ${({ isOpen }) =>
      isOpen ? "translateY(0)" : "translateY(3rem)"};
    transition: transform 0.3s ease-in-out;
  }
`;
