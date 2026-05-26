import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import WhyChooseUs from "../components/WhyChooseUs";
import Fleet from "../components/Fleet";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import RouteMap from "../components/LankaMap";
import Destinations from "../components/Destinations";

export default function Home() {
  return (
    <div className="bg-black text-white overflow-hidden">
      <Navbar />
      <Hero />
      <WhyChooseUs />
       <Destinations />
       <RouteMap />
      <Fleet />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}