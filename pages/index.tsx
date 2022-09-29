/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/Organism/Footer";
import { Header } from "../components/Organism/Header";
import { ListProduct } from "../components/Organism/ListProduct";
import { Main } from "../components/Organism/Main";

 const Home: NextPage = () => {
  return (
    <div className="m-auto max-w-[1024px]">
      <Head>
        <title>Chocolate Bars</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Main />
      <ListProduct/>
      <Footer />
    </div>
  );
};

export default Home;