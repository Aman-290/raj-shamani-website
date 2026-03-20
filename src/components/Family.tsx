import { motion } from 'motion/react';
import { Heart } from 'lucide-react';

export default function Family() {
  const familyMembers = [
    {
      title: "Father (Naresh Shamani)",
      desc: "A resilient businessman who migrated from Rajasthan to Indore, initially selling coconuts before launching a dishwasher brand called Jadugar in 1990. In 2013, a severe diabetic attack caused the business to collapse—the catalyst for a 16-year-old Raj to step up.",
      img: "/rajfamily1.jpg"
    },
    {
      title: "Mother",
      desc: "The stabilizing force of the household. Raj often credits her for his resilience and strength during their toughest financial times.",
      img: "/rajfamily2.jpg"
    },
    {
      title: "Brother",
      desc: "He grew up alongside his younger brother, Rahul Shamani, fostering a deep sibling bond.",
      img: "/brother.jpg"
    },
    {
      title: "Sister(s)",
      desc: "Family bonds are incredibly important. He holds his siblings close, noting how much he missed them in a family frame during a pooja and planning special celebrations just for siblings and cousins.",
      img: "/rajsisters.jpg"
    },
    {
      title: "Partner",
      desc: "Highly protective of his private life, Raj confirmed he is off the dating market: 'I have one woman by my side, and she's been with me for a long time.' He prefers to keep his long-term partnership strictly out of the public eye.",
      img: "mysterious"
    },
    {
      title: "Crypto (The Dog)",
      desc: "A beloved dog named Crypto who, according to Raj's bio, 'unlike the real crypto, never disappoints me.'",
      img: "/dog.jpg"
    }
  ];

  return (
    <section className="py-24 px-6 relative bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
              className={`p-6 md:p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-[#d8b068]/30 transition-colors flex flex-col gap-6 ${
                idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              <div className="flex-1 flex flex-col justify-center gap-3">
                <h3 className="text-2xl font-bold text-[#d8b068]">{member.title}</h3>
                <p className="text-gray-300 leading-relaxed text-lg">{member.desc}</p>
              </div>

              {member.img && (
                <div className="w-full md:w-64 h-56 rounded-xl overflow-hidden shadow-lg flex-shrink-0 relative group">
                  {member.img === 'mysterious' ? (
                    <div className="w-full h-full bg-gradient-to-br from-zinc-900 via-black to-zinc-900 border border-white/10 flex flex-col items-center justify-center relative overflow-hidden">
                      {/* Mystical particles / background effect */}
                      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_white_0%,_transparent_50%)] animate-pulse"></div>
                      <span className="text-6xl group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500 drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]">❓</span>
                      <span className="mt-4 text-sm font-bold tracking-widest text-[#d8b068]/80 uppercase">Top Secret</span>
                      <div className="absolute -bottom-4 -right-4 text-6xl opacity-10 blur-[2px] rotate-12">🕵️‍♀️</div>
                    </div>
                  ) : (
                    <>
                      <img 
                        src={member.img} 
                        alt={member.title} 
                        className="w-full h-full object-cover object-center grayscale group-hover:grayscale-0 transition-all duration-700 ease-out group-hover:scale-105"
                      />
                      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
