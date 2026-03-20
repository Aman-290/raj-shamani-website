import { useScroll, motion, AnimatePresence } from 'motion/react';
import { useRef, useState, useEffect } from 'react';
import Hero from './components/Hero';
import OriginStory from './components/OriginStory';
import Builder from './components/Builder';
import OperatingSystem from './components/OperatingSystem';
import CommunityWall from './components/CommunityWall';
import Footer from './components/Footer';
import Scene from './components/Scene';
import Team from './components/Team';
import Stats from './components/Stats';
import Ambassador from './components/Ambassador';
import Family from './components/Family';
import Timeline from './components/Timeline';
import AgentPitch from './components/AgentPitch';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Critical hero images to preload
    const imagesToLoad = [
      '/mic.png',
      '/raj-shamni.png',
      '/non-raised.png',
      '/raised-hand.png'
    ];
    let loadedCount = 0;

    imagesToLoad.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imagesToLoad.length) {
          setTimeout(() => setLoading(false), 800); // 800ms minimum display for premium feel
        }
      };
      img.onerror = () => {
        loadedCount++;
        if (loadedCount === imagesToLoad.length) setLoading(false);
      };
    });
  }, []);

  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] text-[#d8b068]"
          >
            <motion.div
              animate={{ scale: [1, 1.05, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-xl md:text-3xl font-black display-font tracking-[0.4em] uppercase"
            >
              Figuring Out Life
            </motion.div>
            
            {/* Elegant minimal progress bar */}
            <div className="mt-8 relative w-48 h-[2px] bg-white/10 overflow-hidden">
              <motion.div 
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 2.5, ease: "easeOut" }}
                className="absolute left-0 top-0 h-full bg-[#d8b068]"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div ref={containerRef} className="relative w-full min-h-screen bg-[#050505] text-white selection:bg-[#d8b068] selection:text-black">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Scene scrollYProgress={scrollYProgress} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <Stats />
        <Timeline />
        <OriginStory />
        <Family />
        <Team />
        <Ambassador />
        <Builder />
        <OperatingSystem />
        <AgentPitch />
        <CommunityWall />
        <Footer />
      </div>
    </div>
    </>
  );
}
