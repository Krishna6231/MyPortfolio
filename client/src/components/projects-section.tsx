import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Spendly – Full Stack Personal Finance Tracker",
    description:
      "A comprehensive full-stack expense tracking application with React Native frontend and NestJS backend. Features secure user authentication, expense categorization, and real-time data synchronization across devices.",
    features: [
      "React Native (Expo) frontend for cross-platform mobile support",
      "NestJS backend with DynamoDB for scalable data persistence",
      "Secure REST APIs with JWT authentication and validation",
      "Complete CRUD operations for expenses and categories",
      "Cloud deployment on Render with stateless architecture",
    ],
    technologies: ["React Native", "NestJS", "DynamoDB", "JWT", "Render"],
    githubUrl: "https://github.com/Krishna6231/spendly_FrontEnd",
  },
  {
    title: "Training Center Registry API",
    description:
      "A Spring Boot REST API for managing training center registrations with MongoDB integration. Implements comprehensive validation, exception handling, and filtering capabilities for efficient data management.",
    features: [
      "Spring Boot API with MongoDB data persistence",
      "Field validation using annotations (email, phone, size constraints)",
      "Custom Exception Handler for robust error management",
      "Endpoints for registering, retrieving, and filtering training centers",
      "Spring Data MongoDB for seamless database interaction",
    ],
    technologies: ["Java", "Spring Boot", "MongoDB", "Spring Data", "REST API"],
    githubUrl: "https://github.com/Krishna6231/Training-Center-RESTAPI--Java",
  },
  {
    title: "Secure V2C Communication with Lightweight Cryptography",
    description:
      "A digital signature verification system implementing SCDSA algorithm on Raspberry Pi with AWS cloud integration. Provides secure vehicle-to-cloud communication with serverless architecture.",
    features: [
      "SCDSA algorithm implementation on Raspberry Pi using Python",
      "AWS S3 integration for secure data transfer using pandas and boto3",
      "AWS Lambda functions triggered for signature verification",
      "Serverless architecture for scalable and cost-effective validation",
      "Data integrity and authenticity verification system",
    ],
    technologies: ["Python", "AWS S3", "AWS Lambda", "Raspberry Pi", "SCDSA"],
    // githubUrl: "https://github.com/krishna/secure-v2c-communication",
  },
  {
    title: "Phishing Links Detection & Alert System",
    description:
      "An intelligent machine learning system for detecting phishing URLs with over 96% accuracy using Logistic Regression. Features real-time classification and comprehensive evaluation metrics for cybersecurity applications.",
    features: [
      "Logistic Regression model with 96%+ accuracy for URL classification",
      "NLP processing with NLTK and Regex for feature extraction",
      "Domain analysis using WHOIS API for enhanced detection",
      "End-to-end ML pipeline with preprocessing and model persistence",
      "Terminal-based prediction interface for real-time classification",
      "Visualization with Seaborn confusion matrix heatmaps",
    ],
    technologies: [
      "Python",
      "Machine Learning",
      "NLTK",
      "WHOIS API",
      "Seaborn",
    ],
    githubUrl:
      "https://github.com/Krishna6231/Phishing-Links-Detection-and-Alert-System",
  },
  {
    title: "BDD Automation Framework",
    description:
      "A robust behavior-driven development automation framework built with Java, Selenium WebDriver, Cucumber, and TestNG. Designed for scalable web application testing with comprehensive reporting and parallel execution capabilities.",
    features: [
      "Page Object Model design pattern for maintainable code",
      "Cucumber BDD scenarios with Gherkin syntax",
    ],
    technologies: ["Java", "Selenium", "Cucumber", "BDD"],
    githubUrl: "https://github.com/Krishna6231/BDD-Framework",
  },
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
          <hr className="border-warm-gray/30 w-24 mx-auto mb-8" />
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-dark-charcoal">
            Projects
          </h2>
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
                  {project.title==="Secure V2C Communication with Lightweight Cryptography" ? <></> : <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-warm-gray hover:text-dark-charcoal transition-colors duration-200"
                  >
                    <Github className="w-6 h-6" />
                  </a>}
                </div>

                <p className="text-lg text-warm-gray mb-6">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-semibold mb-3 text-dark-charcoal">
                    Key Features:
                  </h4>
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
                  {project.title==="Secure V2C Communication with Lightweight Cryptography" ? <></> : "View on GitHub"}
                  {project.title==="Secure V2C Communication with Lightweight Cryptography" ? <></> : <ExternalLink className="ml-2 w-4 h-4" />}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
