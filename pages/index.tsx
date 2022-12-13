import Head from "next/head";

import ContactForm from "../components/contact-form";
import Features from "../components/features";
import Hero from "../components/hero";
import Jumbotron from "../components/jumbotron";
import Testimonials from "../components/testimonials";

export default function Home() {
  return (
    <>
      <Head>
        <title>Velterax</title>
        <meta name="description" content="Velterax Company Website" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className="bg-lightBg font-opensans text-darkText">
        <Hero />
        <Features />
        <Jumbotron />
        <Testimonials />
        <ContactForm />
        <div className="p-4"></div>
      </main>
    </>
  );
}
