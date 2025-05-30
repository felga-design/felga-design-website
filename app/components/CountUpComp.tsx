"use client";

import React, { useRef } from "react";
import CountUp from "react-countup";
import { motion, useInView } from "framer-motion";

export default function CountUpSection({
  years = 15,
  jobs = 150,
  clients = 100,
}) {
  const stats = [
    {
      end: years,
      label: "lata doświadczenia",
    },
    {
      end: jobs,
      label: "zrealizowanych projektów",
    },
    {
      end: clients,
      label: "zadowolonych klientów",
    },
  ];

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="bg-gold-gradient-horizon shadow-lg text-white py-12 text-shadow-md"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-screen-lg mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center"
      >
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <span className="text-4xl font-bold text-white">
              {isInView ? (
                <CountUp
                  start={0}
                  end={stat.end}
                  duration={2.5}
                  useEasing={true}
                  separator=","
                />
              ) : (
                0
              )}
              {index == 2 && "%"}
              {index !== 2 && "+ "}
            </span>
            <p className="mt-2 text-sm sm:text-lg">{stat.label}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
}
