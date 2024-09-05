import React from "react";
import { motion } from "framer-motion";

const SkyAnimation = () => {
  return (
    <motion.div
      initial={{ background: "linear-gradient(to bottom, #87CEEB, #FFFFFF)" }} // Normal daytime sky before the eclipse
      animate={{
        background: [
          "linear-gradient(to bottom, #87CEEB, #FFFFFF)", // Pre-eclipse sky
          "linear-gradient(to bottom, #708090, #2F4F4F)", // Eclipse dimming begins (grayish tones)
          "linear-gradient(to bottom, #2C3E50, #191970)", // Darker twilight during the peak of the eclipse
          "linear-gradient(to bottom, #708090, #2F4F4F)", // Dimming after the eclipse
          "linear-gradient(to bottom, #87CEEB, #FFFFFF)", // Return to normal sky
        ],
      }}
      transition={{
        duration: 20, // Total duration for the eclipse effect
        ease: "easeInOut",
        repeat: Infinity, // Repeats the cycle infinitely
      }}
      style={{
        height: "100vh",
        width: "100vw",
        position: "relative",
      }}
    />
  );
};

export default SkyAnimation;
