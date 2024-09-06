import { useEffect, useRef, useState } from "react";
import Moon from "./Moon.jsx";
import Sun from "./Sun.jsx";
import { useAnimation, useMotionValue, motion, useTransform } from "framer-motion";
import AnimationControls from "./AnimationControls.jsx";

const SolarEclipse = () => {

  const moonRef = useRef(null);
  const sunRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const x = useMotionValue(0);
  const controls = useAnimation();
  const overlap = useMotionValue(0)
  const background = useTransform(overlap, [0, 1], ["#4682B4", "#001F3F"]);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {

    const updateOverlap = () => {
      if (moonRef.current && sunRef.current) {
        const moonRect = moonRef.current.getBoundingClientRect();
        const sunRect = sunRef.current.getBoundingClientRect();
        const overlapStart = Math.max(moonRect.left, sunRect.left);
        const overlapEnd = Math.min(moonRect.right, sunRect.right);
        const overlapWidth = overlapEnd - overlapStart;
        const sunWidth = sunRect.width;
        const overlapPercentage = Math.max(0, Math.min(1, overlapWidth / sunWidth));
        overlap.set(overlapPercentage);
      }
    };

    const unsubscribe = x.on("change", updateOverlap);

    return () => {
      unsubscribe();
    };
  }, [x, overlap]);


  const startAnimation = () => {
    const currentPosition = x.get();
    const moveDistance = viewportWidth * 0.6;
    const duration = viewportWidth < 768 ? 40 : 60;
    controls.start({
      x: [currentPosition, -moveDistance],
      transition: { duration: duration, repeat: Infinity, repeatType: 'loop' },
    });
    setIsAnimating(true);
  };

  const pauseAnimation = () => {
    controls.stop();
    setIsAnimating(false);
  };

  const resetAnimation = () => {
    controls.stop();
    x.set(0);
    overlap.set(0);
    setIsAnimating(false);
  };


  return (
    <motion.div className="grid grid-cols-3 w-screen h-screen "
      style={{ backgroundColor: background }}>
      <div></div>
      <div className="flex items-center justify-centre">
        <Sun ref={sunRef} overlap={overlap} />
      </div>
      <div className="flex items-center justify-start">
        <Moon ref={moonRef} x={x} controls={controls} overlap={overlap} />
      </div>
      <AnimationControls onStart={startAnimation} onPause={pauseAnimation} onReset={resetAnimation} />
    </motion.div>
  );
};

export default SolarEclipse;
