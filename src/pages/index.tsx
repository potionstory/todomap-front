import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const Home: NextPage = () => (
  <>
    <Head>
      <title>TODO + MAP</title>
      <meta name="description" content="todo + map service" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <section>
      <span>메뉴</span>
      <nav>
        <Link href="/sign">
          <a>Sign</a>
        </Link>
      </nav>
    </section>
  </>
);

export default Home;
