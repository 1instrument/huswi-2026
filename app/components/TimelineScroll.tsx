"use client";

import Biome from "./Biome";
import HeartDivider from "./HeartDivider";
import HorizontalGallery from "./HorizontalGallery";
import { motion } from "framer-motion";

export default function TimelineScroll() {
    return (
        <div className="w-full bg-retro-dark">

            {/* ===== 1. ORIGIN: MANILA ===== */}
            <Biome
                backgroundImage="/assets/manila.png"
                title="ORIGIN: MANILA"
                subtitle="The Adventure Begins"
                photo={{
                    src: "/assets/photos/Marianne_Portait_Current.jpg",
                    caption: "The artist herself ♥"
                }}
            >
                <p>Born in the bustling streets of Manila in the middle of a flooding hurricane, a little traveler started her journey!</p>
            </Biome>

            <HeartDivider />

            {/* ===== 2. THE EXPLORER ===== */}
            <Biome
                backgroundImage="/assets/savannah.png"
                title="THE EXPLORER"
                subtitle="Burkina Faso & Senegal"
                photo={{
                    src: "/assets/photos/IMG_5748.jpg",
                    caption: "Exploring the world"
                }}
            >
                <p>Growing up the vast savannahs of Africa! Fishing with Dad, chasing peacocks and such,
                    and learning the colors of the world....</p>
            </Biome>

            <HeartDivider />

            {/* ===== 3. THE SCHOLAR ===== */}
            <Biome
                backgroundImage="/assets/uk.png"
                title="THE SCHOLAR 🤣"
                subtitle="UK & Rhode Island"
                photo={{
                    src: "/assets/photos/IMG_6432.jpg",
                    caption: "Learning & growing"
                }}
            >
                <p>Green fields and coastal breezes. A time of learning, growing, and discovering
                    the art that lived inside by moving all over like a crazy Brady Bunch...</p>
            </Biome>

            <HeartDivider />

            {/* ===== 4. THE ARTIST ===== */}
            <Biome
                backgroundImage="/assets/guatemala.png"
                title="THE ARTIST "
                subtitle="Guatemala City"
                photo={{
                    src: "/assets/photos/IGMarianneCake.PNG",
                    caption: "Sweet celebrations 🎂"
                }}
            >
                <p>Vibrant colors, rich culture, and the awakening of a true creative soul.
                    The palette was set for true greatness to emerge...</p>
            </Biome>

            <HeartDivider />

            {/* ===== 5. THE DESIGNER ===== */}
            <Biome
                backgroundImage="/assets/nyc.png"
                title="THE DESIGNER 🪡"
                subtitle="NYC & The Fashion World!"
                photo={{
                    src: "/assets/photos/IMG_9045.jpg",
                    caption: "City lights & big dreams"
                }}
            >
                <p>Conquering the concrete jungle. Fashion school drama, fast pace, and big dreams
                    in the city that never sleeps, she began to feel a tug in her heart towards a greater life with someone new...</p>
            </Biome>

            <HeartDivider />

            {/* ===== 6. NEW ORLEANS ===== */}
            <Biome
                backgroundImage="/assets/neworleans.png"
                title="NEW ORLEANS"
                subtitle="Life With Rock (the best)"
                photo={{
                    src: "/assets/photos/IMG_2762.jpg",
                    caption: "Our adventure together ♥"
                }}
            >
                <p>This is where her luck really kicked in! Meeting Rock on set, having countless foodie adventures, and camping the coast like maniacs.
                    Building a life of love, laughter, abundance, and endless road trips.</p>
                <div className="mt-2 text-retro-yellow text-xs animate-pulse">
                    ♥ KOA & BUDDHA APPROVED ♥
                </div>
            </Biome>

            <HeartDivider />

            {/* ===== 7. THE GALLERY ===== */}
            <Biome
                backgroundImage="/assets/gallery.png"
                title="THE GALLERY!"
                subtitle="Covington & Beyond"
                photo={{
                    src: "/assets/photos/IMG_7823.jpg",
                    caption: "Colors & canvas"
                }}
            >
                <p>Explosions of color, faith, and creativity, and art boss lady takes the south by storm! Sharing beauty with the world,
                    one canvas at a time!</p>
            </Biome>

            <HeartDivider />

            {/* ===== HORIZONTAL GALLERY ===== */}
            <HorizontalGallery />

            <HeartDivider />

            {/* ===== ENDING: VALENTINE'S MESSAGE ===== */}
            <div className="min-h-[60vh] flex flex-col items-center justify-center bg-retro-dark text-center p-8 relative overflow-hidden">

                {/* Big Pulsing Background Heart */}
                <motion.div
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    className="absolute text-retro-pink/10 text-[300px] pointer-events-none select-none"
                >
                    ♥
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="relative z-10"
                >
                    <h2 className="text-3xl md:text-5xl font-pixel text-retro-pink mb-6 drop-shadow-[3px_3px_0_rgba(0,0,0,1)]">
                        HAPPY VALENTINE&apos;S DAY, ANGEL!
                    </h2>
                    <p className="text-lg md:text-xl text-valentine-rose font-sans max-w-2xl mx-auto leading-relaxed mb-8">
                        To my best friend and most precious gift of a wife! Every day with you is a blessing beyond measure.
                        Here&apos;s to many more pixels in our story!!!
                    </p>

                    <div className="flex items-center justify-center gap-4 text-4xl">
                        <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0 }}>♥</motion.span>
                        <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }} className="text-retro-pink">♥</motion.span>
                        <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.6 }} className="text-retro-yellow">♥</motion.span>
                        <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.3 }} className="text-retro-pink">♥</motion.span>
                        <motion.span animate={{ scale: [1, 1.3, 1] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0 }}>♥</motion.span>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
