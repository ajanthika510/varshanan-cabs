import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

import {
  Plane,
  CarTaxiFront,
  MapPinned,
  ShieldCheck,
  Clock3,
  Users,
} from "lucide-react";

const services = [
  {
    icon: <Plane size={45} />,
    title: "Airport Pickup",
    desc: "Reliable airport pickup and drop-off services with professional drivers and comfortable vehicles.",
  },

  {
    icon: <CarTaxiFront size={45} />,
    title: "Taxi Service",
    desc: "Safe and affordable taxi rides for local and long-distance travel across Sri Lanka.",
  },

  {
    icon: <MapPinned size={45} />,
    title: "Day Tours",
    desc: "Explore beautiful destinations including Sigiriya, Ella, Kandy, Galle and Nilaveli.",
  },

  {
    icon: <ShieldCheck size={45} />,
    title: "Safe Travel",
    desc: "Travel confidently with experienced drivers and well-maintained luxury vehicles.",
  },

  {
    icon: <Clock3 size={45} />,
    title: "24/7 Service",
    desc: "Available anytime for airport transfers, tours and emergency travel requirements.",
  },

  {
    icon: <Users size={45} />,
    title: "Local Guides",
    desc: "Friendly local guides to help tourists discover authentic Sri Lankan experiences.",
  },
];

export default function Services() {
  return (
    <div className="bg-[#02131f] text-white min-h-screen overflow-hidden">

      <Navbar />

      {/* HERO */}
      <section className="relative pt-40 pb-28 px-6 overflow-hidden">

        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/20 blur-[140px]" />

        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/20 blur-[140px]" />

        <div className="relative z-10 max-w-7xl mx-auto text-center">

          <p className="text-yellow-400 uppercase tracking-[5px] mb-6">
            Premium Travel Solutions
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">

            Our Professional

            <span className="block text-cyan-400">
              Travel Services
            </span>

          </h1>

          <p className="mt-8 text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed">

            We provide airport transfers, taxi services, local tours,
            safe travel and unforgettable Sri Lanka tourism experiences.

          </p>

        </div>
      </section>

      {/* SERVICES GRID */}
      <section className="pb-24 px-6">

        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-[30px] p-10 hover:border-yellow-400/50 hover:-translate-y-2 transition duration-500"
            >

              {/* Icon */}
              <div className="text-yellow-400 mb-8 group-hover:scale-110 transition duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h2 className="text-3xl font-black mb-5">
                {service.title}
              </h2>

              {/* Description */}
              <p className="text-gray-300 leading-relaxed">
                {service.desc}
              </p>

            </div>
          ))}

        </div>

      </section>

      {/* CTA SECTION */}
      <section className="pb-28 px-6">

        <div className="max-w-6xl mx-auto bg-gradient-to-r from-yellow-400 to-cyan-400 rounded-[40px] p-12 md:p-20 text-center text-black shadow-2xl">

          <h2 className="text-4xl md:text-6xl font-black leading-tight">

            Ready To Explore
            Sri Lanka?

          </h2>

          <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto">

            Contact us today for airport pickup, private tours,
            luxury travel and unforgettable experiences.

          </p>

          <a
            href="https://wa.me/94776716786"
            target="_blank"
            className="inline-block mt-10 bg-black text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition duration-300"
          >
            Book via WhatsApp
          </a>

        </div>

      </section>

      <WhatsAppButton />

      <Footer />

    </div>
  );
}