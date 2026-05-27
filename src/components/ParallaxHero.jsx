import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

import ella from "../assets/ella.jpg";

export default function ParallaxHero() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  // ✅ FIX: single moveX, single moveY
  const moveX = useTransform(
    smoothX,
    [-500, 500],
    isMobile ? [-10, 10] : [-40, 40]
  );

  const moveY = useTransform(
    smoothY,
    [-500, 500],
    isMobile ? [-10, 10] : [-40, 40]
  );

  const glowX = useTransform(smoothX, [-500, 500], isMobile ? [-20, 20] : [-80, 80]);
  const glowY = useTransform(smoothY, [-500, 500], isMobile ? [-20, 20] : [-80, 80]);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    mouseX.set(clientX - centerX);
    mouseY.set(clientY - centerY);
  };

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative h-screen overflow-hidden flex items-center"
    >

      {/* Background Image */}
      <motion.img
        style={{ x: moveX, y: moveY }}
        src={ella}
        alt="Sri Lanka travel"
        className="absolute inset-0 w-full h-full object-cover scale-110"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Glow 1 */}
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="absolute top-[10%] left-[10%] w-[250px] h-[250px] bg-cyan-400/20 blur-[120px] rounded-full"
      />

      {/* Glow 2 */}
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="absolute bottom-[10%] right-[10%] w-[250px] h-[250px] bg-yellow-400/20 blur-[120px] rounded-full"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        <motion.div style={{ x: moveX, y: moveY }} className="max-w-3xl">

          <p className="uppercase tracking-[6px] text-cyan-400 mb-5">
            Luxury Sri Lanka Tours
          </p>

          <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-white leading-tight mb-8">
            Explore The <br />
            Beauty Of Sri Lanka
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-10">
            Premium taxi and tour experiences with trusted drivers and luxury comfort.
          </p>

          <button className="bg-yellow-400 text-black px-8 py-4 rounded-2xl font-black hover:scale-105 transition">
            Explore Tours
          </button>

        </motion.div>
      </div>
    </section>
  );
}