import styled from "styled-components";

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

  img {
    cursor: pointer;
  }
`;

export const Links = styled.a`
  margin: 0 21px;
  color: ${({ theme }) => theme.colors.primary};
  transition: filter 0.3s;

  :hover {
    filter: brightness(0.6);
  }
`;
