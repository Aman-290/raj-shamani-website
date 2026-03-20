import { motion } from 'motion/react';
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Timeline() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { clientWidth } = scrollRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth / 1.5 : clientWidth / 1.5;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const events = [
    { year: "1997", desc: "Born on July 29 in Indore, Madhya Pradesh." },
    { year: "2013", desc: "A 16-year-old Raj joins AIESEC. His father suffers a severe diabetic attack. To save the family, Raj borrows ₹10,000, mixes chemicals in buckets on his terrace, and launches Jadugar Drop." },
    { year: "2015", desc: "Merges his startup with his father's business to form Shamani Industries. Travels to Vienna as one of the youngest speakers at the United Nations Youth Assembly." },
    { year: "2021", desc: "Launches the Figuring Out podcast. After early failed attempts at podcasting, he focuses purely on raw conversations, ultimately becoming India’s #1 business podcast." },
    { year: "2022", desc: "Co-founds House of X (a D2C platform for creators) and publishes his bestselling book 'Build, Don't Talk'." },
    { year: "2023", desc: "Featured in the Forbes India 30 Under 30 list and launches the fragrance brand Blanko with pop star King." },
    { year: "2024-2025", desc: "Achieves mega-viral milestones, including a 4.3-hour interview with Vijay Mallya (20M views in 4 days) and a podcast with French President Emmanuel Macron." }
  ];

  return (
    <section className="py-24 px-6 relative bg-[#050505] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-4">
              The <span className="text-[#d8b068]">Journey</span>
            </h2>
            <p className="text-xl text-gray-400">Tracing the milestones from a 16-year-old hustler to a global voice.</p>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <button 
              onClick={() => scroll('left')}
              className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#d8b068]/50 transition-all group"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:text-[#d8b068]" />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#d8b068]/50 transition-all group"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:text-[#d8b068]" />
            </button>
          </motion.div>
        </div>

        {/* Scrollable Container */}
        <div className="relative">
          {/* Continuous horizontal line background */}
          <div className="absolute top-[32px] left-0 right-0 h-[2px] bg-[#d8b068]/20 z-0"></div>

          <div 
            ref={scrollRef}
            className="flex gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-12 pt-4 px-4 -mx-4 scrollbar-none [&::-webkit-scrollbar]:hidden z-10 relative"
            style={{ msOverflowStyle: 'none', scrollbarWidth: 'none' }}
          >
            {events.map((ev, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.1 }}
                className="min-w-[300px] max-w-[300px] md:min-w-[400px] md:max-w-[400px] snap-center relative flex flex-col pt-1"
              >
                {/* Node on the timeline */}
                <div className="w-6 h-6 rounded-full bg-[#050505] border-[3px] border-[#d8b068] flex-shrink-0 mx-auto mb-8 shadow-[0_0_15px_rgba(216,176,104,0.6)] relative z-10" />
                
                {/* Content Card */}
                <div className="bg-gradient-to-br from-white/5 to-transparent p-8 rounded-3xl border border-white/10 hover:border-[#d8b068]/30 transition-colors flex-1 relative flex flex-col">
                  {/* Subtle connection line from node to card */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-[32px] w-[2px] h-[32px] bg-gradient-to-b from-[#d8b068]/40 to-transparent"></div>
                  
                  <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#d8b068] to-[#f3dca2] mb-4 text-center">{ev.year}</h3>
                  <p className="text-gray-300 leading-relaxed text-sm md:text-base flex-1">
                    {ev.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
