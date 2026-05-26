import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function About() {
  return (
    <div className="bg-[#02131f] text-white min-h-screen">

      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-24 px-6 text-center">

        <p className="text-yellow-400 uppercase tracking-[5px] mb-5">
          About Us
        </p>

        <h1 className="text-5xl md:text-7xl font-black">
          Your Trusted
          <span className="block text-cyan-400">
            Travel Partner
          </span>
        </h1>

      </section>

      {/* Content */}
      <section className="pb-24 px-6">

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Image */}
          <div>

            <img
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop"
              alt=""
              className="rounded-[30px] shadow-2xl"
            />

          </div>

          {/* Text */}
          <div>

            <h2 className="text-4xl md:text-5xl font-black mb-8">
              Varshanan Cabs Nilaveli
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6 text-lg">

              We provide trusted taxi services, airport pickups,
              private tours and local travel experiences across Sri Lanka.

            </p>

            <p className="text-gray-300 leading-relaxed mb-6 text-lg">

              Based in Nilaveli, Trincomalee, our mission is to offer safe,
              comfortable and unforgettable travel experiences for tourists
              and local travelers.

            </p>

            <p className="text-gray-300 leading-relaxed text-lg">

              With professional drivers, clean luxury vehicles and local
              knowledge, we ensure every journey becomes memorable.

            </p>

          </div>

        </div>

      </section>

    <WhatsAppButton />

      <Footer />

    </div>
  );
}