import React from "react";
import { useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import { themeState } from "../state/global";
import GlobalStyle from "../styles/global";
import { dark, light } from "../styles/theme";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: React.HTMLAttributes<Element>) => {
  const theme = useRecoilValue(themeState);

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </ThemeProvider>
  );
};

export default Layout;
