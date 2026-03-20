import { motion } from 'motion/react';
import { MessageSquare, Download } from 'lucide-react';
import { CardCanvas, Card } from './ui/animated-glow-card';
import { XCard } from './ui/x-gradient-card';

export default function CommunityWall() {
  const fans = [
    {
      name: "Priya Das",
      handle: "priya_das",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
      content: ["His vulnerability about glossophobia gave me the courage to start my own YouTube channel."],
      reply: undefined
    },
    {
      name: "Vikram Singh",
      handle: "vikrameth",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      content: ["Jadugar Drop story proves that you don't need funding, just pure hustle and common sense."],
      reply: { 
        authorName: "Rahul M", authorHandle: "rahul_m", timestamp: "1h", content: "Facts. Just execution.", 
        authorImage: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=200&q=80" 
      }
    },
    {
      name: "Sneha K.",
      handle: "snehak_builds",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
      content: ["The 4-3-2-1 sleep protocol completely changed my energy levels. I'm so much more productive now. Thanks @rajshamani"],
      reply: undefined
    }
  ];

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
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#d8b068] text-black font-bold hover:bg-white transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
            Leave a Tribute
          </motion.button>
        </div>

        {/* Glow card hero for top tweet */}
        <div className="mb-16">
          <CardCanvas className="py-12 md:py-24">
            <Card className="w-full max-w-2xl mx-auto">
              <XCard 
                authorName="Amit Kumar R"
                authorHandle="amit_journo"
                authorImage="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&q=80"
                content={[
                  "The Vijay Mallya episode was a masterclass in journalism and interviewing.",
                  "We need more raw, unfiltered conversations like this. The 4.3 hours just flew by. Brilliant work by the entire team."
                ]}
                timestamp="Jan 12, 2025"
                reply={{
                  authorName: "Neha Patel",
                  authorHandle: "neha.p",
                  authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80",
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
