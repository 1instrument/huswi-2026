"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import FloatingHearts from "./FloatingHearts";

export default function Hero() {
    const [text, setText] = useState("");
    const fullText = "YOUR BEAUTIFUL STORY IN PIXELS...";

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            setText(fullText.slice(0, i + 1));
            i++;
            if (i === fullText.length) clearInterval(interval);
        }, 100);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative h-screen w-full flex flex-col items-center justify-center bg-retro-dark overflow-hidden">

            {/* Floating Hearts Background */}
            <FloatingHearts />

            {/* Decorative Top Border Hearts */}
            <div className="absolute top-0 left-0 right-0 flex justify-center gap-6 pt-6 text-retro-pink/40 text-2xl">
                {Array.from({ length: 12 }).map((_, i) => (
                    <motion.span
                        key={i}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ repeat: Infinity, duration: 2, delay: i * 0.15 }}
                    >
                        ♥
                    </motion.span>
                ))}
            </div>

            {/* Main Content */}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="z-10 text-center px-4"
            >
                {/* Big Pixel Heart */}
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                    className="text-8xl md:text-9xl mb-6 text-valentine-red drop-shadow-[0_0_30px_rgba(255,0,68,0.5)]"
                >
                    ♥
                </motion.div>

                <h1 className="text-2xl md:text-4xl font-pixel text-retro-pink mb-4 drop-shadow-[4px_4px_0_rgba(0,0,0,1)] leading-relaxed">
                    FOR MARIANNE, MY LOVE
                </h1>

                <div className="text-sm md:text-lg font-pixel text-retro-cream/80 min-h-[2rem]">
                    {text}<span className="animate-pulse text-retro-yellow">_</span>
                </div>
            </motion.div>

            {/* Scroll Down Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
                className="absolute bottom-10 z-10"
            >
                <div className="font-pixel text-retro-pink text-xs animate-pulse mb-2">
                    ♥ SCROLL DOWN ♥
                </div>
                <div className="flex justify-center gap-1">
                    <motion.span animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0 }} className="text-retro-pink">▼</motion.span>
                    <motion.span animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.2 }} className="text-valentine-rose">▼</motion.span>
                    <motion.span animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.2, delay: 0.4 }} className="text-retro-pink">▼</motion.span>
                </div>
            </motion.div>

            {/* Bottom Heart Border */}
            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-6 pb-20 text-retro-pink/20 text-2xl">
                {Array.from({ length: 12 }).map((_, i) => (
                    <motion.span
                        key={i}
                        animate={{ y: [0, 5, 0] }}
                        transition={{ repeat: Infinity, duration: 2, delay: i * 0.1 }}
                    >
                        ♥
                    </motion.span>
                ))}
            </div>
        </div>
    );
}
