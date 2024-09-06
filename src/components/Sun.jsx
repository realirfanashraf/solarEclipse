import { motion, useMotionValue, useTransform, useMotionTemplate } from 'framer-motion';
import { forwardRef } from 'react';
import Flare from './sunComponents/Flare.jsx';
import Chromosphere from './sunComponents/Chromosphere.jsx';
import Glare from './sunComponents/Glare.jsx';

const Sun = forwardRef((props, ref) => {
  const { overlap } = props;  

  const baseColor = useMotionValue('#ffdf00');
  const glowColor = useTransform(baseColor, color => `${color}80`);
  const coronaColor = useTransform(baseColor, color => `${color}60`);

  const flareAnimation = useMotionTemplate`
    radial-gradient(circle at 50% 50%, ${baseColor}, transparent 70%),
    radial-gradient(circle at 30% 30%, ${glowColor}, transparent 50%),
    radial-gradient(circle at 70% 70%, ${glowColor}, transparent 50%),
    radial-gradient(circle at 20% 80%, ${coronaColor}, transparent 60%),
    radial-gradient(circle at 80% 20%, ${coronaColor}, transparent 60%)
  `;

  const glareOpacity = useTransform(overlap, [0.7, 0.9], [0, 1]);

  return (
    <div className="relative w-32 h-32">
      <motion.div
        ref={ref}
        className="absolute top-0 left-0 w-full h-full rounded-full overflow-hidden"
        style={{
          background: flareAnimation,
          boxShadow: '0 0 80px rgba(255, 223, 0, 0.8), 0 0 160px rgba(255, 223, 0, 0.6)',
        }}
        {...props}
      >
        {[...Array(8)].map((_, index) => (
          <Flare key={index} index={index} />
        ))}
        <Chromosphere />
      </motion.div>
      
      {/* Use motion.div to control glare opacity dynamically */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full"
        style={{ opacity: glareOpacity }}
      >
        <Glare />
      </motion.div>
    </div>
  );
});

Sun.displayName = 'Sun';
export default Sun;
