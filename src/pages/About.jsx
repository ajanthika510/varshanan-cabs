import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

import owner from "../assets/owner.jpg";

export default function About() {
  return (
    <div className="bg-[#02131f] text-white min-h-screen overflow-hidden">

      <Navbar />

      {/* HERO */}
      <section className="relative pt-36 md:pt-44 pb-24 md:pb-32 px-4 sm:px-6 text-center overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-400/20 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-yellow-400/20 blur-[120px] rounded-full" />

        <div className="relative z-10 max-w-5xl mx-auto">

          <p className="text-yellow-400 uppercase tracking-[5px] md:tracking-[8px] mb-5 text-sm md:text-base font-semibold">
            About Us
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black leading-tight">

            Your Trusted

            <span className="block text-cyan-400">
              Travel Partner
            </span>

          </h1>

          <p className="mt-8 text-gray-300 text-base md:text-xl max-w-3xl mx-auto leading-relaxed">

            Experience comfortable, safe and unforgettable journeys
            across Sri Lanka with trusted local drivers and premium travel services.

          </p>

        </div>

      </section>

      {/* ABOUT CONTENT */}
      <section className="pb-24 md:pb-32 px-4 sm:px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* IMAGE */}
          <div className="relative flex justify-center">

            {/* Glow */}
            <div className="absolute inset-0 bg-cyan-400/20 blur-[100px] rounded-full" />

            <img
              src={owner}
              alt="Varshanan Cabs Owner"
              className="
                relative
                z-10
                w-full
                max-w-md
                h-[420px]
                sm:h-[500px]
                md:h-[600px]
                object-cover
                rounded-[30px]
                md:rounded-[40px]
                shadow-[0_0_50px_rgba(34,211,238,0.2)]
                border
                border-white/10
              "
            />

          </div>

          {/* TEXT */}
          <div>

            <p className="text-cyan-400 uppercase tracking-[5px] mb-5 font-semibold text-sm md:text-base">
              Varshanan Cabs Nilaveli
            </p>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-black leading-tight mb-8">

              Luxury Travel &
              <span className="block text-yellow-400">
                Trusted Taxi Service
              </span>

            </h2>

            <p className="text-gray-300 leading-relaxed mb-6 text-base md:text-lg">

              We provide trusted taxi services, airport pickups,
              private tours and local travel experiences across Sri Lanka.

            </p>

            <p className="text-gray-300 leading-relaxed mb-6 text-base md:text-lg">

              Based in Nilaveli, Trincomalee, our mission is to offer safe,
              comfortable and unforgettable travel experiences for tourists
              and local travelers.

            </p>

            <p className="text-gray-300 leading-relaxed mb-10 text-base md:text-lg">

              With professional drivers, clean luxury vehicles and local
              knowledge, we ensure every journey becomes memorable.

            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6">

              <div className="bg-white/5 border border-white/10 rounded-3xl p-5 text-center">

                <h3 className="text-2xl md:text-4xl font-black text-yellow-400">
                  24/7
                </h3>

                <p className="text-gray-300 mt-2 text-sm md:text-base">
                  Service
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-5 text-center">

                <h3 className="text-2xl md:text-4xl font-black text-cyan-400">
                  100%
                </h3>

                <p className="text-gray-300 mt-2 text-sm md:text-base">
                  Safe
                </p>

              </div>

              <div className="bg-white/5 border border-white/10 rounded-3xl p-5 text-center">

                <h3 className="text-2xl md:text-4xl font-black text-yellow-400">
                  Local
                </h3>

                <p className="text-gray-300 mt-2 text-sm md:text-base">
                  Guides
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      <WhatsAppButton />

      <Footer />

    </div>
  );
}