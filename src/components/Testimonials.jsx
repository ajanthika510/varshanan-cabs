import { motion } from "framer-motion";
import { Star } from "lucide-react";

import customer1 from "../assets/customer1.jpeg";
import customer2 from "../assets/customer2.jpeg";
import customer3 from "../assets/customer3.jpg";
import customer4 from "../assets/customer4.jpg";

const testimonials = [
  {
    name: "John Smith",
    country: "Canada",
    image: customer1,
    review:
      "Professional driver and excellent airport pickup experience. Very comfortable ride and great communication.",
  },

  {
    name: "Emily Johnson",
    country: "Germany",
    image: customer2,
    review:
      "Clean vehicle, smooth ride and very friendly service. Highly recommend for Sri Lanka travel.",
  },

  {
    name: "Daniel Roberts",
    country: "United Kingdom",
    image: customer3,
    review:
      "Amazing service from start to finish. The vehicle was spotless, comfortable, and always on time.",
  },

  {
    name: "Sophia Williams",
    country: "Australia",
    image: customer4,
    review:
      "Very friendly driver and excellent communication throughout our trip. We felt safe and enjoyed every destination.",
  },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 px-4 sm:px-6 overflow-hidden bg-gradient-to-br from-[#02131f] via-[#03263d] to-[#02131f]">

      {/* GLOWS */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-cyan-400/20 blur-[120px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-yellow-400/20 blur-[120px] rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 sm:mb-20"
        >

          <p className="text-cyan-400 uppercase tracking-[4px] sm:tracking-[6px] mb-4 text-xs sm:text-sm font-semibold">
            Customer Reviews
          </p>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
            What Our Clients Say
          </h2>

        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">

          {testimonials.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{ y: -8 }}
              className="
                relative
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-3xl
                p-6
                sm:p-8
                overflow-hidden
                shadow-xl
              "
            >

              {/* CARD GLOW */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-400/10 blur-3xl rounded-full" />

              {/* TOP */}
              <div className="flex items-center gap-4 mb-5">

                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="
                    w-16
                    h-16
                    sm:w-20
                    sm:h-20
                    rounded-full
                    object-cover
                    border-2
                    border-yellow-400
                    shadow-lg
                  "
                />

                {/* INFO */}
                <div>

                  <h3 className="text-lg sm:text-xl font-black text-white">
                    {item.name}
                  </h3>

                  <p className="text-cyan-400 text-sm sm:text-base">
                    {item.country}
                  </p>

                  {/* STARS */}
                  <div className="flex gap-1 mt-2 text-yellow-400">

                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        fill="currentColor"
                      />
                    ))}

                  </div>

                </div>

              </div>

              {/* REVIEW */}
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base">
                “{item.review}”
              </p>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}