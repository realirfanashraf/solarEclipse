import { motion } from 'framer-motion';

const Glare = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: [ 1, 1.1] }}
      transition={{ 
        duration: 2, 
        ease: "easeInOut",
        repeat: Infinity, 
        repeatType: "loop" 
      }}
      style={{
        position: 'absolute',      
        width: '60px',   
        height: '60px',  
        borderRadius: '500%',
        background: 'radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)',
        boxShadow: '0 0 40px rgba(255, 255, 255, 1)', 
        pointerEvents: 'none',
        zIndex: 0
      }}
    />
  );
};

export default Glare;
