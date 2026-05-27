import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

import logo from "../assets/logo.png";

export default function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const navigate = useNavigate();

  const handleBookNow = () => {
    setMobileMenu(false);

    // always go home with hash
    navigate("/#BookingCard");
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#02131f]/80 backdrop-blur-xl border-b border-white/10">

      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3 sm:py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link
          to="/"
          className="flex items-center gap-3"
          onClick={() => setMobileMenu(false)}
        >
          <img
            src={logo}
            alt="Varshanan Cabs Logo"
            className="w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 object-contain rounded-full shadow-[0_0_25px_rgba(250,204,21,0.35)]"
          />

          <div className="leading-tight hidden sm:block">
            <h1 className="text-sm sm:text-lg md:text-xl font-black text-yellow-400">
              Varshanan Cabs
            </h1>
            <p className="text-[10px] sm:text-xs text-gray-300">
              Nilaveli • Trincomalee
            </p>
          </div>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex gap-8 text-white font-medium">

          <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
          <Link to="/tours" className="hover:text-yellow-400 transition">Tour</Link>
          <Link to="/services" className="hover:text-yellow-400 transition">Services</Link>
          <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
          <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>

        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-3">

          {/* BOOK NOW (GLOBAL FIXED BUTTON) */}
          <button
            onClick={handleBookNow}
            className="hidden sm:flex bg-yellow-400 text-black px-4 md:px-6 py-2 rounded-full font-bold hover:scale-105 transition text-sm md:text-base"
          >
            Book Now
          </button>

          {/* MOBILE MENU ICON */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="lg:hidden text-white"
          >
            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenu && (
        <div className="lg:hidden bg-[#02131f] border-t border-white/10 px-6 py-6 flex flex-col gap-5 text-white font-medium">

          <Link to="/" onClick={() => setMobileMenu(false)}>Home</Link>
          <Link to="/tours" onClick={() => setMobileMenu(false)}>Tour</Link>
          <Link to="/services" onClick={() => setMobileMenu(false)}>Services</Link>
          <Link to="/about" onClick={() => setMobileMenu(false)}>About</Link>
          <Link to="/contact" onClick={() => setMobileMenu(false)}>Contact</Link>

          {/* MOBILE BOOK NOW FIX */}
          <button
            onClick={handleBookNow}
            className="bg-yellow-400 text-center text-black px-6 py-3 rounded-full font-bold mt-2"
          >
            Book Now
          </button>

        </div>
      )}

    </nav>
  );
}