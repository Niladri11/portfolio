import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const Contact = () => {
  return (
    <section id="contact" className="bg-[#050505] pt-40 pb-40 px-6 md:px-12 w-full relative font-sans border-t border-white/5 overflow-hidden flex items-center justify-center min-h-[70vh]">
      
      {/* Background Aura */}
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(200,169,107,0.05)_0%,rgba(0,0,0,0)_70%)] pointer-events-none z-0"></div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center text-center">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="h-[1px] w-8 bg-[#C8A96B]/50"></div>
            <span className="text-[10px] font-mono text-[#AAA59C] tracking-[0.2em] uppercase">04. Next Steps</span>
            <div className="h-[1px] w-8 bg-[#C8A96B]/50"></div>
          </div>
          
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#F5F1E8] mb-8 tracking-tight uppercase leading-none">
            Get In Touch
          </h2>
          
          <p className="text-[#AAA59C] text-sm md:text-base max-w-xl leading-relaxed mb-16">
            I am currently open to new opportunities, freelance projects, and exciting collaborations. My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <a 
            href={`mailto:${personalInfo.emails.primary}`}
            className="group relative inline-flex items-center justify-center px-10 py-5 font-bold tracking-widest text-[#F5F1E8] uppercase overflow-hidden border border-[#C8A96B]/30 hover:border-[#C8A96B] rounded-sm transition-all duration-500 bg-[#0A0A0A] shadow-[0_0_20px_rgba(200,169,107,0.05)] hover:shadow-[0_0_30px_rgba(200,169,107,0.15)]"
          >
            <span className="absolute inset-0 w-full h-full bg-[#C8A96B]/5 group-hover:bg-[#C8A96B]/10 transition-colors duration-500"></span>
            <span className="relative z-10 flex items-center gap-4">
              Say Hello
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform text-[#C8A96B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
          
          <p className="mt-12 text-[10px] font-mono text-[#AAA59C]/50 tracking-widest uppercase flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96B]/50"></span>
            Strictly legitimate inquiries only. No automated spam.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
