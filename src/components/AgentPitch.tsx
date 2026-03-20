import { motion } from 'motion/react';
import { Bot, Zap, Target } from 'lucide-react';

export default function AgentPitch() {
  return (
    <section className="py-24 px-6 relative bg-gradient-to-t from-[#050505] to-[#111]">
      <div className="max-w-5xl mx-auto rounded-3xl p-[1px] bg-gradient-to-b from-[#d8b068] to-transparent">
        <div className="bg-[#0a0a0a] rounded-[23px] p-8 md:p-16 relative overflow-hidden">
          {/* Subtle glow effect */}
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#d8b068]/20 blur-[100px] rounded-full pointer-events-none"></div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="relative z-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <Bot className="w-8 h-8 text-[#d8b068]" />
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Elevating the 1% – Meet Your Custom AI Research Agent
              </h2>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-8 backdrop-blur-sm">
              <p className="text-[#d8b068] font-semibold mb-2">Message to Raj:</p>
              <p className="text-lg md:text-2xl text-gray-200 italic leading-relaxed">
                "Raj, you've spent years decoding the minds of the top 1%—from Bill Gates to Michael Phelps. But what if you had a brilliant co-pilot prepping you for these intellectual wars? As a tribute to your journey, our team has built a Custom AI Research Agent specifically designed for Figuring Out."
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <Zap className="w-10 h-10 text-white shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">What it does:</h3>
                  <p className="text-gray-400">It scrapes the internet for unnoticed details about your upcoming guests, analyzes their past interviews to find questions no one has ever asked them, and builds a comprehensive data-dossier hours before you hit record.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Target className="w-10 h-10 text-white shrink-0" />
                <div>
                  <h3 className="text-xl font-bold mb-2">The Value:</h3>
                  <p className="text-gray-400">You focus on the human connection and the 'Emotional ROI'; the agent handles the heavy lifting of data analysis, guest profiling, and identifying viral content hooks for your video editors.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <button className="px-8 py-4 bg-[#d8b068] text-black font-bold uppercase tracking-wider rounded-full hover:bg-white transition-colors duration-300">
                Deploy The Agent
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
