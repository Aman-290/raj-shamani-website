import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, Zap, Target, Search, Loader2, FileText, ChevronDown } from 'lucide-react';

export default function AgentPitch() {
  const [isDeployed, setIsDeployed] = useState(false);
  const query = "Research Bill Gates' unasked questions and overlooked ventures.";
  
  const [status, setStatus] = useState<'idle' | 'running' | 'completed' | 'error'>('idle');
  const [output, setOutput] = useState("");
  const [thoughts, setThoughts] = useState<string[]>([]);
  const terminalRef = useRef<HTMLDivElement>(null);

  // Auto scroll terminal specifically, without hijacking the entire window scroll
  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [output, thoughts]);

  const handleRunAgent = async () => {
    if (status === 'running') return;
    
    setIsDeployed(true);
    setStatus('running');
    setOutput("");
    setThoughts([]);
    
    const mockThoughts = [
      "Initializing Deep Research Protocols across 15 search nodes...",
      "Crawling public philanthropic databases for overlooked patterns...",
      "Cross-referencing historical archives of Microsoft pre-1985...",
      "Analyzing TerraPower's impact ratios compared to global nuclear standards...",
      "Synthesizing mapping of 'Unasked Questions' from previous interviews...",
      "Filtering out saturated topics: no questions about Foundation or Apple rivalry...",
      "Generating unique, contrarian angles for Shorts/Reels impact...",
      "Formatting complex data into executable Producer Dossier..."
    ];

    let currentThoughtIndex = 0;
    
    // Simulate 10 seconds of processing (8 thoughts over ~10 seconds)
    const thoughtInterval = setInterval(() => {
      if (currentThoughtIndex < mockThoughts.length) {
        setThoughts(prev => [...prev, mockThoughts[currentThoughtIndex]]);
        currentThoughtIndex++;
      } else {
        clearInterval(thoughtInterval);
        
        // Output Final Result
        setOutput(`1. Executive Summary & Guest Profile
Name: Bill Gates
Focus Shift: Transitioned from tech monopoly builder to nuclear innovator, pandemic predictor, and climate tech investor. 
Current Vibe: Pragmatic, strictly data-driven, occasionally frustrated by global political inaction.

2. Hidden Gems (Overlooked Details)
- The TerraPower Struggle: People focus on his software legacy, but TerraPower (his nuclear reactor design company) took over a decade of brutal geopolitical battles, specifically with China, just to secure building rights. He personally flew to secure these deals before geopolitical trade wars tanked them.
- Terraforming Agriculture: He is currently the largest private farmland owner in the United States, utilizing advanced AI mapping to optimize crop yield resilient to climate change. This isn't just an investment; it's a quiet beta test for global food security.

3. Unasked Questions (The "Never Asked" Angles)
- "Bill, everyone asks you about succeeding Steve Jobs or the early days of Microsoft. But what was the specific day you realized software was 'done' for you, and physical infrastructure (nuclear, agriculture, sanitation) was the only game left?"
- "You're the largest private farmland owner in America. If a global supply chain collapse hits tomorrow, what exactly is the blueprint for the land you hold?"
- "When dealing with world leaders on climate change, what is the most scientifically sound argument that they completely ignore because of sheer political inconvenience?"

4. Hook & Viral Angles (For Shorts/Reels)
- BIG HOOK 1: "Bill Gates owns more farmland than anyone in America. Here’s his secret reason why..." (Cut to his answer on supply chain resilience).
- BIG HOOK 2: "The day Bill Gates realized software was dead to him." (Focus on his pivot to physical world impact).
- BIG HOOK 3: "Are politicians ignoring the real math on climate change? Bill Gates answers."`);
        
        setStatus('completed');
      }
    }, 1200); // 1.2s per thought, 8 thoughts = ~9.6s total to keep it around 10s
  };

  return (
    <section className="py-24 px-6 relative bg-gradient-to-t from-[#050505] to-[#111] overflow-hidden">
      <div className="max-w-5xl mx-auto rounded-3xl p-[1px] bg-gradient-to-b from-[#d8b068] to-transparent relative z-10 transition-all duration-700">
        <div className="bg-[#0a0a0a] rounded-[23px] p-8 md:p-16 relative overflow-hidden">
          {/* Subtle glow effect */}
          <div className="absolute top-[-20%] right-[-10%] w-[50%] h-[50%] bg-[#d8b068]/20 blur-[100px] rounded-full pointer-events-none"></div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative z-10"
          >
            <div className="flex items-center gap-3 mb-6">
              <Bot className="w-8 h-8 text-[#d8b068]" />
              <h2 className="text-3xl md:text-5xl font-bold text-white">
                Elevating the 1% – Meet Your Custom Research Agent
              </h2>
            </div>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-8 backdrop-blur-sm shadow-xl">
              <p className="text-[#d8b068] font-semibold mb-2 flex items-center gap-2">
                <Target className="w-4 h-4" /> Message to Raj:
              </p>
              <p className="text-lg md:text-2xl text-gray-200 italic leading-relaxed">
                "Raj, you've spent years decoding the minds of the top 1%. But what if you had a brilliant co-pilot prepping you for these intellectual wars? Powered by Deep Research, this agent builds your ultimate guest dossiers completely autonomously."
              </p>
            </div>
            
            <AnimatePresence>
              {!isDeployed ? (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }} 
                  animate={{ opacity: 1, height: 'auto' }} 
                  exit={{ opacity: 0, height: 0 }} 
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12"
                >
                  <div className="flex gap-4">
                    <Zap className="w-10 h-10 text-white shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">Deep Context Architecture</h3>
                      <p className="text-gray-400">It uses real-time iterative searching, reading, and reasoning to analyze massive landscapes of web data beyond standard API boundaries, forming correlations spanning hours.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Search className="w-10 h-10 text-white shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white">Unasked Questions Module</h3>
                      <p className="text-gray-400">It maps out every interview a guest has ever done, pinpoints the saturated topics, and engineers unique lines of questioning to secure viral moments for Shorts/Reels.</p>
                    </div>
                  </div>
                </motion.div>
              ) : null}
            </AnimatePresence>
            
            {/* Deploy Action Area / Active Terminal */}
            <motion.div layout className="mt-8 transition-all">
              {!isDeployed ? (
                 <div className="flex flex-col md:flex-row items-center gap-4 w-full">
                    {/* Fixed uneditable input looking like a real one */}
                    <div className="flex-1 w-full bg-black/50 border border-white/20 rounded-xl px-6 py-4 text-white overflow-hidden shadow-inner flex items-center">
                      <span className="truncate opacity-80 cursor-default select-none">{query}</span>
                    </div>
                    <button 
                      onClick={handleRunAgent}
                      className="px-8 py-4 bg-[#d8b068] text-black font-bold uppercase tracking-wider rounded-xl hover:bg-white transition-colors duration-300 whitespace-nowrap w-full md:w-auto flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(216,176,104,0.3)]"
                    >
                      <Bot className="w-5 h-5" /> Deploy Agent
                    </button>
                 </div>
              ) : (
                <div className="bg-[#050505] border border-white/10 rounded-2xl overflow-hidden mt-4 shadow-2xl flex flex-col h-[600px] border-[#d8b068]/30">
                  
                  {/* Terminal Header */}
                  <div className="bg-black/90 border-b border-white/5 py-3 px-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                      </div>
                      <span className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-2">
                        Deep Research Agent [ID: AGT-049]
                      </span>
                    </div>
                    {status === 'running' && (
                      <div className="flex items-center gap-2">
                        <Loader2 className="w-4 h-4 text-[#d8b068] animate-spin" />
                        <span className="text-xs text-[#d8b068] font-mono animate-pulse">Running Background Analysis...</span>
                      </div>
                    )}
                    {status === 'completed' && (
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_#22c55e]"></div>
                        <span className="text-xs text-green-500 font-mono">Completed</span>
                      </div>
                    )}
                  </div>

                  {/* Terminal Body */}
                  <div ref={terminalRef} className="p-6 flex-1 overflow-y-auto custom-scrollbar font-mono text-sm leading-relaxed whitespace-pre-wrap flex flex-col gap-6 relative scroll-smooth">
                    
                    {/* Prompt Request */}
                    <div className="text-gray-400">
                      <span className="text-green-400">raj-admin@figuring-out:~$</span> deploy --agent "Deep Research" --target "{query}"
                    </div>

                    {/* Agent Thoughts Stream */}
                    {thoughts.map((t, idx) => (
                      <motion.div 
                        initial={{ opacity: 0, x: -10 }} 
                        animate={{ opacity: 1, x: 0 }} 
                        key={idx} 
                        className="bg-[#111] p-4 rounded-lg border border-[#d8b068]/20 text-[#d8b068]/80 text-xs shadow-inner"
                      >
                        <div className="flex items-center gap-2 mb-2 opacity-60">
                          <Zap className="w-3 h-3 animate-pulse" />
                          <span className="uppercase tracking-widest font-bold">Thought Process Node_{idx + 1}</span>
                        </div>
                        {t}
                      </motion.div>
                    ))}
                    
                    {/* Agent Real Output */}
                    {output && (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-zinc-900 p-6 border border-green-500/30 rounded-xl text-gray-100 mt-2 shadow-[0_0_20px_rgba(34,197,94,0.1)]"
                      >
                        <div className="flex items-center gap-2 mb-6 opacity-80 border-b border-green-500/20 pb-3">
                          <FileText className="w-5 h-5 text-green-400" />
                          <span className="uppercase tracking-widest font-bold text-green-400">Finalized Producer Dossier</span>
                        </div>
                        <div className="text-sm md:text-base">{output}</div>
                      </motion.div>
                    )}
                    <div className="h-4 w-full" />
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
