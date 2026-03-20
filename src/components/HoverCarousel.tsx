import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const infoMapping: Record<string, Record<string, { name: string, who_they_are: string, podcast_link: string }>> = {
  "image1": {
    "person1": {
      "name": "Nitin Gadkari",
      "who_they_are": "Minister of Road Transport and Highways of India",
      "podcast_link": "https://www.youtube.com/watch?v=NK42Cgib4qQ"
    },
    "person2": {
      "name": "Vijay Mallya",
      "who_they_are": "Businessman & Former IPL Owner",
      "podcast_link": "https://music.youtube.com/podcast/MdeQMVBuGgY"
    },
    "person3": {
      "name": "Nikhil Kamath",
      "who_they_are": "Co-founder of Zerodha",
      "podcast_link": "https://www.youtube.com/watch?v=hjiZ11lKCrU"
    },
    "person4": {
      "name": "Bill Gates",
      "who_they_are": "Co-founder of Microsoft & Philanthropist",
      "podcast_link": "https://www.youtube.com/watch?v=xAt1xcC6qfM"
    },
    "person5": {
      "name": "Raj Shamani",
      "who_they_are": "Podcast Host & Entrepreneur",
      "podcast_link": "N/A (He is the host)"
    },
    "person6": {
      "name": "S. Jaishankar",
      "who_they_are": "Minister of External Affairs of India",
      "podcast_link": "https://www.youtube.com/watch?v=Q3mlNjnRO8w"
    },
    "person7": {
      "name": "Emmanuel Macron",
      "who_they_are": "President of France",
      "podcast_link": "https://www.youtube.com/watch?v=9QXCkMTbrSk"
    },
    "person8": {
      "name": "Simon Sinek",
      "who_they_are": "Renowned Author and Leadership Expert",
      "podcast_link": "https://www.youtube.com/watch?v=etgQjtdNEtc"
    }
  },
  "image2": {
    "person1": {
      "name": "Shreya Ghoshal",
      "who_they_are": "Playback Singer",
      "podcast_link": "https://www.youtube.com/watch?v=gC8hO8fyFGk"
    },
    "person2": {
      "name": "Rajiv Talreja",
      "who_they_are": "Business Coach & Entrepreneur",
      "podcast_link": "https://www.youtube.com/watch?v=JqxZGXQf0qg"
    },
    "person3": {
      "name": "Karan Johar",
      "who_they_are": "Bollywood Director & Producer",
      "podcast_link": "https://www.youtube.com/watch?v=ndTkM5X7msg"
    },
    "person4": {
      "name": "Raj Shamani",
      "who_they_are": "Podcast Host & Entrepreneur",
      "podcast_link": "N/A (He is the host)"
    },
    "person5": {
      "name": "Aamir Khan",
      "who_they_are": "Bollywood Actor",
      "podcast_link": "https://www.youtube.com/watch?v=r8pDXO6zRUg"
    },
    "person6": {
      "name": "Dr. Joe Dispenza",
      "who_they_are": "Neuroscientist, Researcher, and Author",
      "podcast_link": "https://music.youtube.com/podcast/90lLQVZe2Nc"
    },
    "person7": {
      "name": "Vicky Kaushal",
      "who_they_are": "Bollywood Actor",
      "podcast_link": "https://www.youtube.com/watch?v=D7y9UnGb8hc"
    },
    "person8": {
      "name": "Ashish Chanchlani",
      "who_they_are": "YouTube Creator",
      "podcast_link": "https://www.youtube.com/watch?v=1Iz-wq5W4WE"
    }
  },
  "image3": {
    "person1": {
      "name": "Rakesh Maria",
      "who_they_are": "Former Mumbai Police Commissioner",
      "podcast_link": "https://www.youtube.com/watch?v=ZOU-ekl1H9M"
    },
    "person2": {
      "name": "Lt Col Narender Singh Thakur",
      "who_they_are": "NSG Commando & Indian Army Logistics Expert",
      "podcast_link": "https://www.youtube.com/watch?v=Ys4WqB6KZlU"
    },
    "person3": {
      "name": "Jatin Sapru",
      "who_they_are": "Sports Broadcaster & Commentator",
      "podcast_link": "https://www.youtube.com/watch?v=cJeeq30GX7w"
    },
    "person4": {
      "name": "Raj Shamani",
      "who_they_are": "Podcast Host & Entrepreneur",
      "podcast_link": "N/A (He is the host)"
    },
    "person5": {
      "name": "Sunita Williams",
      "who_they_are": "Former NASA Astronaut",
      "podcast_link": "https://www.youtube.com/watch?v=ULvplwBTbQk"
    },
    "person6": {
      "name": "Khan Sir",
      "who_they_are": "Educator",
      "podcast_link": "https://www.youtube.com/watch?v=E3oG313_kps"
    },
    "person7": {
      "name": "Jack Barsky",
      "who_they_are": "Former KGB Spy",
      "podcast_link": "https://www.youtube.com/watch?v=Pkk7pGFfxxQ"
    }
  },
  "image4": {
    "person1": {
      "name": "YUNGBLUD",
      "who_they_are": "Grammy-winning Musician",
      "podcast_link": "https://www.youtube.com/watch?v=nZrBQqxYe2A"
    },
    "person2": {
      "name": "Jackson Wang",
      "who_they_are": "International Pop Star",
      "podcast_link": "https://www.youtube.com/results?search_query=Jackson+Wang+Raj+Shamani+podcast"
    },
    "person3": {
      "name": "Suniel Shetty",
      "who_they_are": "Bollywood Actor",
      "podcast_link": "https://www.youtube.com/watch?v=usmu9LUPhfw"
    },
    "person4": {
      "name": "Raj Shamani",
      "who_they_are": "Podcast Host & Entrepreneur",
      "podcast_link": "N/A (He is the host)"
    },
    "person5": {
      "name": "Dr. K (Alok Kanojia)",
      "who_they_are": "Psychiatrist and founder of Healthy Gamer",
      "podcast_link": "https://www.youtube.com/watch?v=R878NxqapRA"
    },
    "person6": {
      "name": "Vikas Divyakirti",
      "who_they_are": "Educator and founder of Drishti IAS",
      "podcast_link": "https://www.youtube.com/watch?v=uLnJy8LddgM"
    }
  }
};

interface PolygonData {
  label: string;
  cssClipPath: string;
  rawPoints: { x: number; y: number }[];
}

export default function HoverCarousel() {
  const images = ["image1", "image2", "image3", "image4"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [polygons, setPolygons] = useState<PolygonData[]>([]);
  const [hiPolygons, setHiPolygons] = useState<PolygonData[]>([]);

  // Load the corresponding JSON whenever the image changes
  useEffect(() => {
    const fetchJson = async () => {
      try {
        const [baseRes, hiRes] = await Promise.allSettled([
          fetch(`/${images[currentIndex]}.json`),
          fetch(`/${images[currentIndex]}hi.json`)
        ]);

        if (baseRes.status === 'fulfilled' && baseRes.value.ok) {
          const data = await baseRes.value.json();
          setPolygons(data.polygons || []);
        } else {
          setPolygons([]);
        }

        if (hiRes.status === 'fulfilled' && hiRes.value.ok) {
          const data = await hiRes.value.json();
          setHiPolygons(data.polygons || []);
        } else {
          setHiPolygons([]);
        }
      } catch (err) {
        console.error("Failed to load JSON for", images[currentIndex], err);
        setPolygons([]);
        setHiPolygons([]);
      }
    };
    fetchJson();
  }, [currentIndex]);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const currentImageId = images[currentIndex];
  const currentInfoMap = infoMapping[currentImageId] || {};

  return (
    <div className="relative w-full max-w-[1200px] mx-auto select-none my-8 group/carousel flex items-center justify-between px-2 md:px-8 gap-2 md:gap-8">
      
      {/* Navigation Button - Prev */}
      <div className="z-40 opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100 transition-opacity duration-300 shrink-0">
        <button 
          onClick={handlePrev}
          className="w-10 h-20 md:w-16 md:h-32 bg-black/40 hover:bg-black/80 backdrop-blur-md rounded-xl md:rounded-2xl border border-white/10 flex items-center justify-center transition-all duration-300"
        >
          <ChevronLeft className="w-6 h-6 md:w-10 md:h-10 text-[#d8b068]" />
        </button>
      </div>

      {/* Mask applied container */}
      {/* Mask applied container - Removed overflow-hidden to allow tooltips to escape */}
      <div 
        className="relative w-full max-w-4xl aspect-square shrink z-50"
      >
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Image Layer with Mask and Overflow Protection */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{ 
                WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 10%, black 100%)',
                maskImage: 'linear-gradient(to bottom, transparent, black 10%, black 100%)'
              }}
            >
              <img 
                src={`/${currentImageId}.webp`} 
                alt={currentImageId} 
                className="absolute inset-0 w-full h-full object-contain pointer-events-none scale-100" 
                loading={currentIndex === 0 ? "eager" : "lazy"}
                fetchPriority={currentIndex === 0 ? "high" : "auto"}
              />
            </div>

            {/* Selection/Hover Area (No Clipping for Tooltips) */}
            <div className="absolute inset-0 z-20">
              {/* Preload Next and Previous Images */}
              <div className="hidden">
                <link rel="preload" as="image" href={`/${images[(currentIndex + 1) % images.length]}.webp`} />
                <link rel="preload" as="image" href={`/${images[(currentIndex + 1) % images.length]}hi.webp`} />
                <link rel="preload" as="image" href={`/${images[(currentIndex - 1 + images.length) % images.length]}.webp`} />
              </div>

              {/* Hover Polygons */}
              {polygons.map((poly, idx) => {
                const info = currentInfoMap[poly.label] || {
                  name: "Unknown",
                  who_they_are: "Information coming soon",
                  podcast_link: "#"
                };
                
                const hiPoly = hiPolygons.find(hp => hp.label === poly.label);

                // Calculate bounding box for placing tooltip
                const xs = poly.rawPoints.map(p => p.x);
                const ys = poly.rawPoints.map(p => p.y);
                const minX = Math.min(...xs);
                const maxX = Math.max(...xs);
                const minY = Math.min(...ys);
                const maxY = Math.max(...ys);

                const centerX = (minX + maxX) / 2;
                const centerY = (minY + maxY) / 2;

                return (
                  <div key={idx} className="absolute inset-0 w-full h-full pointer-events-none z-30 group/person">
                    <a 
                      href={info.podcast_link !== "N/A (He is the host)" ? info.podcast_link : undefined}
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="absolute inset-0 w-full h-full pointer-events-auto cursor-pointer"
                      style={{ clipPath: poly.cssClipPath }}
                      onClick={(e) => {
                         if (info.podcast_link === "N/A (He is the host)") {
                           e.preventDefault();
                         }
                      }}
                    />

                    {/* Hi Image Layer (Masked locally to the person) */}
                    {hiPoly && (
                      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none opacity-0 group-hover/person:opacity-100 transition-opacity duration-300 z-10">
                        <img 
                          src={`/${currentImageId}hi.webp`} 
                          alt={`${info.name} Hi`}
                          className="absolute inset-0 w-full h-full object-contain"
                          style={{ clipPath: hiPoly.cssClipPath }}
                          loading="lazy"
                        />
                      </div>
                    )}
                    
                    {/* Tooltip (Escapes the container boundaries) */}
                    <div 
                      className="absolute pointer-events-none opacity-0 group-hover/person:opacity-100 transition-all duration-300 z-[100] px-4 py-3 bg-[#0f0f0f]/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#d8b068]/30 flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 scale-95 group-hover/person:scale-100 min-w-[220px] text-center"
                      style={{ left: `${centerX}%`, top: `${centerY}%` }}
                    >
                      <span className="font-bold text-[#d8b068] whitespace-nowrap text-lg leading-tight">{info.name}</span>
                      <span className="text-sm text-gray-300 mt-1 font-medium leading-tight">{info.who_they_are}</span>
                      {info.podcast_link !== "N/A (He is the host)" && (
                        <span className="text-[10px] md:text-xs text-white/50 mt-2 flex items-center gap-1 font-bold tracking-widest uppercase">
                          <svg className="w-3 h-3 text-[#d8b068]" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg> 
                          PLAY EPISODE
                        </span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Button - Next */}
      <div className="z-40 opacity-100 md:opacity-0 md:group-hover/carousel:opacity-100 transition-opacity duration-300 shrink-0">
        <button 
          onClick={handleNext}
          className="w-10 h-20 md:w-16 md:h-32 bg-black/40 hover:bg-black/80 backdrop-blur-md rounded-xl md:rounded-2xl border border-white/10 flex items-center justify-center transition-all duration-300"
        >
          <ChevronRight className="w-6 h-6 md:w-10 md:h-10 text-[#d8b068]" />
        </button>
      </div>
      
    </div>
  );
}
