import styled, { css } from "styled-components";

interface MenuActiveProps {
  pathActive: string;
}

interface StatuMenuMobileProps {
  isOpen: boolean;
}

export const LinksMobile = styled.a<MenuActiveProps>`
  font-size: 2rem;
  text-transform: uppercase;
  padding: 2rem 0;
  font-weight: bold;
  letter-spacing: 0.5rem;
  color: ${({ theme }) => theme.colors.primary};
  text-decoration: none;
  cursor: pointer;

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

export const MenuMobile = styled.nav<StatuMenuMobileProps>`
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
