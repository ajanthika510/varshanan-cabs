import { useState } from "react";
import { motion } from "framer-motion";

export default function BookingCard() {

  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [date, setDate] = useState("");

  const handleWhatsApp = () => {

    const message = `
🚖 Varshanan Cabs Booking Request

📍 Pickup Location: ${pickup}

📍 Destination: ${destination}

📅 Travel Date: ${date}
    `;

    const whatsappUrl = `https://wa.me/94776716786?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
  };

  return (

    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      whileHover={{ y: -5 }}
      className="relative bg-white/10 backdrop-blur-2xl border border-white/10 rounded-[30px] p-6 md:p-8 shadow-[0_0_60px_rgba(0,0,0,0.5)] overflow-hidden"
    >

      {/* Glow */}
      <div className="absolute top-[-50px] right-[-50px] w-[150px] h-[150px] bg-cyan-400/20 blur-[80px] rounded-full" />

      <h2 className="text-2xl md:text-3xl font-black text-white mb-2">
        Quick Booking
      </h2>

      <p className="text-gray-300 mb-8 text-sm md:text-base">
        Fast pickup • Safe travel • Trusted local drivers
      </p>

      <div className="space-y-5">

        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="text"
          placeholder="Pickup Location"
          value={pickup}
          onChange={(e) => setPickup(e.target.value)}
          className="w-full bg-black/30 text-white border border-white/10 rounded-2xl p-4 outline-none focus:border-yellow-400"
        />

        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="text"
          placeholder="Destination"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
          className="w-full bg-black/30 text-white border border-white/10 rounded-2xl p-4 outline-none focus:border-yellow-400"
        />

        <motion.input
          whileFocus={{ scale: 1.02 }}
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full bg-black/30 text-white border border-white/10 rounded-2xl p-4 outline-none focus:border-yellow-400"
        />

        <motion.button
          whileHover={{
            scale: 1.05,
            boxShadow: "0px 0px 25px rgba(250,204,21,0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={handleWhatsApp}
          className="w-full bg-yellow-400 text-black py-4 rounded-2xl font-black transition duration-300"
        >
          Book via WhatsApp
        </motion.button>

      </div>

    </motion.div>
  );
}