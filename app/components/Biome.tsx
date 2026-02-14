"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import FloatingHearts from "./FloatingHearts";

interface PolaroidPhoto {
    src: string;
    caption: string;
}

interface BiomeProps {
    backgroundImage: string;
    title: string;
    subtitle?: string;
    children?: React.ReactNode;
    photo?: PolaroidPhoto;
}

export default function Biome({ backgroundImage, title, subtitle, children, photo }: BiomeProps) {
    return (
        <section className="biome-section">

            {/* ===== SCENE ZONE: Full pixel art display ===== */}
            <div className="scene-zone">
                <Image
                    src={backgroundImage}
                    alt={title}
                    width={1280}
                    height={720}
                    className="scene-image"
                    style={{ imageRendering: "pixelated" }}
                    priority
                />

                {/* Title Banner — overlaid on bottom of scene */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="title-banner"
                >
                    <h2 className="title-banner-text">★ {title} ★</h2>
                </motion.div>

                <FloatingHearts />
            </div>

            {/* ===== STORY ZONE: RPG dialog box ===== */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                viewport={{ once: true }}
                className="story-zone"
            >
                <div className="rpg-dialog">
                    {/* Corner hearts */}
                    <span className="rpg-corner rpg-corner-tl">♥</span>
                    <span className="rpg-corner rpg-corner-tr">♥</span>
                    <span className="rpg-corner rpg-corner-bl">♥</span>
                    <span className="rpg-corner rpg-corner-br">♥</span>

                    {subtitle && (
                        <p className="rpg-subtitle">{subtitle}</p>
                    )}

                    <div className="rpg-body">
                        {children}
                    </div>

                    {/* Inline Polaroid photo inside dialog */}
                    {photo && (
                        <motion.div
                            initial={{ rotate: -3, opacity: 0 }}
                            whileInView={{ rotate: -1.5, opacity: 1 }}
                            transition={{ type: "spring", bounce: 0.3, duration: 0.8 }}
                            viewport={{ once: true }}
                            className="polaroid-inline heartbeat-hover"
                        >
                            <Image
                                src={photo.src}
                                alt={photo.caption}
                                width={280}
                                height={280}
                                className="polaroid-image"
                            />
                            <div className="polaroid-caption">{photo.caption}</div>
                        </motion.div>
                    )}
                </div>
            </motion.div>
        </section>
    );
}
