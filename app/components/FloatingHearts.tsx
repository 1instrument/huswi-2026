"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const pixelHeart = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4h4v4H4zM16 4h4v4h-4zM8 8h8v4H8zM4 12h16v4H4zM6 16h12v4H6zM8 20h8v4H8z" />
    </svg>
);

export default function FloatingHearts() {
    const [hearts, setHearts] = useState<{ id: number; left: number; delay: number; scale: number }[]>([]);

    useEffect(() => {
        // Generate static set of hearts to avoid hydration mismatch
        const newHearts = Array.from({ length: 20 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 5,
            scale: 0.5 + Math.random() * 1,
        }));
        setHearts(newHearts);
    }, []);

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    className="absolute text-retro-pink/30"
                    initial={{ y: "110vh", x: 0, opacity: 0 }}
                    animate={{
                        y: "-10vh",
                        x: [0, 10, -10, 0], // Slight wobble
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: 10 + Math.random() * 10,
                        delay: heart.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        left: `${heart.left}%`,
                        scale: heart.scale,
                    }}
                >
                    {pixelHeart}
                </motion.div>
            ))}
        </div>
    );
}
