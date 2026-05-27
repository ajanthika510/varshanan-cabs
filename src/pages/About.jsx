import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Bookingcard from "../components/BookingCard";

import owner from "../assets/owner.jpg";
import sedan from "../assets/sedan.png";

const vehicles = [
  {
    name: "Luxury Sedan",
    image: sedan,
    desc: "Comfortable and perfect for airport transfers & city rides.",
    seats: 4,
    luggage: "2 Bags",
    ac: true,
    price: "Rs. 180/km",
  },
];

export default function About() {
  return (
    <div className="min-h-screen overflow-hidden text-gray-800 bg-white">

      <Navbar />

      {/* 🌤 HERO (LIGHT GRADIENT BANNER) */}
      <section className="relative pt-28 sm:pt-36 md:pt-44 pb-20 px-4 text-center overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-50">

        {/* GLOWS */}
        <div className="absolute top-0 left-0 w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] bg-cyan-300/30 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[300px] sm:w-[420px] h-[300px] sm:h-[420px] bg-yellow-300/30 blur-[120px] rounded-full" />

        <div className="relative max-w-5xl mx-auto">

          <p className="text-cyan-700 font-semibold uppercase tracking-[6px] text-xs sm:text-sm">
            Premium Taxi Service Sri Lanka
          </p>

          <h1 className="text-3xl sm:text-5xl md:text-7xl font-black mt-4 leading-tight text-gray-800">
            Your Trusted
            <span className="block text-cyan-600">Travel Partner</span>
          </h1>

          <p className="mt-6 text-gray-600 text-sm sm:text-lg md:text-xl max-w-3xl mx-auto">
            Safe, comfortable and affordable taxi service across Sri Lanka with professional drivers.
          </p>

        </div>
      </section>

      {/* 👤 ABOUT SECTION */}
      <section className="py-20 md:py-28 px-4 sm:px-6 bg-white">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

          {/* IMAGE */}
          <div className="relative flex justify-center">

            <div className="absolute inset-0 bg-cyan-200/30 blur-[100px] rounded-full" />

            <img
              src={owner}
              alt="Owner"
              className="relative z-10 w-full max-w-sm md:max-w-md h-[350px] sm:h-[450px] md:h-[600px] object-cover rounded-3xl shadow-xl border border-gray-100"
            />

          </div>

          {/* TEXT */}
          <div className="text-center lg:text-left">

            <h2 className="text-2xl sm:text-4xl md:text-6xl font-black text-gray-800">
              Luxury Travel &
              <span className="block text-yellow-500">Taxi Service</span>
            </h2>

            <p className="text-gray-600 mt-6 text-sm sm:text-lg">
              We provide airport pickups, tours, and city rides across Sri Lanka.
            </p>

            <p className="text-gray-600 mt-4 text-sm sm:text-lg">
              Based in Nilaveli, we ensure safe and comfortable travel experiences.
            </p>

            <p className="text-gray-600 mt-4 text-sm sm:text-lg">
              Clean vehicles, professional drivers, and reliable service.
            </p>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-3 mt-8">

              <div className="bg-sky-50 p-4 rounded-2xl text-center border border-sky-100">
                <h3 className="text-2xl sm:text-3xl font-black text-yellow-500">24/7</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Service</p>
              </div>

              <div className="bg-sky-50 p-4 rounded-2xl text-center border border-sky-100">
                <h3 className="text-2xl sm:text-3xl font-black text-cyan-600">100%</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Safe</p>
              </div>

              <div className="bg-sky-50 p-4 rounded-2xl text-center border border-sky-100">
                <h3 className="text-2xl sm:text-3xl font-black text-yellow-500">Local</h3>
                <p className="text-gray-600 text-xs sm:text-sm">Guides</p>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 🚗 VEHICLE SECTION (MERGED LIGHT UI) */}
      <section className="py-20 px-4 relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-cyan-50">

        {/* GLOWS */}
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-cyan-300/30 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-yellow-300/30 blur-[140px] rounded-full" />

        <div className="relative max-w-6xl mx-auto">

          {/* TITLE */}
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-800">
              Our Premium Vehicles
            </h2>
            <p className="text-gray-600 mt-3 text-sm sm:text-base">
              Choose comfort, safety & affordability
            </p>
          </div>

          {vehicles.map((v, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
            >

              {/* IMAGE */}
              <div className="md:w-1/2 relative">
                <img
                  src={v.image}
                  className="w-full h-[220px] sm:h-[300px] md:h-full object-cover"
                  alt={v.name}
                />

                <div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full shadow text-gray-800 font-bold">
                  ⭐ 4.8
                </div>
              </div>

              {/* INFO */}
              <div className="md:w-1/2 p-5 sm:p-6 md:p-8 flex flex-col justify-between">

                <div>
                  <h3 className="text-2xl md:text-3xl font-black text-gray-800">
                    {v.name}
                  </h3>

                  <p className="text-gray-600 mt-2 text-sm sm:text-base">
                    {v.desc}
                  </p>

                  {/* SPECS */}
                  <div className="grid grid-cols-2 gap-3 mt-5 text-sm">

                    <div className="bg-sky-50 p-3 rounded-xl">👥 {v.seats} Seats</div>
                    <div className="bg-sky-50 p-3 rounded-xl">🧳 {v.luggage}</div>
                    <div className="bg-sky-50 p-3 rounded-xl">❄️ AC</div>
                    <div className="bg-cyan-100 text-cyan-800 font-bold p-3 rounded-xl">
                      💰 {v.price}
                    </div>

                  </div>
                </div>


              </div>
            </div>
          ))}

        </div>
      </section>

      <WhatsAppButton />
      <Footer />
    </div>
  );
}