import { motion } from 'framer-motion'

const Moon = ({ x, controls }) => {
  return (
    <motion.div
      className="relative w-32 h-32 rounded-full overflow-hidden"
      style={{
        x,
        background: 'radial-gradient(circle at 30% 30%, #94a3b8, #64748b 40%, #475569 70%, #334155 90%)',
        boxShadow: 'inset -4px -4px 8px rgba(0, 0, 0, 0.3), 0 0 15px rgba(255, 255, 255, 0.3)',
      }}
      animate={controls}
    >
      {/* Base shadow layer */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle at 70% 70%, rgba(0, 0, 0, 0.1) 10%, rgba(0, 0, 0, 0.2) 30%, transparent 70%)',
        }}
      ></div>
      
      {/* Patchy shadows */}
      <div
        className="absolute inset-0"
        style={{
          boxShadow: 'inset 10px 10px 10px rgba(0, 0, 0, 0.2), inset -5px -5px 10px rgba(0, 0, 0, 0.2)',
          filter: 'blur(4px)',
        }}
      ></div>
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 25% 25%, rgba(0, 0, 0, 0.2) 5%, transparent 15%),
            radial-gradient(circle at 75% 75%, rgba(0, 0, 0, 0.2) 5%, transparent 15%),
            radial-gradient(circle at 50% 10%, rgba(0, 0, 0, 0.1) 5%, transparent 20%),
            radial-gradient(circle at 90% 40%, rgba(0, 0, 0, 0.1) 10%, transparent 25%)
          `,
        }}
      ></div>
      
      {/* Subtle highlights */}
      <div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle at 20% 20%, rgba(255, 255, 255, 0.05) 5%, transparent 15%)',
        }}
      ></div>
    </motion.div>
  )
}

export default Moon