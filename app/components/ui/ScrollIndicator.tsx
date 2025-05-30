"use client";

import { motion } from "framer-motion";
import { MoveDown } from "lucide-react";

export default function ScrollIndicator() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 1, ease: "easeInOut" }}
        className=" absolute bottom-10 left-[47%] md:left-[50%] w-4 h-6 md:w-8 md:h-12 rounded-full border-1 md:border-2 border-[#f1c836] flex items-center justify-center"
      >
        <motion.div
          animate={{ y: [3, -3, 3] }}
          transition={{
            delay: 0.7, // ⬅️ Delay before the animation starts
            repeat: Infinity,
            duration: 1, // optional, controls speed
            ease: "easeInOut", // optional
          }}
        >
          <MoveDown
            width={20}
            height={20}
            className="w-2 h-2 md:w-6 md:h-6 text-[#f1c836]"
          />
        </motion.div>
      </motion.div>
    </>
  );
}
