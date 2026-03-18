import { motion } from 'motion/react';
import { Droplet, TrendingUp, Users } from 'lucide-react';

export default function OriginStory() {
  const steps = [
    {
      icon: <TrendingUp className="w-8 h-8 text-[#bb9753]" />,
      title: "The Crucible of Crisis",
      desc: "Born in Indore, a self-described average student. In 2013, at 16, his father suffered a severe diabetic attack, causing their chemical trading business to collapse."
    },
    {
      icon: <Droplet className="w-8 h-8 text-[#072754]" />,
      title: "The Bucket Entrepreneur",
      desc: "Facing mounting medical bills, Raj borrowed ₹10,000. Without formal training, he learned soap chemistry from YouTube and began mixing chemicals in two plastic buckets."
    },
    {
      icon: <Users className="w-8 h-8 text-[#382213]" />,
      title: "Mastering the Hustle",
      desc: "Created 'Jadugar Drop' dishwashing liquid. Priced at ₹45 (vs competitors' ₹110). Empowered local housewives as 'Auntypreneurs' with 25% commission, scaling Shamani Industries to ₹200 crore turnover."
    }
  ];

  return (
    <section className="py-24 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            From ₹10,000 to <br/>
            <span className="text-[#bb9753]">₹200 Crores</span>
          </h2>
          <p className="text-xl text-gray-400">You don't need a silver spoon to win.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.2 }}
              className="group relative p-8 rounded-3xl bg-gradient-to-b from-white/5 to-transparent border border-white/10 hover:border-[#bb9753]/50 transition-colors"
            >
              <div className="absolute inset-0 bg-gradient-to-b from-[#bb9753]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
              <div className="relative z-10">
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
