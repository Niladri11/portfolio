import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  return (
    <section id="education" className="bg-[#050505] pt-24 pb-32 px-6 md:px-12 w-full relative font-sans border-t border-white/5 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(200,169,107,0.03)_0%,rgba(0,0,0,0)_60%)] pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-12 relative"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="text-[10px] font-mono text-[#C8A96B] tracking-[0.2em]">03.</span>
            <div className="h-[1px] w-12 bg-[#C8A96B]/30"></div>
            <span className="text-[10px] font-mono text-[#AAA59C] tracking-[0.2em] uppercase">ACADEMICS</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-[#F5F1E8] tracking-tight">
            Education
          </h2>
        </motion.div>

        {/* Education Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="relative border border-[#C8A96B]/20 rounded-xl overflow-hidden bg-[#0A0A0A]/60 backdrop-blur-xl shadow-[0_0_30px_rgba(200,169,107,0.03)] hover:shadow-[0_0_40px_rgba(200,169,107,0.08)] hover:border-[#C8A96B]/40 transition-all duration-500 group flex flex-col md:flex-row items-center md:items-stretch gap-0 md:gap-12 p-1"
        >
          {/* Subtle Background Detail inside card */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(200,169,107,0.06)_0%,transparent_60%)] pointer-events-none"></div>

          {/* Logo Section */}
          <div className="w-full md:w-[35%] shrink-0 bg-[#050505] p-12 flex items-center justify-center border-b md:border-b-0 md:border-r border-[#C8A96B]/10 relative z-10">
            <div className="w-32 h-32 md:w-40 md:h-40 relative flex items-center justify-center group-hover:scale-105 transition-transform duration-700 ease-out">
              <div className="absolute inset-0 bg-[#C8A96B]/10 rounded-full blur-xl group-hover:bg-[#C8A96B]/20 transition-colors duration-700"></div>
              <img 
                src="/images/tnu_logo.png" 
                alt="The Neotia University" 
                className="w-full h-full object-contain filter brightness-0 invert drop-shadow-[0_0_20px_rgba(200,169,107,0.6)] group-hover:drop-shadow-[0_0_30px_rgba(200,169,107,1)] transition-all duration-700 relative z-10"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left p-8 md:p-12 relative z-10">
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#F5F1E8] mb-2 tracking-tight group-hover:text-[#C8A96B] transition-colors duration-500">
              The Neotia University
            </h3>
            <p className="text-sm md:text-base text-[#AAA59C] uppercase tracking-widest font-mono mb-10 border-b border-[#C8A96B]/20 pb-4 inline-block">
              Bachelor of Technology (B.Tech)
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-16 w-full">
              
              <div className="flex flex-col gap-2 relative">
                <div className="absolute -left-4 top-1.5 w-1.5 h-1.5 bg-[#C8A96B]/40 rounded-[1px] transform rotate-45 group-hover:bg-[#C8A96B] group-hover:shadow-[0_0_10px_rgba(200,169,107,0.8)] transition-all duration-300 hidden sm:block"></div>
                <span className="text-[10px] font-mono text-[#C8A96B] tracking-[0.2em] uppercase">Academic Progress</span>
                <span className="text-2xl font-bold text-[#F5F1E8]">7th Semester</span>
              </div>

              <div className="flex flex-col gap-2 relative">
                <div className="absolute -left-4 top-1.5 w-1.5 h-1.5 bg-[#C8A96B]/40 rounded-[1px] transform rotate-45 group-hover:bg-[#C8A96B] group-hover:shadow-[0_0_10px_rgba(200,169,107,0.8)] transition-all duration-300 hidden sm:block"></div>
                <span className="text-[10px] font-mono text-[#C8A96B] tracking-[0.2em] uppercase">Current CGPA</span>
                <span className="text-2xl font-bold text-[#F5F1E8]">8.37 <span className="text-lg text-[#AAA59C] font-normal">/ 10.0</span></span>
              </div>

            </div>
          </div>
          
        </motion.div>

      </div>
    </section>
  );
};

export default Education;
