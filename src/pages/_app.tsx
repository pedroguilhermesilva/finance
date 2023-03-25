import { AppProps } from "next/app";
import { Session } from "next-auth";
import { ThemeProvider } from "styled-components";
import { SessionProvider } from "next-auth/react";

import GlobalStyle from "../styles/global";
import ThemeDefault from "../styles/themes/normal";

export default function App({
  Component,
  pageProps,
}: AppProps<{
  session: Session;
}>) {
  return (
    <>
      <ThemeProvider theme={ThemeDefault}>
        <SessionProvider session={pageProps.session}>
          <GlobalStyle />
          <Component {...pageProps} />
        </SessionProvider>
      </ThemeProvider>
    </>
  );
}
