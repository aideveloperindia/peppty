import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';
import { useInView } from 'framer-motion';

type ProductCardProps = {
  title: string;
  description: string;
  href: string;
  index?: number;
};

export default function ProductCard({ title, description, href, index = 0 }: ProductCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  // 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseYSpring = useSpring(y, { stiffness: 500, damping: 100 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7.5deg', '-7.5deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7.5deg', '7.5deg']);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, x: index % 2 === 0 ? -40 : 40 }}
      animate={isInView ? { opacity: 1, y: 0, x: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.1, ease: 'easeOut' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d',
        }}
        className="relative rounded-2xl border border-white/20 bg-white/80 backdrop-blur-xl p-8 shadow-lg hover:shadow-glow-lg transition-all duration-500 overflow-hidden"
      >
        {/* Animated Background Gradient */}
        <motion.div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 50%, rgba(237, 30, 36, 0.1), transparent)`,
          }}
        />

        {/* Glow Border Effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `linear-gradient(135deg, rgba(237, 30, 36, 0.3), rgba(237, 30, 36, 0.1))`,
            filter: 'blur(20px)',
            zIndex: -1,
          }}
        />

        {/* Content */}
        <div className="relative z-10" style={{ transform: 'translateZ(50px)' }}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-heading font-bold text-text mb-3 group-hover:text-primary transition-colors duration-300">
              {title}
            </h3>
          </motion.div>

          <p className="text-muted leading-relaxed mb-6">
            {description}
          </p>

          <motion.div
            whileHover={{ x: 5 }}
            transition={{ duration: 0.3 }}
          >
            <Link
              href={href}
              className="inline-flex items-center gap-2 text-primary font-medium hover:text-primaryHover transition-colors group/link"
            >
              <span>Learn more</span>
              <motion.span
                animate={{ x: isHovered ? 4 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-xl"
              >
                →
              </motion.span>
            </Link>
          </motion.div>
        </div>

        {/* Decorative Corner Glow */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
      </motion.div>
    </motion.div>
  );
}
