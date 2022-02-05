import styled from "styled-components";

export interface MenuActiveProps {
  pathActive: string;
}

export const Header = styled.header<MenuActiveProps>`
  background: ${({ theme }) => theme.colors.purple};
  height: ${({ pathActive }) =>
    pathActive.indexOf("transacoes") >= 0 ? "15rem" : ""};
`;

export const Wrapper = styled.div`
  max-width: 1140px;
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
