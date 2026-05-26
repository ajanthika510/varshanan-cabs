import {
  ShieldCheck,
  CarTaxiFront,
  Clock3,
  MapPinned,
} from "lucide-react";

const features = [
  {
    icon: <ShieldCheck size={40} />,
    title: "Safe Travel",
    desc: "Professional and trusted drivers for your journey.",
  },

  {
    icon: <Clock3 size={40} />,
    title: "24/7 Service",
    desc: "Airport pickups and taxi services anytime.",
  },

  {
    icon: <MapPinned size={40} />,
    title: "Local Guides",
    desc: "Explore Sri Lanka with experienced local guides.",
  },

  {
    icon: <CarTaxiFront size={40} />,
    title: "Luxury Vehicles",
    desc: "Clean and comfortable modern vehicles.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 px-6 bg-[#031926]">

      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">

          <p className="text-yellow-400 uppercase tracking-[5px] mb-4">
            Why Choose Us
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-white">
            Trusted Travel Partner
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-[30px] p-8 text-center hover:-translate-y-2 transition"
            >
              <div className="flex justify-center text-yellow-400 mb-5">
                {item.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                {item.title}
              </h3>

              <p className="text-gray-300">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}