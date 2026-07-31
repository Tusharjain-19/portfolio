'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export default function Cursor() {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState<"default" | "hover" | "text" | "click">("default");
  const [isClicking, setIsClicking] = useState(false);
  
  // High-performance MotionValues
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  
  // Smooth spring physics for follower ring
  const ringX = useSpring(mouseX, { damping: 28, stiffness: 450 });
  const ringY = useSpring(mouseY, { damping: 28, stiffness: 450 });
  
  // Sharper spring for center dot
  const dotX = useSpring(mouseX, { damping: 40, stiffness: 900 });
  const dotY = useSpring(mouseY, { damping: 40, stiffness: 900 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const clickable = target.closest('a, button, input, textarea, select, [role="button"], .cursor-pointer');
      const customText = target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');

      if (customText) {
        setCursorText(customText);
        setCursorVariant("text");
      } else if (clickable) {
        setCursorText("");
        setCursorVariant("hover");
      } else {
        setCursorText("");
        setCursorVariant("default");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      <style jsx global>{`
        body, a, button, input, select, textarea {
          cursor: none !important;
        }
        @media (hover: none) and (pointer: coarse) {
          body, a, button, input, select, textarea { cursor: auto !important; }
          .custom-cursor-layer { display: none !important; }
        }
      `}</style>
      
      <div className="custom-cursor-layer pointer-events-none fixed inset-0 z-[99999] overflow-hidden">
        {/* Outer Follower Halo / Ring */}
        <motion.div
          className="fixed top-0 left-0 rounded-full border border-sky-400/50 bg-sky-500/10 backdrop-blur-[1px] flex items-center justify-center pointer-events-none shadow-[0_0_15px_rgba(56,189,248,0.25)]"
          style={{
            x: ringX,
            y: ringY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            scale: isClicking ? 0.75 : cursorVariant === "hover" ? 1.6 : cursorVariant === "text" ? 2.4 : 1,
            borderColor: cursorVariant === "hover" ? "rgba(56, 189, 248, 0.8)" : cursorVariant === "text" ? "rgba(16, 185, 129, 0.8)" : "rgba(56, 189, 248, 0.4)",
            backgroundColor: cursorVariant === "text" ? "rgba(16, 185, 129, 0.15)" : cursorVariant === "hover" ? "rgba(56, 189, 248, 0.15)" : "rgba(56, 189, 248, 0.05)",
            width: 36,
            height: 36,
          }}
          transition={{ type: "spring", damping: 25, stiffness: 350 }}
        >
          <AnimatePresence mode="wait">
            {cursorText && (
              <motion.span
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className="text-[9px] font-mono font-bold tracking-wider text-emerald-300 uppercase px-1 select-none whitespace-nowrap"
              >
                {cursorText}
              </motion.span>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Precision Center Dot */}
        <motion.div
          className="fixed top-0 left-0 w-2.5 h-2.5 rounded-full bg-sky-400 pointer-events-none shadow-[0_0_8px_#38bdf8]"
          style={{
            x: dotX,
            y: dotY,
            translateX: "-50%",
            translateY: "-50%",
          }}
          animate={{
            scale: isClicking ? 1.5 : cursorVariant === "hover" ? 0.5 : 1,
            backgroundColor: cursorVariant === "text" ? "#34d399" : "#38bdf8",
          }}
          transition={{ type: "spring", damping: 30, stiffness: 600 }}
        />

        {/* Click Pulse Ripple Ring */}
        <AnimatePresence>
          {isClicking && (
            <motion.div
              initial={{ opacity: 0.8, scale: 0.2 }}
              animate={{ opacity: 0, scale: 2.2 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="fixed top-0 left-0 w-10 h-10 rounded-full border-2 border-sky-400/80 pointer-events-none"
              style={{
                x: mouseX,
                y: mouseY,
                translateX: "-50%",
                translateY: "-50%",
              }}
            />
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
