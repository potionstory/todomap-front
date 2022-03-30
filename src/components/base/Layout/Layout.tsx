import React from "react";
import { useRecoilValue } from "recoil";
import { ThemeProvider } from "styled-components";
import { themeState } from "../../../states/global";
import { ThemeColorSet } from "../../../styles/theme";
import Header from "../Header";
import { LayoutWrap } from "./style";

const Layout = ({ children }: React.HTMLAttributes<Element>) => {
  const theme = useRecoilValue(themeState);
  const { light, dark } = ThemeColorSet;

  return (
    <ThemeProvider theme={theme === "light" ? light : dark}>
      <LayoutWrap>
        <Header />
        <main>{children}</main>
      </LayoutWrap>
    </ThemeProvider>
  );
};

export default Layout;
