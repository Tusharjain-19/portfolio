
'use client';

import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence } from 'framer-motion';

export default function Cursor() {
  const [cursorText, setCursorText] = useState("");
  const [cursorVariant, setCursorVariant] = useState("default");
  
  // Use MotionValues for high-performance direct DOM updates
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  
  // Smooth spring physics
  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 16); // Center offset (32px / 2)
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e: MouseEvent) => {
        const target = e.target as HTMLElement;
        const clickable = target.closest('a, button, [role="button"]');
        const customText = target.closest('[data-cursor-text]')?.getAttribute('data-cursor-text');

        if (customText) {
            setCursorText(customText);
            setCursorVariant("item");
        } else if (clickable) {
            setCursorText("");
            setCursorVariant("hover");
        } else {
            setCursorText("");
            setCursorVariant("default");
        }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  // VARIANTS
  const variants = {
    default: {
      height: 12,
      width: 12,
      backgroundColor: "var(--cursor-color)",
      border: "1px solid transparent",
      x: 10,  // Re-center for small dot
      y: 10,
    },
    hover: {
      height: 48,
      width: 48,
      backgroundColor: "transparent",
      border: "1px solid var(--cursor-border)",
      x: -8, // Offset adjustment for larger circle
      y: -8,
    },
    item: {
        height: 80,
        width: 80,
        backgroundColor: "var(--cursor-color-accent)", // Solid color for text bg
        border: "1px solid transparent",
        x: -24,
        y: -24,
        mixBlendMode: "normal" as const,
    }
  };

  return (
    <>
        <style jsx global>{`
            :root {
                --cursor-color: #ffffff;
                --cursor-border: rgba(255, 255, 255, 0.4);
                --cursor-color-accent: #ffffff;
            }
            body, a, button {
                cursor: none; /* Hide native cursor */
            }
            /* Re-enable native cursor and hide custom cursor on touch devices */
            @media (hover: none) and (pointer: coarse) {
                body, a, button { cursor: auto; }
                .custom-cursor { display: none !important; }
            }
        `}</style>
        
        <motion.div
            className="custom-cursor fixed top-0 left-0 bg-white pointer-events-none z-[9999] rounded-full mix-blend-difference flex items-center justify-center overflow-hidden"
            style={{
                translateX: cursorXSpring,
                translateY: cursorYSpring,
            }}
            variants={variants}
            animate={cursorVariant}
            transition={{ type: "spring", stiffness: 500, damping: 28 }}
        >
            <AnimatePresence mode='wait'>
                {cursorText && (
                    <motion.span 
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        className="text-black text-[10px] font-bold tracking-widest font-mono uppercase"
                    >
                        {cursorText}
                    </motion.span>
                )}
            </AnimatePresence>
        </motion.div>
    </>
  );
}
