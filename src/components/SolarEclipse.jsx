import { useEffect, useState } from "react";
import Moon from "./Moon.jsx";
import Sun from "./Sun.jsx";
import { useAnimation, useMotionValue } from "framer-motion";

const SolarEclipse = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const x = useMotionValue(0); // Default to 0, adjust based on current state
  const controls = useAnimation();

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Update viewportWidth on component mount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const startAnimation = () => {
    const currentPosition = x.get();
    controls.start({
      x: [currentPosition, -viewportWidth], // Animate from current position to off-screen left
      transition: { duration: 5, repeat: Infinity, repeatType: 'loop' },
    });
    setIsAnimating(true);
  };

  const pauseAnimation = () => {
    controls.stop();
    setIsAnimating(false);
  };

  const resetAnimation = () => {
    controls.stop();
    x.set(0); // Reset position if needed
    setIsAnimating(false);
  };

  return (
    <div className="grid grid-cols-3 w-screen h-screen bg-slate-500 overflow-hidden">
      <div></div>
      <div className="flex items-center justify-start">
        <Sun />
      </div>
      <div className="flex items-center justify-center">
        <Moon x={x} controls={controls} />
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
        <div className="flex space-x-4">
          <button className="px-4 py-2 text-white rounded" onClick={startAnimation}>Start</button>
          <button className="px-4 py-2 text-white rounded" onClick={pauseAnimation}>Pause</button>
          <button className="px-4 py-2 text-white rounded" onClick={resetAnimation}>Reset</button>
        </div>
      </div>
    </div>
  );
};

export default SolarEclipse;
