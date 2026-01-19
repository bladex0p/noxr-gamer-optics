import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Users, Rocket, Heart } from "lucide-react";
import glassesDesk from "@/assets/glasses-desk.png";

const values = [
  {
    icon: Target,
    title: "Precision",
    description: "Every product engineered for peak performance.",
  },
  {
    icon: Users,
    title: "Community",
    description: "Built by gamers, for gamers worldwide.",
  },
  {
    icon: Rocket,
    title: "Innovation",
    description: "Cutting-edge lens technology that leads the industry.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We live and breathe gaming, just like you.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-background overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="font-display text-sm tracking-widest text-primary uppercase mb-4 block">
              Our Story
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">Built for Gamers,</span>
              <br />
              <span className="text-gradient-amber">By Gamers</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-6 leading-relaxed">
              NOXR was born from countless late-night gaming sessions and the realization 
              that our eyes were paying the price. As competitive gamers ourselves, we 
              knew there had to be a better way.
            </p>
            <p className="font-body text-lg text-muted-foreground mb-10 leading-relaxed">
              We spent two years perfecting our lens technology, testing with pro players, 
              and refining every detail. The result? Eyewear that doesn't just protect—it 
              enhances your gaming experience.
            </p>

            {/* Values Grid */}
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 * index }}
                  className="flex items-start gap-3"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary shrink-0">
                    <value.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">
                      {value.title}
                    </h4>
                    <p className="font-body text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-primary/10 rounded-3xl blur-[60px] transform rotate-6" />
              <img
                src={glassesDesk}
                alt="NOXR glasses on gaming desk"
                className="relative w-full rounded-2xl"
              />
            </div>

            {/* Stats Card */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -bottom-8 -left-8 glass-card rounded-2xl p-6"
            >
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-gradient-amber">50K+</div>
                  <div className="font-body text-xs text-muted-foreground">Happy Gamers</div>
                </div>
                <div className="text-center">
                  <div className="font-display text-3xl font-bold text-gradient-amber">4.9★</div>
                  <div className="font-body text-xs text-muted-foreground">Avg Rating</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
