import Image from "next/image";
import Link from "next/link";

function Header() {
  return (
    <header className="flex  w-full items-center justify-center bg-lightBg px-6 py-4 font-opensans text-darkText">
      <Link href="/">
        <Image
          width="182"
          height="80"
          src="/images/velterax-logo-light.png"
          alt="Velterax Logo"
          className="pt-2"
        />
      </Link>
      <nav className="ml-auto flex space-x-4">
        <a href="#features" className="hover:underline">
          Features
        </a>
        <a href="#testimonials" className="hover:underline">
          Testimonials
        </a>
        <a href="#testimonials" className="hover:underline">
          Contact Us
        </a>
      </nav>
    </header>
  );
}

export default Header;
