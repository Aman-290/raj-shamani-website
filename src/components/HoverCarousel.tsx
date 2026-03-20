import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const infoMapping: Record<string, Record<string, { name: string, who_they_are: string, podcast_link: string }>> = {
  "image1": {
    "person1": {
      "name": "Nitin Gadkari",
      "who_they_are": "Minister of Road Transport and Highways of India",
      "podcast_link": "https://www.youtube.com/watch?v=NK42Cgib4qQ"
    },
    "person2": {
      "name": "S. Jaishankar",
      "who_they_are": "Minister of External Affairs of India",
      "podcast_link": "https://www.youtube.com/watch?v=Q3mlNjnRO8w"
    },
    "person3": {
      "name": "Karan Johar",
      "who_they_are": "Bollywood Director & Producer",
      "podcast_link": "https://www.youtube.com/watch?v=ndTkM5X7msg"
    },
    "person4": {
      "name": "Emmanuel Macron",
      "who_they_are": "President of France",
      "podcast_link": "https://www.youtube.com/watch?v=9QXCkMTbrSk"
    },
    "person5": {
      "name": "Raj Shamani",
      "who_they_are": "Podcast Host & Entrepreneur",
      "podcast_link": "N/A (He is the host)"
    },
    "person6": {
      "name": "Shreya Ghoshal",
      "who_they_are": "Playback Singer",
      "podcast_link": "https://www.youtube.com/watch?v=gC8hO8fyFGk"
    },
    "person7": {
      "name": "Bill Gates",
      "who_they_are": "Co-founder of Microsoft & Philanthropist",
      "podcast_link": "https://www.youtube.com/watch?v=xAt1xcC6qfM"
    },
    "person8": {
      "name": "Aamir Khan",
      "who_they_are": "Bollywood Actor",
      "podcast_link": "https://www.youtube.com/watch?v=r8pDXO6zRUg"
    }
  },
  "image2": {
    "person1": {
      "name": "Nikhil Kamath",
      "who_they_are": "Co-founder of Zerodha",
      "podcast_link": "https://www.youtube.com/watch?v=hjiZ11lKCrU"
    },
    "person2": {
      "name": "Rajiv Talreja",
      "who_they_are": "Business Coach & Entrepreneur",
      "podcast_link": "https://www.youtube.com/watch?v=JqxZGXQf0qg"
    },
    "person3": {
      "name": "Vijay Mallya",
      "who_they_are": "Fugitive Indian Businessman",
      "podcast_link": "https://music.youtube.com/podcast/MdeQMVBuGgY"
    },
    "person4": {
      "name": "Raj Shamani",
      "who_they_are": "Podcast Host & Entrepreneur",
      "podcast_link": "N/A (He is the host)"
    },
    "person5": {
      "name": "Simon Sinek",
      "who_they_are": "Renowned Author and Leadership Expert",
      "podcast_link": "https://www.youtube.com/watch?v=etgQjtdNEtc"
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

  // Load the corresponding JSON whenever the image changes
  useEffect(() => {
    const fetchJson = async () => {
      try {
        const response = await fetch(`/${images[currentIndex]}.json`);
        if (response.ok) {
          const data = await response.json();
          setPolygons(data.polygons || []);
        } else {
          setPolygons([]);
        }
      } catch (err) {
        console.error("Failed to load JSON for", images[currentIndex]);
        setPolygons([]);
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

  // Preload carousel images efficiently
  useEffect(() => {
    images.forEach(img => {
      const image = new Image();
      image.src = `/${img}.png`;
    });
  }, []);

  const currentImageId = images[currentIndex];
  const currentInfoMap = infoMapping[currentImageId] || {};

  // Compute Host's (Raj Shamani) center coordinates dynamically per image for wire mapping
  let hostCenterX: number | null = null;
  let hostCenterY: number | null = null;
  
  polygons.forEach((poly) => {
    const info = currentInfoMap[poly.label];
    if (info && info.name === "Raj Shamani") {
      const xs = poly.rawPoints.map(p => p.x);
      const ys = poly.rawPoints.map(p => p.y);
      hostCenterX = (Math.min(...xs) + Math.max(...xs)) / 2;
      hostCenterY = ((Math.min(...ys) + Math.max(...ys)) / 2) - 12; // Adjust to exact chest point
    }
  });

  // Custom Cursor
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverTarget, setHoverTarget] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const dynPath = useMotionValue("");

  useEffect(() => {
    let animationFrameId: number;
    const updatePath = () => {
      const el = containerRef.current;
      
      // Wire stays attached everywhere in the image container unless specifically hovering over Raj himself
      if (!el || !isHovering || hostCenterX === null || hostCenterY === null) {
        dynPath.set("");
        return;
      }
      if (hoverTarget && currentInfoMap[hoverTarget]?.name === "Raj Shamani") {
        dynPath.set("");
        return;
      }

      const w = el.clientWidth;
      const h = el.clientHeight;

      // Read direct spring tracking physics for pixel perfect sync with UI cursor
      const x = cursorXSpring.get();
      const y = cursorYSpring.get();

      const rX = (hostCenterX / 100) * w;
      const rY = (hostCenterY / 100) * h;
      
      const dx = Math.abs(x - rX);
      const dy = Math.abs(y - rY);
      const dist = Math.sqrt(dx * dx + dy * dy);
      const sag = dist * 0.25;

      const curveControlX = (x + rX) / 2;
      const curveControlY = Math.max(y, rY) + sag;
      
      dynPath.set(`M ${x} ${y} Q ${curveControlX} ${curveControlY}, ${rX} ${rY}`);
    };

    const unsubX = cursorXSpring.on("change", updatePath);
    const unsubY = cursorYSpring.on("change", updatePath);
    
    updatePath();

    return () => {
      unsubX();
      unsubY();
    };
  }, [hostCenterX, hostCenterY, currentInfoMap, hoverTarget, isHovering, cursorXSpring, cursorYSpring]);

  const handlePointerMove = (e: React.PointerEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    cursorX.set(e.clientX - rect.left);
    cursorY.set(e.clientY - rect.top);
  };

  return (
    <>
      <style>{`
        @keyframes energyFlow {
          from { stroke-dashoffset: 14; }
          to { stroke-dashoffset: 0; }
        }
      `}</style>
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

      {/* Mask applied container - Overflow removed so tooltips won't crop at extreme edges */}
      <div 
        ref={containerRef}
        className="relative w-full max-w-4xl aspect-square shrink cursor-none"
        onPointerEnter={() => setIsHovering(true)}
        onPointerLeave={() => { setIsHovering(false); setHoverTarget(null); cursorX.set(-100); cursorY.set(-100); }}
        onPointerMove={handlePointerMove}
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
            <img 
              src={`/${currentImageId}.png`} 
              alt={currentImageId} 
              className="absolute inset-0 w-full h-full object-contain pointer-events-none" 
              style={{ 
                WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent), linear-gradient(to bottom, transparent, black 10%, black 100%)',
                WebkitMaskComposite: 'intersect',
                maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent), linear-gradient(to bottom, transparent, black 10%, black 100%)',
                maskComposite: 'intersect'
              }}
            />

            {/* Hover Polygons */}
            {polygons.map((poly, idx) => {
              const info = currentInfoMap[poly.label] || {
                name: "Unknown",
                who_they_are: "Information coming soon",
                podcast_link: "#"
              };

              // Calculate bounding box for placing tooltip
              const xs = poly.rawPoints.map(p => p.x);
              const ys = poly.rawPoints.map(p => p.y);
              const minX = Math.min(...xs);
              const maxX = Math.max(...xs);
              const minY = Math.min(...ys);
              const maxY = Math.max(...ys);

              const centerX = (minX + maxX) / 2;
              const centerY = (minY + maxY) / 2;

              // Adjust translation based on position to avoid clipping
              let translateX = "-translate-x-1/2";
              if (centerX > 75) translateX = "-translate-x-full";
              else if (centerX < 25) translateX = "translate-x-0";

              let translateY = "-translate-y-1/2";
              if (centerY > 85) translateY = "-translate-y-full";

              // Determine if this person is Raj Shamani, to avoid drawing a line to himself
              const isHost = info.name === "Raj Shamani";
              const canDrawWire = !isHost && hostCenterX !== null && hostCenterY !== null;
              
              // Use anchor tag wrap
              return (
                <div key={idx} className="absolute inset-0 w-full h-full pointer-events-none z-30 group">
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
                    onPointerEnter={() => setHoverTarget(poly.label)}
                    onPointerLeave={() => setHoverTarget(null)}
                  />
                  
                  {/* Tooltip */}
                  <div 
                    className={`absolute pointer-events-none transition-all duration-300 z-50 px-4 py-3 bg-[#0f0f0f]/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-[#d8b068]/30 flex flex-col items-center justify-center transform ${translateX} ${translateY} min-w-[200px] text-center w-max mt-6 ${hoverTarget === poly.label ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                    style={{ left: `${centerX}%`, top: `${centerY}%` }}
                  >
                    <span className="font-bold text-[#d8b068] whitespace-nowrap text-lg leading-tight">{info.name}</span>
                    <span className="text-sm text-gray-300 mt-1 font-medium">{info.who_they_are}</span>
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
          </motion.div>
        </AnimatePresence>

        {/* Global Dynamic Connected Physics Wire */}
        <svg 
          className={`absolute inset-0 w-full h-full pointer-events-none z-10 overflow-visible transition-opacity duration-500 ${isHovering && (!hoverTarget || currentInfoMap[hoverTarget]?.name !== "Raj Shamani") ? 'opacity-100' : 'opacity-0'}`}
        >
          {/* True detached 3D droop shadow pushing heavily downwards relative to wire */}
          <motion.path 
            d={dynPath}
            fill="none"
            stroke="#000000"
            strokeWidth="5"
            strokeLinecap="round"
            style={{ transform: "translateY(16px)", opacity: 0.5, filter: "blur(4px)" }}
          />
          {/* Inner bright wire */}
          <motion.path 
            d={dynPath}
            fill="none"
            stroke="#ef4444"
            strokeWidth="3.5"
            strokeLinecap="round"
            style={{ filter: "drop-shadow(0 0 6px rgba(239, 68, 68, 0.9))" }}
          />
        </svg>

        {/* Global Raj Shamani Target Dot */}
        <div 
          className={`absolute pointer-events-none z-40 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-500 ${isHovering && (!hoverTarget || currentInfoMap[hoverTarget]?.name !== "Raj Shamani") ? 'opacity-100' : 'opacity-0'}`}
          style={{ left: `${hostCenterX}%`, top: `${hostCenterY}%` }}
        >
          <div className="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_15px_#ef4444] animate-ping" />
          <div className="absolute inset-0 w-3 h-3 bg-red-500 rounded-full shadow-[0_0_15px_#ef4444]" />
        </div>

        {/* Custom fluid cursor inside the image bounds */}
        {(() => {
          const isHoveringOtherPerson = hoverTarget && currentInfoMap[hoverTarget]?.name !== "Raj Shamani";
          const cursorBorderWrapper = isHoveringOtherPerson ? "border-red-500/60 shadow-[0_0_25px_rgba(239,68,68,0.5)]" : "border-[#d8b068]/60 shadow-[0_0_25px_rgba(216,176,104,0.3)]";
          const cursorDot = isHoveringOtherPerson ? "bg-red-500 shadow-[0_0_8px_#ef4444]" : "bg-[#d8b068] shadow-[0_0_8px_#d8b068]";

          return (
            <motion.div 
              className={`absolute top-0 left-0 z-50 pointer-events-none w-10 h-10 rounded-full border bg-black/10 backdrop-blur-sm flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 transition-colors duration-500 ${cursorBorderWrapper}`}
              style={{ x: cursorXSpring, y: cursorYSpring, opacity: isHovering ? 1 : 0, scale: isHovering ? 1 : 0.8 }}
            >
              <div className={`w-1.5 h-1.5 rounded-full transition-colors duration-500 ${cursorDot}`}></div>
            </motion.div>
          );
        })()}
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
    </>
  );
}
