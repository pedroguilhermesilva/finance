import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";

import GlobalStyle from "../styles/global";
import ThemeDefault from "../styles/themes/normal";

import { Header } from "../components/Header";
import { Container } from "../components/Container";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={ThemeDefault}>
        <GlobalStyle />
        <Header />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}
