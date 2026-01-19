import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

import gamerMale from "@/assets/gamer-male-1.png";
import gamerFemale from "@/assets/gamer-female.png";
import gamerKid from "@/assets/gamer-kid.png";
import glassesCloseup from "@/assets/glasses-closeup.png";
import glassesRgb from "@/assets/glasses-rgb.png";
import glassesFront from "@/assets/glasses-front.png";

const galleryImages = [
  { src: gamerFemale, alt: "Female gamer with NOXR glasses", size: "large" },
  { src: gamerMale, alt: "Male gamer with RGB setup", size: "small" },
  { src: glassesRgb, alt: "NOXR glasses with RGB reflection", size: "small" },
  { src: gamerKid, alt: "Young gamer focused", size: "small" },
  { src: glassesCloseup, alt: "NOXR glasses on desk setup", size: "large" },
  { src: glassesFront, alt: "NOXR glasses front view", size: "small" },
];

const GallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="gallery" className="py-24 lg:py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="font-display text-sm tracking-widest text-primary uppercase mb-4 block">
            In Action
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Join the </span>
            <span className="text-gradient-amber">Movement</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            See how gamers around the world are leveling up their setups with NOXR.
          </p>
        </motion.div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              className={`relative group overflow-hidden rounded-2xl ${
                image.size === "large" ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className="aspect-square md:aspect-auto md:h-full">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Border glow on hover */}
              <div className="absolute inset-0 rounded-2xl border border-primary/0 group-hover:border-primary/50 transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
