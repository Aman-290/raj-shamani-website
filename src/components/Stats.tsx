import { motion } from 'motion/react';
import { Youtube, Instagram, Linkedin, Twitter, Music } from 'lucide-react';
import { ActivityChartCard } from './ui/activity-chart-card';
import { useState } from 'react';

export default function Stats() {
  const [selectedRange, setSelectedRange] = useState("Weekly");

  const stats = [
    { platform: "YouTube", followers: "15.8 Million", views: "1.84 Billion", highlights: "Over 8 billion yearly views across primary and ecosystem channels.", icon: <Youtube className="w-6 h-6 text-red-500" /> },
    { platform: "Instagram", followers: "7.4 Million", views: "Millions per Reel", highlights: "Ecosystem of hundreds of pages pushing 200+ daily posts.", icon: <Instagram className="w-6 h-6 text-pink-500" /> },
    { platform: "LinkedIn", followers: "437K+", views: "High Engagement", highlights: "Ranked among India's top 10 authoritative business figures.", icon: <Linkedin className="w-6 h-6 text-blue-500" /> },
    { platform: "X (Twitter)", followers: "344K", views: "N/A", highlights: "Focuses on short-form motivational thoughts and reflections.", icon: <Twitter className="w-6 h-6 text-blue-400" /> },
    { platform: "Spotify", followers: "N/A", views: "11.6M+ plays", highlights: "Ranked among the Top 25 podcasters globally.", icon: <Music className="w-6 h-6 text-green-500" /> },
  ];

  const activityDataMap: Record<string, { totalValue: string; data: { day: string; value: number }[] }> = {
    Weekly: {
      totalValue: "46.4h",
      data: [
        { day: "Mon", value: 3.2 },
        { day: "Tue", value: 4.8 },
        { day: "Wed", value: 5.1 },
        { day: "Thu", value: 4.9 },
        { day: "Fri", value: 7.4 },
        { day: "Sat", value: 9.8 },
        { day: "Sun", value: 11.2 },
      ],
    },
    Monthly: {
      totalValue: "185h",
      data: [
        { day: "Wk 1", value: 42.1 },
        { day: "Wk 2", value: 48.0 },
        { day: "Wk 3", value: 46.5 },
        { day: "Wk 4", value: 48.4 },
      ],
    },
    Yearly: {
      totalValue: "2,220h",
      data: [
        { day: "Q1", value: 520 },
        { day: "Q2", value: 545 },
        { day: "Q3", value: 580 },
        { day: "Q4", value: 575 },
      ],
    },
  };

  const currentData = activityDataMap[selectedRange] || activityDataMap["Weekly"];

  return (
    <section className="py-24 px-6 relative bg-[#050505] overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#050505] via-[#111] to-[#050505] z-10" />
        <motion.div 
          className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-[#d8b068]/5 blur-[120px] mix-blend-screen pointer-events-none"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-[-10%] right-[-5%] w-[40vw] h-[40vw] rounded-full bg-[#d8b068]/5 blur-[100px] mix-blend-screen pointer-events-none z-10"
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#d8b068]">
            Global Impact & <span className="text-white">Stats</span>
          </h2>
          <p className="text-xl text-gray-400">
            As of March 2026, Raj Shamani has established a massive digital footprint with over 18 billion total views and a combined following exceeding 24 million across all major social platforms.
          </p>
        </motion.div>

        {/* Top Section with Chart */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
          
          <div className="lg:col-span-4 flex flex-col gap-6">
            <motion.div className="p-8 rounded-3xl bg-[#111] border border-white/10 shadow-lg shadow-black/50" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
              <h3 className="text-2xl font-bold mb-2 text-[#d8b068]">National Rank</h3>
              <p className="text-gray-400">Following his show's mega-success, "Figuring Out" is India's #1 business and personal growth podcast on Spotify and YouTube.</p>
            </motion.div>
            <motion.div className="p-8 rounded-3xl bg-[#111] border border-white/10 shadow-lg shadow-black/50" initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}>
              <h3 className="text-2xl font-bold mb-2 text-[#d8b068]">Global Rank</h3>
              <p className="text-gray-400">He has been officially recognized in the Global Top 25 Podcasters list.</p>
            </motion.div>
          </div>

          <motion.div 
            className="lg:col-span-8 h-full"
            initial={{ opacity: 0, x: 30 }} 
            whileInView={{ opacity: 1, x: 0 }}
          >
            <ActivityChartCard
              title="Avg Content Output (Hrs)"
              totalValue={currentData.totalValue}
              data={currentData.data}
              selectedRange={selectedRange}
              onRangeChange={setSelectedRange}
              dropdownOptions={["Weekly", "Monthly", "Yearly"]}
              className="h-full max-w-none"
            />
          </motion.div>
        </div>

        {/* Data Table */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="overflow-x-auto bg-[#111] rounded-3xl border border-white/10 p-4 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
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
                  <td className="py-4 px-4 flex items-center gap-3 font-medium text-white">
                    {row.icon}
                    {row.platform}
                  </td>
                  <td className="py-4 px-4 text-white/90 font-bold">{row.followers}</td>
                  <td className="py-4 px-4 text-[#d8b068] font-bold">{row.views}</td>
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
            <motion.div 
              key={i} 
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-[#d8b068]/50 transition-colors shadow-[0_10px_30px_rgba(0,0,0,0.5)] group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <h4 className="font-bold text-white mb-2 group-hover:text-[#d8b068] transition-colors">{card.title}</h4>
              <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
