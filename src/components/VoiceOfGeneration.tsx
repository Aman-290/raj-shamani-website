import { motion } from 'motion/react';
import { Mic, Globe } from 'lucide-react';

export default function VoiceOfGeneration() {
  return (
    <section className="py-24 px-6 relative bg-[#1a1a1a]/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Voice of a <br/>
              <span className="text-[#bb9753]">Generation</span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">Conquering the stage and overcoming deepest insecurities.</p>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#382213] flex items-center justify-center">
                  <Mic className="w-6 h-6 text-[#bb9753]" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Beating Glossophobia</h4>
                  <p className="text-gray-400">Terrified of public speaking and struggling with English, he subjected himself to extreme exposure therapy—recording himself over 300 times before delivering a speech comfortably.</p>
                </div>
              </div>
              
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#072754] flex items-center justify-center">
                  <Globe className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Global Recognition</h4>
                  <p className="text-gray-400">Represented India at the UN Youth Assembly. Delivered 200+ speeches in 26 countries, 4-time TEDx speaker, and lectured at LSE and London Business School.</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square rounded-full border border-white/10 flex items-center justify-center overflow-hidden"
          >
            {/* Abstract representation of global stage */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#bb9753_0%,transparent_70%)] opacity-20" />
            <div className="w-3/4 h-3/4 rounded-full border border-dashed border-white/20 animate-[spin_60s_linear_infinite]" />
            <div className="absolute w-1/2 h-1/2 rounded-full border border-white/10 animate-[spin_40s_linear_infinite_reverse]" />
            <Mic className="absolute w-24 h-24 text-white/80" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
