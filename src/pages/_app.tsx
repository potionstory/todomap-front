import { AppProps } from "next/app";
import React from "react";
import { RecoilRoot } from "recoil";
import Layout from "../components/base/Layout";
import "../styles/font.css";
import DebugObserver from "./DebugObserver";

const App = ({ Component, pageProps }: AppProps) => (
  <RecoilRoot>
    <DebugObserver />
    <Layout>
      <Component {...pageProps} />
    </Layout>
  </RecoilRoot>
);

export default App;
