import { AppProps } from "next/app";
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import Layout from "../Layout";
import GlobalStyle from "../styles/global";
import { dark, light } from "../styles/theme";

const App = ({ Component, pageProps }: AppProps) => {
  const [themeMode, setThemeMode] = useState("light");
  const theme = themeMode === "light" ? light : dark;

  const toggleTheme = () => {
    setThemeMode(themeMode === "light" ? "dark" : "light");
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
        <button type="button" onClick={toggleTheme}>
          테마 토글
        </button>
      </Layout>
    </ThemeProvider>
  );
};

export default App;
