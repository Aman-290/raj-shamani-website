import { motion } from 'motion/react';
import { Box, Rocket, Coins } from 'lucide-react';

export default function Builder() {
  return (
    <section className="py-24 px-6 relative bg-[#1a1a1a]/80">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            The Builder <br/>
            <span className="text-[#bb9753]">House of X & Beyond</span>
          </h2>
          <p className="text-xl text-gray-400">Highlighting that Raj doesn't just talk; he builds.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[2rem] bg-gradient-to-b from-white/5 to-transparent border border-white/10 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Box className="w-32 h-32" />
            </div>
            <div className="relative z-10">
              <Rocket className="w-12 h-12 text-[#bb9753] mb-6" />
              <h3 className="text-3xl font-bold mb-4">House of X</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Co-founded with Neeraj Kumawat, this tech platform provides end-to-end infrastructure for creators to launch their own Direct-to-Consumer (D2C) brands.
              </p>
              <div className="p-4 rounded-xl bg-black/50 border border-white/5">
                <strong className="text-white block mb-1">Success Story: Blanko</strong>
                <span className="text-sm text-gray-400">A fragrance brand launched with pop star King, utilizing proprietary "Time-lock technology" suited for Indian climates.</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-10 rounded-[2rem] bg-gradient-to-b from-[#bb9753]/10 to-transparent border border-[#bb9753]/20 relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <Coins className="w-32 h-32 text-[#bb9753]" />
            </div>
            <div className="relative z-10">
              <Coins className="w-12 h-12 text-[#bb9753] mb-6" />
              <h3 className="text-3xl font-bold mb-4">Strategic Angel Investor</h3>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Leveraging his ₹90–115 crore net worth to actively build the Indian startup ecosystem. Identifying as a builder rather than a passive financier.
              </p>
              <div className="flex flex-wrap gap-3">
                {['Unikon.ai', 'GrowthSchool', 'Classplus', 'Wint Wealth', 'Deciml'].map((brand, i) => (
                  <span key={i} className="px-4 py-2 rounded-full bg-black/50 border border-white/10 text-sm font-medium">
                    {brand}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
