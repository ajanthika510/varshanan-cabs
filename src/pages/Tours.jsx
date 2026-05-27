import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
import Bookingcard from "../components/BookingCard";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import SmoothScroll from "../components/SmoothScroll";

import {
  fadeUp,
  fadeLeft,
  fadeRight,
  zoomIn,
  staggerContainer,
} from "../animations/scrollAnimations";

const tours = [
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

  {
    title: "Kandy Experience",
    image:
      "https://www.travelcenter.uk/blog/wp-content/uploads/2025/01/kandy-1024x551.jpg",
    desc: "Discover the cultural capital of Sri Lanka.",
  },

  {
    title: "Nilaveli Paradise",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/08/dd/23/b5/bay-beach-hotel-nilaveli.jpg",
    desc: "Crystal-clear beaches and peaceful tropical paradise.",
  },
];

export default function ToursPage() {
  return (
    <div className="bg-[#02131f] text-white overflow-hidden">

      <SmoothScroll />

      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden flex items-center py-28">

        {/* BACKGROUND */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0"
        >

          <img
            src="https://media.bookmundi.com/files/Destination-Images/Sri%20Lanka/Travelling-in-Sri-Lanka-Tours-and-Vacation-Packages.jpg"
            alt=""
            className="w-full h-full object-cover object-center"
          />

        </motion.div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center w-full">

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="uppercase tracking-[5px] text-cyan-400 mb-5 text-xs sm:text-sm md:text-base"
          >
            Luxury Sri Lanka Tours
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-6xl md:text-8xl font-black leading-tight mb-8"
          >
            Discover Paradise
            <br />
            With Comfort
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Explore breathtaking destinations across Sri Lanka with trusted
            local drivers, premium comfort, and unforgettable experiences.
          </motion.p>

        </div>

      </section>

      {/* TITLE */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-4 sm:px-6 text-center"
      >

        <p className="uppercase tracking-[5px] text-cyan-400 mb-5 text-sm">
          Popular Experiences
        </p>

        <h2 className="text-3xl sm:text-5xl md:text-7xl font-black">
          Trending Destinations
        </h2>

      </motion.section>

      {/* TOUR GRID */}
      <motion.section
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
          md:gap-8
          pb-28
        "
      >

        {tours.map((tour, index) => (

          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{ y: -10 }}
            className="
              group
              bg-white/5
              border
              border-white/10
              rounded-[30px]
              overflow-hidden
              backdrop-blur-xl
            "
          >

            {/* IMAGE */}
            <div className="overflow-hidden relative">

              <motion.img
                whileHover={{ scale: 1.08 }}
                transition={{ duration: 0.8 }}
                src={tour.image}
                alt={tour.title}
                className="
                  h-[240px]
                  sm:h-[300px]
                  md:h-[350px]
                  w-full
                  object-cover
                  object-center
                "
              />

            </div>

            {/* CONTENT */}
            <div className="p-5 sm:p-6 md:p-8">

              <h3 className="text-2xl sm:text-3xl font-black mb-4">
                {tour.title}
              </h3>

              <p className="text-gray-300 leading-relaxed mb-8 text-sm sm:text-base">
                {tour.desc}
              </p>

              {/* RESPONSIVE BUTTON */}
              <a
                href={`/?drop=${encodeURIComponent(tour.title)}#bookingCard`}
                className="
                  w-full
                  sm:w-auto
                  bg-yellow-400
                  text-black
                  px-6
                  sm:px-8
                  py-3
                  sm:py-4
                  rounded-2xl
                  font-bold
                  text-sm
                  sm:text-base
                  hover:scale-105
                  transition
                  duration-300
                  inline-block
                  text-center
                "
              >
                Book Tour
              </a>

            </div>

          </motion.div>

        ))}

      </motion.section>

      <WhatsAppButton />

      <Footer />

    </div>
  );
}