import { motion } from 'framer-motion';

const Chromosphere = () => (
  <motion.div
    className="absolute inset-0"
    style={{
      background: 'radial-gradient(circle, rgba(255,100,50,0.2) 0%, rgba(255,100,50,0) 70%)',
      scale: 1.1,
    }}
  />
);

export default Chromosphere;
