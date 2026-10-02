import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const easeCinematic = [0.22, 1, 0.36, 1];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeCinematic } }
};

const cards = [
  {
    number: "01",
    title: "CLOUD INFRASTRUCTURE",
    desc: "Building and automating AWS infrastructure with Terraform and Docker.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-[var(--color-luxury-gold)] opacity-80 group-hover:opacity-100 transition-opacity duration-300">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    )
  },
  {
    number: "02",
    title: "RELIABLE SYSTEMS",
    desc: "Exploring disaster recovery, monitoring, and resilient cloud architectures.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-[var(--color-luxury-gold)] opacity-80 group-hover:opacity-100 transition-opacity duration-300">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    number: "03",
    title: "DEVOPS AUTOMATION",
    desc: "Designing automated CI/CD pipelines and infrastructure as code to eliminate manual operations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-5 h-5 text-[var(--color-luxury-gold)] opacity-80 group-hover:opacity-100 transition-opacity duration-300">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  }
];

const CapabilityCard = ({ number, title, desc, icon }) => (
  <div className="group relative w-full bg-[#030303] border border-[var(--color-luxury-gold)]/20 p-8 hover:-translate-y-[2px] transition-all duration-300 ease-out hover:border-[var(--color-luxury-gold)]/60 hover:shadow-[0_0_20px_rgba(200,169,107,0.1)] overflow-hidden">
    
    {/* Subtle Background Glow */}
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(200,169,107,0.05)_0%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

    <div className="flex justify-between items-start mb-10 relative z-10">
      <span className="text-xs font-mono text-[var(--color-luxury-gold)]/60 group-hover:text-[var(--color-luxury-gold)] transition-colors tracking-widest">{number}</span>
      <div className="p-2 border border-[var(--color-luxury-gold)]/10 rounded-sm bg-[#050505] group-hover:border-[var(--color-luxury-gold)]/30 group-hover:bg-[var(--color-luxury-gold)]/10 transition-all duration-300">
        {icon}
      </div>
    </div>
    
    <h3 className="text-sm font-bold text-[#AAA59C] group-hover:text-[#F5F1E8] tracking-widest uppercase mb-4 transition-colors relative z-10">
      {title}
    </h3>
    
    <p className="text-[13px] md:text-sm text-[#81796D] font-light leading-[1.7] group-hover:text-[#AAA59C] transition-colors relative z-10">
      {desc}
    </p>

    {/* Corner accents */}
    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-luxury-gold)]/0 group-hover:border-[var(--color-luxury-gold)]/60 transition-all duration-300 pointer-events-none" />
    <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[var(--color-luxury-gold)]/0 group-hover:border-[var(--color-luxury-gold)]/60 transition-all duration-300 pointer-events-none" />
  </div>
);

const TechnicalIllustration = () => {
  const shouldReduceMotion = useReducedMotion();
  
  return (
    <motion.div variants={itemVariants} className="relative w-full max-w-[500px] h-[350px] md:h-[450px] flex items-center justify-center">
      {/* Enhanced Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.15)_0%,transparent_60%)] blur-[40px] pointer-events-none" />
      
      {/* SVG Blueprint */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
        
        {/* Subtle grid background */}
        <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
          <circle cx="1" cy="1" r="0.5" fill="#F5D88D" opacity="0.15" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" />

        {/* Animated Rings around CLOUD node */}
        <motion.circle cx="200" cy="70" r="16" fill="none" stroke="#F5D88D" strokeWidth="0.5" strokeDasharray="2 4"
          initial={{ rotate: 0 }}
          animate={shouldReduceMotion ? {} : { rotate: 360, transformOrigin: "200px 70px" }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="opacity-50"
        />
        <motion.circle cx="200" cy="70" r="22" fill="none" stroke="#F5D88D" strokeWidth="0.2"
          initial={{ scale: 1, opacity: 0.5 }}
          animate={shouldReduceMotion ? {} : { scale: 1.2, opacity: 0 }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut" }}
        />

        {/* Connection Lines */}
        <motion.g
          initial={shouldReduceMotion ? false : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1.5, ease: easeCinematic, delay: 0.4 }}
          stroke="#C8A96B"
          strokeWidth="0.75"
          fill="none"
          className="opacity-40"
        >
          {/* Main vertical stem */}
          <path d="M 200 70 L 200 130" />
          {/* Branch to AWS and Terraform */}
          <path d="M 200 130 L 120 190" />
          <path d="M 200 130 L 280 190" />
          {/* Converge to Docker */}
          <path d="M 120 190 L 200 250" />
          <path d="M 280 190 L 200 250" />
          {/* Down to Observability */}
          <path d="M 200 250 L 200 310" />
          {/* Branch to Prom/Grafana */}
          <path d="M 200 310 L 140 360" />
          <path d="M 200 310 L 260 360" />
        </motion.g>

        {/* Nodes and Labels */}
        <motion.g
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 1, ease: easeCinematic, delay: 0.8 }}
        >
          {/* CLOUD */}
          <circle cx="200" cy="70" r="3" fill="#C8A96B" className="opacity-80" />
          <circle cx="200" cy="70" r="8" fill="none" stroke="#C8A96B" strokeWidth="0.5" className="opacity-40" />
          <text x="200" y="52" fill="#F5F1E8" fontSize="10" textAnchor="middle" className="font-mono tracking-widest opacity-90">CLOUD</text>
          
          {/* AWS & TERRAFORM */}
          <circle cx="120" cy="190" r="3" fill="#C8A96B" className="opacity-80" />
          <rect x="75" y="180" width="35" height="18" fill="none" stroke="#C8A96B" strokeWidth="0.5" className="opacity-30" />
          <text x="92.5" y="193" fill="#AAA59C" fontSize="9" textAnchor="middle" className="font-mono tracking-wider">AWS</text>
          
          <circle cx="280" cy="190" r="3" fill="#C8A96B" className="opacity-80" />
          <rect x="290" y="180" width="65" height="18" fill="none" stroke="#C8A96B" strokeWidth="0.5" className="opacity-30" />
          <text x="322.5" y="193" fill="#AAA59C" fontSize="9" textAnchor="middle" className="font-mono tracking-wider">TERRAFORM</text>

          {/* DOCKER */}
          <circle cx="200" cy="250" r="3" fill="#C8A96B" className="opacity-80" />
          <text x="200" y="270" fill="#AAA59C" fontSize="9" textAnchor="middle" className="font-mono tracking-wider">DOCKER</text>
          
          {/* OBSERVABILITY */}
          <circle cx="200" cy="310" r="3" fill="#C8A96B" className="opacity-80" />
          <text x="200" y="295" fill="#AAA59C" fontSize="9" textAnchor="middle" className="font-mono tracking-widest">OBSERVABILITY</text>

          {/* PROMETHEUS & GRAFANA */}
          <circle cx="140" cy="360" r="2.5" fill="#C8A96B" className="opacity-60" />
          <text x="140" y="375" fill="#8C6E3B" fontSize="8" textAnchor="middle" className="font-mono tracking-wider">PROMETHEUS</text>
          
          <circle cx="260" cy="360" r="2.5" fill="#C8A96B" className="opacity-60" />
          <text x="260" y="375" fill="#8C6E3B" fontSize="8" textAnchor="middle" className="font-mono tracking-wider">GRAFANA</text>
        </motion.g>
      </svg>
      
      {/* Decorative Corner Elements */}
      <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[var(--color-luxury-gold)] opacity-20 pointer-events-none" />
      <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[var(--color-luxury-gold)] opacity-20 pointer-events-none" />
      <div className="absolute top-4 left-4 w-1 h-1 bg-[var(--color-luxury-gold)] opacity-30 pointer-events-none" />
      <div className="absolute bottom-4 right-4 w-1 h-1 bg-[var(--color-luxury-gold)] opacity-30 pointer-events-none" />
    </motion.div>
  );
};

const About = () => {
  return (
    <section id="about" className="relative w-full min-h-screen bg-gradient-to-b from-[#050505] to-[#0A0A0A] py-24 md:py-32 px-6 md:px-12 border-t border-[#111] overflow-hidden flex items-center">
      
      {/* Subtle Background Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute left-[5%] md:left-[10%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[var(--color-luxury-gold)] to-transparent opacity-10" />
        <div className="absolute right-[5%] md:right-[10%] top-0 w-[1px] h-full bg-gradient-to-b from-transparent via-[var(--color-luxury-gold)] to-transparent opacity-10" />
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-7xl mx-auto flex flex-col z-10 relative w-full"
      >
        
        {/* TOP ROW: Text & Blueprint */}
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-8 items-center lg:items-start mb-24 md:mb-32">
          
          {/* LEFT: About Text */}
          <div className="flex-1 w-full lg:max-w-xl flex flex-col justify-center pt-8 md:pt-16">
            <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
              <div className="w-8 h-[1px] bg-[var(--color-luxury-gold)] opacity-60" />
              <h2 className="text-sm md:text-base font-bold text-[#F5F1E8] uppercase tracking-[0.25em]">
                ABOUT ME
              </h2>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-[#AAA59C] text-base md:text-lg font-light leading-[1.9] tracking-wide">
              I'm a Computer Science engineering student focused on Cloud, DevOps, and infrastructure automation. I build hands-on systems using AWS, Terraform, Docker, and observability tools, with a foundation in cybersecurity and networking. I design and automate production-grade infrastructure—<span className="text-[#F5D88D] font-medium drop-shadow-[0_0_8px_rgba(245,216,141,0.5)]">built for failure, not just for uptime.</span>
            </motion.p>
          </div>

          {/* RIGHT: Blueprint */}
          <div className="flex-1 w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
            <TechnicalIllustration />
          </div>
        </div>

        {/* BOTTOM ROW: Capabilities */}
        <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {cards.map((card, idx) => (
            <CapabilityCard key={idx} {...card} />
          ))}
        </motion.div>

      </motion.div>
    </section>
  );
};

export default About;
