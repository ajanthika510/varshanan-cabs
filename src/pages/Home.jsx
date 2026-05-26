import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Fleet from "../components/Fleet";
import Testimonials from "../components/Testimonials";
import Us from "../components/Us";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Destinations from "../components/Destinations";

export default function Home() {
  return (
    <div className="bg-black text-white overflow-hidden">
      <Navbar />
      <Hero />
      <WhyChooseUs />
       <Destinations />
      <Fleet />
      <Us />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}