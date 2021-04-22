import styled from "styled-components";

interface mouseProps {
  mouseNotPointer: boolean;
}

export const Wrapper = styled.div<mouseProps>`
  margin-top: 2rem;
  width: 100%;
  overflow-x: auto;

  table {
    border-spacing: 0 0.5rem;
    width: 100%;

    th {
      color: ${({ theme }) => theme.colors.gray};
      font-weight: 400;
      padding: 1rem 2rem;
      text-align: left;
      line-height: 1.5rem;
    }

    td {
      padding: 1rem 2rem;
      border: 0;
      background: ${({ theme }) => theme.colors.primary};
      color: ${({ theme }) => theme.colors.gray};
      border-radius: 0.25rem;
      cursor: ${({ mouseNotPointer }) =>
        mouseNotPointer ? "pointer" : "auto"};

      &:first-child {
        color: ${({ theme }) => theme.colors.darkGrey};
      }

      &.deposit {
        color: ${({ theme }) => theme.colors.green};
        white-space: nowrap;
      }

      &:last-child {
        white-space: nowrap;
      }

      select {
        width: 8rem;
        background: ${({ theme }) => theme.colors.primary};
        border: none;
        color: ${({ theme }) => theme.colors.darkGrey};
        outline: none;
        font-size: 1rem;
        font-family: "Poppins", sans-serif;

        option {
          font-size: 1rem;
        }
      }
    }
  }
`;
