import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Download, X } from 'lucide-react';
import { CardCanvas, Card } from './ui/animated-glow-card';
import { XCard } from './ui/x-gradient-card';
import { useState, useEffect } from 'react';

// Generates an avatar dynamically based on their name using Dicebear's notionists style.
const getAvatar = (seed: string) => `https://api.dicebear.com/7.x/notionists/svg?seed=${encodeURIComponent(seed)}&backgroundColor=d8b068`;

const initialFans = [
  {
    name: "Priya Das",
    handle: "priya_das",
    img: getAvatar("Priya Das"),
    content: ["His vulnerability about glossophobia gave me the courage to start my own YouTube channel."],
    reply: undefined
  },
  {
    name: "Vikram Singh",
    handle: "vikrameth",
    img: getAvatar("Vikram Singh"),
    content: ["Jadugar Drop story proves that you don't need funding, just pure hustle and common sense."],
    reply: { 
      authorName: "Rahul M", authorHandle: "rahul_m", timestamp: "1h", content: "Facts. Just execution.", 
      authorImage: getAvatar("Rahul M") 
    }
  },
  {
    name: "Sneha K.",
    handle: "snehak_builds",
    img: getAvatar("Sneha K"),
    content: ["The 4-3-2-1 sleep protocol completely changed my energy levels. I'm so much more productive now. Thanks @rajshamani"],
    reply: undefined
  }
];

export default function CommunityWall() {
  const [fans, setFans] = useState(initialFans);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: '', handle: '', message: '' });

  // Try to load any previously stored tributes from our API if hitting the live site
  useEffect(() => {
    fetch('/api/tributes')
      .then(res => res.json())
      .then(data => {
        if (data && data.tributes) {
          setFans([...data.tributes, ...initialFans]);
        }
      })
      .catch((e) => console.log('Info: /api/tributes not found yet. Running local only state.', e));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.message) return;

    setIsSubmitting(true);
    const newTribute = {
      name: formData.name,
      handle: formData.handle || formData.name.toLowerCase().replace(/\s+/g, '_'),
      img: getAvatar(formData.name),
      content: [formData.message],
      reply: undefined
    };

    // Optimistically add to UI
    setFans([newTribute, ...fans]);

    // Send it to Vercel Database API
    try {
      await fetch('/api/tributes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTribute),
      });
    } catch (err) {
      console.error('API submission failed. Using local state until Vercel KV is configured.');
    } finally {
      setIsSubmitting(false);
      setIsModalOpen(false);
      setFormData({ name: '', handle: '', message: '' });
    }
  };

  return (
    <section className="py-24 px-6 relative bg-[#050505] overflow-hidden">
      {/* Background with texture/grain */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1542451313056-b7c8e626645f?auto=format&fit=crop&q=80" 
          alt="texture" 
          className="w-full h-full object-cover grayscale mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505]"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#d8b068]">
              The "Figuring Out" <br/>
              <span className="text-white">Community Wall</span>
            </h2>
            <p className="text-xl text-gray-400">A digital tribute board from the fans.</p>
          </motion.div>

          <motion.button
            onClick={() => setIsModalOpen(true)}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#d8b068] text-black font-bold hover:bg-white transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
            Leave a Tribute
          </motion.button>
        </div>

        {/* Tribute Modal Overlay */}
        <AnimatePresence>
          {isModalOpen && (
            <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setIsModalOpen(false)}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />
              
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="relative w-full max-w-lg bg-[#111] border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl"
              >
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-2xl font-bold text-white">Share Your Thoughts</h3>
                  <button 
                    onClick={() => setIsModalOpen(false)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-400" />
                  </button>
                </div>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Your Name</label>
                      <input 
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d8b068] transition-colors"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-400 mb-1">Handle (Optional)</label>
                      <input 
                        type="text" 
                        value={formData.handle}
                        onChange={(e) => setFormData({...formData, handle: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d8b068] transition-colors"
                        placeholder="@johndoe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-1">Your Tribute</label>
                    <textarea 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full h-32 bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#d8b068] transition-colors resize-none"
                      placeholder="How has Raj's journey inspired you?"
                    ></textarea>
                  </div>
                  
                  <button 
                    disabled={isSubmitting}
                    type="submit" 
                    className="w-full bg-[#d8b068] text-black font-bold text-lg py-4 rounded-xl hover:bg-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed mt-2"
                  >
                    {isSubmitting ? 'Posting...' : 'Post Tribute'}
                  </button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Glow card hero for top tweet */}
        <div className="mb-16">
          <CardCanvas className="py-12 md:py-24">
            <Card className="w-full max-w-2xl mx-auto">
              <XCard 
                authorName="Amit Kumar R"
                authorHandle="amit_journo"
                authorImage={getAvatar("Amit Kumar R")}
                content={[
                  "The Vijay Mallya episode was a masterclass in journalism and interviewing.",
                  "We need more raw, unfiltered conversations like this. The 4.3 hours just flew by. Brilliant work by the entire team."
                ]}
                timestamp="Jan 12, 2025"
                reply={{
                  authorName: "Neha Patel",
                  authorHandle: "neha.p",
                  authorImage: getAvatar("Neha Patel"),
                  content: "Absolutely! Watched the whole thing in one sitting.",
                  timestamp: "Jan 12, 2025"
                }}
              />
            </Card>
          </CardCanvas>
        </div>

        {/* Grid for other tweets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {fans.map((fan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
            >
              <XCard 
                authorName={fan.name}
                authorHandle={fan.handle}
                authorImage={fan.img}
                content={fan.content}
                timestamp="Recent"
                reply={fan.reply}
              />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-[2rem] bg-[#111] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8 shadow-[0_0_50px_rgba(216,176,104,0.1)] relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#d8b068]/5 blur-[100px] rounded-full pointer-events-none -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="relative z-10">
            <h3 className="text-2xl font-bold mb-2 text-[#d8b068]">Downloadable Resources</h3>
            <p className="text-gray-400 max-w-xl">Free, fan-made Notion templates for habit tracking based on Raj's MOVERS framework (Meditate, Oxygenate, Visualise, Exercise, Read, Scribe) and his 4-3-2-1 sleep protocol.</p>
          </div>
          <button className="relative z-10 flex-shrink-0 flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-[#d8b068] transition-colors shadow-lg shadow-white/10">
            <Download className="w-5 h-5" />
            Get Templates
          </button>
        </motion.div>
      </div>
    </section>
  );
}
