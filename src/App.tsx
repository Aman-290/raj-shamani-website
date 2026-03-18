import { useScroll } from 'motion/react';
import { useRef } from 'react';
import Hero from './components/Hero';
import OriginStory from './components/OriginStory';
import VoiceOfGeneration from './components/VoiceOfGeneration';
import MediaEmpire from './components/MediaEmpire';
import Builder from './components/Builder';
import OperatingSystem from './components/OperatingSystem';
import CommunityWall from './components/CommunityWall';
import Footer from './components/Footer';
import Scene from './components/Scene';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <div ref={containerRef} className="relative w-full min-h-screen bg-[#0f0f0f] text-white selection:bg-[#bb9753] selection:text-black">
      {/* 3D Background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Scene scrollYProgress={scrollYProgress} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <OriginStory />
        <VoiceOfGeneration />
        <MediaEmpire />
        <Builder />
        <OperatingSystem />
        <CommunityWall />
        <Footer />
      </div>
    </div>
  );
}
