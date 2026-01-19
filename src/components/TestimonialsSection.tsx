import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alex 'Shadow' Chen",
    role: "Pro Esports Player",
    content: "After 12-hour scrims, my eyes used to be destroyed. With NOXR, I can push through those extra hours of practice without the headaches. Game changer.",
    rating: 5,
    avatar: "AC",
  },
  {
    name: "Sarah Mitchell",
    role: "Twitch Streamer",
    content: "My viewers noticed the difference before I did. No more squinting, no more tired eyes on camera. These glasses are now part of my streaming setup essentials.",
    rating: 5,
    avatar: "SM",
  },
  {
    name: "Marcus Lee",
    role: "Competitive FPS Player",
    content: "The clarity is insane. Colors pop better, I can spot enemies faster, and my reaction time feels sharper. Worth every penny.",
    rating: 5,
    avatar: "ML",
  },
  {
    name: "Jennifer Torres",
    role: "Game Developer",
    content: "As someone who stares at code and game engines all day, NOXR has become essential. The lightweight frame means I forget I'm wearing them.",
    rating: 5,
    avatar: "JT",
  },
];

const TestimonialsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="reviews" className="py-24 lg:py-32 bg-gradient-radial from-card to-background">
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
            Reviews
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-foreground">Trusted by </span>
            <span className="text-gradient-amber">Champions</span>
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            Don't just take our word for it. Hear from the gamers who've made NOXR their secret weapon.
          </p>
        </motion.div>

        {/* Main Testimonial Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <Quote className="absolute top-8 right-8 w-24 h-24 text-primary/10" />
            
            <div className="relative">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                ))}
              </div>

              {/* Content */}
              <motion.p
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="font-body text-xl md:text-2xl text-foreground leading-relaxed mb-8"
              >
                "{testimonials[currentIndex].content}"
              </motion.p>

              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-noxr-amber-glow flex items-center justify-center">
                    <span className="font-display font-bold text-primary-foreground">
                      {testimonials[currentIndex].avatar}
                    </span>
                  </div>
                  <div>
                    <div className="font-display font-semibold text-foreground">
                      {testimonials[currentIndex].name}
                    </div>
                    <div className="font-body text-sm text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </div>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex gap-2">
                  <button
                    onClick={prevTestimonial}
                    className="w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300"
                  >
                    <ChevronLeft className="w-5 h-5 text-foreground" />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="w-12 h-12 rounded-full border border-border hover:border-primary hover:bg-primary/10 flex items-center justify-center transition-all duration-300"
                  >
                    <ChevronRight className="w-5 h-5 text-foreground" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "w-8 bg-primary" : "bg-muted-foreground/30"
                }`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
