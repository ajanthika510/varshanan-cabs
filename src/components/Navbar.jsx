import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

import logo from "../assets/logo.png";

export default function Navbar() {

  const [mobileMenu, setMobileMenu] = useState(false);

  return (

    <nav className="fixed top-0 left-0 w-full z-50 bg-[#02131f]/80 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <img
            src={logo}
            alt="logo"
            className="
                w-20
                h-20
                sm:w-24
                sm:h-24
                md:w-28
                md:h-28
                object-contain
                rounded-full
                shadow-[0_0_25px_rgba(250,204,21,0.35)]
              "
          />

          <div>
            <h1 className="text-base sm:text-lg md:text-2xl font-black text-yellow-400 leading-none">
              Varshanan Cabs
            </h1>

            <p className="text-[10px] sm:text-xs text-gray-300">
              Nilaveli • Trincomalee
            </p>
          </div>

        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 text-white font-medium">

          <Link to="/" className="hover:text-yellow-400 transition">
            Home
          </Link>

          <a href="#fleet" className="hover:text-yellow-400 transition">
            Fleet
          </a>

          <Link to="/tours" className="hover:text-yellow-400 transition">
            Tour
          </Link>

          <Link to="/services" className="hover:text-yellow-400 transition">
            Services
          </Link>

          <Link to="/about" className="hover:text-yellow-400 transition">
            About
          </Link>

          <Link to="/contact" className="hover:text-yellow-400 transition">
            Contact
          </Link>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3">

          {/* CTA Button */}
          <a
            href="https://wa.me/94776716786"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex bg-yellow-400 text-black px-4 md:px-6 py-2 rounded-full font-bold hover:scale-105 transition text-sm md:text-base"
          >
            Book Now
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden text-white"
          >
            {mobileMenu ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

      </div>

      {/* Mobile Menu */}
      {mobileMenu && (

        <div className="lg:hidden bg-[#02131f] border-t border-white/10 px-6 py-6 flex flex-col gap-5 text-white font-medium">

          <Link
            to="/"
            onClick={() => setMobileMenu(false)}
            className="hover:text-yellow-400 transition"
          >
            Home
          </Link>

          <a
            href="#fleet"
            onClick={() => setMobileMenu(false)}
            className="hover:text-yellow-400 transition"
          >
            Fleet
          </a>

          <Link
            to="/tours"
            onClick={() => setMobileMenu(false)}
            className="hover:text-yellow-400 transition"
          >
            Tour
          </Link>

          <Link
            to="/services"
            onClick={() => setMobileMenu(false)}
            className="hover:text-yellow-400 transition"
          >
            Services
          </Link>

          <Link
            to="/about"
            onClick={() => setMobileMenu(false)}
            className="hover:text-yellow-400 transition"
          >
            About
          </Link>

          <Link
            to="/contact"
            onClick={() => setMobileMenu(false)}
            className="hover:text-yellow-400 transition"
          >
            Contact
          </Link>

          <a
            href="https://wa.me/94776716786"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-yellow-400 text-center text-black px-6 py-3 rounded-full font-bold mt-2"
          >
            Book Now
          </a>

        </div>

      )}

    </nav>
  );
}