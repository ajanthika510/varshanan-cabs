import { motion } from "framer-motion";
import sedan from "../assets/sedan.png";

const vehicles = [
  {
    name: "Luxury Sedan",
    image: sedan,
    desc:
      "Comfortable, stylish, perfect for city rides and airport transfers.",
    seats: 4,
    luggage: "2 Bags",
    ac: true,
    transmission: "Auto",
    fuelType: "Hybrid",
    rating: 4.8,
  },
];

export default function Fleet() {

  return (

    <section
      id="fleet"
      className="
        py-16
        sm:py-20
        md:py-24
        px-4
        sm:px-6
        bg-[#02131f]
      "
    >

      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <div className="text-center mb-12 sm:mb-16">

          <p
            className="
              text-cyan-400
              tracking-[4px]
              sm:tracking-[6px]
              uppercase
              text-xs
              sm:text-sm
              font-semibold
            "
          >
            Premium Fleet
          </p>

          <h2
            className="
              text-3xl
              sm:text-5xl
              md:text-6xl
              font-black
              text-white
              mt-3
              leading-tight
            "
          >
            Choose Your Ride
          </h2>

        </div>

        {/* VEHICLE CARD */}
        {vehicles.map((v, i) => (

          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.5 }}
            className="
              relative
              flex
              flex-col
              lg:flex-row
              bg-white/5
              border
              border-white/10
              rounded-[30px]
              overflow-hidden
              backdrop-blur-xl
              shadow-[0_0_40px_rgba(0,0,0,0.3)]
            "
          >

            {/* IMAGE SIDE */}
            <div className="lg:w-1/2 relative">

              <img
                src={v.image}
                alt={v.name}
                className="
                  w-full
                  h-[260px]
                  sm:h-[320px]
                  md:h-[420px]
                  lg:h-full
                  object-cover
                  object-center
                "
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent" />

              {/* RATING */}
              <div
                className="
                  absolute
                  top-4
                  left-4
                  bg-yellow-400
                  text-black
                  font-bold
                  px-4
                  py-2
                  rounded-full
                  text-xs
                  sm:text-sm
                  shadow-lg
                "
              >
                ⭐ {v.rating}
              </div>

            </div>

            {/* INFO SIDE */}
            <div
              className="
                lg:w-1/2
                p-5
                sm:p-7
                md:p-10
                flex
                flex-col
                justify-between
              "
            >

              {/* TOP */}
              <div>

                <h3
                  className="
                    text-2xl
                    sm:text-3xl
                    md:text-4xl
                    font-black
                    text-white
                    leading-tight
                  "
                >
                  {v.name}
                </h3>

                <p
                  className="
                    text-gray-300
                    text-sm
                    sm:text-base
                    leading-relaxed
                    mt-4
                    mb-8
                  "
                >
                  {v.desc}
                </p>

                {/* SPEC GRID */}
                <div
                  className="
                    grid
                    grid-cols-1
                    sm:grid-cols-2
                    gap-3
                    text-sm
                    sm:text-base
                  "
                >

                  {/* SEATS */}
                  <div className="bg-white/5 p-4 rounded-2xl text-gray-300">
                    👥 {v.seats} Seats
                  </div>

                  {/* LUGGAGE */}
                  <div className="bg-white/5 p-4 rounded-2xl text-gray-300">
                    🧳 {v.luggage}
                  </div>

                  {/* AC */}
                  <div className="bg-white/5 p-4 rounded-2xl text-gray-300">
                    ❄️ AC: {v.ac ? "Yes" : "No"}
                  </div>

                  {/* TRANSMISSION */}
                  <div className="bg-white/5 p-4 rounded-2xl text-gray-300">
                    ⚙️ {v.transmission}
                  </div>

                  {/* FUEL */}
                  <div className="bg-white/5 p-4 rounded-2xl text-gray-300">
                    ⛽ {v.fuelType}
                  </div>

                  {/* PRICING */}
                  <div
                    className="
                      bg-white/5
                      p-4
                      rounded-2xl
                      text-yellow-400
                      font-bold
                      text-center
                    "
                  >
                    Contact for Pricing
                  </div>

                </div>

              </div>

              {/* CTA */}
              <div
                className="
                  mt-8
                  flex
                  flex-col
                  sm:flex-row
                  items-start
                  sm:items-center
                  justify-between
                  gap-5
                "
              >

                {/* LEFT TEXT */}
                <div>

                  <p
                    className="
                      text-cyan-400
                      font-bold
                      text-lg
                      sm:text-xl
                    "
                  >
                    Instant Booking
                  </p>

                  <p
                    className="
                      text-gray-400
                      text-xs
                      sm:text-sm
                      mt-1
                    "
                  >
                    WhatsApp confirmation available
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