import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Bot, Zap, Target, Search, Loader2, FileText, ChevronDown } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';

export default function AgentPitch() {
  const [isDeployed, setIsDeployed] = useState(false);
  const [query, setQuery] = useState("Research Bill Gates' unasked questions and overlooked ventures.");
  
  const [status, setStatus] = useState<'idle' | 'running' | 'completed' | 'error'>('idle');
  const [output, setOutput] = useState("");
  const [thoughts, setThoughts] = useState<string[]>([]);
  const [interactionId, setInteractionId] = useState<string | null>(null);

  const bottomRef = useRef<HTMLDivElement>(null);

  // Auto scroll
  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [output, thoughts]);

  const handleRunAgent = async () => {
    if (!query.trim() || status === 'running') return;
    
    setIsDeployed(true);
    setStatus('running');
    setOutput("");
    setThoughts([]);
    
    try {
      const apiKey = (import.meta as any).env.VITE_GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error("Missing VITE_GEMINI_API_KEY in environment variables.");
      }
      
      const client = new GoogleGenAI({ apiKey });
      
      const prompt = `You are Raj Shamani's custom AI Research Agent for the Figuring Out podcast. 
Task: Conduct deep research on the following request: "${query}"
Format the output as a detailed podcast preparation dossier with the following structure:
1. Executive Summary & Guest Profile
2. Hidden Gems (Unnoticed details, untold stories)
3. Unasked Questions (Questions nobody has ever asked them)
4. Hook & Viral Angles (Ideas for YouTube Shorts/Reels hooks)
Do not hallucinate wait times; just provide the finalized output strictly containing exactly what is requested.`;

      // 1. Start the task with streaming
      const stream = await client.interactions.create({
          input: prompt,
          // Use the correct preview agent identifier
          agent: 'deep-research-pro-preview-12-2025',
          background: true,
          stream: true,
          agent_config: {
              type: 'deep-research',
              thinking_summaries: 'auto'
          }
      });

      let currentOutput = "";
      
      for await (const chunk of stream as any) {
        if (chunk.event_type === 'interaction.start') {
            setInteractionId(chunk.interaction.id);
        }
    
        if (chunk.event_type === 'content.delta') {
            if (chunk.delta.type === 'text') {
                currentOutput += chunk.delta.text;
                setOutput(currentOutput);
            } else if (chunk.delta.type === 'thought_summary') {
                setThoughts(prev => [...prev, chunk.delta.content.text]);
            }
        } else if (chunk.event_type === 'interaction.complete') {
            setStatus('completed');
        }
      }
      setStatus('completed');

    } catch (e: any) {
      console.error(e);
      setThoughts(prev => [...prev, "Fatal error executing Deep Research task."]);
      setOutput(`Error: ${e.message}\nMake sure your API key format and quotas are correct.`);
      setStatus('error');
    }
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
                "Raj, you've spent years decoding the minds of the top 1%. But what if you had a brilliant co-pilot prepping you for these intellectual wars? Powered by Gemini Deep Research, this agent builds your ultimate guest dossiers completely autonomously."
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
                    <input 
                      type="text" 
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="E.g., Research Bill Gates' unspoken philosophies..."
                      className="flex-1 w-full bg-black/50 border border-white/20 rounded-xl px-6 py-4 text-white focus:outline-none focus:border-[#d8b068] transition-colors"
                    />
                    <button 
                      onClick={handleRunAgent}
                      className="px-8 py-4 bg-[#d8b068] text-black font-bold uppercase tracking-wider rounded-xl hover:bg-white transition-colors duration-300 whitespace-nowrap w-full md:w-auto flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(216,176,104,0.3)]"
                    >
                      <Bot className="w-5 h-5" /> Deploy Agent
                    </button>
                 </div>
              ) : (
                <div className="bg-[#050505] border border-white/10 rounded-2xl overflow-hidden mt-4 shadow-2xl flex flex-col h-[600px]">
                  
                  {/* Terminal Header */}
                  <div className="bg-black/80 border-b border-white/5 py-3 px-6 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                      </div>
                      <span className="text-xs font-mono text-gray-500 uppercase tracking-widest ml-2">
                        Gemini Deep Research Agent
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
                  <div className="p-6 flex-1 overflow-y-auto custom-scrollbar font-mono text-sm leading-relaxed whitespace-pre-wrap flex flex-col gap-6 relative scroll-smooth">
                    
                    {/* Prompt Request */}
                    <div className="text-gray-400">
                      <span className="text-green-400">raj-admin@figuring-out:~$</span> deploy --agent "Deep Research" --target "{query}"
                    </div>

                    {/* Agent Thoughts Stream */}
                    {thoughts.map((t, idx) => (
                      <div key={idx} className="bg-[#111] p-4 rounded-lg border border-white/5 text-[#d8b068]/80 text-xs shadow-inner">
                        <div className="flex items-center gap-2 mb-2 opacity-60">
                          <Zap className="w-3 h-3" />
                          <span className="uppercase tracking-widest font-bold">Thought Process</span>
                        </div>
                        {t}
                      </div>
                    ))}
                    
                    {/* Agent Real Output */}
                    {output && (
                      <div className="bg-white/5 p-5 border border-white/10 rounded-xl text-gray-200 mt-2">
                        <div className="flex items-center gap-2 mb-4 opacity-50 border-b border-white/10 pb-2">
                          <FileText className="w-4 h-4" />
                          <span className="uppercase tracking-widest font-bold text-xs">Generated Dossier</span>
                        </div>
                        {output}
                      </div>
                    )}

                    <div ref={bottomRef} className="h-4 w-full" />
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
