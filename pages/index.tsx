import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/Navbar";
import React from "react";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Services from "../components/Services";

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
        <Services />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
