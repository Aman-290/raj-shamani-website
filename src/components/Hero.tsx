import { motion, useMotionValue, useSpring } from 'motion/react';
import { useEffect } from 'react';
import HoverCarousel from './HoverCarousel';

export default function Hero() {
  // Spring-backed mouse Y tracker for the mic
  const rawY = useMotionValue(0);
  const springY = useSpring(rawY, { stiffness: 50, damping: 18, mass: 1.8 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Map mouse Y heavily reduced for a very slight spring action
      const normalized = (e.clientY / window.innerHeight - 0.5) * 15;
      rawY.set(normalized);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [rawY]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f0f0f]/50 to-[#0f0f0f] z-0" />
      
      {/* Left Mic: outer = idle idle breathe, inner = lazy spring mouse follow */}
      <motion.div
        className="absolute -left-20 md:-left-32 lg:-left-40 top-20 md:top-52 lg:top-72 w-80 md:w-[480px] lg:w-[640px] z-0 pointer-events-none"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      >
        <motion.img 
          src="/mic.webp" 
          alt="Podcast Mic" 
          className="w-full object-contain"
          style={{ 
            y: springY,
            transformOrigin: '5% 90%'
          }}
          loading="eager"
          fetchPriority="high"
        />
      </motion.div>
      
      {/* Right Raj Image */}
      <motion.img 
        src="/raj-shamni.webp" 
        alt="Raj Shamani" 
        className="absolute -right-32 md:-right-48 lg:-right-[220px] xl:-right-[320px] top-4 md:-top-4 xl:-top-24 w-[350px] md:w-[600px] lg:w-[800px] xl:w-[1000px] opacity-60 xl:opacity-80 z-0 object-contain pointer-events-none"
        style={{ maskImage: 'linear-gradient(to left, black 50%, transparent)', WebkitMaskImage: 'linear-gradient(to left, black 50%, transparent)' }}
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        loading="eager"
        fetchPriority="high"
      />

      {/* Hero Text */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mt-12 md:mt-4">
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.div
             animate={{ y: [0, -8, 0] }}
             transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
             className="flex flex-col items-center"
          >
            <h2 className="text-[#d8b068] font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-6 drop-shadow-md display-font">
              The Architect of India's Passion Economy
            </h2>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-8 leading-[1.1] display-font filter drop-shadow-2xl">
              Figuring Out Life, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d8b068] via-white to-gray-300">
                Together.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed mb-4">
              Hover over the community to discover their stories. A tribute to figuring out life, together.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* The Hover Carousel Group */}
      <div className="relative z-20 w-full max-w-7xl mx-auto my-4 mix-blend-screen">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.4, duration: 1.2 }}
        >
          <motion.div
             animate={{ y: [0, -6, 0] }}
             transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          >
            <HoverCarousel />
          </motion.div>
        </motion.div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full px-6">
        <motion.div
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           transition={{ delay: 0.8, duration: 1.2 }}
        >
          <motion.div
            animate={{ y: [0, -4, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            className="p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm max-w-4xl mx-auto"
          >
            <p className="text-base md:text-lg italic text-gray-300 display-font">
              "The next 10 years is going to be The Golden Age for India filled with infinite once-in-a-lifetime opportunities... I believe in 'figuring out' how to grow every day so that we can live and love better."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
