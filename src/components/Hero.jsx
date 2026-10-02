import React from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { personalInfo } from '../data/portfolioData';

const easeCinematic = [0.22, 1, 0.36, 1];

const TechnicalGraphics = ({ shouldReduceMotion, yParallax }) => (
  <motion.div 
    style={{ y: yParallax }}
    className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
  >
    {/* Massive Rotating Cloud Infrastructure Astrolabe */}
    <div className="absolute top-1/2 left-[25%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] opacity-[0.15] hidden md:block mix-blend-screen">
      {/* Outer Ring */}
      <motion.svg 
        animate={shouldReduceMotion ? {} : { rotate: 360 }}
        transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
        viewBox="0 0 200 200" 
        className="absolute inset-0 w-full h-full"
      >
        <circle cx="100" cy="100" r="95" fill="none" stroke="var(--color-luxury-gold)" strokeWidth="0.3" strokeDasharray="2 4" />
        <circle cx="100" cy="100" r="90" fill="none" stroke="var(--color-luxury-gold)" strokeWidth="0.2" />
        {/* Technical Ticks */}
        {[...Array(36)].map((_, i) => (
          <line key={i} x1="100" y1="5" x2="100" y2="8" stroke="var(--color-luxury-gold)" strokeWidth="0.5" transform={`rotate(${i * 10} 100 100)`} />
        ))}
      </motion.svg>

      {/* Middle Counter-Rotating Ring */}
      <motion.svg 
        animate={shouldReduceMotion ? {} : { rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        viewBox="0 0 200 200" 
        className="absolute inset-0 w-full h-full"
      >
        <circle cx="100" cy="100" r="70" fill="none" stroke="var(--color-luxury-gold)" strokeWidth="0.3" strokeDasharray="1 6" />
        <circle cx="100" cy="100" r="65" fill="none" stroke="var(--color-luxury-gold)" strokeWidth="0.5" strokeDasharray="15 5" />
        {/* Orbital nodes */}
        <circle cx="100" cy="35" r="2" fill="var(--color-luxury-gold)" />
        <circle cx="100" cy="165" r="2" fill="var(--color-luxury-gold)" />
        <circle cx="35" cy="100" r="2" fill="var(--color-luxury-gold)" />
        <circle cx="165" cy="100" r="2" fill="var(--color-luxury-gold)" />
      </motion.svg>

      {/* Inner Fast Ring */}
      <motion.svg 
        animate={shouldReduceMotion ? {} : { rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        viewBox="0 0 200 200" 
        className="absolute inset-0 w-full h-full drop-shadow-[0_0_10px_rgba(200,169,107,0.5)]"
      >
        <circle cx="100" cy="100" r="45" fill="none" stroke="var(--color-luxury-gold)" strokeWidth="0.5" strokeDasharray="4 2" />
        <circle cx="100" cy="100" r="30" fill="none" stroke="var(--color-luxury-gold)" strokeWidth="1" opacity="0.5" />
        <circle cx="100" cy="100" r="15" fill="none" stroke="var(--color-luxury-gold)" strokeWidth="0.5" />
        <circle cx="100" cy="100" r="3" fill="var(--color-luxury-gold)" />
      </motion.svg>
    </div>

    {/* Abstract lines and markers - Left */}
    <svg className="absolute top-[20%] left-[5%] w-64 h-64 opacity-20 hidden md:block" viewBox="0 0 100 100">
      <motion.path 
        initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.5, delay: 0.2, ease: easeCinematic }}
        d="M0,50 L40,50 L50,60 L90,60" 
        fill="none" 
        stroke="var(--color-luxury-gold)" 
        strokeWidth="0.5"
      />
      <motion.circle
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        cx="90" cy="60" r="1.5" fill="var(--color-luxury-gold)"
      />
      <motion.text
        initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1, delay: 1.0 }}
        x="93" y="61.5" fontSize="3" fill="var(--color-luxury-gold)" className="font-mono tracking-widest"
      >
        SYS.01
      </motion.text>
    </svg>
    
    {/* Subtle connection path - Center Bottom */}
    <svg className="absolute bottom-[10%] left-[30%] w-96 h-96 opacity-[0.15] hidden md:block" viewBox="0 0 200 200">
      <motion.path 
        initial={shouldReduceMotion ? { pathLength: 1 } : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, delay: 0.5, ease: easeCinematic }}
        d="M0,150 L50,150 L80,100 L150,100" 
        fill="none" 
        stroke="var(--color-luxury-gold)" 
        strokeWidth="0.5"
      />
    </svg>
    
    {/* Traveling gold point */}
    {!shouldReduceMotion && (
      <motion.div 
        initial={{ x: 0, opacity: 0 }}
        animate={{ x: 150, opacity: [0, 1, 0] }}
        transition={{ duration: 3.5, delay: 1.5, repeat: Infinity, repeatDelay: 6, ease: "linear" }}
        className="absolute top-[35%] left-[15%] w-[2px] h-[2px] bg-[var(--color-luxury-gold-bright)] rounded-full shadow-[0_0_8px_rgba(228,201,138,0.8)] hidden md:block"
      />
    )}
  </motion.div>
);

const Hero = () => {
  const { scrollY } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  
  // Parallax effects
  const portraitY = useTransform(scrollY, [0, 500], [0, shouldReduceMotion ? 0 : 30]);
  const textY = useTransform(scrollY, [0, 500], [0, shouldReduceMotion ? 0 : 15]);
  const bgTextY = useTransform(scrollY, [0, 500], [0, shouldReduceMotion ? 0 : 45]);
  const graphicsY = useTransform(scrollY, [0, 500], [0, shouldReduceMotion ? 0 : 20]);

  const resumeLink = personalInfo.resumeUrl || '#';

  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden bg-[var(--color-luxury-bg)] flex items-center pt-24 md:pt-0">
      
      {/* 1. & 2. Background fade in & Gold atmosphere */}
      <motion.div 
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.1, ease: easeCinematic }}
        className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_70%_50%,rgba(200,169,107,0.05)_0%,transparent_70%)] pointer-events-none"
      />
      
      {/* Diagonal Light Rays */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: easeCinematic }}
        className="absolute top-[-10%] left-[20%] w-[300px] h-[150%] bg-gradient-to-b from-[rgba(200,169,107,0.08)] to-transparent -rotate-45 blur-[40px] pointer-events-none z-0 mix-blend-screen"
      />
      
      {/* Architectural lines - Top Right */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 1.5, delay: 0.8, ease: easeCinematic }}
        className="absolute top-[15%] right-[20%] z-0 pointer-events-none hidden md:block"
      >
        <div className="absolute w-[1px] h-[150px] bg-gradient-to-b from-transparent via-[var(--color-luxury-gold)] to-transparent" />
        <div className="absolute w-[150px] h-[1px] bg-gradient-to-r from-transparent via-[var(--color-luxury-gold)] to-transparent" />
        {/* Nodes and corners */}
        <div className="absolute top-[75px] left-[-2px] w-[5px] h-[5px] border border-[var(--color-luxury-gold)] rounded-full" />
        <div className="absolute top-[0px] left-[75px] w-[3px] h-[3px] bg-[var(--color-luxury-gold)]" />
        <div className="absolute top-[-10px] left-[-10px] w-[20px] h-[20px] border-t border-l border-[var(--color-luxury-gold)] opacity-50" />
      </motion.div>

      {/* Architectural lines - Bottom Left */}
      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1.5, delay: 1.0, ease: easeCinematic }}
        className="absolute bottom-[20%] left-[5%] z-0 pointer-events-none hidden md:block"
      >
        <div className="absolute w-[1px] h-[100px] bg-gradient-to-t from-transparent via-[var(--color-luxury-gold)] to-transparent" />
        <div className="absolute top-[100px] w-[80px] h-[1px] bg-gradient-to-r from-transparent via-[var(--color-luxury-gold)] to-transparent" />
        <div className="absolute top-[100px] left-[80px] w-[4px] h-[4px] bg-[var(--color-luxury-gold)] rounded-full" />
        <div className="absolute top-[110px] left-[0px] text-[8px] font-mono text-[var(--color-luxury-gold)] tracking-widest">SYS.CORE.02</div>
      </motion.div>

      {/* 3. Technical Graphics */}
      <TechnicalGraphics shouldReduceMotion={shouldReduceMotion} yParallax={graphicsY} />

      {/* 7. Portrait reveals from RIGHT to LEFT on the absolute right edge */}
      <div className="absolute right-0 bottom-0 w-full md:w-[60%] lg:w-[55%] h-[60vh] md:h-[100vh] z-10 flex items-end justify-end pointer-events-none">
        
        {/* 8. Golden Aura and Design behind portrait */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 1.4, ease: easeCinematic }}
          className="absolute inset-0 z-0 mix-blend-screen pointer-events-none flex items-center justify-center"
        >
          {/* subtle gold particles/glow matching the background */}
          <div className="absolute top-[20%] right-[10%] w-[60%] h-[70%] bg-[radial-gradient(ellipse_at_center,rgba(200,169,107,0.35)_0%,transparent_70%)] blur-[40px]" />
          <div className="absolute bottom-[10%] right-[5%] w-[50%] h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(200,169,107,0.25)_0%,transparent_70%)] blur-[50px]" />
        </motion.div>

        <motion.div 
          style={{ y: portraitY }}
          initial={shouldReduceMotion ? false : { clipPath: "inset(0 0 0 100%)", opacity: 0, scale: 1.03 }}
          animate={{ clipPath: "inset(0 0 0 0%)", opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 1.0, ease: easeCinematic }}
          className="relative w-full h-full max-w-[800px] flex items-end justify-end transition-all duration-700 ease-[0.22,1,0.36,1] hover:scale-[1.01] hover:drop-shadow-[0_0_20px_rgba(200,169,107,0.15)] pointer-events-auto z-10"
        >
          <img 
            src="/images/niladri-hero-no-earring.jpg" 
            alt="Niladri Tewari" 
            className="w-full h-full object-cover object-center md:object-top"
            style={{
              maskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 25%, black 100%)',
              filter: 'contrast(1.05) brightness(0.95) grayscale(5%) drop-shadow(0 0 20px rgba(0,0,0,0.5))'
            }}
          />
        </motion.div>

      </div>

      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 md:px-12 flex h-full min-h-[calc(100vh-6rem)]">
        
        {/* LEFT: Main Content & Typography */}
        <motion.div 
          className="flex flex-col items-start justify-center text-left w-full md:w-[65%] pb-12 md:pb-0 z-30"
        >
          {/* "Hi, I'm" */}
          <motion.p 
            style={{ y: textY }}
            initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: easeCinematic }}
            className="text-[var(--color-luxury-gold)] text-lg md:text-xl font-semibold tracking-wide mb-1"
          >
            Hi, I'm
          </motion.p>

          <div className="relative w-full mb-4 md:mb-6 pointer-events-none">
            
            {/* The heavy cinematic glow behind the name */}
            <motion.div
              initial={shouldReduceMotion ? false : { opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.8, ease: easeCinematic }}
              className="absolute top-1/2 left-[10%] md:left-[20%] -translate-x-1/2 -translate-y-1/2 w-[80%] h-[150%] bg-[radial-gradient(ellipse_at_center,rgba(220,180,100,0.25)_0%,transparent_60%)] blur-[40px] z-0 pointer-events-none"
            />

            {/* 5. NILADRI reveals upward */}
            <motion.div
              className="relative z-10"
            >
              <motion.h1 
                initial={shouldReduceMotion ? false : { y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6, ease: easeCinematic }}
                className="text-[14vw] sm:text-7xl md:text-[8vw] font-black tracking-tighter leading-none"
              >
                <span className="bg-gradient-to-b from-[#FFFDF8] via-[#E8C881] to-[#8A6327] text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(200,169,107,0.4)]">
                  NILADRI
                </span>
              </motion.h1>
            </motion.div>

            {/* 6. TEWARI outline reveals slightly later */}
            <motion.div
              className="md:-mt-5 relative z-10"
            >
              <motion.h2 
                initial={shouldReduceMotion ? false : { y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8, ease: easeCinematic }}
                className="text-[14vw] sm:text-7xl md:text-[8vw] font-black tracking-tighter leading-none"
                style={{ 
                  WebkitTextStroke: '1px #A17B3A', 
                  color: 'rgba(200,169,107,0.05)'
                }}
              >
                TEWARI
              </motion.h2>
            </motion.div>
          </div>

          <motion.div style={{ y: textY }} className="relative z-10">
            {/* 9. Cloud & DevOps Engineer appears */}
            <motion.h3 
              initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6, ease: easeCinematic }}
              className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-wide mb-3"
            >
              Cloud & DevOps Engineer
            </motion.h3>

            {/* 10. Description appears */}
            <motion.p 
              initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.8, ease: easeCinematic }}
              className="text-gray-300 text-sm md:text-base font-light mb-8 max-w-lg leading-relaxed"
            >
              I build and automate cloud infrastructure, resilient systems and observability platforms on AWS.
            </motion.p>

            {/* 11. Buttons appear sequentially */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <motion.a 
                href="#projects"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.0, ease: easeCinematic }}
                className="w-full sm:w-auto px-7 py-3 rounded-md bg-gradient-to-b from-[#E8C881] to-[#C09A45] text-black font-bold text-center hover:brightness-110 transition-all duration-300 shadow-[0_0_15px_rgba(200,169,107,0.3)]"
              >
                View My Work &rarr;
              </motion.a>
              
              <motion.a 
                href="https://github.com/Niladri11"
                target="_blank"
                rel="noopener noreferrer"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.15, ease: easeCinematic }}
                className="w-full sm:w-auto px-7 py-3 rounded-md bg-transparent border border-[var(--color-luxury-gold-dark)] text-white font-medium text-center hover:bg-[var(--color-luxury-gold)]/10 transition-all duration-300"
              >
                GitHub
              </motion.a>

              <motion.a 
                href="https://www.linkedin.com/in/niladritewari"
                target="_blank"
                rel="noopener noreferrer"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 2.3, ease: easeCinematic }}
                className="w-full sm:w-auto px-7 py-3 rounded-md bg-transparent border border-[var(--color-luxury-gold-dark)] text-white font-medium text-center hover:bg-[var(--color-luxury-gold)]/10 transition-all duration-300"
              >
                LinkedIn
              </motion.a>
            </div>

          </motion.div>

        </motion.div>
      </div>

    </section>
  );
};

export default Hero;

