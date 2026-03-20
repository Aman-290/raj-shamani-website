import React, { ReactNode } from 'react';

const CardCanvas = ({ children, className = "" }: {children: ReactNode, className?: string}) => {
  return (
    <div className={`relative w-full h-full flex items-center justify-center p-8 overflow-hidden rounded-[2rem] bg-black shadow-[inset_0_0_100px_rgba(255,255,255,0.05)] ${className}`}>
        
      {/* Background glow texture */}
      <div className="absolute inset-0 bg-[#d8b068]/5 opacity-30 mix-blend-screen pointer-events-none"></div>

      {children}
    </div>
  );
};

const Card = ({ children, className = "" }: {children: ReactNode, className?: string}) => {
  return (
    <div className={`relative isolate z-10 p-[1px] rounded-3xl overflow-hidden bg-gradient-to-br from-[#d8b068]/40 via-transparent to-[#d8b068]/10 shadow-2xl transition-all duration-500 hover:shadow-[#d8b068]/20 hover:-translate-y-1 ${className}`}>
      
      {/* Glint effects */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#d8b068] to-transparent opacity-50"></div>
      
      <div className="relative bg-[#050505]/90 backdrop-blur-2xl rounded-[calc(1.5rem-1px)] h-full">
        {children}
      </div>
    </div>
  );
};

export { CardCanvas, Card };
