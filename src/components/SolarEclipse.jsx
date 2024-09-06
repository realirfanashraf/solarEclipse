import { useEffect, useRef, useState } from "react";
import Moon from "./Moon.jsx";
import Sun from "./Sun.jsx";
import { useAnimation, useMotionValue, motion, useTransform } from "framer-motion";

const SolarEclipse = () => {

  const moonRef = useRef(null); 
  const sunRef = useRef(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  const x = useMotionValue(0); 
  const controls = useAnimation();

  const overlap = useMotionValue(0)

  const background = useTransform(overlap, [0, 1], ["#87CEEB", "#000"]);

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


  // useEffect(() => {
  //   const unsubscribe = x.on("change", (latestX) => {
  //     console.log("x value changed:", latestX);
  //   });
  
  //   return () => unsubscribe();
  // }, [x]);





  useEffect(() => {
    console.log("inside the overlap useEffect");
    console.log("moonRef.current:", moonRef.current);
    console.log("sunRef.current:", sunRef.current);
    
    const updateOverlap = () => {
      if (moonRef.current && sunRef.current) {
        const moonRect = moonRef.current.getBoundingClientRect();
        const sunRect = sunRef.current.getBoundingClientRect();

        console.log("moonRect:", moonRect);
        console.log("sunRect:", sunRect);
  
        // Calculate the horizontal overlap between the moon and sun
        const overlapStart = Math.max(moonRect.left, sunRect.left);
        const overlapEnd = Math.min(moonRect.right, sunRect.right);
        
        // Calculate the total possible overlap width
        const overlapWidth = overlapEnd - overlapStart;
        const sunWidth = sunRect.width;
  
        // Compute overlap percentage (clamped between 0 and 1)
        const overlapPercentage = Math.max(0, Math.min(1, overlapWidth / sunWidth));
  
        // Update the motion value for overlap
        overlap.set(overlapPercentage);
      }
    };
  
    // Subscribe to changes in the x motion value using on("change")
    const unsubscribe = x.on("change", updateOverlap);
  
    // Clean up subscription on unmount
    return () => {
      unsubscribe();
    };
  }, [x, overlap]);
  
  
















  const startAnimation = () => {
    const currentPosition = x.get();
    console.log("Starting animation from position:", currentPosition);

    controls.start({
      x: [currentPosition, -viewportWidth], 
      transition: { duration: 20, repeat: Infinity, repeatType: 'loop' },
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
    setIsAnimating(false);
  };

  return (
    <motion.div className="grid grid-cols-3 w-screen h-screen bg-black "
    style={{backgroundColor: background}}>
      <div></div>
      <div className="flex items-center justify-start">
        <Sun ref={sunRef}/>
      </div>
      <div className="flex items-center justify-center">
        <Moon ref={moonRef} x={x} controls={controls} />
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
        <div className="flex space-x-4">
          <button className="px-4 py-2 text-white rounded" onClick={startAnimation}>Start</button>
          <button className="px-4 py-2 text-white rounded" onClick={pauseAnimation}>Pause</button>
          <button className="px-4 py-2 text-white rounded" onClick={resetAnimation}>Reset</button>
        </div>
      </div>
    </motion.div>
  );
};

export default SolarEclipse;
