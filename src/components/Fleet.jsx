import { motion } from "framer-motion";

const vehicles = [
  {
    name: "Luxury Sedan",
    image: "/src/assets/sedan.jpg",
  },

  {
    name: "Premium SUV",
    image: "/src/assets/suv.jpg",
  },
];

export default function Fleet() {

  return (

    <section id="fleet" className="py-28 px-6 bg-[#02131f]">

      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >

          <p className="text-cyan-400 uppercase tracking-[5px] mb-4">
            Premium Vehicles
          </p>

          <h2 className="text-5xl font-black text-white">
            Our Fleet
          </h2>

        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

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
              className="group relative bg-white/5 rounded-[35px] overflow-hidden border border-white/10"
            >

              <div className="overflow-hidden">

                <motion.img
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.6 }}
                  src={vehicle.image}
                  alt=""
                  className="h-[350px] w-full object-cover"
                />

              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-80" />

              <div className="absolute bottom-0 p-8">

                <h3 className="text-3xl font-black text-white mb-3">
                  {vehicle.name}
                </h3>

                <p className="text-gray-300 mb-5">
                  Comfortable, stylish, and perfect for long journeys.
                </p>
                
              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}