import { motion } from 'motion/react';

const steps = [
  {
    tag: "Age 16",
    title: "The Crucible of Crisis",
    heading: "From average student to survival mode.",
    desc: "Born in Indore. He describes himself as an average kid. In 2013, at just 16 years old, his father suffered a severe diabetic attack. Their chemical trading business collapsed overnight. There was no safety net — just a family that needed him to step up.",
    img: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&w=1920&q=80",
    stat: "₹0",
    statLabel: "Starting capital",
  },
  {
    tag: "₹10,000 Borrowed",
    title: "The Bucket Entrepreneur",
    heading: "Mixing chemistry in two plastic buckets.",
    desc: "Facing crushing medical bills, Raj borrowed ₹10,000. Without any formal training, he learned soap chemistry from YouTube videos and began mixing chemicals on his terrace. His product: 'Jadugar Drop' — a dishwashing liquid priced at ₹45 vs the market's ₹110.",
    img: "https://images.unsplash.com/photo-1587614207923-a8ee0bdfc258?auto=format&fit=crop&w=1920&q=80",
    stat: "₹10K",
    statLabel: "Borrowed to start",
  },
  {
    tag: "₹200 Crore Empire",
    title: "Mastering the Scale",
    heading: "The 'Auntypreneur' distribution revolution.",
    desc: "By empowering local housewives as 'Auntypreneurs' on a 25% commission model, he bypassed traditional retail entirely. His common-sense approach to pricing and distribution scaled Shamani Industries to a ₹200 crore turnover — all self-funded, all from hustle.",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1920&q=80",
    stat: "₹200 Cr",
    statLabel: "Annual turnover",
  }
];

export default function OriginStory() {
  return (
    // Instead of JS manual tracking, we use CSS sticky stacking.
    // Each panel slides over the previous one flawlessly.
    <section className="relative w-full bg-black font-sans">
      {steps.map((step, index) => (
        <div 
          key={index} 
          className="sticky top-0 h-screen w-full overflow-hidden flex items-center shadow-[0_-20px_50px_rgba(0,0,0,0.8)]"
          style={{ zIndex: index + 10 }}
        >
          {/* Background Image Layer */}
          <div className="absolute inset-0 w-full h-full z-0">
            <motion.img 
              initial={{ scale: 1 }}
              whileInView={{ scale: 1.05 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              src={step.img} 
              alt={step.title} 
              className="absolute inset-0 w-full h-full object-cover grayscale opacity-50"
            />
            {/* Gradients to keep the text highly readable */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-black/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/80 to-transparent" />
          </div>

          {/* Main Content Layout */}
          <div className="relative z-10 w-full h-full flex">
            
            {/* Left Sidebar Navigation (Desktop only) */}
            <div className="hidden md:flex flex-col justify-center gap-10 w-64 px-10 border-r border-white/10 bg-black/40 backdrop-blur-md">
              <p className="text-[#d8b068] text-[10px] font-black tracking-[0.4em] uppercase mb-4 opacity-70">
                Origin Story
              </p>
              {steps.map((s, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <span className={`text-xs uppercase tracking-[0.2em] font-semibold transition-colors duration-500 ${i === index ? 'text-gray-400' : 'text-gray-700'}`}>
                    {`0${i + 1}`}
                  </span>
                  <span className={`font-bold text-base leading-snug transition-colors duration-500 ${i === index ? 'text-white' : 'text-gray-600'}`}>
                    {s.title}
                  </span>
                  {/* Subtle highlight line for the active nav item */}
                  {i === index && (
                    <motion.div 
                      initial={{ scaleX: 0 }} 
                      whileInView={{ scaleX: 1 }} 
                      viewport={{ once: false }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                      className="h-[2px] w-12 bg-[#d8b068] rounded-full mt-1 origin-left" 
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Right Main Text Content */}
            <div className="flex-1 flex items-center px-8 md:px-16 lg:px-20 relative">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="max-w-2xl"
              >
                {/* Visual Tag */}
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#d8b068]/40 bg-[#d8b068]/10 backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#d8b068] animate-pulse" />
                  <span className="text-[#d8b068] text-xs font-bold tracking-[0.2em] uppercase">{step.tag}</span>
                </div>

                {/* Heading */}
                <h3 className="text-4xl md:text-6xl font-black text-white leading-[1.05] mb-6 tracking-tight">
                  {step.heading}
                </h3>

                {/* Paragraph Description */}
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed border-l-2 border-[#d8b068]/60 pl-6">
                  {step.desc}
                </p>

                {/* Key Metric/Stat */}
                <div className="mt-10 flex items-end gap-3 tracking-tighter">
                  <span className="text-5xl md:text-7xl font-black text-[#d8b068] leading-none">
                    {step.stat}
                  </span>
                  <span className="text-gray-400 text-base mb-2 uppercase tracking-widest font-semibold tracking-normal">
                    {step.statLabel}
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
          
          {/* Subtle Scroll Hint that shows on the first panel to guide users */}
          {index === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5, duration: 1 }}
              className="absolute bottom-8 left-1/2 md:left-[calc(50%+128px)] -translate-x-1/2 flex flex-col items-center gap-2 z-20"
            >
              <span className="text-gray-500 text-[10px] tracking-[0.3em] uppercase font-bold">Scroll</span>
              <motion.div
                className="w-[1px] h-8 bg-gradient-to-b from-[#d8b068] to-transparent"
                animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0], originY: 0 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          )}
        </div>
      ))}
    </section>
  );
}
