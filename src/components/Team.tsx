import { TestimonialCarousel } from './ui/profile-card-testimonial-carousel';
import { Users } from 'lucide-react';
import { motion } from 'motion/react';

export default function Team() {
  const testimonials = [
    {
      name: "Neeraj Kumawat",
      title: "CTO & Co-Founder, House of X",
      description: "He co-founded House of X with Raj to help creators launch their own direct-to-consumer (D2C) brands. A technical visionary who scales community ideas into massive e-commerce infrastructures.",
      imageUrl: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=600&q=80",
      linkedinUrl: "https://linkedin.com",
      twitterUrl: "https://twitter.com",
    },
    {
      name: "Anik Jain",
      title: "Brand Architect, DZ!NR",
      description: "The visual psychology and branding behind his content and House of X are heavily shaped by Anik Jain. He acts as a graphic designer and brand architect, ensuring every visual piece is deeply connected with the audience's psychology.",
      imageUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
      linkedinUrl: "https://linkedin.com",
    },
    {
      name: "Content & Production Team",
      title: "The Backbone",
      description: "Raj has built a robust internal team handling the end-to-end continuous process of content creation. Video editors, scriptwriters, and upload managers who constantly analyze video performance and audience feedback.",
      imageUrl: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80",
      githubUrl: "https://github.com",
    }
  ];

  return (
    <section className="py-24 px-6 relative bg-[#050505]">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 text-center"
        >
          <div className="flex justify-center mb-6">
            <Users className="w-12 h-12 text-[#d8b068]" />
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-[#d8b068]">
            The Team <span className="text-white">Behind the Brand</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            While Raj is the face of his brand, he operates with a dedicated team and strategic partners.
          </p>
        </motion.div>

        <TestimonialCarousel testimonials={testimonials} />
      </div>
    </section>
  );
}
