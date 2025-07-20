import { motion } from "framer-motion";

export default function ContactSection() {
  const contactLinks = [
    { label: "LinkedIn", url: "https://www.linkedin.com/in/krishna-modi-a53050256/" },
    { label: "GitHub", url: "https://github.com/Krishna6231" },
    { label: "Email", url: "mailto:krishnamodi.1524@gmail.com" },
    { label: "Resume", url: "https://drive.google.com/file/d/1aA0aOfLRIp3ayuZaZS-LwmZgnnF0t3w_/view?usp=sharing" }
  ];

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <hr className="border-warm-gray/30 mb-8" />
          <h2 className="text-3xl font-bold mb-8 text-dark-charcoal">Let's Connect</h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-lg space-y-4"
        >
          {contactLinks.map((link, index) => (
            <motion.div
              key={link.label}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <span className="font-medium text-dark-charcoal">→</span>
              <a 
                href={link.url} 
                target={link.label !== "Email" ? "_blank" : undefined}
                rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                className="text-blue-600 hover:text-blue-800 transition-colors duration-200"
              >
                {link.label}
              </a>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-warm-gray/30 text-sm text-warm-gray"
        >
          <p>© Krishna 2025 • Updated 07/25</p>
        </motion.div>
      </div>
    </section>
  );
}
