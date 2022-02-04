import { useState } from "react";

import * as S from "./styles";

export function Loader({ isLoading }) {
  return (
    <>
      {isLoading && (
        <S.LoaderWrapper>
          <S.Loader />
        </S.LoaderWrapper>
      )}
    </>
  );
}
