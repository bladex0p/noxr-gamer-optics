import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Shield, Truck, RefreshCcw } from "lucide-react";
import { Button } from "./ui/button";
import productImage from "@/assets/glasses-front.png";

const benefits = [
  { icon: Shield, text: "2 Year Warranty" },
  { icon: Truck, text: "Free Worldwide Shipping" },
  { icon: RefreshCcw, text: "30-Day Returns" },
];

const CTASection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/5 via-background to-background" />
      
      {/* Ambient glows */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-accent/10 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 lg:px-12 relative">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
        >
          {/* Glow effect on card */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          
          <div className="relative max-w-3xl mx-auto">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <img
                src={productImage}
                alt="NOXR Gaming Glasses"
                className="w-64 h-auto mx-auto drop-shadow-2xl"
              />
            </motion.div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">Ready to </span>
              <span className="text-gradient-amber">Level Up?</span>
            </h2>
            
            <p className="font-body text-lg text-muted-foreground mb-8 max-w-xl mx-auto">
              Join thousands of gamers who've made NOXR their competitive advantage. 
              Your eyes will thank you.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button variant="hero" size="xl">
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="hero-outline" size="xl">
                View Collection
              </Button>
            </div>

            {/* Benefits */}
            <div className="flex flex-wrap justify-center gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 text-muted-foreground">
                  <benefit.icon className="w-5 h-5 text-primary" />
                  <span className="font-body text-sm">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
