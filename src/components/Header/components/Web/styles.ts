import styled, { css } from "styled-components";
import { MenuActiveProps } from "../../styles";

export const Links = styled.a<MenuActiveProps>`
  margin-right: 21px;
  color: ${({ theme }) => theme.colors.primary};
  transition: filter 0.3s;
  position: relative;
  cursor: pointer;

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
