"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const galleryItems = [
    {
        id: 1,
        label: "Hot...",
        src: "/assets/photos/Marianne_Portait_Current.jpg",
    },
    {
        id: 2,
        label: "like potato salad!",
        src: "/assets/photos/IGMarianneCake.PNG",
    },
    {
        id: 3,
        label: "Koa & Buddha love you!",
        src: "/assets/photos/IMG_2762.jpg",
    },
    {
        id: 4,
        label: "Best day ever!",
        src: "/assets/photos/IMG_5748.jpg",
    },
    {
        id: 5,
        label: "Perfection 👆",
        src: "/assets/photos/IMG_6432.jpg",
    },
    {
        id: 6,
        label: "Trevi Fountain in Rome",
        src: "/assets/photos/IMG_9045.jpg",
    },
    {
        id: 7,
        label: "Colors & Canvas",
        src: "/assets/photos/IMG_7823.jpg",
    },
];

export default function HorizontalGallery() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
    });

    const x = useTransform(scrollYProgress, [0, 1], ["5%", "-60%"]);

    return (
        <div ref={containerRef} className="relative h-[300vh]">
            <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center bg-retro-dark">

                {/* Section Title */}
                <div className="text-center mb-8 px-4">
                    <h3 className="font-pixel text-3xl md:text-4xl text-retro-pink mb-2 drop-shadow-[3px_3px_0_rgba(0,0,0,1)]">
                        ♥ THE GALLERY OF LOVE ♥
                    </h3>
                    <p className="font-pixel text-xs text-retro-yellow">SCROLL TO EXPLORE THE BEAUTY</p>
                </div>

                {/* Horizontal Track */}
                <motion.div style={{ x }} className="flex gap-8 pl-8">
                    {galleryItems.map((item, i) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            className="heartbeat-hover flex-shrink-0"
                        >
                            <div
                                className="gallery-card"
                                style={{ transform: `rotate(${(i % 2 === 0 ? -2 : 2)}deg)` }}
                            >
                                <Image
                                    src={item.src}
                                    alt={item.label}
                                    width={360}
                                    height={340}
                                    className="w-full h-64 md:h-80 object-cover"
                                />
                                <div className="gallery-card-caption">
                                    {item.label}
                                    <span className="block text-xs text-retro-pink mt-1">♥</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Scroll Indicator */}
                <div className="text-center mt-6">
                    <motion.span
                        animate={{ x: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className="font-pixel text-xs text-retro-cyan inline-block"
                    >
                        → KEEP SCROLLING →
                    </motion.span>
                </div>
            </div>
        </div>
    );
}
