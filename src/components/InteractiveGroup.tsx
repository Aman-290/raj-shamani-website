import React from 'react';

export default function InteractiveGroup() {
  return (
    <div 
      className="relative w-full max-w-[1920px] mx-auto aspect-video overflow-hidden select-none my-8"
      style={{ 
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent), linear-gradient(to bottom, transparent, black 20%, black 100%)',
        WebkitMaskComposite: 'intersect',
        maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent), linear-gradient(to bottom, transparent, black 20%, black 100%)',
        maskComposite: 'intersect'
      }}
    >
      {/* Base Image */}
      <img 
        src="/non-raised.png" 
        alt="Raj Shamani Group Base" 
        className="absolute inset-0 w-full h-full object-contain pointer-events-none" 
      />

      {/* Person: back-1 */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-10 group">
        <a 
          href="https://www.youtube.com/watch?v=usmu9LUPhfw" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute inset-0 w-full h-full pointer-events-auto cursor-pointer"
          style={{ clipPath: 'polygon(20.07% 42.56%, 19.56% 30.53%, 18.44% 25.43%, 18.44% 21.05%, 19.56% 19.96%, 19.36% 15.77%, 21.09% 14.67%, 22.20% 19.41%, 23.73% 20.14%, 24.14% 23.60%, 24.34% 27.98%, 24.04% 28.16%, 24.65% 35.45%, 23.43% 36.91%, 23.43% 42.01%, 21.39% 43.84%)' }}
        />
        <img 
          src="/raised-hand.png" 
          alt="Raised hand back-1"
          className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 pointer-events-none"
          style={{ clipPath: 'polygon(20.27% 42.93%, 20.27% 36.00%, 19.97% 31.63%, 18.34% 27.43%, 18.24% 24.52%, 16.41% 23.60%, 16.81% 15.95%, 18.03% 13.03%, 19.97% 14.13%, 21.90% 14.67%, 22.71% 16.50%, 24.24% 21.05%, 25.46% 25.06%, 25.15% 30.35%, 22.00% 33.81%)' }}
        />
        <div 
          className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 px-4 py-2 bg-[#0f0f0f]/90 backdrop-blur-md rounded-xl shadow-2xl border border-[#bb9753]/30 flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 scale-95 group-hover:scale-100"
          style={{ left: '21.54%', top: '26.34%' }}
        >
          <span className="font-bold text-[#bb9753] whitespace-nowrap text-sm md:text-base">Suniel Shetty</span>
          <span className="text-[10px] md:text-xs text-white/70 mt-1 flex items-center gap-1 font-medium tracking-wide">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg> 
                  PLAY EPISODE
                </span>
        </div>
      </div>

      {/* Person: back-2 */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-10 group">
        <a 
          href="https://www.youtube.com/watch?v=gC8hO8fyFGk" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute inset-0 w-full h-full pointer-events-auto cursor-pointer"
          style={{ clipPath: 'polygon(31.87% 18.14%, 30.95% 25.43%, 31.77% 28.89%, 31.77% 39.46%, 33.29% 41.65%, 33.90% 43.84%, 35.63% 43.84%, 36.24% 41.65%, 37.36% 39.65%, 36.55% 30.17%, 36.35% 28.16%, 36.85% 25.79%, 35.33% 19.96%, 34.41% 17.04%)' }}
        />
        <img 
          src="/raised-hand.png" 
          alt="Raised hand back-2"
          className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 pointer-events-none"
          style={{ clipPath: 'polygon(30.34% 20.69%, 30.44% 25.79%, 31.56% 27.80%, 32.07% 35.82%, 32.07% 41.47%, 33.50% 41.29%, 33.50% 44.38%, 37.36% 43.29%, 36.75% 40.19%, 36.75% 33.27%, 37.46% 25.61%, 36.24% 18.32%, 35.23% 17.23%, 32.89% 16.31%)' }}
        />
        <div 
          className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 px-4 py-2 bg-[#0f0f0f]/90 backdrop-blur-md rounded-xl shadow-2xl border border-[#bb9753]/30 flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 scale-95 group-hover:scale-100"
          style={{ left: '34.16%', top: '27.76%' }}
        >
          <span className="font-bold text-[#bb9753] whitespace-nowrap text-sm md:text-base">Shreya Ghoshal</span>
          <span className="text-[10px] md:text-xs text-white/70 mt-1 flex items-center gap-1 font-medium tracking-wide">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg> 
                  PLAY EPISODE
                </span>
        </div>
      </div>

      {/* Person: back-3 */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-10 group">
        <a 
          href="https://www.youtube.com/watch?v=XzMcJR2UFE4" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute inset-0 w-full h-full pointer-events-auto cursor-pointer"
          style={{ clipPath: 'polygon(43.47% 16.31%, 43.98% 19.78%, 42.86% 20.87%, 42.65% 22.88%, 42.65% 25.61%, 43.16% 29.44%, 43.47% 33.81%, 43.67% 35.64%, 44.38% 37.82%, 44.89% 42.74%, 45.91% 43.11%, 46.72% 44.38%, 47.94% 43.11%, 47.84% 41.29%, 47.23% 40.37%, 47.64% 38.73%, 47.43% 34.18%, 47.84% 27.43%, 48.76% 18.87%, 47.64% 20.51%, 46.52% 19.23%, 46.01% 15.04%)' }}
        />
        <img 
          src="/raised-hand.png" 
          alt="Raised hand back-3"
          className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 pointer-events-none"
          style={{ clipPath: 'polygon(41.43% 17.41%, 41.02% 23.06%, 41.23% 25.61%, 41.84% 26.52%, 42.25% 28.89%, 42.86% 32.90%, 43.98% 36.00%, 45.40% 41.65%, 46.11% 44.20%, 47.94% 44.20%, 48.45% 39.10%, 48.35% 30.17%, 48.76% 20.69%, 47.43% 20.14%, 46.93% 15.77%, 46.31% 15.40%, 44.69% 14.49%, 43.87% 14.86%, 42.45% 16.13%)' }}
        />
        <div 
          className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 px-4 py-2 bg-[#0f0f0f]/90 backdrop-blur-md rounded-xl shadow-2xl border border-[#bb9753]/30 flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 scale-95 group-hover:scale-100"
          style={{ left: '45.70%', top: '26.78%' }}
        >
          <span className="font-bold text-[#bb9753] whitespace-nowrap text-sm md:text-base">Jackson Wang</span>
          <span className="text-[10px] md:text-xs text-white/70 mt-1 flex items-center gap-1 font-medium tracking-wide">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg> 
                  PLAY EPISODE
                </span>
        </div>
      </div>

      {/* Person: back-4 */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-10 group">
        <a 
          href="https://www.youtube.com/watch?v=nZrBQqxYe2A" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute inset-0 w-full h-full pointer-events-auto cursor-pointer"
          style={{ clipPath: 'polygon(52.93% 15.77%, 53.03% 19.96%, 52.01% 21.60%, 51.81% 24.88%, 51.91% 28.16%, 52.22% 31.63%, 52.22% 36.55%, 51.91% 39.65%, 51.30% 42.01%, 51.40% 43.84%, 52.72% 44.38%, 54.15% 42.74%, 54.86% 43.29%, 55.78% 36.18%, 55.78% 33.99%, 55.98% 32.35%, 56.59% 27.80%, 57.10% 23.42%, 57.00% 20.87%, 55.78% 19.96%, 55.67% 18.32%, 55.67% 16.31%)' }}
        />
        <img 
          src="/raised-hand.png" 
          alt="Raised hand back-4"
          className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 pointer-events-none"
          style={{ clipPath: 'polygon(51.20% 17.04%, 50.59% 22.69%, 50.79% 25.79%, 51.30% 25.97%, 51.30% 29.26%, 51.91% 34.54%, 52.11% 41.29%, 51.61% 42.74%, 53.13% 44.38%, 53.74% 39.65%, 54.66% 32.17%, 56.79% 31.63%, 58.12% 21.78%, 57.10% 19.05%, 56.79% 15.04%)' }}
        />
        <div 
          className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 px-4 py-2 bg-[#0f0f0f]/90 backdrop-blur-md rounded-xl shadow-2xl border border-[#bb9753]/30 flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 scale-95 group-hover:scale-100"
          style={{ left: '54.20%', top: '27.21%' }}
        >
          <span className="font-bold text-[#bb9753] whitespace-nowrap text-sm md:text-base">YUNGBLUD</span>
          <span className="text-[10px] md:text-xs text-white/70 mt-1 flex items-center gap-1 font-medium tracking-wide">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg> 
                  PLAY EPISODE
                </span>
        </div>
      </div>

      {/* Person: back-5 */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-10 group">
        <a 
          href="https://www.youtube.com/watch?v=1Iz-wq5W4WE" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute inset-0 w-full h-full pointer-events-auto cursor-pointer"
          style={{ clipPath: 'polygon(63.41% 17.04%, 62.69% 19.96%, 61.88% 22.33%, 61.57% 25.61%, 61.78% 29.26%, 61.88% 31.44%, 61.78% 35.09%, 61.68% 38.73%, 61.47% 41.29%, 61.37% 43.47%, 62.69% 43.29%, 63.91% 42.74%, 64.93% 44.38%, 66.36% 45.11%, 67.17% 43.29%, 66.66% 40.56%, 66.46% 37.46%, 66.76% 34.54%, 67.48% 31.08%, 67.37% 27.80%, 67.88% 23.06%, 67.07% 19.96%, 66.15% 16.13%, 64.53% 15.77%)' }}
        />
        <img 
          src="/raised-hand.png" 
          alt="Raised hand back-5"
          className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 pointer-events-none"
          style={{ clipPath: 'polygon(61.37% 17.95%, 60.56% 24.33%, 61.78% 25.25%, 61.17% 29.98%, 61.78% 32.90%, 61.47% 36.73%, 61.68% 41.83%, 61.98% 44.20%, 64.02% 43.84%, 66.56% 44.75%, 66.87% 40.01%, 66.76% 36.00%, 68.19% 25.06%, 67.98% 17.04%, 65.24% 14.13%, 63.51% 14.31%)' }}
        />
        <div 
          className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 px-4 py-2 bg-[#0f0f0f]/90 backdrop-blur-md rounded-xl shadow-2xl border border-[#bb9753]/30 flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 scale-95 group-hover:scale-100"
          style={{ left: '64.63%', top: '27.51%' }}
        >
          <span className="font-bold text-[#bb9753] whitespace-nowrap text-sm md:text-base">Ashish Chanchlani</span>
          <span className="text-[10px] md:text-xs text-white/70 mt-1 flex items-center gap-1 font-medium tracking-wide">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg> 
                  PLAY EPISODE
                </span>
        </div>
      </div>

      {/* Person: back-6 */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-10 group">
        <a 
          href="https://www.youtube.com/watch?v=Ys4WqB6KZlU" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute inset-0 w-full h-full pointer-events-auto cursor-pointer"
          style={{ clipPath: 'polygon(77.75% 15.95%, 77.55% 19.41%, 76.53% 20.69%, 75.51% 24.70%, 75.72% 26.70%, 76.02% 28.89%, 75.82% 33.63%, 77.14% 36.55%, 77.75% 39.83%, 77.75% 43.29%, 78.77% 44.38%, 80.19% 44.57%, 79.99% 41.65%, 80.19% 38.73%, 80.40% 33.63%, 80.80% 28.89%, 82.02% 25.61%, 81.31% 19.96%, 80.70% 19.96%, 81.01% 17.23%, 80.29% 15.58%)' }}
        />
        <img 
          src="/raised-hand.png" 
          alt="Raised hand back-6"
          className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 pointer-events-none"
          style={{ clipPath: 'polygon(75.41% 15.22%, 74.19% 21.78%, 74.90% 24.52%, 76.02% 27.25%, 76.02% 29.80%, 76.94% 34.54%, 77.75% 36.73%, 78.06% 44.93%, 80.60% 45.84%, 80.29% 41.29%, 80.70% 36.36%, 81.01% 32.35%, 82.43% 26.16%, 82.43% 19.23%, 81.41% 16.68%, 80.40% 14.31%)' }}
        />
        <div 
          className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 px-4 py-2 bg-[#0f0f0f]/90 backdrop-blur-md rounded-xl shadow-2xl border border-[#bb9753]/30 flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 scale-95 group-hover:scale-100"
          style={{ left: '78.77%', top: '27.18%' }}
        >
          <span className="font-bold text-[#bb9753] whitespace-nowrap text-sm md:text-base">Lt Col Narender Singh Thakur</span>
          <span className="text-[10px] md:text-xs text-white/70 mt-1 flex items-center gap-1 font-medium tracking-wide">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg> 
                  PLAY EPISODE
                </span>
        </div>
      </div>

      {/* Person: middle-6 */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-20 group">
        <a 
          href="https://www.youtube.com/results?search_query=Karan+Johar+Raj+Shamani+FO351" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute inset-0 w-full h-full pointer-events-auto cursor-pointer"
          style={{ clipPath: 'polygon(87.11% 28.16%, 86.19% 30.71%, 86.19% 32.72%, 85.89% 33.63%, 85.28% 33.99%, 83.55% 36.55%, 83.55% 39.83%, 83.75% 45.11%, 83.55% 47.12%, 83.75% 52.22%, 83.65% 54.77%, 83.65% 57.33%, 83.24% 60.06%, 83.55% 62.43%, 84.57% 61.70%, 86.19% 55.32%, 87.92% 55.87%, 89.35% 49.12%, 90.16% 45.48%, 92.09% 39.83%, 91.18% 35.27%, 90.16% 33.99%, 89.65% 28.34%)' }}
        />
        <img 
          src="/raised-hand.png" 
          alt="Raised hand middle-6"
          className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 pointer-events-none"
          style={{ clipPath: 'polygon(83.35% 31.44%, 82.74% 37.82%, 82.94% 42.20%, 84.06% 41.83%, 83.45% 46.02%, 83.65% 50.03%, 84.16% 54.23%, 87.62% 50.95%, 90.67% 50.58%, 91.69% 44.38%, 92.20% 34.91%, 90.77% 33.81%, 90.67% 29.62%, 89.65% 28.71%, 86.09% 27.98%)' }}
        />
        <div 
          className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 px-4 py-2 bg-[#0f0f0f]/90 backdrop-blur-md rounded-xl shadow-2xl border border-[#bb9753]/30 flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 scale-95 group-hover:scale-100"
          style={{ left: '87.67%', top: '41.87%' }}
        >
          <span className="font-bold text-[#bb9753] whitespace-nowrap text-sm md:text-base">Karan Johar</span>
          <span className="text-[10px] md:text-xs text-white/70 mt-1 flex items-center gap-1 font-medium tracking-wide">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg> 
                  PLAY EPISODE
                </span>
        </div>
      </div>

      {/* Person: middle-5 */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-20 group">
        <a 
          href="https://www.youtube.com/watch?v=R878NxqapRA" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute inset-0 w-full h-full pointer-events-auto cursor-pointer"
          style={{ clipPath: 'polygon(70.53% 55.14%, 72.26% 57.14%, 73.07% 60.97%, 74.70% 64.98%, 76.94% 62.61%, 76.22% 53.68%, 77.45% 47.48%, 77.14% 44.93%, 77.45% 41.29%, 77.14% 37.46%, 76.02% 35.09%, 75.61% 32.54%, 75.72% 30.71%, 73.48% 29.62%, 73.07% 31.44%, 72.56% 34.91%, 71.24% 34.91%, 70.83% 45.66%)' }}
        />
        <img 
          src="/raised-hand.png" 
          alt="Raised hand middle-5"
          className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 pointer-events-none"
          style={{ clipPath: 'polygon(70.32% 49.67%, 70.73% 52.59%, 73.07% 53.32%, 76.02% 53.32%, 78.06% 48.03%, 77.34% 37.82%, 76.43% 35.45%, 76.02% 31.26%, 74.60% 28.71%, 71.04% 28.89%, 69.31% 33.45%, 69.31% 36.91%)' }}
        />
        <div 
          className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 px-4 py-2 bg-[#0f0f0f]/90 backdrop-blur-md rounded-xl shadow-2xl border border-[#bb9753]/30 flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 scale-95 group-hover:scale-100"
          style={{ left: '73.99%', top: '43.76%' }}
        >
          <span className="font-bold text-[#bb9753] whitespace-nowrap text-sm md:text-base">Dr. K (Alok Kanojia)</span>
          <span className="text-[10px] md:text-xs text-white/70 mt-1 flex items-center gap-1 font-medium tracking-wide">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg> 
                  PLAY EPISODE
                </span>
        </div>
      </div>

      {/* Person: middle-4 */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-20 group">
        <a 
          href="https://www.youtube.com/watch?v=9QXCkMTbrSk" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute inset-0 w-full h-full pointer-events-auto cursor-pointer"
          style={{ clipPath: 'polygon(54.96% 60.06%, 55.98% 64.07%, 58.12% 66.07%, 60.46% 63.71%, 60.56% 57.87%, 61.57% 49.12%, 61.27% 43.84%, 61.17% 36.00%, 59.44% 30.35%, 57.40% 30.71%, 56.39% 34.54%, 55.67% 39.83%, 54.76% 45.30%)' }}
        />
        <img 
          src="/raised-hand.png" 
          alt="Raised hand middle-4"
          className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 pointer-events-none"
          style={{ clipPath: 'polygon(53.84% 42.38%, 54.76% 33.63%, 55.67% 33.08%, 56.39% 32.90%, 59.24% 29.80%, 60.25% 31.26%, 60.56% 35.09%, 61.17% 38.55%, 61.88% 48.39%, 62.39% 56.96%, 59.54% 64.62%, 56.28% 64.43%, 55.17% 62.06%, 55.06% 50.58%)' }}
        />
        <div 
          className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 px-4 py-2 bg-[#0f0f0f]/90 backdrop-blur-md rounded-xl shadow-2xl border border-[#bb9753]/30 flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 scale-95 group-hover:scale-100"
          style={{ left: '58.17%', top: '44.64%' }}
        >
          <span className="font-bold text-[#bb9753] whitespace-nowrap text-sm md:text-base">Emmanuel Macron</span>
          <span className="text-[10px] md:text-xs text-white/70 mt-1 flex items-center gap-1 font-medium tracking-wide">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg> 
                  PLAY EPISODE
                </span>
        </div>
      </div>

      {/* Person: middle-3 */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-20 group">
        <a 
          href="https://www.youtube.com/watch?v=uLnJy8LddgM" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute inset-0 w-full h-full pointer-events-auto cursor-pointer"
          style={{ clipPath: 'polygon(38.79% 59.33%, 39.09% 63.52%, 41.43% 63.71%, 42.04% 61.34%, 43.87% 63.52%, 45.40% 62.43%, 45.20% 58.97%, 44.69% 53.13%, 44.99% 44.93%, 44.59% 41.65%, 43.47% 35.82%, 42.35% 29.80%, 40.01% 29.07%, 39.70% 32.35%, 39.80% 33.99%, 39.70% 35.09%, 38.58% 35.64%, 38.58% 52.40%)' }}
        />
        <img 
          src="/raised-hand.png" 
          alt="Raised hand middle-3"
          className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 pointer-events-none"
          style={{ clipPath: 'polygon(38.38% 31.63%, 37.26% 34.18%, 37.06% 38.19%, 37.06% 40.19%, 37.97% 42.56%, 38.58% 45.30%, 37.36% 50.76%, 38.79% 52.22%, 38.48% 57.87%, 38.69% 64.62%, 41.74% 64.07%, 44.89% 52.04%, 45.30% 46.57%, 44.99% 41.10%, 42.96% 34.54%, 42.04% 29.98%)' }}
        />
        <div 
          className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 px-4 py-2 bg-[#0f0f0f]/90 backdrop-blur-md rounded-xl shadow-2xl border border-[#bb9753]/30 flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 scale-95 group-hover:scale-100"
          style={{ left: '41.99%', top: '42.93%' }}
        >
          <span className="font-bold text-[#bb9753] whitespace-nowrap text-sm md:text-base">Vikas Divyakirti</span>
          <span className="text-[10px] md:text-xs text-white/70 mt-1 flex items-center gap-1 font-medium tracking-wide">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg> 
                  PLAY EPISODE
                </span>
        </div>
      </div>

      {/* Person: middle-2 */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-20 group">
        <a 
          href="https://www.youtube.com/watch?v=90lLQVZe2Nc" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute inset-0 w-full h-full pointer-events-auto cursor-pointer"
          style={{ clipPath: 'polygon(24.54% 58.24%, 25.15% 62.98%, 27.19% 62.79%, 28.72% 60.61%, 30.65% 58.42%, 30.44% 54.04%, 29.94% 50.03%, 30.85% 47.48%, 30.14% 39.10%, 29.22% 35.45%, 27.80% 34.72%, 27.80% 31.81%, 26.99% 30.90%, 25.76% 30.35%, 24.85% 30.90%, 25.05% 35.09%, 24.14% 37.28%, 23.73% 38.92%, 23.73% 47.30%, 24.34% 50.95%, 25.05% 51.68%)' }}
        />
        <img 
          src="/raised-hand.png" 
          alt="Raised hand middle-2"
          className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 pointer-events-none"
          style={{ clipPath: 'polygon(22.92% 43.29%, 21.39% 40.74%, 22.31% 34.18%, 26.38% 29.44%, 28.00% 31.63%, 28.92% 35.09%, 30.55% 38.19%, 30.85% 45.11%, 31.26% 49.49%, 30.44% 54.04%, 28.10% 54.59%, 27.49% 59.88%, 25.46% 65.16%, 25.05% 58.42%)' }}
        />
        <div 
          className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 px-4 py-2 bg-[#0f0f0f]/90 backdrop-blur-md rounded-xl shadow-2xl border border-[#bb9753]/30 flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 scale-95 group-hover:scale-100"
          style={{ left: '27.29%', top: '43.40%' }}
        >
          <span className="font-bold text-[#bb9753] whitespace-nowrap text-sm md:text-base">Dr. Joe Dispenza</span>
          <span className="text-[10px] md:text-xs text-white/70 mt-1 flex items-center gap-1 font-medium tracking-wide">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg> 
                  PLAY EPISODE
                </span>
        </div>
      </div>

      {/* Person: middle-1 */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-20 group">
        <a 
          href="https://www.youtube.com/watch?v=LqZCfTf0NUs" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute inset-0 w-full h-full pointer-events-auto cursor-pointer"
          style={{ clipPath: 'polygon(12.44% 29.44%, 13.96% 33.99%, 16.20% 35.09%, 17.83% 42.56%, 17.93% 48.58%, 17.32% 49.67%, 18.75% 58.05%, 19.86% 61.88%, 18.75% 62.25%, 16.81% 60.06%, 15.90% 61.34%, 14.17% 56.96%, 13.15% 55.87%, 12.23% 52.04%, 10.40% 48.58%, 9.28% 41.10%, 9.39% 35.45%, 10.50% 35.09%, 10.91% 29.26%)' }}
        />
        <img 
          src="/raised-hand.png" 
          alt="Raised hand middle-1"
          className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 pointer-events-none"
          style={{ clipPath: 'polygon(11.62% 27.43%, 14.47% 29.62%, 17.12% 35.27%, 19.86% 47.12%, 19.76% 57.69%, 19.86% 62.25%, 16.20% 63.16%, 15.29% 57.14%, 13.15% 55.50%, 10.91% 49.31%, 7.66% 44.93%, 5.11% 36.18%, 8.27% 28.16%)' }}
        />
        <div 
          className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 px-4 py-2 bg-[#0f0f0f]/90 backdrop-blur-md rounded-xl shadow-2xl border border-[#bb9753]/30 flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 scale-95 group-hover:scale-100"
          style={{ left: '14.57%', top: '42.45%' }}
        >
          <span className="font-bold text-[#bb9753] whitespace-nowrap text-sm md:text-base">Vijay Mallya</span>
          <span className="text-[10px] md:text-xs text-white/70 mt-1 flex items-center gap-1 font-medium tracking-wide">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg> 
                  PLAY EPISODE
                </span>
        </div>
      </div>

      {/* Person: front-1 */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-30 group">
        <a 
          href="https://www.youtube.com/results?search_query=Aamir+Khan+Raj+Shamani+FO362" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute inset-0 w-full h-full pointer-events-auto cursor-pointer"
          style={{ clipPath: 'polygon(9.18% 49.85%, 8.06% 53.50%, 8.78% 57.33%, 7.55% 60.06%, 7.45% 64.25%, 9.49% 72.64%, 10.81% 80.84%, 10.71% 85.76%, 11.12% 89.04%, 13.46% 88.13%, 14.17% 85.94%, 16.00% 85.03%, 16.20% 87.40%, 19.56% 87.77%, 19.66% 79.93%, 16.71% 66.80%, 15.59% 62.25%, 14.17% 58.42%, 12.95% 56.60%, 12.34% 55.50%, 11.22% 51.13%)' }}
        />
        <img 
          src="/raised-hand.png" 
          alt="Raised hand front-1"
          className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 pointer-events-none"
          style={{ clipPath: 'polygon(9.18% 49.67%, 7.76% 55.32%, 6.23% 50.95%, 3.38% 52.22%, 3.99% 59.70%, 6.74% 69.90%, 8.98% 83.94%, 9.49% 91.41%, 13.86% 91.23%, 18.95% 87.40%, 19.97% 82.84%, 17.93% 73.37%, 17.42% 70.27%, 16.61% 64.43%, 15.29% 59.70%, 12.64% 55.87%, 11.42% 52.22%)' }}
        />
        <div 
          className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 px-4 py-2 bg-[#0f0f0f]/90 backdrop-blur-md rounded-xl shadow-2xl border border-[#bb9753]/30 flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 scale-95 group-hover:scale-100"
          style={{ left: '13.56%', top: '65.53%' }}
        >
          <span className="font-bold text-[#bb9753] whitespace-nowrap text-sm md:text-base">Aamir Khan</span>
          <span className="text-[10px] md:text-xs text-white/70 mt-1 flex items-center gap-1 font-medium tracking-wide">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg> 
                  PLAY EPISODE
                </span>
        </div>
      </div>

      {/* Person: front-2 */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-30 group">
        <a 
          href="https://www.youtube.com/watch?v=etgQjtdNEtc" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute inset-0 w-full h-full pointer-events-auto cursor-pointer"
          style={{ clipPath: 'polygon(30.14% 86.49%, 30.95% 82.12%, 30.75% 79.02%, 30.44% 74.64%, 28.92% 64.07%, 29.22% 60.97%, 30.65% 58.60%, 30.75% 53.32%, 31.77% 52.04%, 33.60% 52.95%, 33.60% 56.05%, 35.33% 57.87%, 36.75% 62.06%, 36.75% 66.62%, 36.55% 68.63%, 36.85% 75.19%, 38.28% 85.03%, 38.58% 88.31%, 35.43% 86.49%, 33.90% 86.67%, 32.17% 87.40%, 30.65% 89.59%)' }}
        />
        <img 
          src="/raised-hand.png" 
          alt="Raised hand front-2"
          className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 pointer-events-none"
          style={{ clipPath: 'polygon(28.51% 55.69%, 27.70% 59.33%, 27.49% 68.08%, 28.92% 71.91%, 29.02% 79.20%, 30.14% 89.22%, 32.99% 88.49%, 36.85% 88.13%, 39.19% 86.85%, 38.58% 79.20%, 36.55% 63.52%, 36.65% 59.15%, 35.12% 55.14%, 33.90% 52.04%, 32.38% 50.95%, 31.36% 51.68%, 30.55% 54.59%)' }}
        />
        <div 
          className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 px-4 py-2 bg-[#0f0f0f]/90 backdrop-blur-md rounded-xl shadow-2xl border border-[#bb9753]/30 flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 scale-95 group-hover:scale-100"
          style={{ left: '33.75%', top: '67.06%' }}
        >
          <span className="font-bold text-[#bb9753] whitespace-nowrap text-sm md:text-base">Simon Sinek</span>
          <span className="text-[10px] md:text-xs text-white/70 mt-1 flex items-center gap-1 font-medium tracking-wide">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg> 
                  PLAY EPISODE
                </span>
        </div>
      </div>

      {/* Person: front-3 */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-30 group">
        <div 
          className="absolute inset-0 w-full h-full pointer-events-auto cursor-pointer"
          style={{ clipPath: 'polygon(48.15% 51.13%, 48.15% 54.23%, 46.82% 55.50%, 46.11% 60.06%, 45.70% 64.07%, 46.93% 67.17%, 46.62% 69.90%, 47.23% 74.46%, 46.93% 79.75%, 46.21% 86.49%, 47.03% 87.95%, 48.96% 87.58%, 51.91% 88.31%, 55.98% 87.77%, 53.74% 82.84%, 53.74% 77.19%, 53.84% 73.00%, 53.64% 66.26%, 54.96% 63.89%, 53.94% 56.96%, 52.62% 54.23%, 51.91% 52.77%, 51.81% 49.12%, 50.28% 48.03%, 48.45% 48.58%)' }}
        />
        <img 
          src="/raised-hand.png" 
          alt="Raised hand front-3"
          className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 pointer-events-none"
          style={{ clipPath: 'polygon(44.89% 54.77%, 45.91% 49.67%, 47.03% 49.49%, 49.16% 47.85%, 50.38% 47.48%, 52.72% 49.67%, 52.32% 53.50%, 53.94% 55.50%, 54.86% 63.16%, 54.56% 67.53%, 53.44% 66.99%, 53.64% 72.45%, 53.44% 77.74%, 54.56% 83.21%, 54.05% 87.04%, 51.61% 89.59%, 50.89% 85.03%, 48.76% 88.13%, 45.40% 89.04%, 46.11% 81.20%, 47.13% 72.82%, 45.20% 67.35%, 46.82% 62.61%, 45.20% 61.34%, 43.87% 60.06%)' }}
        />
        <div 
          className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 px-4 py-2 bg-[#0f0f0f]/90 backdrop-blur-md rounded-xl shadow-2xl border border-[#bb9753]/30 flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 scale-95 group-hover:scale-100"
          style={{ left: '50.84%', top: '64.14%' }}
        >
          <span className="font-bold text-[#bb9753] whitespace-nowrap text-sm md:text-base">Raj Shamani</span>
          <span className="text-[10px] text-gray-400 uppercase tracking-widest mt-0.5">Host</span>
        </div>
      </div>

      {/* Person: front-4 */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-30 group">
        <a 
          href="https://www.youtube.com/results?search_query=Bill+Gates+Raj+Shamani+FO335" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute inset-0 w-full h-full pointer-events-auto cursor-pointer"
          style={{ clipPath: 'polygon(62.69% 83.21%, 63.30% 89.22%, 65.44% 89.22%, 67.17% 87.58%, 68.49% 88.68%, 70.12% 88.49%, 70.12% 82.30%, 71.34% 71.73%, 72.56% 65.16%, 72.05% 57.87%, 70.22% 55.87%, 69.61% 50.03%, 67.48% 50.03%, 67.07% 52.04%, 67.07% 52.95%, 65.14% 54.23%, 65.03% 55.87%, 64.12% 60.61%, 63.20% 74.64%, 63.61% 78.65%)' }}
        />
        <img 
          src="/raised-hand.png" 
          alt="Raised hand front-4"
          className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 pointer-events-none"
          style={{ clipPath: 'polygon(62.80% 60.06%, 64.22% 56.96%, 64.73% 53.32%, 64.83% 51.49%, 67.07% 52.40%, 66.97% 54.23%, 68.70% 49.67%, 70.02% 50.95%, 70.83% 54.77%, 72.97% 58.78%, 72.46% 66.44%, 71.34% 76.65%, 71.04% 85.03%, 70.02% 88.68%, 66.66% 88.49%, 63.71% 88.13%, 63.61% 82.30%, 64.12% 73.18%, 63.20% 67.90%, 64.53% 63.89%, 63.10% 62.79%)' }}
        />
        <div 
          className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 px-4 py-2 bg-[#0f0f0f]/90 backdrop-blur-md rounded-xl shadow-2xl border border-[#bb9753]/30 flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 scale-95 group-hover:scale-100"
          style={{ left: '67.63%', top: '65.71%' }}
        >
          <span className="font-bold text-[#bb9753] whitespace-nowrap text-sm md:text-base">Bill Gates</span>
          <span className="text-[10px] md:text-xs text-white/70 mt-1 flex items-center gap-1 font-medium tracking-wide">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg> 
                  PLAY EPISODE
                </span>
        </div>
      </div>

      {/* Person: front-5 */}
      <div className="absolute inset-0 w-full h-full pointer-events-none z-30 group">
        <a 
          href="https://youtu.be/PZBBDdlA5uA" 
          target="_blank" 
          rel="noopener noreferrer"
          className="absolute inset-0 w-full h-full pointer-events-auto cursor-pointer"
          style={{ clipPath: 'polygon(82.02% 83.94%, 81.62% 88.13%, 83.55% 89.59%, 85.38% 86.85%, 87.11% 90.68%, 89.45% 90.32%, 89.65% 87.95%, 88.64% 84.85%, 89.96% 78.11%, 91.48% 72.45%, 92.91% 65.16%, 93.82% 58.78%, 91.79% 56.78%, 91.69% 53.68%, 90.26% 50.58%, 89.25% 50.95%, 88.43% 54.23%, 88.33% 56.41%, 86.50% 57.33%, 85.89% 58.05%, 85.08% 61.52%, 84.16% 63.16%, 84.26% 66.44%, 83.55% 71.73%, 83.85% 74.10%)' }}
        />
        <img 
          src="/raised-hand.png" 
          alt="Raised hand front-5"
          className="absolute inset-0 w-full h-full object-contain opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100 pointer-events-none"
          style={{ clipPath: 'polygon(83.85% 55.69%, 86.19% 52.59%, 88.43% 51.31%, 91.69% 51.68%, 91.38% 55.14%, 93.52% 57.69%, 93.82% 61.88%, 91.38% 71.73%, 89.55% 80.84%, 89.45% 85.21%, 89.35% 90.14%, 85.48% 90.68%, 85.89% 86.13%, 83.35% 89.04%, 81.31% 87.58%, 82.02% 79.20%, 83.04% 69.54%, 84.36% 64.62%, 81.21% 61.70%)' }}
        />
        <div 
          className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 z-50 px-4 py-2 bg-[#0f0f0f]/90 backdrop-blur-md rounded-xl shadow-2xl border border-[#bb9753]/30 flex flex-col items-center justify-center transform -translate-x-1/2 -translate-y-1/2 scale-95 group-hover:scale-100"
          style={{ left: '87.72%', top: '66.62%' }}
        >
          <span className="font-bold text-[#bb9753] whitespace-nowrap text-sm md:text-base">Rakesh Maria</span>
          <span className="text-[10px] md:text-xs text-white/70 mt-1 flex items-center gap-1 font-medium tracking-wide">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg> 
                  PLAY EPISODE
                </span>
        </div>
      </div>

    </div>
  );
}
