import styled from "styled-components";

export const Wrapper = styled.div`
  margin-top: 2rem;
  width: 100%;

  table {
    border-spacing: 0 0.5rem;
    width: 100%;

    th {
      color: ${({ theme }) => theme.colors.darkGrey};
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.background};
      border-radius: 0.25rem;

      &:first-child {
        color: ${({ theme }) => theme.colors.darkGrey};
      }

      &.deposit {
        color: ${({ theme }) => theme.colors.green};
      }

      select {
        width: 8rem;
      }
    }
  }
`;
