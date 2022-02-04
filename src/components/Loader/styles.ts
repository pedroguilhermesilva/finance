import styled from "styled-components";

export const LoaderWrapper = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  /* z-index: 9999; */
  /* padding-top: 50vh; */
  /* top: 0; */
  /* left: 0; */
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const Loader = styled.div`
  border: 6px solid ${({ theme }) => theme.colors.primary};
  border-top: 6px solid ${({ theme }) => theme.colors.orange};
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
