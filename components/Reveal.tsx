import { motion, useReducedMotion } from 'framer-motion';
import { PropsWithChildren } from 'react';

type RevealProps = PropsWithChildren<{
  delay?: number;
  y?: number;
}>;

export default function Reveal({ children, delay = 0.1, y = 12 }: RevealProps) {
  const reduce = useReducedMotion();
  if (reduce) return <>{children}</>;
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, ease: 'easeOut', delay }}
    >
      {children}
    </motion.div>
  );
}


