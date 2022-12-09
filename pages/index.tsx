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
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-darkBlue font-opensans text-white">
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
