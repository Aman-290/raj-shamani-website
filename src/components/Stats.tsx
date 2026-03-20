import { motion } from 'motion/react';
import { Youtube, Instagram, Linkedin, Twitter, Music } from 'lucide-react';

export default function Stats() {
  const stats = [
    { platform: "YouTube", followers: "15.8 Million", views: "1.84 Billion", highlights: "Over 8 billion yearly views across primary and ecosystem channels.", icon: <Youtube className="w-6 h-6 text-red-500" /> },
    { platform: "Instagram", followers: "2.8 Million", views: "Millions per Reel", highlights: "Ecosystem of hundreds of pages pushing 200+ daily posts.", icon: <Instagram className="w-6 h-6 text-pink-500" /> },
    { platform: "LinkedIn", followers: "437K+", views: "High Engagement", highlights: "Ranked among India's top 10 authoritative business figures.", icon: <Linkedin className="w-6 h-6 text-blue-500" /> },
    { platform: "X (Twitter)", followers: "344K", views: "N/A", highlights: "Focuses on short-form motivational thoughts and reflections.", icon: <Twitter className="w-6 h-6 text-blue-400" /> },
    { platform: "Spotify", followers: "N/A", views: "11.6M+ plays", highlights: "Ranked among the Top 25 podcasters globally.", icon: <Music className="w-6 h-6 text-green-500" /> },
  ];

  return (
    <section className="py-24 px-6 relative bg-gradient-to-b from-[#050505] to-[#0a0a0a]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Global Impact & <span className="text-[#d8b068]">Stats</span>
          </h2>
          <p className="text-xl text-gray-400">
            As of March 2026, Raj Shamani has established a massive digital footprint with over 18 billion total views and a combined following exceeding 22.4 million across all major social platforms.
          </p>
        </motion.div>

        {/* Global/National Ranks */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <motion.div className="p-8 rounded-3xl bg-white/5 border border-white/10" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
            <h3 className="text-2xl font-bold mb-2">National Rank</h3>
            <p className="text-gray-400">Following his show's mega-success, "Figuring Out" is India's #1 business and personal growth podcast on Spotify and YouTube.</p>
          </motion.div>
          <motion.div className="p-8 rounded-3xl bg-white/5 border border-white/10" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}>
            <h3 className="text-2xl font-bold mb-2">Global Rank</h3>
            <p className="text-gray-400">He has been officially recognized in the Global Top 25 Podcasters list.</p>
          </motion.div>
        </div>

        {/* Data Table */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="overflow-x-auto bg-white/5 rounded-3xl border border-white/10 p-4 md:p-8"
        >
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/10 text-gray-300">
                <th className="py-4 px-4 font-semibold uppercase tracking-wider">Platform</th>
                <th className="py-4 px-4 font-semibold uppercase tracking-wider">Followers</th>
                <th className="py-4 px-4 font-semibold uppercase tracking-wider">Lifetime Views</th>
                <th className="py-4 px-4 font-semibold uppercase tracking-wider">Key Highlights</th>
              </tr>
            </thead>
            <tbody>
              {stats.map((row, i) => (
                <tr key={i} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                  <td className="py-4 px-4 flex items-center gap-3 font-medium">
                    {row.icon}
                    {row.platform}
                  </td>
                  <td className="py-4 px-4 text-white/90">{row.followers}</td>
                  <td className="py-4 px-4 text-white/90">{row.views}</td>
                  <td className="py-4 px-4 text-gray-400 text-sm max-w-xs">{row.highlights}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Content Ecosystem */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "YouTube Dominance", desc: "Main channel @rajshamani features >2,300 videos. Engagement rate of 3.76%." },
            { title: "The 'Figuring Out' Moat", desc: "A global platform featuring world leaders like Emmanuel Macron." },
            { title: "Viral Milestones", desc: "Interview with Vijay Mallya remains a record-breaker with 26M+ views." },
            { title: "Strategic Volume", desc: "High-volume distribution, releasing 1-3 long-form videos daily." }
          ].map((card, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white/5">
              <h4 className="font-bold text-[#d8b068] mb-2">{card.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
