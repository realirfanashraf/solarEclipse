import { motion } from 'framer-motion';

const Moon = ({ x, controls }) => {
  return (
    <motion.div
      className='w-32 h-32 rounded-full bg-slate-300'
      style={{ x }} // Apply the motion value directly
      animate={controls} // Control the animation with controls
    >
    </motion.div>
  );
};

export default Moon;
