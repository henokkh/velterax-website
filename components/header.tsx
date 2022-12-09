import Image from "next/image";

function Header() {
  return (
    <header className=" flex w-full items-center bg-darkBlue px-6 pt-10  font-opensans text-white">
      <Image
        width="182"
        height="80"
        src="/images/logo-dark-mode.svg"
        alt="Velterax Logo"
      />
      <nav className="ml-auto flex space-x-4">
        <a href="#features" className="hover:text-accentCyan">
          Features
        </a>
        <a href="#testimonials" className="hover:text-accentCyan">
          Testimonials
        </a>
        <a href="#testimonials" className="hover:text-accentCyan">
          Contact Us
        </a>
      </nav>
    </header>
  );
}

export default Header;
