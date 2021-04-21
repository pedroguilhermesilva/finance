import styled from "styled-components";
interface MenuActiveProps {
  pathActive: string;
}

const Wrapper = styled.div<MenuActiveProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: ${(props) =>
    props.pathActive?.indexOf("transacoes") >= 0 ? "-9rem" : ""};

  h1 {
    font-weight: 500;
    font-size: ${({ theme }) => theme.fontSizes.large};
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export default Wrapper;
