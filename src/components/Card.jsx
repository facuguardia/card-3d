import React from "react";
import LogoImg from "../assets/logo.svg";
import NikeImg from "../assets/nike.png";
import { useMotionValue, useTransform, motion } from "framer-motion";

function Card() {
  // Colores
  const colors = [
    { value: "#b6a179" },
    { value: "#272425" },
    { value: "#6389cb" },
    { value: "#f2c758" },
    { value: "#ffffff" },
  ];

  // Variables para la animación
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [-100, 100], [-30, 30]);

  return (
    <div style={{ perspective: 2000 }}>
      {/* Card */}
      <motion.div
        // Animación
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={0.18}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileTap={{ cursor: "grabbing" }}
        className="w-[426px] min-h-[600px] bg-[#e4dfdc] rounded-[30px] border-[4px] border-white px-[40px] py-[24px] cursor-grab relative shadow-black shadow-2xl"
      >
        {/* Logo */}
        <div className="mb-6">
          <img src={LogoImg} alt="" />
        </div>
        {/* Titulo */}
        <h1 className="text-5xl mb-6 font-extrabold  ">Nike Air Max Pre-Day</h1>
        {/* Descripción */}
        <p className="max-w-[300px] text-black mb-6">
          Taking the classic look of heritage Nike Running into new realm, the
          Nike Air Max Pre-Day brings you a fast-paced look that's ready for
          today's world.
        </p>
        {/* Boton */}
        <div className="flex items-center gap-x-[20px] mb-12">
          <button className="bg-[#2d2b2c] text-white text-base font-medium py-[16px] px-[40px] rounded-lg">
            Add to Bag
          </button>
          <div className="text-[24px] font-bold text-black">$ 495.00</div>
        </div>
        {/* Colores */}
        <ul className="flex gap-x-[10px]">
          {colors.map((color, index) => {
            return (
              <li
                key={index}
                style={{ backgroundColor: color.value }}
                className="w-8 h-8 rounded-full cursor-pointer"
              ></li>
            );
          })}
        </ul>

        {/* Imagen Zapatilla */}
        <motion.div
          // Animación
          style={{ x, y, rotateX, rotateY, z: 10000 }}
          className="absolute top-12 -right-64 w-[620px]"
        >
          <img src={NikeImg} alt="" draggable="false" />
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Card;
