import { useState } from "react";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {

    setError("");
    setSuccess("");

    // VALIDATION
    if (!name.trim() || !email.trim() || !message.trim()) {

      setError("Please fill all fields before sending.");
      return;
    }

    setLoading(true);

    try {

      // CLEAN WHATSAPP MESSAGE
      const whatsappMessage =
`New Contact Message

Name: ${name}

Email: ${email}

Message:
${message}`;

      const whatsappURL =
        `https://wa.me/94776716786?text=${encodeURIComponent(
          whatsappMessage
        )}`;

      window.open(whatsappURL, "_blank");

      setSuccess(
        "Your message was sent successfully! We'll reply soon."
      );

      // RESET
      setName("");
      setEmail("");
      setMessage("");

    } catch (err) {

      setError("Something went wrong. Please try again.");

    }

    setLoading(false);
  };

  return (

    <div className="bg-[#02131f] text-white min-h-screen overflow-hidden">

      <Navbar />

      {/* HERO */}
      <section
        className="
          pt-32
          sm:pt-40
          md:pt-44
          pb-16
          sm:pb-20
          px-4
          sm:px-6
          text-center
        "
      >

        <p
          className="
            text-yellow-400
            uppercase
            tracking-[4px]
            sm:tracking-[6px]
            text-xs
            sm:text-sm
            mb-4
          "
        >
          Contact Us
        </p>

        <h1
          className="
            text-3xl
            sm:text-5xl
            md:text-7xl
            font-black
            leading-tight
          "
        >
          Let's Plan

          <span className="block text-cyan-400">
            Your Journey
          </span>

        </h1>

        <p
          className="
            mt-6
            text-gray-300
            text-sm
            sm:text-base
            md:text-lg
            max-w-2xl
            mx-auto
          "
        >
          Contact us for airport transfers, tours, and taxi bookings
          across Sri Lanka.
        </p>

      </section>

      {/* CONTENT */}
      <section className="pb-20 sm:pb-28 px-4 sm:px-6">

        <div
          className="
            max-w-7xl
            mx-auto
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-8
            sm:gap-12
            lg:gap-16
          "
        >

          {/* LEFT SIDE */}
          <div
            className="
              bg-white/5
              border
              border-white/10
              rounded-3xl
              p-6
              sm:p-8
              md:p-10
              backdrop-blur-xl
            "
          >

            <h2
              className="
                text-2xl
                sm:text-3xl
                font-black
                mb-8
              "
            >
              Contact Information
            </h2>

            <div className="space-y-6">

              {/* ADDRESS */}
              <div
                className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-2xl
                  p-4
                "
              >

                <h3 className="text-yellow-400 font-bold mb-2">
                  Address
                </h3>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                  No 241G Valaiyoothu,
                  <br />
                  Nilaveli, Trincomalee,
                  <br />
                  Sri Lanka
                </p>

              </div>

              {/* PHONE */}
              <div
                className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-2xl
                  p-4
                "
              >

                <h3 className="text-yellow-400 font-bold mb-2">
                  Phone
                </h3>

                <a
                  href="tel:+94776716786"
                  className="text-gray-300 text-sm sm:text-base hover:text-cyan-400 transition"
                >
                  +94 77 671 6786
                </a>

              </div>

              {/* EMAIL */}
              <div
                className="
                  bg-white/5
                  border
                  border-white/10
                  rounded-2xl
                  p-4
                "
              >

                <h3 className="text-yellow-400 font-bold mb-2">
                  Email
                </h3>

                <a
                  href="mailto:mathiyalini496@gmail.com"
                  className="
                    text-gray-300
                    text-sm
                    sm:text-base
                    break-all
                    hover:text-cyan-400
                    transition
                  "
                >
                  mathiyalini496@gmail.com
                </a>

              </div>

            </div>

            {/* WHATSAPP BUTTON */}
            <a
              href="https://wa.me/94776716786"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                mt-8
                w-full
                sm:w-auto
                bg-yellow-400
                text-black
                px-8
                py-4
                rounded-2xl
                font-bold
                hover:scale-105
                transition
                duration-300
                text-center
              "
            >
              Chat on WhatsApp
            </a>

          </div>

          {/* RIGHT SIDE */}
          <div
            className="
              bg-white/5
              border
              border-white/10
              rounded-3xl
              p-6
              sm:p-8
              md:p-10
              backdrop-blur-xl
            "
          >

            <h2
              className="
                text-2xl
                sm:text-3xl
                font-black
                mb-8
              "
            >
              Send Message
            </h2>

            <div className="space-y-5">

              {/* NAME */}
              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="
                  w-full
                  bg-black/30
                  border
                  border-white/10
                  rounded-2xl
                  p-4
                  outline-none
                  focus:border-cyan-400
                  text-sm
                  sm:text-base
                "
              />

              {/* EMAIL */}
              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="
                  w-full
                  bg-black/30
                  border
                  border-white/10
                  rounded-2xl
                  p-4
                  outline-none
                  focus:border-cyan-400
                  text-sm
                  sm:text-base
                "
              />

              {/* MESSAGE */}
              <textarea
                rows="6"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="
                  w-full
                  bg-black/30
                  border
                  border-white/10
                  rounded-2xl
                  p-4
                  outline-none
                  focus:border-cyan-400
                  text-sm
                  sm:text-base
                  resize-none
                "
              />

              {/* ERROR */}
              {error && (
                <p className="text-red-400 text-sm">
                  {error}
                </p>
              )}

              {/* SUCCESS */}
              {success && (
                <p className="text-green-400 text-sm">
                  {success}
                </p>
              )}

              {/* BUTTON */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="
                  w-full
                  bg-cyan-400
                  text-black
                  py-4
                  rounded-2xl
                  font-bold
                  hover:scale-[1.02]
                  transition
                  duration-300
                  disabled:opacity-50
                "
              >
                {loading ? "Sending..." : "Send Message"}
              </button>

            </div>

          </div>

        </div>

      </section>

      <WhatsAppButton />

      <Footer />

    </div>
  );
}