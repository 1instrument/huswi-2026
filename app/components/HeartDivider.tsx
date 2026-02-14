"use client";

import { motion } from "framer-motion";

export default function HeartDivider() {
    const hearts = Array.from({ length: 7 });

    return (
        <div className="heart-divider py-8">
            {hearts.map((_, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: i * 0.1, duration: 0.3 }}
                    className="text-retro-pink text-xl"
                >
                    ♥
                </motion.span>
            ))}
        </div>
    );
}
