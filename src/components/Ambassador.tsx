import { motion } from 'motion/react';
import { Globe, ShieldCheck, GraduationCap } from 'lucide-react';

export default function Ambassador() {
  const points = [
    {
      icon: <GraduationCap className="w-10 h-10 text-[#d8b068]" />,
      title: "AIESECer Journey",
      desc: "Raj was an active AIESEC team member between 2013 and 2014, serving as a critical foundational step before his rise to fame and building his network."
    },
    {
      icon: <ShieldCheck className="w-10 h-10 text-[#072754]" />,
      title: "ASUS Brand Ambassador",
      desc: "Made history by becoming the first-ever Indian content creator appointed as a brand ambassador for ASUS ExpertBook, bridging youth ambition with productivity."
    },
    {
      icon: <Globe className="w-10 h-10 text-[#1f4a9b]" />,
      title: "UNIDO Representation",
      desc: "Represented India at the United Nations Industrial Development Organization (UNIDO) in Vienna. He was one of the youngest Indians to address the United Nations Youth Assembly."
    }
  ];

  return (
    <section className="py-24 px-6 relative bg-[#050505]">
      <div className="max-w-5xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Global Recognition & <span className="text-[#d8b068]">Ambassadorships</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {points.map((pt, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.15 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-white/5 to-transparent border border-white/10"
            >
              <div className="mb-6">{pt.icon}</div>
              <h3 className="text-2xl font-bold mb-3">{pt.title}</h3>
              <p className="text-gray-400">{pt.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
