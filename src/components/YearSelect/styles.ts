import styled from "styled-components";

const ContainerYear = styled.div`
  display: flex;
  align-items: center;

  .left {
    margin: 0 1.5rem;
    cursor: pointer;
  }
  .right {
    margin: 0 1.5rem;
    cursor: pointer;
  }

  .react-datepicker-wrapper {
    width: auto;

    .react-datepicker__input-container > input {
      text-align: center;
      font-size: 1.4rem;
      max-width: 5rem;
      background: transparent;
      border: none;
      max-width: 4rem;
      color: ${({ theme }) => theme.colors.darkGrey};
      font-size: 1.6rem;
      cursor: pointer;
    }
  }
`;

export { ContainerYear };
