import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BookingCard() {

  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [errors, setErrors] = useState({});
  const [highlight, setHighlight] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  // 🚖 AIRPORT PICKUP EVENT
  useEffect(() => {
    const handleAirportPickup = () => {
      setPickup("Bandaranaike International Airport");

      setHighlight(true);
      setTimeout(() => setHighlight(false), 300);
    };

    window.addEventListener("airportPickup", handleAirportPickup);

    return () => {
      window.removeEventListener("airportPickup", handleAirportPickup);
    };
  }, []);

  // 🌐 URL PARAM SUPPORT
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const selectedDrop = params.get("drop");

    if (selectedDrop) {
      setDrop(selectedDrop);

      setTimeout(() => {
        document
          .getElementById("BookingCard")
          ?.scrollIntoView({ behavior: "smooth" });
      }, 200);
    }
  }, []);

  const validateForm = () => {
    let newErrors = {};

    if (!pickup.trim()) newErrors.pickup = "Pickup location is required";
    if (!drop.trim()) newErrors.drop = "Drop location is required";
    if (!date) newErrors.date = "Travel date is required";
    if (!time) newErrors.time = "Pickup time is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleWhatsApp = () => {
    if (!validateForm()) return;

    const formattedDate = new Date(date).toLocaleDateString("en-GB");

    const message = `
🚖 Varshanan Cabs Booking Request

📍 Pickup: ${pickup}
📍 Drop: ${drop}
📅 Date: ${formattedDate}
⏰ Time: ${time}
    `;

    const url = `https://wa.me/94776716786?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank");
  };

  return (
    <section
      id="BookingCard"
      className="w-full px-4 sm:px-6 py-14 bg-[#02131f]"
    >

      <div className="max-w-xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`
            relative
            backdrop-blur-2xl
            border
            rounded-3xl
            p-5 sm:p-6 md:p-8
            shadow-xl
            overflow-hidden
            transition
            duration-300
            ${highlight ? "border-yellow-400 scale-[1.02]" : "border-white/10 bg-white/10"}
          `}
        >

          {/* Glow */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan-400/20 blur-3xl rounded-full" />

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Quick Booking
          </h2>

          <p className="text-gray-300 text-sm sm:text-base mt-2 mb-6">
            Fast • Safe • Reliable Sri Lanka Travel
          </p>

          <div className="space-y-4">

            {/* Pickup */}
            <input
              type="text"
              placeholder="Pickup Location"
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="w-full bg-black/30 text-white border border-white/10 rounded-xl p-3 sm:p-4 outline-none focus:border-yellow-400"
            />
            {errors.pickup && <p className="text-red-400 text-sm">{errors.pickup}</p>}

            {/* Drop */}
            <input
              type="text"
              placeholder="Drop Location"
              value={drop}
              onChange={(e) => setDrop(e.target.value)}
              className="w-full bg-black/30 text-white border border-white/10 rounded-xl p-3 sm:p-4 outline-none focus:border-yellow-400"
            />
            {errors.drop && <p className="text-red-400 text-sm">{errors.drop}</p>}

            {/* Date */}
            <input
              type="date"
              min={today}
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="w-full bg-black/30 text-white border border-white/10 rounded-xl p-3 sm:p-4 outline-none focus:border-yellow-400"
            />
            {errors.date && <p className="text-red-400 text-sm">{errors.date}</p>}

            {/* Time */}
            <input
              type="time"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              className="w-full bg-black/30 text-white border border-white/10 rounded-xl p-3 sm:p-4 outline-none focus:border-yellow-400"
            />
            {errors.time && <p className="text-red-400 text-sm">{errors.time}</p>}

            {/* Button */}
            <button
              onClick={handleWhatsApp}
              className="w-full bg-yellow-400 text-black py-3 sm:py-4 rounded-xl font-black hover:scale-[1.02] transition"
            >
              Book via WhatsApp
            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}