import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes.large};
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  form {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 1.5rem;

    @media (max-width: 604px) {
      width: 95%;

      input {
        width: 100%;
        background: ${({ theme }) => theme.colors.primary};
      }
    }

    .errorForm {
      border: 2px ${({ theme }) => theme.colors.red} solid;
    }

    span {
      font-size: 1rem;
      margin: 0.5rem 0 0 1rem;
      color: ${({ theme }) => theme.colors.red};
    }

    label {
      margin: 1rem 0 -0.5rem;
      font-size: 0.8rem;
    }

    input {
      padding: 1rem;
      border: none;
      border-radius: 0.5rem;
      outline: none;
    }

    input:not(:first-child) {
      margin: 1rem 0 0;
    }

    button {
      margin: 1rem 0;
      background: ${({ theme }) => theme.colors.orange};
      color: ${({ theme }) => theme.colors.primary};
      border-radius: 0.3rem;
      border: none;
      height: 3rem;
      transition: filter 0.3s;
      font-weight: bold;
      font-size: 1.2rem;
      text-transform: uppercase;

      :hover {
        filter: brightness(0.9);
      }
    }

    select {
      margin: 1rem 0 0 0;
      padding: 1rem;
      background: ${({ theme }) => theme.colors.primary};
      border: none;
      color: ${({ theme }) => theme.colors.darkGrey};
      outline: none;
      font-size: 1rem;
      font-family: "Poppins", sans-serif;
      border-radius: 0.5rem;

      .errorForm {
        border: 2px ${({ theme }) => theme.colors.red} solid;
      }

      option {
        font-size: 1rem;
      }
    }
  }
`;

export default Wrapper;
