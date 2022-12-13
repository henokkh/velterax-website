import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-darkBg text-white">
      <div className="container mx-auto px-5 pt-12 pb-10">
        {/* Flex Container For All Items */}
        <div className="flex flex-col justify-between space-y-24 md:flex-row md:space-y-0">
          {/* Email & Phone */}
          <div className="mt-10 space-y-6">
            <div className="flex items-center space-x-3 md:-mt-10">
              <div className="w-6">
                <Image
                  src="/images/icon-phone.svg"
                  alt=""
                  className="scale-10"
                  width={20}
                  height={20}
                />
              </div>
              <div>+1-543-123-4567</div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-6">
                <Image
                  src="/images/icon-email.svg"
                  alt=""
                  className="scale-10"
                  width={20}
                  height={20}
                />
              </div>
              <div>example@Velterax.com</div>
            </div>
          </div>

          {/* Menus */}
          <div className="flex flex-col space-y-10 text-xl md:flex-row md:space-x-20 md:space-y-0 md:text-base">
            <div className="flex flex-col space-y-3">
              <a href="#">About</a>
              <a href="#">Jobs</a>
              <a href="#">Press</a>
              <a href="#">Blog</a>
            </div>
            <div className="flex flex-col space-y-3">
              <a href="#">Contact Us</a>
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
            </div>
          </div>

          {/* Social */}
          <div className="flex justify-center space-x-3 pb-10">
            <div>
              <a href="#">
                <Image
                  src="/images/social-media-icons/facebook.svg"
                  alt=""
                  className="ficon bg-darkBlue rounded-full p-2"
                  width={40}
                  height={40}
                />
              </a>
            </div>
            <div>
              <a href="#">
                <Image
                  src="/images/social-media-icons/twitter.svg"
                  alt=""
                  className="ficon bg-darkBlue rounded-full p-2"
                  width={40}
                  height={40}
                />
              </a>
            </div>
            <div>
              <a href="#">
                <Image
                  src="/images/social-media-icons/instagram.svg"
                  alt=""
                  className="ficon bg-darkBlue rounded-full p-2"
                  width={40}
                  height={40}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
