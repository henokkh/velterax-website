import Head from "next/head";

import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Velterax</title>
        <meta name="description" content="Velterax Company Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=""></main>

      <Footer />
    </div>
  );
}