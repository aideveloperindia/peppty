import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';

const products = [
  { name: 'ChatHub', image: '/chathub.png' },
  { name: 'Shops', image: '/shops.png' },
  { name: 'Stories', image: '/stories.png' },
  { name: 'Votes', image: '/votes.png' },
];

export default function Hero() {
  const [currentProduct, setCurrentProduct] = useState(0);
  const [showCursor, setShowCursor] = useState(false);
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true, amount: 0.3 });
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (isInView && !reduceMotion) {
      // Typewriter effect completion
      setTimeout(() => setShowCursor(true), 2500);
      // Start product carousel
      const interval = setInterval(() => {
        setCurrentProduct((prev) => (prev + 1) % products.length);
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [isInView, reduceMotion]);

  const tagline = 'Next-gen social networking built around privacy, authenticity, and real-world connection.';
  const [displayedTagline, setDisplayedTagline] = useState('');

  useEffect(() => {
    if (isInView && !reduceMotion) {
      let index = 0;
      const typeInterval = setInterval(() => {
        if (index < tagline.length) {
          setDisplayedTagline(tagline.slice(0, index + 1));
          index++;
        } else {
          clearInterval(typeInterval);
        }
      }, 30);
      return () => clearInterval(typeInterval);
    } else {
      setDisplayedTagline(tagline);
    }
  }, [isInView, reduceMotion, tagline]);

  return (
    <section ref={heroRef} className="min-h-screen flex items-start justify-center cinematic-bg relative overflow-hidden pt-0 pb-20">
      {/* Animated background gradients */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[800px] h-[800px] rounded-full bg-primary/10 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ top: '-200px', right: '-200px' }}
        />
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-primary/8 blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
          style={{ bottom: '-150px', left: '-150px' }}
        />
      </div>

      <div className="mx-auto max-w-7xl px-4 relative z-10 pt-16 md:pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="space-y-8"
          >
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-5xl md:text-hero font-heading font-bold tracking-tight text-text leading-tight"
            >
              Building India&apos;s First{' '}
              <span className="text-primary">Standalone</span> Social Network
            </motion.h1>

            {/* Typewriter Tagline */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="text-lg md:text-subhead-md text-muted leading-relaxed max-w-xl"
            >
              {displayedTagline}
              {showCursor && !reduceMotion && (
                <span className="inline-block w-0.5 h-6 bg-primary ml-1 animate-blink" />
              )}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link
                href="/contact"
                className="group relative rounded-lg bg-primary px-8 py-4 text-white font-medium shadow-lg hover:shadow-glow-lg transition-all duration-300 ripple-effect overflow-hidden"
              >
                <span className="relative z-10">Discover Peppty</span>
                <motion.div
                  className="absolute inset-0 bg-primaryHover"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: 'center' }}
                />
              </Link>
              <Link
                href="/about"
                className="group rounded-lg border-2 border-primary/30 px-8 py-4 font-medium text-primary hover:border-primary hover:bg-primary/5 transition-all duration-300 glass backdrop-blur-sm"
              >
                Our Vision
              </Link>
            </motion.div>

            {/* Scroll Hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 1.2 }}
              className="flex items-center gap-2 text-sm text-muted pt-8"
            >
              <span>Scroll to Explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
                className="w-4 h-4 border-r-2 border-b-2 border-muted rotate-45"
              />
            </motion.div>
          </motion.div>

          {/* Right: Phone Mockup Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative -mt-32 md:-mt-28"
          >
            <div className="relative h-[600px] md:h-[700px]">
              {products.map((product, index) => (
                <motion.div
                  key={product.name}
                  initial={{ opacity: 0, scale: 0.8, rotateY: 45 }}
                  animate={{
                    opacity: index === currentProduct ? 1 : 0,
                    scale: index === currentProduct ? 1 : 0.8,
                    rotateY: index === currentProduct ? 0 : 45,
                    zIndex: index === currentProduct ? 10 : 0,
                  }}
                  transition={{
                    duration: 0.8,
                    ease: 'easeInOut',
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="relative w-full max-w-sm mx-auto">
                    {/* Phone Frame */}
                    <div className="relative rounded-[3rem] bg-black p-4 shadow-2xl mx-auto">
                      <div className="rounded-[2.5rem] overflow-hidden bg-white">
                        <div className="scale-[1.2] origin-center">
                          <img
                            src={product.image}
                            alt={`${product.name} preview`}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      </div>
                      {/* Notch */}
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl" />
                    </div>
                    {/* Product Label */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: index === currentProduct ? 1 : 0, y: index === currentProduct ? 0 : 20 }}
                      className="absolute -bottom-12 left-0 right-0 text-center"
                    >
                      <div className="text-2xl font-heading font-bold text-primary">{product.name}</div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Product Indicators */}
            <div className="flex justify-center gap-2 mt-20">
              {products.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProduct(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentProduct ? 'w-8 bg-primary' : 'w-2 bg-muted/30'
                  }`}
                  aria-label={`Show ${products[index].name}`}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
