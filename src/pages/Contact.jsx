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

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill all fields before sending.");
      return;
    }

    setLoading(true);

    try {
      const whatsappMessage = `
📩 New Contact Message

👤 Name: ${name}
📧 Email: ${email}

📝 Message:
${message}
      `;

      const whatsappURL = `https://wa.me/94776716786?text=${encodeURIComponent(
        whatsappMessage
      )}`;

      window.open(whatsappURL, "_blank");

      setSuccess("Your message was sent! We'll reply within 24 hours.");

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
      <section className="pt-28 sm:pt-36 md:pt-44 pb-14 sm:pb-20 px-4 sm:px-6 text-center">

        <p className="text-yellow-400 uppercase tracking-[4px] sm:tracking-[6px] text-xs sm:text-sm mb-4">
          Contact Us
        </p>

        <h1 className="text-3xl sm:text-5xl md:text-7xl font-black leading-tight">
          Let's Plan
          <span className="block text-cyan-400">
            Your Journey
          </span>
        </h1>

      </section>

      {/* CONTENT */}
      <section className="pb-20 sm:pb-28 px-4 sm:px-6">

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">

          {/* LEFT - INFO */}
          <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-[30px] p-6 sm:p-10 backdrop-blur-xl">

            <h2 className="text-xl sm:text-3xl font-black mb-6 sm:mb-8">
              Contact Information
            </h2>

            <div className="space-y-5 sm:space-y-6 text-gray-300 text-sm sm:text-lg">

              <div>
                <h3 className="text-yellow-400 font-bold mb-1 sm:mb-2">
                  Address
                </h3>
                <p>No 241G Valaiyoothu, Nilaveli, Trincomalee</p>
              </div>

              <div>
                <h3 className="text-yellow-400 font-bold mb-1 sm:mb-2">
                  Phone
                </h3>
                <p>+94 77 671 6786</p>
              </div>

              <div>
                <h3 className="text-yellow-400 font-bold mb-1 sm:mb-2">
                  Email
                </h3>
                <p className="break-all">mathiyalini496@gmail.com</p>
              </div>

            </div>

            {/* BUTTON */}
            <a
              href="https://wa.me/94776716786"
              target="_blank"
              className="inline-block mt-8 sm:mt-10 bg-yellow-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-full font-bold hover:scale-105 transition text-sm sm:text-base"
            >
              Chat on WhatsApp
            </a>

          </div>

          {/* RIGHT - FORM */}
          <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-[30px] p-6 sm:p-10 backdrop-blur-xl">

            <h2 className="text-xl sm:text-3xl font-black mb-6 sm:mb-8">
              Send Message
            </h2>

            <div className="space-y-4 sm:space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full bg-black/30 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 outline-none focus:border-cyan-400 text-sm sm:text-base"
              />

              <input
                type="email"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-black/30 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 outline-none focus:border-cyan-400 text-sm sm:text-base"
              />

              <textarea
                rows="5"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full bg-black/30 border border-white/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 outline-none focus:border-cyan-400 text-sm sm:text-base"
              />

              {/* ERROR */}
              {error && (
                <p className="text-red-400 text-xs sm:text-sm">
                  {error}
                </p>
              )}

              {/* SUCCESS */}
              {success && (
                <p className="text-green-400 text-xs sm:text-sm">
                  {success}
                </p>
              )}

              {/* BUTTON */}
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="w-full bg-cyan-400 text-black py-3 sm:py-4 rounded-xl sm:rounded-2xl font-bold hover:scale-105 transition text-sm sm:text-base disabled:opacity-50"
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