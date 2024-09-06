import { motion } from 'framer-motion';

const Glare = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1 }}
      animate={{ opacity: [0.2, 0.8, 0.2], scale: [1, 1.1, 1] }}
      transition={{ 
        duration: 2, 
        ease: "easeInOut",
        repeat: Infinity, 
        repeatType: "loop" 
      }}
      style={{
        position: 'absolute',
        top: '10%',
        left: '10%',
        width: '30px',
        height: '20px',
        borderRadius: '500%',
        background: 'radial-gradient(circle, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 100%)',
        boxShadow: '0 0 20px rgba(255, 255, 255, 0.8)',
        pointerEvents: 'none',
        zIndex: 10
      }}
    />
  );
};

export default Glare;
