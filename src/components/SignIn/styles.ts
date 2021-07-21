import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.purple};

  @media (max-width: 630px) {
    height: 100vh;
  }

  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes.large};
    color: ${({ theme }) => theme.colors.darkGrey};
  } */
`;

export const Image = styled.img`
  height: 100vh;
  object-fit: cover;
  width: 50%;

  @media (max-width: 630px) {
    display: none;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  // width: 100%;
  // maxWidth: 350px;
  margin-right: auto;
  margin-left: auto;

  div {
    display: flex;
    justify-content: center;

    img {
      height: 64px;
    }

    p {
      margin-left: 0.8rem;
      font-size: 2.5rem;
      font-weight: bold;
      white-space: nowrap;
      color: #fff;
    }
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
    padding: 0.6rem;
    border-radius: 0.5rem;
    border: 0;
    font-size: 1rem;

    .icon-google {
      margin-right: 0.5rem;
    }
  }
`;
