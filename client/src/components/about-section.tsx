import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <hr className="border-warm-gray/30 mb-8" />
          <h2 className="text-3xl font-bold mb-8 text-dark-charcoal">About Me</h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="prose prose-lg max-w-none"
        >
          <p className="text-lg leading-relaxed mb-6 text-dark-charcoal">
            I'm a passionate Java developer transitioning from QA automation with 1+ year of hands-on experience 
            as an Associate Test Engineer. My journey has been centered around building robust automation frameworks 
            and developing backend solutions using Java and Spring Boot.
          </p>
          <p className="text-lg leading-relaxed mb-6 text-dark-charcoal">
            I've gained extensive experience with Java + Selenium + Cucumber to build comprehensive automation frameworks, 
            while simultaneously learning and implementing REST APIs, microservices, and multithreading concepts. 
            My goal is to leverage my technical skills and testing mindset to contribute as a Java backend developer.
          </p>
          <p className="text-lg leading-relaxed text-dark-charcoal">
            When I'm not coding, I'm exploring new technologies, contributing to open-source projects, 
            and planning my next startup venture.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
