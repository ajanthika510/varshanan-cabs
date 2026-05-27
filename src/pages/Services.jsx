import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Bookingcard from "../components/BookingCard";
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
    icon: <Plane size={40} />,
    title: "Airport Pickup",
    desc: "Reliable airport pickup and drop-off services with professional drivers and comfortable vehicles.",
  },
  {
    icon: <CarTaxiFront size={40} />,
    title: "Taxi Service",
    desc: "Safe and affordable taxi rides for local and long-distance travel across Sri Lanka.",
  },
  {
    icon: <MapPinned size={40} />,
    title: "Day Tours",
    desc: "Explore Sigiriya, Ella, Kandy, Galle and beautiful Sri Lanka destinations.",
  },
  {
    icon: <ShieldCheck size={40} />,
    title: "Safe Travel",
    desc: "Experienced drivers and well-maintained vehicles ensure maximum safety.",
  },
  {
    icon: <Clock3 size={40} />,
    title: "24/7 Service",
    desc: "Available anytime for airport transfers, tours and emergency travel.",
  },
  {
    icon: <Users size={40} />,
    title: "Local Guides",
    desc: "Friendly guides for authentic Sri Lankan travel experiences.",
  },
];

export default function Services() {

  const handleBook = () => {
    const url = "https://wa.me/94776716786?text=Hi%20I%20want%20to%20book%20a%20ride";
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-50 text-gray-800">

      <Navbar />

      {/* 🌤 HERO */}
      <section className="relative pt-28 sm:pt-36 md:pt-44 pb-16 sm:pb-20 md:pb-24 px-4 text-center overflow-hidden">

        {/* GLOWS */}
        <div className="absolute top-0 left-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-cyan-300/30 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[250px] sm:w-[400px] h-[250px] sm:h-[400px] bg-yellow-300/30 blur-[140px] rounded-full" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-6xl mx-auto"
        >

          <p className="text-cyan-700 uppercase tracking-[6px] mb-4 font-semibold text-xs sm:text-sm">
            Premium Travel Solutions
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black leading-tight text-gray-800">
            Our Professional
            <span className="block text-cyan-600">
              Travel Services
            </span>
          </h1>

          <p className="mt-6 sm:mt-8 text-gray-600 max-w-3xl mx-auto text-sm sm:text-lg">
            Airport transfers, taxi services, tours and safe travel experiences across Sri Lanka.
          </p>

        </motion.div>
      </section>

      {/* 🚗 SERVICES GRID */}
      <section className="pb-20 sm:pb-28 px-4 sm:px-6">

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group bg-white/70 backdrop-blur-xl border border-gray-100 rounded-2xl sm:rounded-3xl p-6 sm:p-10 shadow-md hover:shadow-xl transition duration-300"
            >

              <div className="text-cyan-600 mb-5 sm:mb-6 group-hover:scale-110 transition">
                {service.icon}
              </div>

              <h2 className="text-xl sm:text-2xl md:text-3xl font-black mb-3 text-gray-800">
                {service.title}
              </h2>

              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {service.desc}
              </p>

            </motion.div>
          ))}

        </div>
      </section>

      {/* 🚀 CTA SECTION */}
      <section className="pb-20 sm:pb-28 px-4 sm:px-6">

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-gradient-to-r from-cyan-500 to-sky-400 rounded-3xl sm:rounded-[40px] p-8 sm:p-12 md:p-20 text-center text-white shadow-2xl"
        >

          <h2 className="text-2xl sm:text-4xl md:text-6xl font-black leading-tight">
            Ready To Explore Sri Lanka?
          </h2>

          <p className="mt-4 sm:mt-6 text-sm sm:text-lg md:text-xl max-w-3xl mx-auto text-white/90">
            Book airport pickup, private tours and luxury travel instantly via WhatsApp.
          </p>

          <button
            onClick={handleBook}
            className="inline-block mt-8 sm:mt-10 bg-white text-cyan-700 px-6 sm:px-10 py-3 sm:py-5 rounded-full font-bold hover:scale-105 transition text-sm sm:text-base"
          >
            Book via WhatsApp
          </button>

        </motion.div>

      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}