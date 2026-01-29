
'use client';

import { motion } from 'framer-motion';
import { PAGE_TRANSITION } from '@/utils/anim';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      variants={PAGE_TRANSITION}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col min-h-screen"
    >
      {children}
    </motion.div>
  );
}
