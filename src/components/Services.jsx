import { Car, ShieldCheck, Clock3 } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Car size={40} />,
      title: "Luxury Cars",
      desc: "Travel with comfort and style anywhere.",
    },
    {
      icon: <Clock3 size={40} />,
      title: "Fast Pickup",
      desc: "Quick driver arrival within minutes.",
    },
    {
      icon: <ShieldCheck size={40} />,
      title: "Safe Journey",
      desc: "Professional and trusted drivers.",
    },
  ];

  return (
    <section className="py-28 px-6">
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-center mb-16">
          Why Choose Us
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:-translate-y-2 transition duration-300"
            >
              <div className="flex justify-center text-yellow-400 mb-5">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-400">
                {service.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}