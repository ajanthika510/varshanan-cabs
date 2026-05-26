import { motion } from "framer-motion";

const vehicles = [
  {
    image: "/src/assets/sedan.png",
    desc: "Comfortable, stylish, and perfect for long journeys.",
  },
];

export default function Fleet() {
  return (
    <section
      id="fleet"
      className="py-20 sm:py-24 md:py-28 px-4 sm:px-6 bg-[#02131f]"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-14 md:mb-20"
        >
          <p className="text-cyan-400 uppercase tracking-[4px] sm:tracking-[6px] mb-4 text-sm sm:text-base">
            Premium Vehicles
          </p>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white">
            Our Fleet
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="flex justify-center">

          {vehicles.map((vehicle, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              whileHover={{ y: -10 }}
              className="
                group
                relative
                w-full
                max-w-3xl
                bg-white/5
                rounded-[25px]
                md:rounded-[35px]
                overflow-hidden
                border
                border-white/10
                backdrop-blur-xl
              "
            >

              {/* IMAGE */}
              <div className="overflow-hidden">

                <motion.img
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.6 }}
                  src={vehicle.image}
                  alt={vehicle.name}
                  className="
                    h-[250px]
                    sm:h-[300px]
                    md:h-[350px]
                    w-full
                    object-cover
                  "
                />

              </div>

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-90" />

              {/* CONTENT */}
              <div className="absolute bottom-0 p-5 sm:p-6 md:p-8">

                <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                  {vehicle.name}
                </h3>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed mb-5 max-w-md">
                  {vehicle.desc}
                </p>

                {/* BUTTON */}
                <a
                  href="https://wa.me/94776716786"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-block
                    bg-yellow-400
                    text-black
                    px-5
                    sm:px-6
                    py-3
                    rounded-2xl
                    font-bold
                    text-sm
                    sm:text-base
                    hover:scale-105
                    transition
                    duration-300
                  "
                >
                  Book Vehicle
                </a>

              </div>

            </motion.div>

          ))}

        </div>
      </div>
    </section>
  );
}