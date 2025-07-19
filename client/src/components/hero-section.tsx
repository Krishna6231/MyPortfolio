import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex < text.length) {
        setDisplayText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }
    }, delay + currentIndex * 100);

    return () => clearTimeout(timer);
  }, [currentIndex, text, delay]);

  return (
    <span>
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
        className="inline-block w-0.5 h-6 bg-current ml-1"
      />
    </span>
  );
};

export default function HeroSection() {
  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-IN", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: "Asia/Kolkata",
      });
      setCurrentTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="my-20 pt-40 pb-32 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <p className="text-sm text-warm-gray mb-4">
            Based in Hyderabad → <span className="ml-2">{currentTime}</span>
          </p>
          <hr className="border-warm-gray/30 mb-12" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-16 leading-tight text-dark-charcoal"
        >
          Hi, this is Krishna.
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-6 text-lg mb-12"
        >
          <p className="text-dark-charcoal">
            Currently <strong>→ Associate Test Engineer @</strong>{" "}
            <span className="font-medium">TechCorp</span>
          </p>
          <div className="text-warm-gray text-xl">
            <TypewriterText text="Java Developer and Startup Enthusiast" delay={1200} />
          </div>
          <p className="text-dark-charcoal">
            Delivering <strong>→ Quality Code ✨</strong>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="space-y-3 text-base"
        >
          <p className="text-warm-gray">
            <span className="text-dark-charcoal font-medium">Building</span> → REST APIs, Microservices, Automation Frameworks
          </p>
          <p className="text-warm-gray">
            <span className="text-dark-charcoal font-medium">Learning</span> → Full-Stack Development, System Design, DevOps
          </p>
          <p className="text-warm-gray">
            <span className="text-dark-charcoal font-medium">Passionate about</span> → Clean Code, Agile Development, Innovation
          </p>
        </motion.div>
      </div>
    </section>
  );
}
