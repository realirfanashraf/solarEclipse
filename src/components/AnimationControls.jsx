import { motion } from 'framer-motion';

const AnimationControls = ({ onStart, onPause, onReset }) => {
  const buttonVariants = {
    hover: {
      scale: 1.1,
      transition: { duration: 0.3 }
    },
    tap: {
      scale: 0.9,
      transition: { duration: 0.3 }
    }
  };

  return (
    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-4">
      <div className="flex space-x-4">
        <motion.button
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600 focus:outline-none"
          onClick={onStart}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Start
        </motion.button>
        <motion.button
          className="px-4 py-2 text-white bg-yellow-500 rounded hover:bg-yellow-600 focus:outline-none"
          onClick={onPause}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Pause
        </motion.button>
        <motion.button
          className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none"
          onClick={onReset}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
        >
          Reset
        </motion.button>
      </div>
    </div>
  );
};

export default AnimationControls;
