import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

type TeamCardProps = {
  name: string;
  role: string;
  bio: string;
  index?: number;
};

export default function TeamCard({ name, role, bio, index = 0 }: TeamCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      <motion.div
        whileHover={{ y: -8, scale: 1.02 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative rounded-2xl glass p-8 shadow-lg hover:shadow-glow-lg transition-all duration-500 overflow-hidden"
      >
        {/* Background Blur Animation */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at center, rgba(237, 30, 36, 0.1), transparent)`,
            filter: 'blur(40px)',
          }}
        />

        {/* Floating Effect */}
        <motion.div
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: index * 0.5,
          }}
          className="relative z-10"
        >
          {/* Avatar Placeholder */}
          <div className="relative mb-6">
            <div className="h-24 w-24 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-500">
              <div className="h-20 w-20 rounded-full bg-surface flex items-center justify-center">
                <span className="text-3xl font-heading font-bold text-primary">
                  {name.charAt(0)}
                </span>
              </div>
            </div>
            {/* Glow Ring */}
            <motion.div
              className="absolute inset-0 rounded-full border-2 border-primary/30"
              animate={isHovered ? { scale: 1.2, opacity: 0 } : { scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            />
          </div>

          {/* Name & Role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 + index * 0.1 }}
          >
            <h3 className="text-xl font-heading font-bold text-text text-center mb-2 group-hover:text-primary transition-colors duration-300">
              {name}
            </h3>
            <p className="text-sm text-muted text-center mb-4">{role}</p>
          </motion.div>

          {/* Bio - Fades in on hover */}
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isHovered ? 'auto' : 0,
              opacity: isHovered ? 1 : 0,
            }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="text-sm text-muted leading-relaxed text-center pt-4 border-t border-white/20">
              {bio}
            </p>
          </motion.div>
        </motion.div>

        {/* Corner Glow */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>
    </motion.div>
  );
}
