"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Twitter,
  Youtube,
  Linkedin,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Testimonial {
  name: string;
  title: string;
  description: string;
  imageUrl: string;
  githubUrl?: string;
  twitterUrl?: string;
  youtubeUrl?: string;
  linkedinUrl?: string;
}

export interface TestimonialCarouselProps {
  className?: string;
  testimonials: Testimonial[];
}

export function TestimonialCarousel({ className, testimonials }: TestimonialCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!testimonials || testimonials.length === 0) return null;

  const handleNext = () =>
    setCurrentIndex((index) => (index + 1) % testimonials.length);
  const handlePrevious = () =>
    setCurrentIndex(
      (index) => (index - 1 + testimonials.length) % testimonials.length
    );

  const currentTestimonial = testimonials[currentIndex];

  const socialIcons = [
    { icon: Github, url: currentTestimonial.githubUrl, label: "GitHub" },
    { icon: Twitter, url: currentTestimonial.twitterUrl, label: "Twitter" },
    { icon: Youtube, url: currentTestimonial.youtubeUrl, label: "YouTube" },
    { icon: Linkedin, url: currentTestimonial.linkedinUrl, label: "LinkedIn" },
  ].filter(social => social.url);

  return (
    <div className={cn("w-full max-w-5xl mx-auto px-4 text-white", className)}>
      {/* Desktop layout */}
      <div className='hidden md:flex relative items-center'>
        {/* Avatar */}
        <div className='w-[470px] h-[470px] rounded-3xl overflow-hidden bg-[#111] border border-white/10 shadow-[0_0_50px_rgba(216,176,104,0.15)] flex-shrink-0'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentTestimonial.imageUrl}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.05 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className='w-full h-full'
            >
              <img
                src={currentTestimonial.imageUrl}
                alt={currentTestimonial.name}
                className='w-full h-full object-cover filter grayscale select-none'
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card */}
        <div className='bg-[#050505]/95 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-10 ml-[-80px] z-10 max-w-xl flex-1'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentTestimonial.name}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className='mb-6'>
                <h2 className='text-3xl font-bold text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#d8b068]'>
                  {currentTestimonial.name}
                </h2>

                <p className='text-sm font-semibold tracking-wider uppercase text-[#d8b068] mb-6'>
                  {currentTestimonial.title}
                </p>
              </div>

              <p className='text-gray-300 text-lg leading-relaxed mb-8 font-light italic'>
                "{currentTestimonial.description}"
              </p>

              {socialIcons.length > 0 && (
                <div className='flex space-x-4'>
                  {socialIcons.map(({ icon: IconComponent, url, label }) => (
                    <a
                      key={label}
                      href={url || "#"}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center transition-all hover:bg-[#d8b068] hover:text-[#050505] hover:scale-105 cursor-pointer text-white'
                      aria-label={label}
                    >
                      <IconComponent className='w-5 h-5' />
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Mobile layout */}
      <div className='md:hidden max-w-sm mx-auto text-center bg-transparent mt-12'>
        {/* Avatar */}
        <div className='w-[280px] h-[280px] mx-auto bg-[#111] border border-white/10 rounded-3xl overflow-hidden mb-6 shadow-xl'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentTestimonial.imageUrl}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className='w-full h-full'
            >
              <img
                src={currentTestimonial.imageUrl}
                alt={currentTestimonial.name}
                className='w-full h-full object-cover filter grayscale'
                draggable={false}
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Card content */}
        <div className='px-4 relative z-10'>
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentTestimonial.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="bg-[#050505] p-6 rounded-2xl border border-white/10 shadow-lg -mt-16 relative"
            >
              <h2 className='text-2xl font-bold text-white mb-1'>
                {currentTestimonial.name}
              </h2>
              
              <p className='text-xs font-semibold tracking-wider uppercase text-[#d8b068] mb-4'>
                {currentTestimonial.title}
              </p>
              
              <p className='text-gray-300 text-base leading-relaxed mb-6 italic'>
                "{currentTestimonial.description}"
              </p>
              
              {socialIcons.length > 0 && (
                <div className='flex justify-center space-x-4'>
                  {socialIcons.map(({ icon: IconComponent, url, label }) => (
                    <a
                      key={label}
                      href={url || "#"}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center transition-colors hover:bg-[#d8b068] hover:text-black cursor-pointer text-white'
                      aria-label={label}
                    >
                      <IconComponent className='w-4 h-4' />
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Bottom navigation */}
      <div className='flex justify-center items-center gap-6 mt-12 relative z-20'>
        {/* Previous */}
        <button
          onClick={handlePrevious}
          aria-label='Previous'
          className='w-12 h-12 rounded-full bg-[#111] border border-white/10 shadow-md flex items-center justify-center hover:bg-white/10 hover:border-[#d8b068] transition-all cursor-pointer group'
        >
          <ChevronLeft className='w-6 h-6 text-white group-hover:text-[#d8b068]' />
        </button>

        {/* Dots */}
        <div className='flex gap-3'>
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={cn(
                "h-2 rounded-full transition-all duration-300 cursor-pointer",
                index === currentIndex
                  ? "bg-[#d8b068] w-6"
                  : "bg-white/20 hover:bg-white/40 w-2"
              )}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Next */}
        <button
          onClick={handleNext}
          aria-label='Next'
          className='w-12 h-12 rounded-full bg-[#111] border border-white/10 shadow-md flex items-center justify-center hover:bg-white/10 hover:border-[#d8b068] transition-all cursor-pointer group'
        >
          <ChevronRight className='w-6 h-6 text-white group-hover:text-[#d8b068]' />
        </button>
      </div>
    </div>
  );
}
