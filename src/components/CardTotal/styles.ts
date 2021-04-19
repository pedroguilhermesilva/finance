import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const Card = styled.div`
  width: 80%;
  height: 12rem;
  display: flex;
  flex-direction: column;
  padding: 2.5rem;
  justify-content: space-around;
  border-radius: 0.8rem;
  background: ${({ theme }) => theme.colors.orange};

  p {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 3rem;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 0 1.5rem;

  h1 {
    color: ${({ theme }) => theme.colors.primary};
  }
`;
