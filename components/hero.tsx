/* eslint-disable */
import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <section
      id="hero"
      className="bg-curvy-dark bg-contain bg-bottom bg-no-repeat pb-8"
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

        <h1 className="mx-auto mb-10 mt-14 max-w-2xl text-3xl font-bold text-black  md:text-4xl">
          We Create a Magnificent Digital Project to Grow &nbsp;
          <span className="text-primaryAccent">Your Bussines.</span>
        </h1>
        <p className="mx-auto mb-10 max-w-sm text-sm leading-6 md:max-w-xl md:text-lg">
          Tailor-made service from a single source - we create solutions for you
          and together with you for your digital projects. We tailor our
          services to the needs of freelancers , medical practices , craftsmen ,
          service providers or retailers , regardless of whether you want to
          give your established SME or startup a digital foundation. Our service
          is also aimed at clubs , associations , societies and restaurants ,
          event locations , communities , churches ,Municipalities , schools ,
          adult education centers or private individuals - we provide answers to
          your questions about IT, the Internet and marketing.
        </p>
        <a href="#contact">
          <button className="mx-auto flex w-52 items-center justify-center space-x-4 rounded-full bg-primaryAccent p-3 text-lg font-bold text-white hover:scale-105">
            <span>Let&apos;s Talk</span>
            <Image
              src="/images/conversation.svg"
              alt=""
              width="25"
              height="25"
            />
          </button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
