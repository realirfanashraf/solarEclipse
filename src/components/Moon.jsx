import { motion, useTransform } from 'framer-motion'
import { forwardRef } from 'react'
import Craters from './moonComponents/Craters.jsx';
import ShadowOverlay from './moonComponents/ShadowOverlay.jsx';
import InnerShadow from './moonComponents/InnerShadow.jsx';
import Highlight from './moonComponents/Highlight.jsx';
import SubtleGlow from './moonComponents/SubtleGlow.jsx';


const Moon = forwardRef(({ x, controls, overlap }, ref) => {
  const moonDarkness = useTransform(overlap, [0, 1], [
    "radial-gradient(circle at 30% 30%, #e2e8f0, #cbd5e1 40%, #94a3b8 70%, #64748b 90%)",
    "radial-gradient(circle at 30% 30%, #374151, #1f2937 40%, #111827 70%, #0f172a 90%)",
  ]);

  return (
    <motion.div
      ref={ref}
      className="relative w-32 h-32 rounded-full overflow-hidden"
      style={{
        x,
        background: moonDarkness,
        boxShadow: 'inset -4px -4px 8px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 255, 255, 0.2)',
      }}
      animate={{ ...controls }}
    >
      <Craters />
      <ShadowOverlay />
      <InnerShadow />
      <Highlight />
      <SubtleGlow />
    </motion.div>
  )
})

Moon.displayName = 'Moon'

export default Moon
