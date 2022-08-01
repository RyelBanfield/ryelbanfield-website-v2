import { motion } from 'framer-motion';

const DelayedFadeIn = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 1, duration: 0.7 }}
  >
    {children}
  </motion.div>
);

export default DelayedFadeIn;
