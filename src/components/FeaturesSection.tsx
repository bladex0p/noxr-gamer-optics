import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Eye, Timer, Sparkles, Glasses, Award } from "lucide-react";
import productImage from "@/assets/product-hero.png";

const features = [
  {
    icon: Shield,
    title: "99% Blue Light Defense",
    description: "Our amber-tinted lenses block up to 99% of harmful blue light emissions from screens.",
  },
  {
    icon: Eye,
    title: "Reduced Eye Strain",
    description: "Say goodbye to tired, dry eyes after marathon gaming sessions.",
  },
  {
    icon: Timer,
    title: "Extended Gaming Sessions",
    description: "Play longer without fatigue. Stay in the zone when it matters most.",
  },
  {
    icon: Sparkles,
    title: "Enhanced Visual Clarity",
    description: "Experience sharper contrast and reduced glare for better target acquisition.",
  },
  {
    icon: Glasses,
    title: "Ultra-Lightweight Frame",
    description: "Weighing just 28g, you'll forget you're even wearing them.",
  },
  {
    icon: Award,
    title: "Premium Build Quality",
    description: "TR90 flex frame and anti-scratch coating built to last.",
  },
];

const FeaturesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="features" className="py-24 lg:py-32 bg-gradient-radial from-card to-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="font-display text-sm tracking-widest text-primary uppercase mb-4 block">
            Why NOXR
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Engineered for </span>
            <span className="text-gradient-amber">Victory</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Every detail crafted with competitive gamers in mind. From lens technology 
            to frame ergonomics, NOXR delivers the edge you need.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-[80px]" />
              <img
                src={productImage}
                alt="NOXR Gaming Glasses"
                className="relative w-full rounded-2xl glow-amber-sm"
              />
            </div>
            
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 bg-gradient-card border-gradient rounded-2xl p-6 backdrop-blur-sm"
            >
              <div className="font-display text-3xl font-bold text-gradient-amber">99%</div>
              <div className="font-body text-sm text-muted-foreground">Blue Light<br />Blocked</div>
            </motion.div>
          </motion.div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 * index }}
                className="group glass-card rounded-xl p-6 hover:glow-amber-sm transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold mb-2 text-foreground">
                  {feature.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
