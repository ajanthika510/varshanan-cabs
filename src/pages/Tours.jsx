import { motion } from "framer-motion";

import Navbar from "../components/Navbar";
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
    image: "https://thumbs.dreamstime.com/b/ella-rock-26571645.jpg",

    duration: "2 Days",

    desc: "Mountains, train rides, waterfalls, and peaceful nature.",
  },

  {
    title: "Sigiriya Rock",
    image:
      "https://cdn.pixabay.com/photo/2014/09/24/14/40/sigiriya-459197_1280.jpg",

    duration: "1 Day",

    desc: "Climb the world-famous Lion Rock fortress in Sri Lanka.",
  },

  {
    title: "Wildlife Safari",
    image:
      "https://www.annees-de-pelerinage.com/wp-content/uploads/2019/03/elephants.jpg",

    duration: "1 Day",

    desc: "Experience elephants, jungles, and unforgettable safaris.",
  },

  {
    title: "Sri Lanka Beaches",
    image:
      "https://lakpura.com/cdn/shop/files/LKI7450052-01-E.jpg?v=1726140371&width=3840",

    duration: "3 Days",

    desc: "Golden beaches, surfing vibes, and tropical relaxation.",
  },

  {
    title: "Ancient Temples",
    image:
      "https://storage.googleapis.com/stateless-www-justwravel-com/2024/09/22e35baa-isurumuniya-vihara-anuradhapura.jpg",

    duration: "1 Day",

    desc: "Explore rich culture, temples, and historical wonders.",
  },

  {
    title: "Luxury Travel",
    image:
      "https://www.elitehavens.com/magazine/wp-content/uploads/2024/11/Luxury-Travel-Trends-of-2024-The-Year-of-Rediscovery-1.png",

    duration: "5 Days",

    desc: "Premium travel experiences with luxury comfort.",
  },

  {
    title: "Kandy Experience",
    image:
      "https://www.travelcenter.uk/blog/wp-content/uploads/2025/01/kandy-1024x551.jpg",

    duration: "2 Days",

    desc: "Discover the cultural capital of Sri Lanka.",
  },

  {
    title: "Nine Arches Bridge",
    image:
      "https://w0.peakpx.com/wallpaper/339/984/HD-wallpaper-nine-arch-bridge-beauti-bridge-nature-old-train.jpg",

    duration: "1 Day",

    desc: "One of the most beautiful train bridge experiences in Asia.",
  },

  {
    title: "Mirissa Whale Watching",
    image:
      "https://rajaandthewhales.com/wp-content/uploads/2017/10/2-1.jpg",

    duration: "1 Day",

    desc: "Watch blue whales and dolphins in the Indian Ocean.",
  },

  {
    title: "Yala National Park",
    image:
      "https://lakpura.com/cdn/shop/products/LK60400800-03-E-1280-720.jpg?v=1624589937&width=1445",

    duration: "2 Days",

    desc: "Spot leopards, elephants and wildlife adventures.",
  },

  {
    title: "Adam's Peak",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzMOSOZaKDonOwFepgX_s3xKhWNlXUviiLsg&s",

    duration: "2 Days",

    desc: "Sacred mountain sunrise experience above the clouds.",
  },

  {
    title: "Nilaveli Paradise",
    image:
      "https://media-cdn.tripadvisor.com/media/photo-s/08/dd/23/b5/bay-beach-hotel-nilaveli.jpg",

    duration: "3 Days",

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
          animate={{ scale: 1.1 }}
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
            className="w-full h-full object-cover"
          />

        </motion.div>

        {/* OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        {/* GLOW */}
        <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-cyan-400/20 blur-[120px] rounded-full" />

        <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-yellow-400/20 blur-[120px] rounded-full" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center w-full">

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="uppercase tracking-[5px] text-cyan-400 mb-5 text-sm sm:text-base"
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
            className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Explore breathtaking destinations across Sri Lanka with trusted
            local drivers, premium comfort, and unforgettable experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-10"
          >

            <a
              href="https://wa.me/94776716786"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-yellow-400 text-black px-10 py-5 rounded-2xl font-black hover:scale-105 transition inline-block"
            >
              Book Your Journey
            </a>

          </motion.div>

        </div>

      </section>

      {/* TITLE */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-20 px-6 text-center"
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
        className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8 pb-28"
      >

        {tours.map((tour, index) => (

          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{ y: -10 }}
            className="group bg-white/5 border border-white/10 rounded-[35px] overflow-hidden backdrop-blur-xl"
          >

            {/* IMAGE */}
            <div className="overflow-hidden relative">

              <motion.img
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.8 }}
                src={tour.image}
                alt={tour.title}
                className="h-[280px] sm:h-[350px] w-full object-cover"
              />

              {/* DURATION */}
              <div className="absolute top-5 left-5 bg-cyan-400 text-black px-4 py-2 rounded-full text-sm font-bold">
                {tour.duration}
              </div>

            </div>

            {/* CONTENT */}
            <div className="p-8">

              <h3 className="text-2xl sm:text-3xl font-black mb-4">
                {tour.title}
              </h3>

              <p className="text-gray-300 leading-relaxed mb-8 text-sm sm:text-base">
                {tour.desc}
              </p>

              <a
                href="https://wa.me/94776716786"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-yellow-400 text-black px-6 py-3 rounded-2xl font-bold hover:scale-105 transition inline-block text-center"
              >
                Book Tour
              </a>

            </div>

          </motion.div>

        ))}

      </motion.section>

      {/* SPLIT SECTION */}
      <section className="py-28 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >

            <img
              src="https://www.travelcenter.uk/blog/wp-content/uploads/2025/01/kandy-1024x551.jpg"
              alt=""
              className="rounded-[40px] h-[300px] md:h-[550px] w-full object-cover"
            />

          </motion.div>

          {/* TEXT */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >

            <p className="uppercase tracking-[5px] text-cyan-400 mb-5 text-sm">
              Premium Experience
            </p>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black leading-tight mb-8">
              Comfortable Travel
              <br />
              Across Sri Lanka
            </h2>

            <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-10">
              Travel with experienced local drivers and enjoy unforgettable
              journeys through mountains, beaches, wildlife parks, and cultural
              destinations across Sri Lanka.
            </p>

            <a
              href="https://wa.me/94776716786"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-yellow-400 text-black px-8 py-4 rounded-2xl font-black hover:scale-105 transition inline-block text-center"
            >
              Contact Us
            </a>

          </motion.div>

        </div>

      </section>

      {/* CTA */}
      <motion.section
        variants={zoomIn}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="py-24 px-6"
      >

        <div className="max-w-5xl mx-auto bg-white/5 border border-white/10 rounded-[40px] p-10 md:p-20 text-center backdrop-blur-2xl relative overflow-hidden">

          {/* GLOW */}
          <div className="absolute top-[-50px] left-[-50px] w-[200px] h-[200px] bg-cyan-400/20 blur-[120px] rounded-full" />

          <div className="absolute bottom-[-50px] right-[-50px] w-[200px] h-[200px] bg-yellow-400/20 blur-[120px] rounded-full" />

          <div className="relative z-10">

            <p className="uppercase tracking-[5px] text-cyan-400 mb-5 text-sm">
              Plan Your Journey
            </p>

            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black mb-8">
              Ready To Explore?
            </h2>

            <p className="text-gray-300 text-base sm:text-lg max-w-3xl mx-auto mb-10 leading-relaxed">
              Contact us now and book your unforgettable Sri Lanka travel
              experience with comfort and safety.
            </p>

            <a
              href="https://wa.me/94776716786"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-yellow-400 text-black px-10 py-5 rounded-2xl font-black text-lg hover:scale-105 transition inline-block text-center"
            >
              Book via WhatsApp
            </a>

          </div>

        </div>

      </motion.section>

      {/* FLOATING WHATSAPP */}
      <WhatsAppButton />

      <Footer />

    </div>
  );
}