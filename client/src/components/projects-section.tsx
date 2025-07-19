import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Training Center REST API",
    description: "A comprehensive Spring Boot backend project implementing full CRUD operations for training center management. Features include course registration, instructor management, and student progress tracking with RESTful API endpoints.",
    features: [
      "Complete CRUD operations for courses, instructors, and students",
      "RESTful API design with proper HTTP methods and status codes",
      "MySQL database integration with JPA/Hibernate",
      "Input validation and error handling",
      "API documentation with Swagger"
    ],
    technologies: ["Java", "Spring Boot", "MySQL", "JPA", "REST API"],
    githubUrl: "https://github.com/krishna/training-center-api"
  },
  {
    title: "BDD Automation Framework",
    description: "A robust behavior-driven development automation framework built with Java, Selenium WebDriver, Cucumber, and TestNG. Designed for scalable web application testing with comprehensive reporting and parallel execution capabilities.",
    features: [
      "Page Object Model design pattern for maintainable code",
      "Cucumber BDD scenarios with Gherkin syntax",
      "Cross-browser testing support (Chrome, Firefox, Safari)",
      "Parallel test execution with TestNG",
      "Detailed HTML reports with screenshots",
      "CI/CD integration ready"
    ],
    technologies: ["Java", "Selenium", "Cucumber", "TestNG", "BDD"],
    githubUrl: "https://github.com/krishna/bdd-automation-framework"
  }
];

export default function ProjectsSection() {
  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <hr className="border-warm-gray/30 mb-8" />
        </motion.div>
        
        <div className="space-y-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold group-hover:text-blue-600 transition-colors duration-200 text-dark-charcoal">
                    {project.title}
                  </h3>
                  <a 
                    href={project.githubUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-warm-gray hover:text-dark-charcoal transition-colors duration-200"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                </div>
                
                <p className="text-lg text-warm-gray mb-6">
                  {project.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-dark-charcoal">Key Features:</h4>
                  <ul className="list-disc list-inside text-warm-gray space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <span 
                      key={tech}
                      className="bg-warm-beige px-3 py-1 rounded-full text-sm font-medium text-dark-charcoal"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <a 
                  href={project.githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  View on GitHub 
                  <ExternalLink className="ml-2 w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
