import styled from "styled-components";

export const Wrapper = styled.main`
  max-width: 1120px;
  margin: 0 auto;
  padding: 40px 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes.large};
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;
