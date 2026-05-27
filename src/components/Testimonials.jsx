import customer1 from "../assets/customer1.jpeg";
import customer2 from "../assets/customer2.jpeg";


const reviews = [
  {
    name: "James Wilson",
    image: customer1,
    text: "Amazing airport pickup and very friendly driver. Highly recommended!",
  },

  {
    name: "Sophia Brown",
    image: customer2,
    text: "The Nilaveli tour experience was unforgettable and safe.",
  },

];

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-[#031926]">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-yellow-400 uppercase tracking-[5px] mb-4">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-6xl font-black text-white">
            Happy Travelers
          </h2>

        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-[30px] p-8 hover:-translate-y-2 transition duration-300"
            >

              {/* Customer */}
              <div className="flex items-center gap-4 mb-6">

                <img
                  src={review.image}
                  alt=""
                  className="w-24 h-24 rounded-full object-cover border-2 border-yellow-400"
                />

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {review.name}
                  </h3>

                  <p className="text-yellow-400 text-sm">
                    Tourist Traveler
                  </p>
                </div>

              </div>

              {/* Review */}
              <p className="text-gray-300 leading-relaxed">
                "{review.text}"
              </p>

              {/* Stars */}
              <div className="flex gap-1 mt-6 text-yellow-400 text-xl">
                ★★★★★
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}