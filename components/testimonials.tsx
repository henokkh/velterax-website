import Image from "next/image";
import React from "react";

function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50 dark:bg-darkBlue">
      {/* <!-- Testimonials Container --> */}
      <div className="container mx-auto px-6 pt-12 pb-80 md:pb-96">
        {/* <!-- Boxes Container --> */}
        <div className="relative flex w-full flex-col space-y-6 md:flex-row md:space-y-0 md:space-x-12">
          {/* <!-- Box 1 --> */}
          <div className="flex flex-col space-y-6 rounded-lg bg-gray-100 p-10 dark:bg-darkBlue3 md:w-1/3">
            <p className="text-sm leading-5 md:text-lg">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            {/* <!-- Customer Info --> */}
            <div className="flex space-x-4">
              <Image
                src="/images/profile-1.jpg"
                alt=""
                className="h-10 w-10 rounded-full"
                width="40"
                height="40"
              />
              <div>
                <h5 className="text-sm font-semibold">Satish Patel</h5>
                <p className="text-xs font-extralight">Founder & CEO. Huddle</p>
              </div>
            </div>
          </div>

          {/* <!-- Box 2 --> */}
          <div className="flex flex-col space-y-6 rounded-lg bg-gray-100 p-10 dark:bg-darkBlue3 md:w-1/3">
            <p className="text-sm leading-5 md:text-lg">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            {/* <!-- Customer Info --> */}
            <div className="flex space-x-4">
              <Image
                src="/images/profile-2.jpg"
                alt=""
                className="h-10 w-10 rounded-full"
                width="40"
                height="40"
              />
              <div>
                <h5 className="text-sm font-semibold">Bruce McKenzie</h5>
                <p className="text-xs font-extralight">
                  Founder & CEO. Huddle 2
                </p>
              </div>
            </div>
          </div>

          {/* <!-- Box 3 --> */}
          <div className="flex flex-col space-y-6 rounded-lg bg-gray-100 p-10 dark:bg-darkBlue3 md:w-1/3">
            <p className="text-sm leading-5 md:text-lg">
              Fylo has improved our team productivity by an order of magnitude.
              Since making the switch our team has become a well-oiled
              collaboration machine.
            </p>
            {/* <!-- Customer Info --> */}
            <div className="flex space-x-4">
              <Image
                src="/images/profile-3.jpg"
                alt=""
                className="h-10 w-10 rounded-full"
                width="40"
                height="40"
              />
              <div>
                <h5 className="text-sm font-semibold">Eva Boyd</h5>
                <p className="text-xs font-extralight">
                  Founder & CEO. Huddle 3
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
