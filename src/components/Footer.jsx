import React from 'react';
import { motion } from 'framer-motion';
import { personalInfo, socialLinks, footerContent } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-[#000000] text-[#F5F1E8] pt-32 pb-12 px-6 md:px-12 w-full relative overflow-hidden flex flex-col justify-between border-t border-white/5">
      
      {/* Golden top border fade */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-[#C8A96B]/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto w-full flex flex-col items-center justify-center pb-32 relative z-10">
        
        {/* Unique Animated Monogram / Name */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative group cursor-pointer text-center"
        >
          <h2 className="text-[16vw] md:text-[10vw] font-black tracking-tighter uppercase leading-none text-transparent bg-clip-text bg-gradient-to-b from-[#F5F1E8] to-[#F5F1E8]/10 group-hover:to-[#C8A96B]/60 transition-all duration-1000 select-none drop-shadow-[0_0_30px_rgba(200,169,107,0.05)]">
            {personalInfo.brandName}
          </h2>
          
          {/* Glow effect behind text */}
          <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full h-full bg-[#C8A96B]/0 group-hover:bg-[#C8A96B]/5 blur-[100px] transition-all duration-1000 -z-10 rounded-full scale-150 pointer-events-none"></div>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 text-[#C8A96B] font-mono text-[10px] md:text-xs tracking-[0.4em] uppercase opacity-70"
        >
          {personalInfo.title}
        </motion.p>
      </div>

      {/* Bottom Minimalist Bar */}
      <div className="max-w-7xl mx-auto w-full flex flex-col md:flex-row justify-between items-center gap-8 pt-8 border-t border-[#C8A96B]/10 font-mono text-[9px] md:text-[10px] tracking-widest uppercase text-[#AAA59C] relative z-10">
        
        <div className="text-center md:text-left">
          {footerContent.copyright}
        </div>

        <div className="flex gap-8">
          <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#C8A96B] hover:shadow-[0_0_10px_rgba(200,169,107,0.5)] transition-all duration-300">GitHub</a>
          <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#C8A96B] hover:shadow-[0_0_10px_rgba(200,169,107,0.5)] transition-all duration-300">LinkedIn</a>
          <a href={personalInfo.resumeUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#C8A96B] hover:shadow-[0_0_10px_rgba(200,169,107,0.5)] transition-all duration-300">Resume</a>
        </div>

        <div className="hidden md:block">
          Based in {personalInfo.location.split(',')[0]}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
