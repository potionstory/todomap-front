import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }: React.HTMLAttributes<Element>) => (
  <>
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
