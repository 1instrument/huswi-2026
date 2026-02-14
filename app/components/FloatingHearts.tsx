"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Heart {
    id: number;
    left: number;
    size: number;
    delay: number;
    duration: number;
}

const pixelHeart = (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 4h4v4H4zM16 4h4v4h-4zM8 8h8v4H8zM4 12h16v4H4zM6 16h12v4H6zM8 20h8v4H8z" />
    </svg>
);

export default function FloatingHearts() {
    const [hearts, setHearts] = useState<Heart[]>([]);

    useEffect(() => {
        const newHearts = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            left: Math.random() * 100,
            size: 0.5 + Math.random() * 1, // Using scale 0.5 to 1.5
            delay: Math.random() * 20,
            duration: 10 + Math.random() * 10,
        }));

        // Wrap in setTimeout to satisfy React 19's rule against sync setState in effect
        const timer = setTimeout(() => {
            setHearts(newHearts);
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {hearts.map((heart) => (
                <motion.div
                    key={heart.id}
                    className="absolute text-retro-pink/30"
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: "-10%", opacity: [0, 1, 1, 0] }}
                    transition={{
                        duration: heart.duration,
                        delay: heart.delay,
                        repeat: Infinity,
                        ease: "linear",
                    }}
                    style={{
                        left: `${heart.left}%`,
                        scale: heart.size,
                    }}
                >
                    {pixelHeart}
                </motion.div>
            ))}
        </div>
    );
}
