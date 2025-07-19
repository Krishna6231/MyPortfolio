import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section id="hero" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-sm text-warm-gray mb-4">Based in Hyderabad →</p>
          <hr className="border-warm-gray/30 mb-12" />
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-12 leading-tight text-dark-charcoal"
        >
          Hi, this is Krishna.
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4 text-lg"
        >
          <p className="text-dark-charcoal">
            Currently <strong>→ Associate Test Engineer @</strong> <span className="font-medium">TechCorp</span>
          </p>
          <p className="text-warm-gray">Java Developer and Startup Enthusiast</p>
          <p className="text-dark-charcoal">Delivering <strong>→ Quality Code ✨</strong></p>
        </motion.div>
      </div>
    </section>
  );
}
