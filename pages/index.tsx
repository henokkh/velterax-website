import Head from "next/head";

import ContactForm from "../components/contact-form";
import Features from "../components/features";
import Hero from "../components/hero";
import Jumbotron from "../components/jumbotron";
import Testimonials from "../components/testimonials";

export default function Home() {
  return (
    <div className="font-opensans dark:bg-darkBlue dark:text-white">
      <Head>
        <title>Velterax</title>
        <meta name="description" content="Velterax Company Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Hero />
        <Features />
        <Jumbotron />
        <Testimonials />
        <ContactForm />
        <div className="p-4"></div>
      </main>
    </div>
  );
}
