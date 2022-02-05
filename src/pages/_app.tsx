import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/global";
import ThemeDefault from "../styles/themes/normal";

import { AuthContextProvider } from "../contexts/AuthContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={ThemeDefault}>
        <AuthContextProvider>
          <GlobalStyle />
          <Component {...pageProps} />
        </AuthContextProvider>
      </ThemeProvider>
    </>
  );
}
