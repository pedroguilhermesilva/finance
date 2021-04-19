import styled, { css } from "styled-components";

interface MenuActiveProps {
  pathActive: string;
}

export const Header = styled.header`
  background: ${({ theme }) => theme.colors.purple};
`;

export const Wrapper = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  .icone {
    display: flex;
    cursor: pointer;

    p {
      margin-left: 1rem;
      color: ${({ theme }) => theme.colors.primary};
      font-size: 1.5rem;
      font-weight: bold;
    }
  }

  img {
    cursor: pointer;
  }
`;

export const Links = styled.a<MenuActiveProps>`
  margin: 0 21px;
  color: ${({ theme }) => theme.colors.primary};
  transition: filter 0.3s;
  position: relative;

  ${(props) =>
    (props.pathActive === props.href || props.href === "") &&
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
