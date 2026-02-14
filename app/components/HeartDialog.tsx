"use client";

import { motion } from "framer-motion";

interface HeartDialogProps {
    title: string;
    subtitle?: string;
    children?: React.ReactNode;
}

export default function HeartDialog({ title, subtitle, children }: HeartDialogProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative w-full max-w-md mx-auto"
        >
            {/* Heart Background */}
            <div className="relative w-full" style={{ paddingBottom: "90%" }}>
                <svg
                    viewBox="0 0 500 450"
                    className="absolute inset-0 w-full h-full drop-shadow-[0_0_20px_rgba(255,20,147,0.4)]"
                    preserveAspectRatio="xMidYMid meet"
                >
                    <defs>
                        <linearGradient id="heartGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#FF1493" stopOpacity="0.92" />
                            <stop offset="50%" stopColor="#FF69B4" stopOpacity="0.88" />
                            <stop offset="100%" stopColor="#FF1493" stopOpacity="0.92" />
                        </linearGradient>
                        <filter id="heartGlow">
                            <feGaussianBlur stdDeviation="2" result="blur" />
                            <feMerge>
                                <feMergeNode in="blur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                        {/* Pixelated border effect */}
                        <filter id="pixelate">
                            <feFlood x="2" y="2" height="1" width="1" />
                            <feComposite width="4" height="4" />
                            <feTile result="a" />
                            <feComposite in="SourceGraphic" in2="a" operator="in" />
                            <feMorphology operator="dilate" radius="2" />
                        </filter>
                    </defs>
                    {/* Heart Shape */}
                    <path
                        d="M 250 420 C 120 300, 0 200, 0 120 C 0 40, 60 0, 125 0 C 175 0, 220 30, 250 75 C 280 30, 325 0, 375 0 C 440 0, 500 40, 500 120 C 500 200, 380 300, 250 420 Z"
                        fill="url(#heartGrad)"
                        stroke="#FFD700"
                        strokeWidth="4"
                        filter="url(#heartGlow)"
                        style={{ imageRendering: "pixelated" }}
                    />
                    {/* Inner pixel border */}
                    <path
                        d="M 250 400 C 130 290, 15 195, 15 120 C 15 50, 70 15, 125 15 C 170 15, 215 40, 250 82 C 285 40, 330 15, 375 15 C 430 15, 485 50, 485 120 C 485 195, 370 290, 250 400 Z"
                        fill="none"
                        stroke="#FFD700"
                        strokeWidth="1"
                        strokeDasharray="6 4"
                        opacity="0.5"
                    />
                </svg>

                {/* Text Content - Positioned over the heart */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center"
                    style={{ padding: "18% 16% 25% 16%" }}>
                    <h2 className="font-pixel text-sm md:text-lg text-white mb-1 leading-tight drop-shadow-[2px_2px_0_rgba(0,0,0,0.9)]"
                        style={{ wordBreak: "break-word", overflowWrap: "break-word" }}>
                        {title}
                    </h2>
                    {subtitle && (
                        <p className="font-pixel text-[8px] md:text-[10px] text-retro-yellow mb-2 drop-shadow-[1px_1px_0_rgba(0,0,0,0.9)]"
                            style={{ wordBreak: "break-word", overflowWrap: "break-word" }}>
                            {subtitle}
                        </p>
                    )}
                    <div className="font-pixel text-[7px] md:text-[9px] text-white/90 leading-relaxed"
                        style={{ wordBreak: "break-word", overflowWrap: "break-word", hyphens: "auto" }}>
                        {children}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
