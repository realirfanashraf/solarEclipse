import { motion, useMotionValue, useTransform, useMotionTemplate } from 'framer-motion';
import { forwardRef } from 'react';

const Sun = forwardRef((props, ref) => {
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

  return (
    <motion.div
      ref={ref}
      className="w-32 h-32 rounded-full relative overflow-hidden"
      style={{
        background: flareAnimation,
        boxShadow: '0 0 80px rgba(255, 223, 0, 0.8), 0 0 160px rgba(255, 223, 0, 0.6)',
      }}
      {...props} 
    >
      {/* Static turbulent surface effect (no animation) */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'100\' height=\'100\' viewBox=\'0 0 100 100\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.15\'/%3E%3C/svg%3E")',
          scale: 1.05,
          opacity: 0.5,
          rotate: 360,
        }}
      />

      {/* Static solar flares (no animation) */}
      {[...Array(8)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-full h-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.8) 0%, rgba(255,255,255,0) 70%)',
            transform: `rotate(${index * 45}deg) scale(1.2)`,
            opacity: 0.7,
          }}
        />
      ))}

      {/* Static chromosphere layer */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle, rgba(255,100,50,0.2) 0%, rgba(255,100,50,0) 70%)',
          scale: 1.1,
        }}
      />

      {/* Static surface granulation effect */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100' height='100' viewBox='0 0 100 100'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.7' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E")`,
          backgroundSize: '200% 200%',
          backgroundPosition: '100% 100%',
        }}
      />
    </motion.div>
  );
});

Sun.displayName = 'Sun';
export default Sun;
