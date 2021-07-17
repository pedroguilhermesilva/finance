import { Header } from "../Header";
import * as S from "./styles";

export function Container({ children }) {
  return (
    <>
      <Header />
      <S.Container>{children}</S.Container>
    </>
  );
}
