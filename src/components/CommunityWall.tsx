import { motion } from 'motion/react';
import { MessageSquare, Download } from 'lucide-react';

export default function CommunityWall() {
  const messages = [
    { text: "Figuring Out helped me quit my toxic job and start my own agency. Thank you Raj!", author: "Rahul M." },
    { text: "The 4-3-2-1 sleep protocol completely changed my energy levels. I'm so much more productive now.", author: "Sneha K." },
    { text: "Jadugar Drop story proves that you don't need funding, just pure hustle and common sense.", author: "Vikram S." },
    { text: "His vulnerability about glossophobia gave me the courage to start my own YouTube channel.", author: "Priya D." },
    { text: "The Vijay Mallya episode was a masterclass in journalism and interviewing.", author: "Amit R." },
    { text: "Build, Don't Talk is my bible. I read a chapter every morning before starting work.", author: "Neha P." }
  ];

  return (
    <section className="py-24 px-6 relative bg-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              The "Figuring Out" <br/>
              <span className="text-[#bb9753]">Community Wall</span>
            </h2>
            <p className="text-xl text-gray-400">A digital tribute board from the fans.</p>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#bb9753] text-black font-bold hover:bg-[#a08040] transition-colors"
          >
            <MessageSquare className="w-5 h-5" />
            Leave a Tribute
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {messages.map((msg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-2xl bg-black/40 border border-white/5"
            >
              <p className="text-gray-300 italic mb-4">"{msg.text}"</p>
              <div className="text-sm font-bold text-[#bb9753]">- {msg.author}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-[2rem] bg-gradient-to-r from-[#072754]/40 to-[#382213]/40 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div>
            <h3 className="text-2xl font-bold mb-2">Downloadable Resources</h3>
            <p className="text-gray-400 max-w-xl">Free, fan-made Notion templates for habit tracking based on Raj's MOVERS framework (Meditate, Oxygenate, Visualise, Exercise, Read, Scribe) and his 4-3-2-1 sleep protocol.</p>
          </div>
          <button className="flex-shrink-0 flex items-center gap-2 px-8 py-4 rounded-full bg-white text-black font-bold hover:bg-gray-200 transition-colors">
            <Download className="w-5 h-5" />
            Get Templates
          </button>
        </motion.div>
      </div>
    </section>
  );
}
