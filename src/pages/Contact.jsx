import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";

export default function Contact() {
  return (
    <div className="bg-[#02131f] text-white min-h-screen">

      <Navbar />

      {/* Hero */}
      <section className="pt-40 pb-20 px-6 text-center">

        <p className="text-yellow-400 uppercase tracking-[5px] mb-5">
          Contact Us
        </p>

        <h1 className="text-5xl md:text-7xl font-black">
          Let's Plan
          <span className="block text-cyan-400">
            Your Journey
          </span>
        </h1>

      </section>

      {/* Contact Content */}
      <section className="pb-24 px-6">

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

          {/* Left */}
          <div className="bg-white/5 border border-white/10 rounded-[30px] p-10">

            <h2 className="text-3xl font-black mb-8">
              Contact Information
            </h2>

            <div className="space-y-6 text-gray-300 text-lg">

              <div>
                <h3 className="text-yellow-400 font-bold mb-2">
                  Address
                </h3>

                <p>
                  No 241G Valaiyoothu Nilaveli, Trincomalee
                </p>
              </div>

              <div>
                <h3 className="text-yellow-400 font-bold mb-2">
                  Phone
                </h3>

                <p>
                  +94 77 671 6786
                </p>
              </div>

              <div>
                <h3 className="text-yellow-400 font-bold mb-2">
                  Email
                </h3>

                <p>
                  mathiyalini496@gmail.com
                </p>
              </div>

            </div>

            {/* WhatsApp */}
            <a
              href="https://wa.me/94776716786"
              target="_blank"
              className="inline-block mt-10 bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition"
            >
              Chat on WhatsApp
            </a>

          </div>

          {/* Right */}
          <div className="bg-white/5 border border-white/10 rounded-[30px] p-10">

            <h2 className="text-3xl font-black mb-8">
              Send Message
            </h2>

            <div className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-black/30 border border-white/10 rounded-2xl p-4 outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-black/30 border border-white/10 rounded-2xl p-4 outline-none"
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="w-full bg-black/30 border border-white/10 rounded-2xl p-4 outline-none"
              />

              <button className="w-full bg-cyan-400 text-black py-4 rounded-2xl font-bold hover:scale-105 transition">
                Send Message
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