import Head from "next/head";

import ContactForm from "../components/contact-form";
import Hero from "../components/hero";

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>Velterax</title>
        <meta name="description" content="Velterax Company Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <Hero />
        Main Content
        <ContactForm />
        <div className="p-4"></div>
      </main>
    </div>
  );
}
