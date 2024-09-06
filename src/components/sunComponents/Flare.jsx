import { motion } from 'framer-motion';

const Flare = ({ index }) => (
  <motion.div
    className="absolute w-full h-full"
    style={{
      background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
      transform: `rotate(${index * 45}deg) scale(1.2)`,
      opacity: 0.7,
    }}
  />
);

export default Flare;
