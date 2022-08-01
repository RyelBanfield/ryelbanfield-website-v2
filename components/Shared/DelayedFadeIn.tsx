import { motion } from 'framer-motion';

const DelayedFadeIn = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.75, duration: 0.75 }}
  >
    {children}
  </motion.div>
);

export default DelayedFadeIn;
