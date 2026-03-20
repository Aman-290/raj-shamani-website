import { motion } from 'motion/react';
import { Users, Briefcase, Palette } from 'lucide-react';

export default function Team() {
  const teamSections = [
    {
      icon: <Users className="w-8 h-8 text-[#d8b068]" />,
      title: "Content & Production Team",
      desc: "Raj has built a robust internal team handling the end-to-end continuous process of content creation. He provides his creators with video editors, scriptwriters, and upload managers who analyze video performance and audience feedback to constantly improve content."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-[#d8b068]" />,
      title: "House of X Leadership",
      desc: "He co-founded House of X with Neeraj Kumawat, who serves as the CTO, to help creators launch their own direct-to-consumer (D2C) brands."
    },
    {
      icon: <Palette className="w-8 h-8 text-[#d8b068]" />,
      title: "Brand & Visual Identity",
      desc: "The visual psychology and branding behind his content and House of X are heavily shaped by Anik Jain (founder of DZ!NR), who acts as a graphic designer and brand architect."
    }
  ];

  return (
    <section className="py-24 px-6 relative bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            The Team <span className="text-[#d8b068]">Behind the Brand</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            While Raj is the face of his brand, he operates with a dedicated team and strategic partners.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamSections.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2 }}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-[#d8b068]/50 transition-colors"
            >
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6">
                  {step.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
