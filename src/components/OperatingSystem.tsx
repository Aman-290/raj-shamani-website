import { motion } from 'motion/react';
import { BookOpen, Moon, StickyNote, Heart } from 'lucide-react';

export default function OperatingSystem() {
  const systems = [
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Build, Don't Talk",
      desc: '"Admitting you suck" is the crucial first step to growth. Execute daily processes and habit-building over obsessing about end goals.'
    },
    {
      icon: <Moon className="w-6 h-6" />,
      title: "4-3-2-1 Sleep Protocol",
      desc: "4 hrs: No large meals. 3 hrs: No intensive work. 2 hrs: No screens/blue light. 1 hr: Reading before bed."
    },
    {
      icon: <StickyNote className="w-6 h-6" />,
      title: "Vocabulary Sticky Notes",
      desc: "Nightly ritual of reading dictionaries on psychology/neuroscience, picking 2-3 new words, and writing them on sticky notes."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "The Real Raj",
      desc: 'Deep loyalty to family, "illogical emotional lover boy" dedication to his partner, his dog Crypto, and reliance on boxing to manage stress.'
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            The Raj Shamani <br/>
            <span className="text-[#bb9753]">Operating System</span>
          </motion.h2>
          <p className="text-xl text-gray-400">Wisdom & Habits for the modern multi-hyphenate operator.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {systems.map((sys, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors flex gap-6"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-[#bb9753]/20 text-[#bb9753] flex items-center justify-center">
                {sys.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{sys.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{sys.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
