import { useRef } from "react";
import { Link } from "react-router-dom";

import BookingCard from "./BookingCard";

export default function Hero() {

  const bookingRef = useRef(null);

  // AIRPORT PICKUP BUTTON
  const handleAirportPickup = () => {

    bookingRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.dispatchEvent(
      new CustomEvent("airportPickup")
    );
  };

  return (

    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        flex
        items-center
        pt-[120px]
        sm:pt-[140px]
        lg:pt-[160px]
        pb-16
      "
    >

      {/* BACKGROUND IMAGE */}
      <div
        className="
          absolute
          inset-0
          bg-cover
          bg-center
          scale-105
        "
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#02131f]/80" />

      {/* TOP RIGHT GLOW */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,166,0,0.25),transparent_40%)]" />

      {/* CYAN GLOW */}
      <div className="absolute bottom-0 left-0 w-[350px] sm:w-[400px] h-[350px] sm:h-[400px] bg-cyan-400/10 blur-[120px] rounded-full" />

      {/* CONTENT */}
      <div className="relative z-20 max-w-7xl mx-auto w-full px-4 sm:px-6">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="text-center lg:text-left">

            {/* TOP TEXT */}
            <p
              className="
                uppercase
                tracking-[4px]
                sm:tracking-[6px]
                text-yellow-400
                font-semibold
                mb-5
                text-xs
                sm:text-sm
                md:text-base
              "
            >
              Trusted Taxi & Travel Agency
            </p>

            {/* TITLE */}
            <h1
              className="
                text-4xl
                sm:text-5xl
                md:text-6xl
                xl:text-7xl
                font-black
                leading-tight
                text-white
              "
            >
              Varshanan Cabs

              <span
                className="
                  block
                  text-yellow-400
                  drop-shadow-[0_0_20px_rgba(250,204,21,0.6)]
                "
              >
                Nilaveli
              </span>

            </h1>

            {/* SUBTITLE */}
            <h2
              className="
                mt-5
                text-xl
                sm:text-2xl
                md:text-3xl
                xl:text-4xl
                font-bold
                text-cyan-400
                leading-snug
              "
            >
              Explore Sri Lanka

              <span className="block">
                With Trusted Local Drivers
              </span>

            </h2>

            {/* DESCRIPTION */}
            <p
              className="
                mt-8
                text-gray-300
                text-sm
                sm:text-base
                md:text-lg
                leading-relaxed
                max-w-xl
                mx-auto
                lg:mx-0
              "
            >
              Airport pickup, private taxi service, local guides and
              unforgettable Sri Lanka travel experiences with professional
              drivers and luxury vehicles.
            </p>

            {/* BUTTONS */}
            <div
              className="
                mt-10
                flex
                flex-col
                sm:flex-row
                gap-4
                sm:gap-5
                justify-center
                lg:justify-start
              "
            >

              {/* AIRPORT PICKUP */}
              <button
                onClick={handleAirportPickup}
                className="
                  bg-yellow-400
                  text-black
                  px-8
                  py-4
                  rounded-full
                  font-bold
                  hover:scale-105
                  transition
                  duration-300
                  shadow-[0_0_40px_rgba(250,204,21,0.4)]
                  text-center
                  text-sm
                  sm:text-base
                "
              >
                Book Airport Pickup
              </button>

              {/* TOURS BUTTON */}
              <Link
                to="/tours"
                className="
                  border
                  border-white/20
                  bg-white/10
                  backdrop-blur-md
                  px-8
                  py-4
                  rounded-full
                  font-semibold
                  hover:bg-white/20
                  hover:scale-105
                  transition
                  duration-300
                  text-center
                  text-white
                  text-sm
                  sm:text-base
                "
              >
                Explore Day Tours
              </Link>

            </div>

            {/* STATS */}
            <div
              className="
                mt-14
                grid
                grid-cols-3
                gap-4
                sm:gap-6
                text-center
                lg:text-left
              "
            >

              {/* SERVICE */}
              <div>

                <h3
                  className="
                    text-2xl
                    sm:text-3xl
                    md:text-4xl
                    font-black
                    text-yellow-400
                  "
                >
                  24/7
                </h3>

                <p
                  className="
                    text-gray-300
                    mt-2
                    text-xs
                    sm:text-sm
                    md:text-base
                  "
                >
                  Service
                </p>

              </div>

              {/* SAFE */}
              <div>

                <h3
                  className="
                    text-2xl
                    sm:text-3xl
                    md:text-4xl
                    font-black
                    text-cyan-400
                  "
                >
                  100%
                </h3>

                <p
                  className="
                    text-gray-300
                    mt-2
                    text-xs
                    sm:text-sm
                    md:text-base
                  "
                >
                  Safe Travel
                </p>

              </div>

              {/* LOCAL */}
              <div>

                <h3
                  className="
                    text-2xl
                    sm:text-3xl
                    md:text-4xl
                    font-black
                    text-yellow-400
                  "
                >
                  Local
                </h3>

                <p
                  className="
                    text-gray-300
                    mt-2
                    text-xs
                    sm:text-sm
                    md:text-base
                  "
                >
                  Guides
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div
            ref={bookingRef}
            className="
              w-full
              max-w-lg
              mx-auto
              lg:mx-0
            "
          >

            <BookingCard />

          </div>

        </div>

      </div>

      {/* BOTTOM FADE */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#02131f] to-transparent" />

    </section>
  );
}