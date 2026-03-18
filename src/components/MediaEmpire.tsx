import { motion } from 'motion/react';
import { Headphones, Users, Heart } from 'lucide-react';

export default function MediaEmpire() {
  const stats = [
    { label: "Yearly Views", value: "400M+" },
    { label: "Podcast Rank", value: "#1" },
    { label: "Multi-Platform Subs", value: "15M+" }
  ];

  const guests = [
    { name: "Emmanuel Macron", desc: "Geopolitics & Sovereignty" },
    { name: "Bill Gates", desc: "Corporate Titans & Risk" },
    { name: "Michael Phelps", desc: "Elite Performance" },
    { name: "Vijay Mallya", desc: "Viral 4.3-hour interrogation" }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-6"
          >
            Figuring Out <br/>
            <span className="text-[#bb9753]">The Media Empire</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-[#1a1a1a] border border-white/5 text-center"
            >
              <div className="text-4xl md:text-5xl font-black text-[#bb9753] mb-2">{stat.value}</div>
              <div className="text-sm uppercase tracking-widest text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#072754]/40 to-transparent border border-white/10">
              <Headphones className="w-10 h-10 text-blue-400 mb-6" />
              <h3 className="text-2xl font-bold mb-4">The Podcasting Titan</h3>
              <p className="text-gray-400">Launched in 2021, born from curiosity. After earlier failed attempts, he persisted without obsessing over numbers. Today, it is India's #1 business podcast on Spotify and YouTube.</p>
            </div>

            <div className="p-8 rounded-3xl bg-gradient-to-br from-[#382213]/40 to-transparent border border-white/10">
              <Heart className="w-10 h-10 text-[#bb9753] mb-6" />
              <h3 className="text-2xl font-bold mb-4">Emotional ROI</h3>
              <p className="text-gray-400">Positioning himself as an inquisitive co-learner rather than an infallible guru. Vulnerability, community purpose, and trust are the most valuable assets a modern creator can possess.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-3xl border border-white/10 bg-white/5"
          >
            <Users className="w-10 h-10 text-white mb-6" />
            <h3 className="text-2xl font-bold mb-6">Conversations with the 1%</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {guests.map((guest, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-black/40 border border-white/5">
                  <div className="font-bold text-lg text-[#bb9753] mb-1">{guest.name}</div>
                  <div className="text-sm text-gray-400">{guest.desc}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
