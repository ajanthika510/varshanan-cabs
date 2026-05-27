import { motion } from "framer-motion";
import sedan from "../assets/sedan.png";

const vehicles = [
  {
    name: "Luxury Sedan",
    image: sedan,
    desc: "Comfortable, stylish, perfect for city rides and airport transfers.",
    seats: 4,
    luggage: "2 Bags",
    ac: true,
    transmission: "Auto",
    pricePerKm: 180,
    fuelType: "Hybrid",
    rating: 4.8,
  },
];

export default function Fleet() {

  return (
    <section id="fleet" className="py-20 px-4 bg-[#02131f]">
      <div className="max-w-6xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-14">
          <p className="text-cyan-400 tracking-[6px] uppercase text-sm">
            Premium Fleet
          </p>
          <h2 className="text-5xl font-black text-white mt-2">
            Choose Your Ride
          </h2>
        </div>

        {/* CARD */}
        {vehicles.map((v, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.4 }}
            className="relative flex flex-col md:flex-row bg-white/5 border border-white/10 rounded-3xl overflow-hidden backdrop-blur-xl"
          >

            {/* IMAGE SIDE */}
            <div className="md:w-1/2 relative">
              <img
                src={v.image}
                className="h-full w-full object-cover min-h-[260px]"
                alt={v.name}
              />

              {/* GRADIENT OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

              {/* RATING BADGE */}
              <div className="absolute top-4 left-4 bg-yellow-400 text-black font-bold px-3 py-1 rounded-full text-sm">
                ⭐ {v.rating}
              </div>
            </div>

            {/* INFO SIDE */}
            <div className="md:w-1/2 p-6 md:p-8 flex flex-col justify-between">

              {/* TOP INFO */}
              <div>

                <h3 className="text-3xl font-bold text-white">
                  {v.name}
                </h3>

                <p className="text-gray-300 text-sm mt-2 mb-6">
                  {v.desc}
                </p>

                {/* SPEC GRID */}
                <div className="grid grid-cols-2 gap-3 text-sm text-gray-300">

                  <div className="bg-white/5 p-3 rounded-xl">👥 {v.seats} Seats</div>
                  <div className="bg-white/5 p-3 rounded-xl">🧳 {v.luggage}</div>
                  <div className="bg-white/5 p-3 rounded-xl">❄️ AC: {v.ac ? "Yes" : "No"}</div>
                  <div className="bg-white/5 p-3 rounded-xl">⚙️ {v.transmission}</div>
                  <div className="bg-white/5 p-3 rounded-xl">⛽ {v.fuelType}</div>
                  <div className="bg-white/5 p-3 rounded-xl text-cyan-400 font-bold">
                    Rs. {v.pricePerKm}/km
                  </div>

                </div>
              </div>

              {/* CTA BAR */}
              <div className="mt-6 flex items-center justify-between">

                <div>
                  <p className="text-cyan-400 font-bold text-lg">
                    Instant Booking
                  </p>
                  <p className="text-gray-400 text-xs">
                    WhatsApp confirmation
                  </p>
                </div>

              </div>

            </div>
          </motion.div>
        ))}

      </div>
    </section>
  );
}