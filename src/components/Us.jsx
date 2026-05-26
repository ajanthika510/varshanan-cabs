import owner from "../assets/owner.jpg";
import logo from "../assets/logo.png";

export default function TrustSection() {
  return (
    <section className="relative bg-[#f5f7fb] py-24 overflow-hidden">
      
      {/* TOP GLOW */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-cyan-100/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-6">

        {/* TITLE */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-[#1d4d8f] leading-tight">
            Your Travel
            <br />
            Partner
          </h2>

          <div className="w-40 h-1 bg-cyan-400 mt-6 rounded-full" />
        </div>

        {/* MAIN CONTENT */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            {/* BRAND */}
            <div className="flex items-center gap-4 mb-10">

              <img
                src={logo}
                alt="logo"
                className="w-16 h-16 rounded-full object-cover shadow-lg"
              />

              <h3 className="text-2xl md:text-3xl font-black text-[#1d4d8f]">
                Varshanan Cabs
                <span className="text-cyan-500">
                  {" "}Nilaveli
                </span>
              </h3>

            </div>

            {/* FEATURES */}
            <div className="space-y-6">

              {[
                
                "English-speaking professional driver",
                "Trusted by international travelers",
                "Clean, air-conditioned vehicles",
                "Airport pickup & hotel transfers",
                "No hidden charges",
                "24/7 customer support",
                "Safe family-friendly travel experience",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4"
                >
                  {/* CHECK ICON */}
                  <div className="w-8 h-8 rounded-full bg-cyan-400 flex items-center justify-center text-white font-bold shadow-md">
                    ✓
                  </div>

                  <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}

            </div>

            {/* BUTTON */}
            <div className="mt-12">
              <a
                href="https://wa.me/94776716786"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-[#1d4d8f] hover:bg-cyan-500 text-white px-10 py-4 rounded-2xl font-bold transition duration-300 hover:scale-105 shadow-xl"
              >
                Book Your Ride
              </a>
            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">

            {/* CIRCLE GLOW */}
            <div className="absolute w-[380px] h-[380px] sm:w-[500px] sm:h-[500px] rounded-full bg-cyan-400/20 blur-3xl" />

            {/* IMAGE */}
            <div className="relative">
              <img
                src={owner}
                alt="Owner"
                className="
                  w-[300px]
                  h-[300px]
                  sm:w-[450px]
                  sm:h-[450px]
                  md:w-[550px]
                  md:h-[550px]
                  object-cover
                  rounded-full
                  border-[10px]
                  border-white
                  shadow-[0_20px_80px_rgba(0,0,0,0.25)]
                "
              />

              {/* FLOATING CARD */}
              <div className="absolute bottom-10 left-0 sm:-left-10 bg-white rounded-3xl px-6 py-5 shadow-2xl border border-gray-100">
                <h4 className="text-3xl font-black text-[#1d4d8f]">
                  500+
                </h4>

                <p className="text-gray-600 font-medium">
                  Happy Travelers
                </p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}