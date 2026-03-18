import { motion } from 'motion/react';
import InteractiveGroup from './InteractiveGroup';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0f0f0f]/50 to-[#0f0f0f] z-0" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="text-[#bb9753] font-semibold tracking-widest uppercase text-sm md:text-base mb-4">
            The Architect of India's Passion Economy
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6 leading-tight">
            Figuring Out Life, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#bb9753] to-white">
              Together.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto font-light leading-relaxed">
            Hover over the people to interact. A tribute to the community figuring out life, together.
          </p>
        </motion.div>
      </div>

      {/* The 17-Person Interactive Group */}
      <div className="relative z-20 w-full max-w-7xl mx-auto my-4 mix-blend-screen">
        <motion.div
           initial={{ opacity: 0, scale: 0.95 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ delay: 0.4, duration: 1 }}
        >
          <InteractiveGroup />
        </motion.div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto w-full px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="p-6 md:p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm max-w-4xl mx-auto"
        >
          <p className="text-base md:text-lg italic text-gray-300">
            "The next 10 years is going to be The Golden Age for India filled with infinite once-in-a-lifetime opportunities... I believe in 'figuring out' how to grow every day so that we can live and love better."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
