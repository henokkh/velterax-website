import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section
      id="hero"
      className="bg-curvy-dark-mode bg-contain bg-bottom bg-no-repeat"
    >
      {/* Hero Container */}
      <div className="container mx-auto px-6 pb-52 text-center md:pt-20">
        <Image
          src="/images/illustration-intro.png"
          alt=""
          className="mx-auto"
          width="500"
          height="500"
        />
        <h1 className="mx-auto mb-10 mt-14 max-w-2xl text-3xl font-bold leading-normal md:text-4xl">
        We Create a Magnificent Digital Project to Grow &nbsp; 
        <span className="text-accentCyan">
        Your Bussines.
        </span>
        </h1>
        <p className="mx-auto mb-10 max-w-sm text-sm md:max-w-xl md:text-lg">
        Tailor-made service from a single source - we create solutions for you and together with you for your digital projects. We tailor our services to the needs of freelancers , medical practices , craftsmen , service providers or retailers , regardless of whether you want to give your established SME or startup a digital foundation. Our service is also aimed at clubs , associations , societies and restaurants , event locations , communities , churches ,Municipalities , schools , adult education centers or  private individuals - we provide answers to your questions about IT, the Internet and marketing.
        </p>
        <button className="w-52 rounded-full bg-accentCyan p-3 hover:scale-95">
          Let's Talk
        </button>
      </div>
    </section>
  );
}

export default Hero;
