import { motion } from "framer-motion";
import {
  SiJavascript,
  SiSpringboot,
  SiGit,
  SiIntellijidea,
  SiCucumber,
  SiReact,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiPython,
  SiAmazon,
  SiPostman,
} from "react-icons/si";
import {
  CheckCheck,
  Coffee,
  Code,
  Database,
  Server,
  Globe,
  Smartphone,
} from "lucide-react";

const skills = [
  {
    name: "Java",
    icon: Coffee,
    color: "text-red-600",
    description: "Core Language",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-yellow-500",
    description: "Frontend & APIs",
  },
  {
    name: "Spring Boot",
    icon: SiSpringboot,
    color: "text-green-600",
    description: "Backend Framework",
  },
  {
    name: "React",
    icon: SiReact,
    color: "text-blue-500",
    description: "Frontend Library",
  },
  {
    name: "NestJS",
    icon: SiNestjs,
    color: "text-red-500",
    description: "Node.js Framework",
  },
  {
    name: "MySQL",
    icon: SiMysql,
    color: "text-blue-700",
    description: "Relational Database",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-500",
    description: "NoSQL Database",
  },
  {
    name: "Selenium",
    icon: Code,
    color: "text-green-500",
    description: "Automation",
  },
  {
    name: "TestNG",
    icon: CheckCheck,
    color: "text-purple-600",
    description: "Testing Framework",
  },
  {
    name: "Cucumber",
    icon: SiCucumber,
    color: "text-green-700",
    description: "BDD Framework",
  },
  {
    name: "REST APIs",
    icon: Globe,
    color: "text-indigo-600",
    description: "Web Services",
  },
  // {
  //   name: "Microservices",
  //   icon: Server,
  //   color: "text-gray-600",
  //   description: "Architecture",
  // },
  // {
  //   name: "Multithreading",
  //   icon: Code,
  //   color: "text-purple-500",
  //   description: "Concurrency",
  // },
  {
    name: "Git",
    icon: SiGit,
    color: "text-orange-600",
    description: "Version Control",
  },
  {
    name: "IntelliJ",
    icon: SiIntellijidea,
    color: "text-blue-600",
    description: "IDE",
  },
  {
    name: "OOP",
    icon: Database,
    color: "text-teal-600",
    description: "Programming Paradigm",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "text-blue-500",
    description: "Machine Learning",
  },
  {
    name: "React Native",
    icon: Smartphone,
    color: "text-blue-400",
    description: "Mobile Development",
  },
  {
    name: "AWS",
    icon: SiAmazon,
    color: "text-orange-500",
    description: "Cloud Services",
  },
  {
    name: "Postman",
    icon: SiPostman,
    color: "text-orange-600",
    description: "API Testing",
  },
];

export default function SkillsSection() {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <hr className="border-warm-gray/30 w-24 mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-dark-charcoal">
            Skills & Technologies
          </h2>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-all duration-200"
            >
              <div className="text-center">
                <skill.icon
                  className={`text-3xl ${skill.color} mb-3 mx-auto`}
                />
                <h3 className="font-semibold text-sm mb-1 text-dark-charcoal">
                  {skill.name}
                </h3>
                <p className="text-xs text-warm-gray">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
