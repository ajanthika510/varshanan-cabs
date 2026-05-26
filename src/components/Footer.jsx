import logo from "../assets/logo.png";

import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#02131f] border-t border-white/10 pt-16 pb-10 px-6"
    >

      <div className="max-w-7xl mx-auto">

        {/* TOP GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* LOGO */}
          <div>

            <div className="flex items-center gap-4 mb-5">

              <img
                src={logo}
                alt="logo"
                className="w-16 h-16 object-contain rounded-full"
              />

              <div>
                <h2 className="text-2xl font-black text-yellow-400">
                  Varshanan Cabs
                </h2>

                <p className="text-gray-400">
                  Nilaveli • Trincomalee
                </p>
              </div>

            </div>

            <p className="text-gray-400 leading-relaxed">
              Trusted taxi service and Sri Lanka travel agency providing
              airport pickup, private tours and safe travel experiences.
            </p>

          </div>

          {/* CONTACT */}
          <div>

            <h3 className="text-2xl font-bold text-white mb-6">
              Contact
            </h3>

            <div className="space-y-4 text-gray-300">

              <p>
                No 241G Valaiyoothu, Nilaveli, Trincomalee
              </p>

              <p>
                +94 77 671 6786
              </p>

              <p>
                mathiyalini496@gmail.com
              </p>

            </div>

          </div>

          {/* SERVICES */}
          <div>

            <h3 className="text-2xl font-bold text-white mb-6">
              Services
            </h3>

            <div className="space-y-4 text-gray-300">

              <p>Airport Pickup</p>
              <p>Taxi Service</p>
              <p>Day Tours</p>
              <p>Local Guide</p>
              <p>Safe Travel</p>

            </div>

          </div>

          {/* SOCIALS */}
          <div>

            <h3 className="text-2xl font-bold text-white mb-6">
              Follow Us
            </h3>

            <div className="flex items-center gap-4">

              {/* FACEBOOK */}
              <a
                href="https://www.facebook.com/profile.php?id=61590237022508"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 hover:bg-blue-600 transition duration-300 flex items-center justify-center text-xl text-white"
              >
                <FaFacebookF />
              </a>

              {/* INSTAGRAM */}
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 hover:bg-pink-600 transition duration-300 flex items-center justify-center text-xl text-white"
              >
                <FaInstagram />
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/94776716786"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 rounded-2xl bg-white/5 border border-white/10 hover:bg-green-500 transition duration-300 flex items-center justify-center text-xl text-white"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-5 text-sm text-gray-400 text-center">

          {/* LEFT */}
          <p>
            © 2026 Varshanan Cabs. All Rights Reserved.
          </p>

          {/* CENTER */}
          <div className="flex items-center gap-6">

            <button className="hover:text-yellow-400 transition">
              Privacy Policy
            </button>

            <button className="hover:text-yellow-400 transition">
              Cookies
            </button>

          </div>

          {/* RIGHT */}
          <p>

            Powered by{" "}

            <a
              href="https://www.neirahtech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 font-semibold hover:text-cyan-300 transition"
            >
              Neirahtech
            </a>

          </p>

        </div>

      </div>

    </footer>
  );
}