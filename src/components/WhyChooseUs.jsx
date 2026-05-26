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
    <section className="py-20 md:py-28 px-4 sm:px-6 bg-[#f5f7fa]">

      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-14 md:mb-20">

          <p className="text-cyan-600 uppercase tracking-[4px] md:tracking-[6px] font-semibold mb-4 text-sm md:text-base">
            Why Choose Us
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-[#0f172a] leading-tight">
            Trusted Travel Partner
          </h2>

          <div className="w-24 h-1 bg-cyan-500 mx-auto mt-6 rounded-full" />

        </div>

        {/* CARDS */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

          {features.map((item, index) => (

            <div
              key={index}
              className="
                bg-white
                border
                border-gray-200
                rounded-[28px]
                p-6 md:p-8
                text-center
                shadow-lg
                hover:-translate-y-2
                hover:shadow-2xl
                transition-all
                duration-300
              "
            >

              {/* ICON */}
              <div className="flex justify-center mb-5">

                <div
                  className="
                    w-20
                    h-20
                    rounded-2xl
                    bg-cyan-50
                    flex
                    items-center
                    justify-center
                    text-cyan-600
                  "
                >
                  {item.icon}
                </div>

              </div>

              {/* TITLE */}
              <h3 className="text-2xl font-bold text-[#0f172a] mb-4">
                {item.title}
              </h3>

              {/* DESC */}
              <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                {item.desc}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}