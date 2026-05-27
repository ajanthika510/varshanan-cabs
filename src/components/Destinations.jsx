import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const places = [
  {
    title: "Ella Mountains",
    image:
      "https://srilankaexplorers.com/wp-content/uploads/2024/06/ratna-01.jpg",
    desc: "Mountains, train rides, waterfalls, and peaceful nature.",
  },

  {
    title: "Sigiriya Rock",
    image:
      "https://cdn.pixabay.com/photo/2014/09/24/14/40/sigiriya-459197_1280.jpg",
    desc: "Climb the world-famous Lion Rock fortress in Sri Lanka.",
  },

  {
    title: "Wildlife Safari",
    image:
      "https://www.annees-de-pelerinage.com/wp-content/uploads/2019/03/elephants.jpg",
    desc: "Experience elephants, jungles, and unforgettable safaris.",
  },

  {
    title: "Sri Lanka Beaches",
    image:
      "https://lakpura.com/cdn/shop/files/LKI7450052-01-E.jpg?v=1726140371&width=3840",
    desc: "Golden beaches, surfing vibes, and tropical relaxation.",
  },
];

export default function Destinations() {
  const [current, setCurrent] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [current]);

  // NEXT
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % places.length);
  };

  // PREV
  const prevSlide = () => {
    setCurrent((prev) =>
      prev === 0 ? places.length - 1 : prev - 1
    );
  };

  return (
    <section
      id="destinations"
      className="relative min-h-[85vh] md:h-screen overflow-hidden bg-black"
    >
      <AnimatePresence mode="wait">

        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >

          {/* IMAGE */}
          <motion.img
            src={places[current].image}
            alt={places[current].title}
            initial={{ scale: 1 }}
            animate={{ scale: 1.12 }}
            transition={{ duration: 6, ease: "linear" }}
            className="w-full h-full object-cover object-center"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 flex items-end">

            <div className="px-5 sm:px-10 md:px-20 pb-16 md:pb-24 max-w-3xl">

              {/* LABEL */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-cyan-400 uppercase tracking-[4px] sm:tracking-[5px] text-xs sm:text-sm mb-3"
              >
                Popular Destination
              </motion.p>

              {/* TITLE */}
              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-3xl sm:text-5xl md:text-7xl font-black text-white leading-tight mb-4"
              >
                {places[current].title}
              </motion.h2>

              {/* DESCRIPTION */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-gray-200 text-sm sm:text-base md:text-lg leading-relaxed mb-6"
              >
                {places[current].desc}
              </motion.p>

              {/* BUTTON */}
              <Link
                to="/tours"
                className="inline-block bg-cyan-400 text-black font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl transition hover:scale-105"
              >
                Explore Now
              </Link>

            </div>

          </div>

          {/* PREV BUTTON */}
          <button
            onClick={prevSlide}
            className="
              absolute
              left-4
              md:left-8
              top-1/2
              -translate-y-1/2
              z-20
              bg-white/10
              backdrop-blur-md
              border
              border-white/20
              p-3
              rounded-full
              text-white
              hover:bg-cyan-400
              hover:text-black
              transition
            "
          >
            <ChevronLeft size={28} />
          </button>

          {/* NEXT BUTTON */}
          <button
            onClick={nextSlide}
            className="
              absolute
              right-4
              md:right-8
              top-1/2
              -translate-y-1/2
              z-20
              bg-white/10
              backdrop-blur-md
              border
              border-white/20
              p-3
              rounded-full
              text-white
              hover:bg-cyan-400
              hover:text-black
              transition
            "
          >
            <ChevronRight size={28} />
          </button>

          {/* INDICATORS */}
          <div className="absolute bottom-4 right-4 sm:bottom-8 sm:right-8 flex gap-2 sm:gap-3 flex-wrap max-w-[180px] sm:max-w-[250px] justify-end">

            {places.map((_, index) => (
              <motion.div
                key={index}
                animate={{
                  width: current === index ? 40 : 10,
                  backgroundColor:
                    current === index
                      ? "#22d3ee"
                      : "rgba(255,255,255,0.4)",
                }}
                className="h-2 sm:h-3 rounded-full"
              />
            ))}

          </div>

        </motion.div>

      </AnimatePresence>
    </section>
  );
}