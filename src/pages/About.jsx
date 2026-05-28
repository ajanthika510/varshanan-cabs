import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

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
  },
];

export default function About() {
  return (
    <div className="min-h-screen overflow-hidden bg-white text-gray-800">

      <Navbar />

      {/* HERO */}
      <section
        className="
          relative
          pt-32
          sm:pt-40
          md:pt-48
          pb-20
          sm:pb-24
          px-4
          overflow-hidden
          bg-gradient-to-br
          from-sky-50
          via-white
          to-cyan-50
        "
      >

        {/* GLOWS */}
        <div className="absolute top-0 left-0 w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] bg-cyan-300/30 blur-[120px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[280px] sm:w-[420px] h-[280px] sm:h-[420px] bg-yellow-300/30 blur-[120px] rounded-full" />

        <div className="relative max-w-5xl mx-auto text-center">

          <p
            className="
              text-cyan-700
              font-semibold
              uppercase
              tracking-[4px]
              sm:tracking-[6px]
              text-xs
              sm:text-sm
            "
          >
            Premium Taxi Service Sri Lanka
          </p>

          <h1
            className="
              mt-5
              text-4xl
              sm:text-5xl
              md:text-7xl
              font-black
              leading-tight
              text-gray-800
            "
          >
            Your Trusted
            <span className="block text-cyan-600">
              Travel Partner
            </span>
          </h1>

          <p
            className="
              mt-6
              text-gray-600
              text-sm
              sm:text-lg
              md:text-xl
              max-w-3xl
              mx-auto
              leading-relaxed
            "
          >
            Safe, comfortable and affordable taxi service across Sri Lanka
            with professional drivers and premium travel experiences.
          </p>

        </div>

      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 sm:py-24 md:py-28 px-4 sm:px-6 bg-white">

        <div
          className="
            max-w-7xl
            mx-auto
            grid
            lg:grid-cols-2
            gap-12
            lg:gap-20
            items-center
          "
        >

          {/* IMAGE */}
          <div className="relative flex justify-center">

            <div className="absolute inset-0 bg-cyan-200/30 blur-[100px] rounded-full" />

            <img
              src={owner}
              alt="Owner"
              className="
                relative
                z-10
                w-full
                max-w-xs
                sm:max-w-sm
                md:max-w-md
                h-[350px]
                sm:h-[450px]
                md:h-[600px]
                object-cover
                rounded-[30px]
                shadow-2xl
                border
                border-gray-100
              "
            />

          </div>

          {/* TEXT */}
          <div className="text-center lg:text-left">

            <h2
              className="
                text-3xl
                sm:text-5xl
                md:text-6xl
                font-black
                text-gray-800
                leading-tight
              "
            >
              Luxury Travel &
              <span className="block text-yellow-500">
                Taxi Service
              </span>
            </h2>

            <p className="text-gray-600 mt-6 text-sm sm:text-lg leading-relaxed">
              We provide airport pickups, tours, and city rides across Sri
              Lanka with professional local drivers and premium comfort.
            </p>

            <p className="text-gray-600 mt-4 text-sm sm:text-lg leading-relaxed">
              Based in Nilaveli, we ensure safe and comfortable travel
              experiences for tourists and local travelers.
            </p>

            <p className="text-gray-600 mt-4 text-sm sm:text-lg leading-relaxed">
              Clean vehicles, reliable service, trusted drivers and
              unforgettable journeys across Sri Lanka.
            </p>

            {/* STATS */}
            <div
              className="
                grid
                grid-cols-3
                gap-3
                sm:gap-5
                mt-10
              "
            >

              <div
                className="
                  bg-sky-50
                  p-4
                  sm:p-5
                  rounded-2xl
                  text-center
                  border
                  border-sky-100
                "
              >

                <h3 className="text-2xl sm:text-3xl font-black text-yellow-500">
                  24/7
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm mt-1">
                  Service
                </p>

              </div>

              <div
                className="
                  bg-sky-50
                  p-4
                  sm:p-5
                  rounded-2xl
                  text-center
                  border
                  border-sky-100
                "
              >

                <h3 className="text-2xl sm:text-3xl font-black text-cyan-600">
                  100%
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm mt-1">
                  Safe Travel
                </p>

              </div>

              <div
                className="
                  bg-sky-50
                  p-4
                  sm:p-5
                  rounded-2xl
                  text-center
                  border
                  border-sky-100
                "
              >

                <h3 className="text-2xl sm:text-3xl font-black text-yellow-500">
                  Local
                </h3>

                <p className="text-gray-600 text-xs sm:text-sm mt-1">
                  Guides
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* VEHICLE SECTION */}
      <section
        className="
          py-20
          sm:py-24
          px-4
          sm:px-6
          relative
          overflow-hidden
          bg-gradient-to-br
          from-sky-50
          via-white
          to-cyan-50
        "
      >

        {/* GLOWS */}
        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-cyan-300/30 blur-[140px] rounded-full" />

        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-yellow-300/30 blur-[140px] rounded-full" />

        <div className="relative max-w-6xl mx-auto">

          {/* TITLE */}
          <div className="text-center mb-14">

            <h2
              className="
                text-3xl
                sm:text-4xl
                md:text-5xl
                font-black
                text-gray-800
              "
            >
              Our Premium Vehicles
            </h2>

            <p className="text-gray-600 mt-3 text-sm sm:text-base">
              Choose comfort, safety & reliable travel experiences
            </p>

          </div>

          {vehicles.map((v, i) => (

            <div
              key={i}
              className="
                flex
                flex-col
                lg:flex-row
                bg-white
                rounded-[30px]
                shadow-2xl
                overflow-hidden
                border
                border-gray-100
              "
            >

              {/* IMAGE */}
              <div className="lg:w-1/2 relative">

                <img
                  src={v.image}
                  className="
                    w-full
                    h-[240px]
                    sm:h-[320px]
                    lg:h-full
                    object-cover
                  "
                  alt={v.name}
                />

                {/* RATING */}
                <div
                  className="
                    absolute
                    top-4
                    left-4
                    bg-white
                    px-4
                    py-2
                    rounded-full
                    shadow-lg
                    text-gray-800
                    font-bold
                    text-sm
                  "
                >
                  ⭐ 4.8
                </div>

              </div>

              {/* INFO */}
              <div
                className="
                  lg:w-1/2
                  p-5
                  sm:p-8
                  flex
                  flex-col
                  justify-between
                "
              >

                <div>

                  <h3 className="text-2xl sm:text-3xl font-black text-gray-800">
                    {v.name}
                  </h3>

                  <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">
                    {v.desc}
                  </p>

                  {/* SPECS */}
                  <div
                    className="
                      grid
                      grid-cols-1
                      sm:grid-cols-2
                      gap-4
                      mt-8
                    "
                  >

                    <div className="bg-sky-50 p-4 rounded-2xl border border-sky-100">
                      👥 {v.seats} Seats
                    </div>

                    <div className="bg-sky-50 p-4 rounded-2xl border border-sky-100">
                      🧳 {v.luggage}
                    </div>

                    <div className="bg-sky-50 p-4 rounded-2xl border border-sky-100">
                      ❄️ Air Conditioned
                    </div>

                    {/* UPDATED PRICING */}
                    <div
                      className="
                        bg-cyan-50
                        p-4
                        rounded-2xl
                        border
                        border-cyan-500
                        text-text-white
                        font-bold
                        text-center
                      "
                    >
                      Contact for Pricing
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