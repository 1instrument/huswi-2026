"use client";

import { motion } from "framer-motion";

const artPieces = [
    { id: 1, title: "Vibrant Abstracts", color: "bg-retro-pink" },
    { id: 2, title: "Floral Patterns", color: "bg-retro-purple" },
    { id: 3, title: "Cultural Heritage", color: "bg-retro-cyan" },
    { id: 4, title: "Modern Life", color: "bg-retro-yellow" },
];

export default function Gallery() {
    return (
        <div className="w-full max-w-6xl mx-auto p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
            {artPieces.map((art, index) => (
                <motion.div
                    key={art.id}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.2, duration: 0.5 }}
                    className="relative group cursor-pointer"
                >
                    {/* Pixel Frame */}
                    <div className="absolute -inset-2 bg-retro-cream opacity-50 group-hover:bg-retro-yellow transition-colors"
                        style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 0, 4px 4px, 4px calc(100% - 4px), calc(100% - 4px) calc(100% - 4px), calc(100% - 4px) 4px, 0 0)" }}
                    />

                    <div className={`h-64 ${art.color} flex items-center justify-center border-4 border-retro-dark`}>
                        <span className="font-pixel text-retro-dark text-xl text-center px-4">
                            {art.title} <br /> (Art Placeholder)
                        </span>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
