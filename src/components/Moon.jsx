import {motion} from 'framer-motion'
const Moon = () => {
  return (
    <motion.div
      className='w-32 h-32 rounded-full bg-slate-300'
      initial={{ x: 0 }} 
      animate={{ x: -100 }} 
      transition={{ duration: 2 }} 
    >
    </motion.div>

    
  )
}

export default Moon