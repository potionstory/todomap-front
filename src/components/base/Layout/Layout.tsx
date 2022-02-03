import React from "react";
import { useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import { themeState } from "../../../states/global";
import GlobalStyle from "../../../styles/global";
import { dark, light } from "../../../styles/theme";
import Footer from "../Footer";
import Header from "../Header";
import { LayoutWrap } from "./style";

const Layout = ({ children }: React.HTMLAttributes<Element>) => {
  const theme = useRecoilValue(themeState);

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <LayoutWrap>
        <GlobalStyle />
        <Header />
        <main>{children}</main>
        <Footer />
      </LayoutWrap>
    </ThemeProvider>
  );
};

export default Layout;
