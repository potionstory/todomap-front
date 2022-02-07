import React from "react";
import { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import Layout from "../components/base/Layout";
import "../styles/font.css";
import GlobalStyle from "../styles/global";
import DebugObserver from "./DebugObserver";
import "@fortawesome/fontawesome-svg-core/styles.css";

const App = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <DebugObserver />
    <Layout>
      <GlobalStyle />
      <Component {...pageProps} />
    </Layout>
  </RecoilRoot>
);

export default App;
