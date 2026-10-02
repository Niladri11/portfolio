import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  // Use framer-motion spring for GPU-accelerated smooth trailing
  const cursorX = useSpring(-100, { stiffness: 1000, damping: 50, mass: 0.1 });
  const cursorY = useSpring(-100, { stiffness: 1000, damping: 50, mass: 0.1 });
  const ringX = useSpring(-100, { stiffness: 300, damping: 30, mass: 0.2 });
  const ringY = useSpring(-100, { stiffness: 300, damping: 30, mass: 0.2 });

  useEffect(() => {
    // Check if device is touch-only or coarse pointer
    if (window.matchMedia("(pointer: coarse)").matches || 'ontouchstart' in window) {
      setIsMobile(true);
      return;
    }
    setIsMobile(false);

    const onMouseMove = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      ringX.set(e.clientX);
      ringY.set(e.clientY);
      if (!isVisible) setIsVisible(true);
    };

    const isInteractive = (el) => {
      return el.closest('a, button, [role="button"], input, select, textarea, label, [data-interactive]');
    };

    const onMouseOver = (e) => {
      if (isInteractive(e.target)) {
        setIsHovering(true);
      }
    };

    const onMouseOut = (e) => {
      if (isInteractive(e.target)) {
        setIsHovering(false);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseover', onMouseOver);
    document.addEventListener('mouseout', onMouseOut);
    document.addEventListener('mousedown', onMouseDown);
    document.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', onMouseOver);
      document.removeEventListener('mouseout', onMouseOut);
      document.removeEventListener('mousedown', onMouseDown);
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [cursorX, cursorY, ringX, ringY, isVisible]);

  if (isMobile || !isVisible) return null;

  return (
    <>
      {/* Central gold point */}
      <motion.div
        className="fixed top-0 left-0 w-[5px] h-[5px] bg-[var(--color-luxury-gold)] rounded-full pointer-events-none z-[10000]"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
          boxShadow: '0 0 10px rgba(200, 169, 107, 0.8)'
        }}
        animate={{
          scale: isClicking ? 0.5 : isHovering ? 0 : 1,
          opacity: isHovering ? 0 : 1
        }}
        transition={{ duration: 0.15, ease: [0.22, 1, 0.36, 1] }}
      />
      
      {/* Outer thin ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full pointer-events-none z-[9999] flex items-center justify-center box-border"
        style={{
          x: ringX,
          y: ringY,
          translateX: '-50%',
          translateY: '-50%',
          borderWidth: isHovering ? '1.5px' : '1px',
          borderStyle: 'solid',
        }}
        animate={{
          scale: isHovering ? 1.4 : isClicking ? 0.9 : 1,
          borderColor: isHovering ? 'rgba(200, 169, 107, 0.8)' : 'rgba(200, 169, 107, 0.3)',
          backgroundColor: isHovering ? 'rgba(200, 169, 107, 0.05)' : 'rgba(200, 169, 107, 0)',
          boxShadow: isHovering ? '0 0 15px rgba(200, 169, 107, 0.15)' : 'none'
        }}
        transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};

export default CustomCursor;
