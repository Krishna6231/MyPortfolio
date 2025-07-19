import { motion } from "framer-motion";
import { SiJavascript, SiSpringboot, SiGit, SiIntellijidea, SiCucumber } from "react-icons/si";
import { CheckCheck, Coffee, Code } from "lucide-react";

const skills = [
  { name: "Java", icon: Coffee, color: "text-red-600", description: "Core Language" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500", description: "Frontend & APIs" },
  { name: "Spring Boot", icon: SiSpringboot, color: "text-green-600", description: "Backend Framework" },
  { name: "Selenium", icon: Code, color: "text-green-500", description: "Automation" },
  { name: "TestNG", icon: CheckCheck, color: "text-purple-600", description: "Testing Framework" },
  { name: "Cucumber", icon: SiCucumber, color: "text-green-700", description: "BDD Framework" },
  { name: "Git", icon: SiGit, color: "text-orange-600", description: "Version Control" },
  { name: "IntelliJ", icon: SiIntellijidea, color: "text-blue-600", description: "IDE" },
];

const concepts = [
  "REST APIs", "BDD", "Data Structures & Algorithms", "OOP", 
  "Multithreading", "Microservices", "JUnit", "Agile"
];

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <hr className="border-warm-gray/30 mb-8" />
          <h2 className="text-3xl font-bold mb-8 text-dark-charcoal">Skills & Technologies</h2>
        </motion.div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="text-center">
                <skill.icon className={`text-4xl ${skill.color} mb-4 mx-auto`} />
                <h3 className="font-semibold text-lg mb-2 text-dark-charcoal">{skill.name}</h3>
                <p className="text-sm text-warm-gray">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <h3 className="text-xl font-semibold mb-6 text-dark-charcoal">Key Concepts</h3>
          <div className="flex flex-wrap gap-3">
            {concepts.map((concept, index) => (
              <motion.span
                key={concept}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white px-4 py-2 rounded-full shadow-sm text-sm font-medium text-dark-charcoal hover:shadow-md transition-shadow duration-200"
              >
                {concept}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
