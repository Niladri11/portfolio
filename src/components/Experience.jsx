import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    id: "01",
    role: "CYBERSECURITY INTERN",
    company: "IIT Jammu",
    date: "Jun 2025 – Aug 2025",
    bullets: [
      "Scanned Linux lab networks with Nmap and analyzed traffic in Wireshark to identify misconfigurations.",
      "Built a controlled MITM lab with one Kali attacker and one Ubuntu victim to demonstrate ARP spoofing."
    ],
    bgImage: "/images/experience/iit_jammu_real.png"
  },
  {
    id: "02",
    role: "AI / ML INTERN",
    company: "IIT Jammu",
    date: "Jan 2026 – May 2026",
    bullets: [
      "Architected and deployed an automated Telegram bot using n8n workflows for AI-driven interaction and data processing.",
      "Contributed to an Open SDK project for automated log analysis, instantly diagnosing production issues and identifying root causes."
    ],
    bgImage: "/images/experience/entrance.jpg"
  }
];

const Experience = () => {
  return (
    <section id="experience" className="bg-[#050505] pt-32 pb-32 px-6 md:px-12 w-full relative font-sans border-t border-white/5 overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-[radial-gradient(circle,rgba(200,169,107,0.03)_0%,rgba(0,0,0,0)_60%)] pointer-events-none z-0"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 relative"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-[#F5F1E8] tracking-tight">
            Work Experience
          </h2>
        </motion.div>

        {/* Timeline Container */}
        <div className="flex flex-col relative pl-4 md:pl-0">
          {/* Continuous vertical line for desktop */}
          <div className="hidden md:block absolute left-[8px] top-4 bottom-12 w-[1px] bg-gradient-to-b from-[#C8A96B]/50 via-[#C8A96B]/20 to-transparent z-0"></div>
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="relative flex flex-col md:flex-row mb-12 group"
            >
              
              {/* Timeline dot & date (Desktop) */}
              <div className="hidden md:flex shrink-0 w-56 relative z-10 pt-6">
                <div className="absolute left-[4px] top-[30px] w-2.5 h-2.5 rounded-full bg-[#F5F1E8] shadow-[0_0_10px_rgba(245,241,232,0.8)] transform -translate-x-[0.5px]"></div>
                <div className="pl-8 pt-0.5">
                  <span className="text-[#F5F1E8] text-sm font-medium tracking-wide">{exp.date}</span>
                </div>
              </div>

              {/* Mobile Timeline dot & date */}
              <div className="md:hidden flex items-center gap-4 mb-4 relative z-10">
                <div className="w-2.5 h-2.5 rounded-full bg-[#F5F1E8] shadow-[0_0_10px_rgba(245,241,232,0.8)]"></div>
                <span className="text-[#F5F1E8] text-sm font-medium tracking-wide">{exp.date}</span>
              </div>

              {/* Experience Card */}
              <div className="flex-1 relative border border-[#C8A96B]/20 rounded-xl overflow-hidden bg-[#0A0A0A]/60 backdrop-blur-xl shadow-lg group-hover:border-[#C8A96B]/40 transition-colors duration-500">
                
                {/* Visual Style: Background Image on Right with Fade */}
                <div className="absolute top-0 right-0 w-full h-full z-0 opacity-30 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none">
                  {/* Heavy linear gradient to blend left side into black seamlessly */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/70 to-transparent z-10"></div>
                  {/* Extra fade on the far left to guarantee no harsh line */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A] to-transparent w-1/2 z-10"></div>
                  {/* Top/Bottom subtle vignette */}
                  <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-transparent to-[#0A0A0A]/60 z-10"></div>
                  <img 
                    src={exp.bgImage} 
                    alt="IIT Jammu Background" 
                    className="w-full h-full object-cover mix-blend-luminosity grayscale-[0.2] brightness-90 blur-[4px] group-hover:blur-0 group-hover:scale-105 transition-all duration-1000 ease-out"
                  />
                </div>

                {/* Card Content */}
                <div className="relative z-20 w-full md:w-3/4 p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-[#F5F1E8] mb-1 group-hover:text-[#C8A96B] transition-colors">{exp.role}</h3>
                  <p className="text-[#C8A96B] font-medium mb-5 text-sm md:text-base">{exp.company}</p>
                  
                  <ul className="flex flex-col gap-3">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="text-sm text-[#AAA59C] flex items-start gap-3 leading-relaxed">
                        <span className="text-[#C8A96B] mt-[3px] text-xs">◆</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;
