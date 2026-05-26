import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export default function MainLayout() {
  return (
    <div className="bg-[#0B0616] text-white min-h-screen overflow-x-hidden">
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}