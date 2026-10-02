import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const certData = [
  {
    id: 1,
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "08 Feb 2025",
    type: "image",
    file: "/images/certifications/cisco_cybersecurity.png",
    meta: "Verified Completion",
    bgStyle: "from-[#C8A96B]/10 to-transparent"
  },
  {
    id: 2,
    title: "Ethical Hacking & Cyber Security",
    issuer: "IIT Jammu & Techible",
    date: "16 Jun 2025 – 01 Aug 2025",
    type: "pdf",
    file: "/images/certifications/iit_jammu_cybersecurity.pdf",
    meta: "Summer School 2025",
    bgStyle: "from-[#1a1a1a] to-[#0A0A0A]"
  },
  {
    id: 3,
    title: "AI (LLMs, GenAI, Automation)",
    issuer: "IIT Jammu & Techible",
    date: "10 Jun 2026 – 10 Aug 2026",
    type: "pdf",
    file: "/images/certifications/iit_jammu_ai.pdf",
    meta: "Summer School 2026",
    bgStyle: "from-[#1a1a1a] to-[#0A0A0A]"
  }
];

const CertCard = ({ cert }) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e) => {
    const { currentTarget, clientX, clientY } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = ((clientY - top) / height - 0.5) * -15; // less extreme tilt for smaller cards
    const y = ((clientX - left) / width - 0.5) * 15;
    mouseX.set(y);
    mouseY.set(x);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <div style={{ perspective: 1200 }} className="w-full relative z-20 h-full flex flex-col">
      <a 
        href={cert.file}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full outline-none focus:outline-none"
      >
        <motion.div 
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{ 
            rotateX: springY,
            rotateY: springX,
            transformStyle: "preserve-3d"
          }}
          className="w-full h-full relative rounded-xl bg-[#0A0A0A]/60 backdrop-blur-xl border border-[#C8A96B]/20 p-4 shadow-[0_0_30px_rgba(200,169,107,0.03)] hover:shadow-[0_0_60px_rgba(200,169,107,0.1)] hover:border-[#C8A96B]/50 transition-colors duration-500 group cursor-pointer flex flex-col"
        >
          {/* Floating Meta Tag */}
          <div 
            style={{ transform: "translateZ(30px)" }}
            className="absolute -top-3 -right-3 bg-[#C8A96B] text-[#050505] px-3 py-1.5 font-black tracking-widest uppercase text-[9px] shadow-2xl z-30 pointer-events-none transition-transform duration-300"
          >
            {cert.meta}
          </div>

          {/* Card Media Area */}
          <div 
            style={{ transform: "translateZ(20px)" }}
            className={`relative w-full aspect-[4/3] rounded-md shadow-inner overflow-hidden border border-white/10 flex items-center justify-center bg-gradient-to-br ${cert.bgStyle}`}
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-20 mix-blend-overlay"></div>
            
            {cert.type === 'image' ? (
              <img 
                src={cert.file} 
                alt={cert.title} 
                className="w-full h-full object-cover relative z-0 group-hover:scale-105 transition-transform duration-700"
              />
            ) : (
              <div className="flex flex-col items-center justify-center gap-4 text-[#F5F1E8] relative z-10 w-full h-full px-6 text-center group-hover:scale-105 transition-transform duration-700">
                <div className="w-16 h-16 rounded-full bg-[#050505] border border-[#C8A96B]/30 flex items-center justify-center shadow-[0_0_20px_rgba(200,169,107,0.2)]">
                  <svg className="w-8 h-8 text-[#C8A96B]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-bold text-sm text-[#F5F1E8] uppercase tracking-wider mb-1">{cert.issuer}</p>
                  <p className="text-[10px] font-mono text-[#AAA59C] uppercase tracking-widest border border-white/10 inline-block px-3 py-1 rounded-full bg-white/5 backdrop-blur-md">Official PDF</p>
                </div>
              </div>
            )}
            
            {/* View Hover Overlay */}
            <div className="absolute inset-0 bg-[#050505]/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10">
              <span className="font-mono text-[10px] tracking-widest text-[#F5F1E8] uppercase border border-[#C8A96B] px-6 py-2 rounded-sm hover:bg-[#C8A96B] hover:text-[#050505] transition-colors duration-300">
                View Certificate
              </span>
            </div>
          </div>

          {/* Details Section */}
          <div 
            style={{ transform: "translateZ(10px)" }}
            className="mt-6 flex flex-col gap-2 flex-grow justify-end"
          >
            <h3 className="text-lg md:text-xl font-black text-[#F5F1E8] leading-tight uppercase tracking-wide group-hover:text-[#C8A96B] transition-colors duration-300">
              {cert.title}
            </h3>
            <p className="text-xs font-bold text-[#AAA59C] uppercase tracking-widest mt-1">
              {cert.issuer}
            </p>
            <div className="flex items-center gap-2 mt-3 pt-4 border-t border-white/10">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96B]"></span>
              <span className="text-[10px] font-mono text-[#AAA59C] uppercase tracking-widest">{cert.date}</span>
            </div>
          </div>
          
        </motion.div>
      </a>
    </div>
  );
};

const Certifications = () => {
  return (
    <section id="certifications" className="bg-[#050505] pt-32 pb-40 px-6 md:px-12 w-full relative font-sans border-t border-white/5 overflow-hidden">
      
      {/* Background Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full bg-[radial-gradient(circle,rgba(200,169,107,0.02)_0%,rgba(0,0,0,0)_60%)] pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center flex flex-col items-center w-full"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="text-[10px] font-mono text-[#C8A96B] tracking-[0.2em]">04.</span>
            <div className="h-[1px] w-12 bg-[#C8A96B]/30"></div>
            <span className="text-[10px] font-mono text-[#AAA59C] tracking-[0.2em] uppercase">CREDENTIALS</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#F5F1E8] tracking-tight uppercase">
            Certifications
          </h2>
        </motion.div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 w-full relative z-20">
          {certData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="h-full"
            >
              <CertCard cert={cert} />
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default Certifications;
