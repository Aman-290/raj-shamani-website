import React from 'react';
import { FullScreenScrollFX, FullScreenFXAPI } from './ui/full-screen-scroll-fx';

const sections = [
  {
    leftLabel: "16 Years Old",
    title: "16yo",
    rightLabel: "Starting point",
    background: "https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80",
    renderBackground: (active: boolean) => (
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <img 
          src="https://images.unsplash.com/photo-1542281286-9e0a16bb7366?auto=format&fit=crop&q=80" 
          alt="Indore" 
          className="absolute inset-0 w-full h-full object-cover filter grayscale blur-sm opacity-20"
        />
        <div className={`absolute inset-0 flex flex-col justify-center items-center p-12 lg:p-32 bg-black/50 transition-opacity duration-1000 ${active ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-2xl text-center">
            <h3 className="text-[#d8b068] text-2xl font-bold tracking-[0.2em] uppercase mb-4">The Crucible of Crisis</h3>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed italic">"Born in Indore, a self-described average student. In 2013, at 16, his father suffered a severe diabetic attack, causing their chemical trading business to collapse. It was time to step up."</p>
          </div>
        </div>
      </div>
    )
  },
  {
    leftLabel: "₹10,000",
    title: "Bucket",
    rightLabel: "Borrowed",
    background: "https://images.unsplash.com/photo-1615849826317-09f199343729?auto=format&fit=crop&q=80",
    renderBackground: (active: boolean) => (
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <img 
          src="https://images.unsplash.com/photo-1628191140046-24ea942b0eff?auto=format&fit=crop&q=80" 
          alt="Chemistry mix" 
          className="absolute inset-0 w-full h-full object-cover filter grayscale blur-sm opacity-20"
        />
        <div className={`absolute inset-0 flex flex-col justify-center items-center p-12 lg:p-32 bg-black/50 transition-opacity duration-1000 ${active ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-2xl text-center">
            <h3 className="text-[#d8b068] text-2xl font-bold tracking-[0.2em] uppercase mb-4">The Bucket Hustler</h3>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed italic">"Facing mounting medical bills, Raj borrowed ₹10,000. Without formal training, he learned soap chemistry from YouTube and began mixing chemicals in two plastic buckets."</p>
          </div>
        </div>
      </div>
    )
  },
  {
    leftLabel: "₹200 Cr",
    title: "Empire",
    rightLabel: "Turnover",
    background: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    renderBackground: (active: boolean) => (
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80" 
          alt="Business building" 
          className="absolute inset-0 w-full h-full object-cover filter grayscale blur-sm opacity-20"
        />
        <div className={`absolute inset-0 flex flex-col justify-center items-center p-12 lg:p-32 bg-black/50 transition-opacity duration-1000 ${active ? 'opacity-100' : 'opacity-0'}`}>
          <div className="max-w-2xl text-center">
            <h3 className="text-[#d8b068] text-2xl font-bold tracking-[0.2em] uppercase mb-4">Mastering the Scale</h3>
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed italic">"Created 'Jadugar Drop' dishwashing liquid. Empowered local housewives as 'Auntypreneurs' with 25% commission, scaling Shamani Industries to ₹200 crore turnover."</p>
          </div>
        </div>
      </div>
    )
  }
];

export default function OriginStory() {
  const apiRef = React.useRef<FullScreenFXAPI>(null);

  return (
    <section className="bg-black relative">
      <FullScreenScrollFX
        sections={sections}
        apiRef={apiRef}
        header={
          <div className="flex flex-col items-center">
            <h2 className="text-xl md:text-2xl font-bold mb-2 tracking-[0.2em] uppercase text-[#d8b068]">Origin Story</h2>
            <div className="text-4xl md:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
              Zero to ₹200 Crores
            </div>
          </div>
        }
        footer={<div className="text-gray-500 text-sm tracking-[0.3em]">HUSTLE. SCALE. REPEAT.</div>}
        showProgress
        durations={{ change: 0.8, snap: 800 }}
      />
    </section>
  );
}
