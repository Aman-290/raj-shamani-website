import { motion, MotionValue, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

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

// Each step gets its own component so hooks aren't called inside loops
function StepBackground({ scrollYProgress, index, total, img, title }: {
  scrollYProgress: MotionValue<number>;
  index: number;
  total: number;
  img: string;
  title: string;
}) {
  const segSize = 1 / total;
  const start = index * segSize;
  const end = start + segSize;

  const opacity = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.05), Math.min(1, start), Math.min(1, end - 0.05), Math.min(1, end)],
    [index === 0 ? 1 : 0, 1, 1, index === total - 1 ? 1 : 0]
  );
  const scale = useTransform(scrollYProgress, [start, end], [1.05, 1.12]);

  return (
    <motion.div className="absolute inset-0" style={{ opacity }}>
      <motion.img
        src={img}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover grayscale"
        style={{ scale }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/75 to-black/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
    </motion.div>
  );
}

function StepCard({ scrollYProgress, index, total, step }: {
  scrollYProgress: MotionValue<number>;
  index: number;
  total: number;
  step: typeof steps[0];
}) {
  const segSize = 1 / total;
  const start = index * segSize;
  const end = start + segSize;

  const opacity = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.04), Math.min(1, start + 0.04), Math.min(1, end - 0.04), Math.min(1, end)],
    [index === 0 ? 1 : 0, 1, 1, index === total - 1 ? 1 : 0]
  );
  const y = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.04), Math.min(1, start + 0.04), Math.min(1, end - 0.04), Math.min(1, end)],
    [index === 0 ? 0 : 40, 0, 0, index === total - 1 ? 0 : -40]
  );

  return (
    <motion.div
      className="absolute inset-0 flex items-center"
      style={{ opacity, y }}
    >
      <div className="max-w-2xl">
        {/* Tag */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-[#d8b068]/40 bg-[#d8b068]/10 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#d8b068] animate-pulse" />
          <span className="text-[#d8b068] text-xs font-bold tracking-[0.2em] uppercase">{step.tag}</span>
        </div>

        {/* Heading */}
        <h3 className="text-4xl md:text-6xl font-black text-white leading-[1.05] mb-6 tracking-tight">
          {step.heading}
        </h3>

        {/* Quote body */}
        <p className="text-gray-300 text-lg md:text-xl leading-relaxed border-l-2 border-[#d8b068]/60 pl-6">
          {step.desc}
        </p>

        {/* Stat */}
        <div className="mt-10 flex items-end gap-3">
          <span className="text-5xl md:text-7xl font-black text-[#d8b068] leading-none tracking-tighter">
            {step.stat}
          </span>
          <span className="text-gray-400 text-base mb-2 uppercase tracking-widest font-semibold">
            {step.statLabel}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

function StepNav({ scrollYProgress, index, total, step }: {
  scrollYProgress: MotionValue<number>;
  index: number;
  total: number;
  step: typeof steps[0];
}) {
  const segSize = 1 / total;
  const start = index * segSize;
  const end = start + segSize;

  const opacity = useTransform(
    scrollYProgress, 
    [Math.max(0, start - 0.02), Math.min(1, start + 0.08), Math.min(1, end - 0.08), Math.min(1, end)], 
    [index === 0 ? 1 : 0.25, 1, 1, index === total - 1 ? 1 : 0.25]
  );
  const scaleX = useTransform(scrollYProgress, [start, end], [0, 1]);

  return (
    <motion.div className="flex flex-col gap-2" style={{ opacity }}>
      <span className="text-xs text-gray-500 uppercase tracking-[0.2em] font-semibold">{`0${index + 1}`}</span>
      <span className="text-white font-bold text-base leading-snug">{step.title}</span>
      {/* Progress bar under this step */}
      <div className="h-[2px] w-32 bg-white/10 rounded-full mt-1">
        <motion.div className="h-full bg-[#d8b068] rounded-full" style={{ scaleX, transformOrigin: 'left' }} />
      </div>
    </motion.div>
  );
}

export default function OriginStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      ref={containerRef}
      className="relative bg-black"
      style={{ height: `${(steps.length + 1) * 100}vh` }}
    >
      {/* Sticky viewport */}
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Layered backgrounds — one per step */}
        <div className="absolute inset-0">
          {steps.map((step, i) => (
            <StepBackground
              key={i}
              scrollYProgress={scrollYProgress}
              index={i}
              total={steps.length}
              img={step.img}
              title={step.title}
            />
          ))}
        </div>

        {/* Main content area */}
        <div className="relative z-10 h-full flex">

          {/* Left — navigation sidebar */}
          <div className="hidden md:flex flex-col justify-center gap-10 w-64 px-10 border-r border-white/5">
            <p className="text-[#d8b068] text-[10px] font-black tracking-[0.4em] uppercase mb-4 opacity-60">
              Origin Story
            </p>
            {steps.map((step, i) => (
              <StepNav
                key={i}
                scrollYProgress={scrollYProgress}
                index={i}
                total={steps.length}
                step={step}
              />
            ))}
          </div>

          {/* Right — story cards */}
          <div className="flex-1 relative flex items-center px-8 md:px-16 lg:px-20">
            {steps.map((step, i) => (
              <StepCard
                key={i}
                scrollYProgress={scrollYProgress}
                index={i}
                total={steps.length}
                step={step}
              />
            ))}
          </div>
        </div>

        {/* Vertical scroll progress line */}
        <ProgressLine scrollYProgress={scrollYProgress} />

        {/* Scroll hint — only at very start */}
        <ScrollHint scrollYProgress={scrollYProgress} />
      </div>
    </section>
  );
}

function ProgressLine({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  return (
    <div className="absolute right-6 top-1/2 -translate-y-1/2 h-40 w-[1px] bg-white/10">
      <motion.div
        className="w-full bg-[#d8b068] origin-top"
        style={{ scaleY, height: '100%' }}
      />
    </div>
  );
}

function ScrollHint({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const opacity = useTransform(scrollYProgress, [0, 0.08], [1, 0]);
  return (
    <motion.div
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      style={{ opacity }}
    >
      <span className="text-gray-500 text-xs tracking-[0.3em] uppercase font-semibold">Scroll</span>
      <motion.div
        className="w-[1px] h-8 bg-gradient-to-b from-[#d8b068] to-transparent"
        animate={{ scaleY: [0, 1, 0], opacity: [0, 1, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  );
}
