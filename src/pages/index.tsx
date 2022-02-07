import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import Date from "../components/date/Date";
import Todo from "../components/todo/Todo";

const Home: NextPage = () => (
  <>
    <Head>
      <title>TODO + MAP: Home</title>
      <meta name="description" content="todo + map service" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Date />
    <Todo />
  </>
);

export default Home;
