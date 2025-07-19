import { motion } from "framer-motion";

export default function ExperienceSection() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <hr className="border-warm-gray/30 mb-8" />
          <h2 className="text-3xl font-bold mb-8 text-dark-charcoal">Experience</h2>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-lg shadow-sm p-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
            <div>
              <h3 className="text-2xl font-bold mb-2 text-dark-charcoal">Associate Test Engineer</h3>
              <p className="text-lg text-blue-600 font-medium">TechCorp Solutions</p>
            </div>
            <div className="text-warm-gray font-medium">
              <p>1+ Year Experience</p>
              <p className="text-sm">2023 - Present</p>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="font-semibold mb-3 text-dark-charcoal">Key Responsibilities:</h4>
            <ul className="list-disc list-inside text-warm-gray space-y-2">
              <li><strong>Automation Development:</strong> Designed and implemented automated regression and functional test cases using Java, Selenium, and Cucumber frameworks</li>
              <li><strong>Backend Development:</strong> Contributed to internal tools development using Java and Spring Boot, gaining hands-on experience with REST API development</li>
              <li><strong>Agile Collaboration:</strong> Worked closely with development teams in Agile environments to provide faster testing feedback and ensure quality deliverables</li>
              <li><strong>Framework Enhancement:</strong> Continuously improved automation frameworks for better maintainability, scalability, and reporting capabilities</li>
              <li><strong>Quality Assurance:</strong> Ensured high-quality software delivery through comprehensive testing strategies and defect tracking</li>
            </ul>
          </div>
          
          <div className="mb-6">
            <h4 className="font-semibold mb-3 text-dark-charcoal">Technical Achievements:</h4>
            <ul className="list-disc list-inside text-warm-gray space-y-2">
              <li>Reduced regression testing time by 60% through automation framework implementation</li>
              <li>Developed reusable test components that improved team productivity</li>
              <li>Successfully integrated CI/CD pipelines with automated testing workflows</li>
              <li>Mentored junior team members on automation best practices and Java programming</li>
            </ul>
          </div>
          
          <div className="bg-warm-beige p-4 rounded-lg">
            <p className="text-sm italic text-dark-charcoal">
              <strong>Career Goal:</strong> Leveraging my strong foundation in Java, Spring Boot, and system design principles 
              to transition into a Java backend developer role, where I can contribute to building scalable and robust applications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
