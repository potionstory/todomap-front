import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import React from "react";

const Home: NextPage = () => (
  <div>
    <Head>
      <title>TODO + MAP</title>
      <meta name="description" content="todo + map service" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <main>
      <span>메뉴</span>
      <nav>
        <Link href="/sign">
          <a>Sign</a>
        </Link>
      </nav>
    </main>
  </div>
);

export default Home;
