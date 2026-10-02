import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

const easeCinematic = [0.22, 1, 0.36, 1];

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    // If reduced motion is preferred, completely skip the preloader.
    if (shouldReduceMotion) {
      setIsLoading(false);
      return;
    }

    // Complete opening sequence takes approximately ~2.4 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2400);
    
    return () => clearTimeout(timer);
  }, [shouldReduceMotion]);

  if (shouldReduceMotion && isLoading) return null;

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="preloader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: easeCinematic }}
          className="fixed inset-0 w-full h-screen bg-[#050505] z-[100000] flex items-center justify-center pointer-events-none"
        >
          {/* Main Cinematic Container */}
          <div className="relative flex flex-col items-center justify-center w-full max-w-sm md:max-w-lg">
            
            {/* 2 & 3. Extending champagne-gold line */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 1.0, ease: easeCinematic }}
              className="absolute top-1/2 left-0 right-0 h-[1px] bg-[var(--color-luxury-gold)] opacity-40 z-10 origin-center"
            />

            {/* Top Half: NILADRI */}
            <div className="overflow-hidden w-full flex justify-center pb-3">
               <motion.div
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5, ease: easeCinematic }}
                  className="relative text-4xl md:text-5xl font-extrabold text-[var(--color-luxury-text-primary)] tracking-[0.2em] md:tracking-[0.3em] uppercase leading-none"
               >
                 NILADRI
                 {/* 6. Subtle gold glow passing across */}
                 <motion.div
                    initial={{ x: "-100%" }}
                    animate={{ x: "200%" }}
                    transition={{ duration: 1.2, delay: 1.0, ease: "easeInOut" }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--color-luxury-gold)] to-transparent opacity-40 mix-blend-screen pointer-events-none"
                 />
               </motion.div>
            </div>

            {/* Bottom Half: TEWARI outline */}
            <div className="overflow-hidden w-full flex justify-center pt-3">
               <motion.div
                  initial={{ y: "-100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8, ease: easeCinematic }}
                  className="text-xl md:text-2xl font-extrabold tracking-[0.4em] md:tracking-[0.5em] uppercase text-transparent leading-none"
                  style={{ WebkitTextStroke: '1px var(--color-luxury-gold-dark)' }}
               >
                 TEWARI
               </motion.div>
            </div>
            
            {/* 9. Subtle technical gold lines extending */}
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 0.2 }}
              transition={{ duration: 1.0, delay: 1.1, ease: easeCinematic }}
              className="absolute top-[-20px] right-[25%] w-[1px] h-[50px] bg-[var(--color-luxury-gold)] origin-bottom"
            />
            <motion.div
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 0.2 }}
              transition={{ duration: 1.0, delay: 1.2, ease: easeCinematic }}
              className="absolute bottom-[-20px] left-[25%] w-[1px] h-[40px] bg-[var(--color-luxury-gold)] origin-top"
            />
            
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Preloader;
