import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export default function Family() {
  const familyMembers = [
    {
      title: "Father (Naresh Shamani)",
      desc: "A resilient businessman who migrated from Rajasthan to Indore, initially selling coconuts before launching a dishwasher brand called Jadugar in 1990. In 2013, a severe diabetic attack caused the business to collapse—the catalyst for a 16-year-old Raj to step up."
    },
    {
      title: "Mother",
      desc: "The stabilizing force of the household. Raj often credits her for his resilience and strength during their toughest financial times."
    },
    {
      title: "Brother",
      desc: "He grew up alongside his younger brother, Rahul Shamani, fostering a deep sibling bond."
    },
    {
      title: "Sister(s)",
      desc: "Family bonds are incredibly important. He holds his siblings close, noting how much he missed them in a family frame during a pooja and planning special celebrations just for siblings and cousins."
    },
    {
      title: "Partner",
      desc: "Highly protective of his private life, Raj confirmed he is off the dating market: 'I have one woman by my side, and she's been with me for a long time.' He prefers to keep his long-term partnership strictly out of the public eye."
    },
    {
      title: "Crypto (The Dog)",
      desc: "A beloved dog named Crypto who, according to Raj's bio, 'unlike the real crypto, never disappoints me.'"
    }
  ];

  return (
    <section className="py-24 px-6 relative bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4"><Heart className="w-12 h-12 text-[#d8b068]" /></div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            The Roots of the Hustle: <span className="text-[#d8b068]">Family</span>
          </h2>
          <p className="text-xl text-gray-400">
            Behind every empire is the foundation that holds it together.
          </p>
        </motion.div>

        <div className="space-y-6">
          {familyMembers.map((member, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#d8b068]/30 transition-colors flex flex-col md:flex-row gap-4"
            >
              <h3 className="text-xl font-bold min-w-[200px] text-[#d8b068]">{member.title}</h3>
              <p className="text-gray-300 leading-relaxed flex-1">{member.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
