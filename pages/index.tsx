import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar"
import React from "react";
import Footer from "../components/Footer";
import Banner from "../components/Banner";

const Home: NextPage = () => {
  return (
    <div className="flex w-full min-h-screen flex-col">
      <Head>
        <title>Catering App-V1</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex w-full flex-1 flex-col items-center justify-center text-center">
        <Banner />

        <div className="my-6 flex max-w-4xl flex-wrap items-center justify-around sm:w-full">
          <a
            href="https://nextjs.org/docs"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Family Events &rarr;</h3>
            <p className="mt-4 text-xl">
              Find in-depth information about Next.js features and its API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn"
            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
          >
            <h3 className="text-2xl font-bold">Business Events &rarr;</h3>
            <p className="mt-4 text-xl">
              Learn about Next.js in an interactive course with quizzes!
            </p>
          </a>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
