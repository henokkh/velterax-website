import Image from "next/image";
import React from "react";

function ContactForm() {
  return (
    <div>
      <section
        id="contact"
        className=" bg-lightBg px-6 py-32 text-darkText md:px-0"
      >
        <div className=" bg-darkBlue1 mx-auto max-w-4xl space-y-6  rounded-lg p-10 px-6 text-center md:px-16">
          <h5 className="text-2xl font-bold">Contact Us Today</h5>
          <p className="md:text-left">
            It only takes a minute to reach us. If you have any questions, our
            support team would be happy to help you.
          </p>
          {/* Input & Button Container */}
          <form className="flex flex-col space-y-4 md:text-left">
            <div>
              <label htmlFor="name" className="mb-2 block font-medium  ">
                Your name
              </label>
              <input
                type="text"
                id="name"
                className="block w-full rounded-lg border border-gray-300  bg-gray-50  p-2.5 text-gray-900  placeholder-gray-400 focus:border-blue-500  focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="mb-2 block font-medium  ">
                Email address
              </label>
              <input
                type="email"
                id="email"
                className="block w-full rounded-lg border border-gray-300  bg-gray-50  p-2.5 text-gray-900  placeholder-gray-400 focus:border-blue-500  focus:ring-blue-500"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="mb-2 block font-medium  ">
                Message
              </label>
              <textarea
                rows={5}
                id="message"
                className="block w-full rounded-lg border border-gray-300  bg-gray-50  p-2.5 text-gray-900  placeholder-gray-400 focus:border-blue-500  focus:ring-blue-500"
                required
              />
            </div>

            <div className="pt-8">
              <button
                type="submit"
                className=" flex w-52 items-center justify-center space-x-4 rounded-full bg-primaryAccent p-3 text-lg font-bold text-white hover:scale-105"
              >
                <span>Send Message</span>
                <Image
                  src="/images/icon-send.svg"
                  alt=""
                  width="25"
                  height="25"
                />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactForm;
