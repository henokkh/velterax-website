import Image from "next/image";
import React from "react";

function Jumbotron() {
  return (
    <section id="productive" className="bg-white dark:bg-darkBlue">
      {/* Productive Container */}
      <div className="container mx-auto flex flex-col items-center px-6 pt-24 pb-32 md:flex-row md:space-x-16">
        {/* Image */}
        <div className="md:w-1/2">
          <Image
            src="/images/illustration-stay-productive.png"
            alt=""
            className="mb-10"
            width="400"
            height="400"
          />
        </div>
        {/* Content */}
        <div className="flex flex-col items-start md:w-1/2">
          <div className="flex flex-col space-y-5">
            <h4 className="max-w-md text-xl font-bold md:text-4xl">
              Stay productive, wherever you are
            </h4>
            <p className="text-md md:text-lg">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>

            <p className="text-md md:text-lg">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>

          {/* Link */}
          <div className="mt-4 block">
            <a href="#" className="border-b border-accentCyan text-accentCyan">
              See how Flyo works
              <Image
                src="/images/icon-arrow.svg"
                alt=""
                className="inline pb-2"
                width="10"
                height="10"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Jumbotron;