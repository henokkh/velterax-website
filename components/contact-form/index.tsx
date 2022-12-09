import React from "react";

function ContactForm() {
  return (
    <div>
      <section id="early-access" className=" bg-darkBlue2 px-6 md:px-0">
        <div className=" mx-auto max-w-4xl space-y-6 rounded-lg  bg-darkBlue1 p-10 px-6 text-center md:px-16">
          <h5 className="text-2xl font-bold">Contact Us Today</h5>
          <p className="md:text-left">
            It only takes a minute to reach us. If you have any questions, our
            support team would be happy to help you.
          </p>
          {/* Input & Button Container */}
          <form className="flex flex-col space-y-4 md:text-left">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block font-medium  text-white"
              >
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
              <label
                htmlFor="email"
                className="mb-2 block font-medium  text-white"
              >
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
              <label
                htmlFor="message"
                className="mb-2 block font-medium  text-white"
              >
                Message
              </label>
              <textarea
                id="message"
                className="block w-full rounded-lg border border-gray-300  bg-gray-50  p-2.5 text-gray-900  placeholder-gray-400 focus:border-blue-500  focus:ring-blue-500"
                required
              />
            </div>

            <button
              type="submit"
              className="rounded-lg bg-accentCyan  px-5 py-2.5 text-center font-medium  hover:scale-105 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300  md:w-64 "
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}

export default ContactForm;
