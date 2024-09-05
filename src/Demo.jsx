import { useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const Demo = () => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [xValue, setXValue] = useState(0);
  const controls = useAnimation();

  const startAnimation = () => {
    controls.start({
      x: [isAnimating, 200],
      transition: { duration: 5, repeat: Infinity, repeatType: 'loop' },
      onUpdate: (latest) => setXValue(latest.x), // Track x value during animation
    });
    setIsAnimating(true);
  };

  const pauseAnimation = () => {
    controls.stop();
    setIsAnimating(false);
  };

  const resetAnimation = () => {
    controls.stop();
    controls.set({ x: 0 });
    setXValue(0); // Reset x value
    setIsAnimating(false);
  };

  // Calculate the darkness based on the x value
  const darkness = Math.min(1, xValue / 200); // Scale between 0 and 1
  const backgroundColor = `rgba(${173 - darkness * 100}, ${216 - darkness * 100}, ${230 - darkness * 100}, 1)`;

  return (
    <div style={{ position: 'relative', width: '100vw', height: '100vh', backgroundColor }}>
      <motion.div
        animate={controls}
        style={{
          position: 'absolute',
          top: '20%',
          left: '20%',
          width: 100,
          height: 100,
          borderRadius: '50%',
          backgroundColor: 'yellow',
          boxShadow: '0 0 50px yellow',
        }}
      />
      <motion.div
        animate={controls}
        style={{
          position: 'absolute',
          top: '20%',
          left: '20%',
          width: 100,
          height: 100,
          borderRadius: '50%',
          backgroundColor: 'gray',
          mixBlendMode: 'multiply',
        }}
      />
      <div style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)' }}>
        <button onClick={startAnimation} disabled={isAnimating}>Start</button>
        <button onClick={pauseAnimation} disabled={!isAnimating}>Pause</button>
        <button onClick={resetAnimation}>Reset</button>
      </div>
    </div>
  );
};

export default Demo;
