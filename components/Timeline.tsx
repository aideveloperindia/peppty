import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const milestones = [
  {
    year: '2017',
    title: 'Founded',
    description: 'Bootstrapped',
    icon: '🚀',
    highlight: false,
  },
  {
    year: '2018',
    title: 'First Product',
    description: 'Social Network Launch',
    icon: '📱',
    highlight: false,
  },
  {
    year: '2020',
    title: 'Growth',
    description: '1.4M Users',
    icon: '💬',
    highlight: true,
  },
  {
    year: '2022',
    title: 'Innovation',
    description: 'Private Like/Comment System',
    icon: '🔒',
    highlight: false,
  },
  {
    year: '2024',
    title: 'Expansion',
    description: 'Product Studio',
    icon: '🏢',
    highlight: false,
  },
  {
    year: '2025',
    title: 'Milestone',
    description: 'Founder Buyback',
    icon: '🏆',
    highlight: true,
  },
];

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [100, 0, 0, -100]);

  return (
    <section ref={containerRef} className="py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4">
        <motion.h2
          className="text-4xl md:text-display font-heading font-bold text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Journey
        </motion.h2>

        <div className="relative">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary/30 to-transparent transform -translate-y-1/2" />

          {/* Timeline Items */}
          <div className="relative grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-4">
            {milestones.map((milestone, index) => (
              <TimelineItem
                key={milestone.year}
                milestone={milestone}
                index={index}
                total={milestones.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({
  milestone,
  index,
  total,
}: {
  milestone: typeof milestones[0];
  index: number;
  total: number;
}) {
  const itemRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: itemRef,
    offset: ['start end', 'center center'],
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1.2, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0.5]);

  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex flex-col items-center text-center"
      style={{ opacity, scale }}
    >
      {/* Connector Line */}
      <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-primary/20 transform -translate-y-1/2" />

      {/* Year Badge */}
      <motion.div
        className="relative z-10 mb-4"
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl shadow-lg transition-all duration-300 ${
            milestone.highlight
              ? 'bg-primary text-white shadow-glow'
              : 'bg-white text-primary border-2 border-primary/30'
          }`}
        >
          {milestone.icon}
        </div>
        {/* Pulse Ring for highlights */}
        {milestone.highlight && (
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary"
            animate={{
              scale: [1, 1.5, 1.5],
              opacity: [0.8, 0, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        )}
      </motion.div>

      {/* Content */}
      <div className="space-y-2">
        <div className="text-2xl font-heading font-bold text-text">{milestone.year}</div>
        <div className="text-sm font-semibold text-primary">{milestone.title}</div>
        <motion.p
          className="text-xs text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + index * 0.1 }}
        >
          {milestone.description}
        </motion.p>
      </div>
    </motion.div>
  );
}

