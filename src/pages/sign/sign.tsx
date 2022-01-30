import { NextPage } from "next";
import Link from "next/link";
import React from "react";

const Sign: NextPage = () => (
  <>
    <section>
      <span>메뉴</span>
      <nav>
        <Link href="/">
          <a>Home</a>
        </Link>
      </nav>
    </section>
  </>
);

export default Sign;
