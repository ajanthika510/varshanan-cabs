import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function BookingCard() {

  const [pickup, setPickup] = useState("");
  const [drop, setDrop] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const [errors, setErrors] = useState({});
  const [highlight, setHighlight] = useState(false);

  const today = new Date().toISOString().split("T")[0];

  // AIRPORT PICKUP EVENT
  useEffect(() => {

    const handleAirportPickup = () => {

      setPickup("Bandaranaike International Airport");

      setHighlight(true);

      setTimeout(() => {
        setHighlight(false);
      }, 500);

    };

    window.addEventListener(
      "airportPickup",
      handleAirportPickup
    );

    return () => {

      window.removeEventListener(
        "airportPickup",
        handleAirportPickup
      );

    };

  }, []);

  // URL PARAM SUPPORT
  useEffect(() => {

    const params =
      new URLSearchParams(window.location.search);

    const selectedDrop = params.get("drop");

    if (selectedDrop) {

      setDrop(selectedDrop);

      setTimeout(() => {

        document
          .getElementById("BookingCard")
          ?.scrollIntoView({
            behavior: "smooth",
          });

      }, 300);

    }

  }, []);

  // VALIDATION
  const validateForm = () => {

    let newErrors = {};

    if (!pickup.trim()) {
      newErrors.pickup =
        "Pickup location is required";
    }

    if (!drop.trim()) {
      newErrors.drop =
        "Drop location is required";
    }

    if (!date) {
      newErrors.date =
        "Travel date is required";
    }

    if (!time) {
      newErrors.time =
        "Pickup time is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // WHATSAPP
  const handleWhatsApp = () => {

    if (!validateForm()) return;

    const formattedDate =
      new Date(date).toLocaleDateString("en-GB");

    // CLEAN MESSAGE
    const message =
`Varshanan Cabs Booking Request

Pickup Location: ${pickup}

Drop Location: ${drop}

Travel Date: ${formattedDate}

Pickup Time: ${time}`;

    const url =
      `https://wa.me/94776716786?text=${encodeURIComponent(
        message
      )}`;

    window.open(url, "_blank");
  };

  return (

    <section
      id="BookingCard"
      className="
        w-full
        px-4
        sm:px-6
        py-14
        bg-[#02131f]
      "
    >

      <div className="max-w-xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className={`
            relative
            overflow-hidden
            rounded-3xl
            border
            backdrop-blur-2xl
            shadow-[0_0_60px_rgba(0,0,0,0.4)]
            p-5
            sm:p-6
            md:p-8
            transition-all
            duration-500

            ${
              highlight
                ? "border-yellow-400 bg-yellow-400/10 scale-[1.02]"
                : "border-white/10 bg-white/10"
            }
          `}
        >

          {/* GLOW */}
          <div
            className="
              absolute
              -top-10
              -right-10
              w-40
              h-40
              bg-cyan-400/20
              blur-3xl
              rounded-full
            "
          />

          {/* TITLE */}
          <h2
            className="
              text-2xl
              sm:text-3xl
              font-black
              text-white
            "
          >
            Quick Booking
          </h2>

          <p
            className="
              text-gray-300
              text-sm
              sm:text-base
              mt-2
              mb-8
            "
          >
            Fast • Safe • Reliable Sri Lanka Travel
          </p>

          <div className="space-y-5">

            {/* PICKUP */}
            <div>

              <input
                type="text"
                placeholder="Pickup Location"
                value={pickup}
                onChange={(e) =>
                  setPickup(e.target.value)
                }
                className="
                  w-full
                  bg-black/30
                  text-white
                  border
                  border-white/10
                  rounded-2xl
                  p-4
                  outline-none
                  focus:border-yellow-400
                  transition
                "
              />

              {errors.pickup && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.pickup}
                </p>
              )}

            </div>

            {/* DROP */}
            <div>

              <input
                type="text"
                placeholder="Drop Location"
                value={drop}
                onChange={(e) =>
                  setDrop(e.target.value)
                }
                className="
                  w-full
                  bg-black/30
                  text-white
                  border
                  border-white/10
                  rounded-2xl
                  p-4
                  outline-none
                  focus:border-yellow-400
                  transition
                "
              />

              {errors.drop && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.drop}
                </p>
              )}

            </div>

            {/* DATE */}
            <div>

              <input
                type="date"
                min={today}
                value={date}
                onChange={(e) =>
                  setDate(e.target.value)
                }
                className="
                  w-full
                  bg-black/30
                  text-white
                  border
                  border-white/10
                  rounded-2xl
                  p-4
                  outline-none
                  focus:border-yellow-400
                  transition
                "
              />

              {errors.date && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.date}
                </p>
              )}

            </div>

            {/* TIME */}
            <div>

              <input
                type="time"
                value={time}
                onChange={(e) =>
                  setTime(e.target.value)
                }
                className="
                  w-full
                  bg-black/30
                  text-white
                  border
                  border-white/10
                  rounded-2xl
                  p-4
                  outline-none
                  focus:border-yellow-400
                  transition
                "
              />

              {errors.time && (
                <p className="text-red-400 text-sm mt-2">
                  {errors.time}
                </p>
              )}

            </div>

            {/* BUTTON */}
            <button
              onClick={handleWhatsApp}
              className="
                w-full
                bg-yellow-400
                text-black
                py-4
                rounded-2xl
                font-black
                hover:scale-[1.02]
                transition
                duration-300
              "
            >
              Book via WhatsApp
            </button>

          </div>

        </motion.div>

      </div>

    </section>
  );
}