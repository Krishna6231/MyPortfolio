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
              <h3 className="text-2xl font-bold mb-2 text-dark-charcoal">Associate Engineer</h3>
              <p className="text-lg text-blue-600 font-medium">Coforge</p>
              <p className="text-sm text-warm-gray">Client: Christie's (Art Auction Platform)</p>
            </div>
            <div className="text-warm-gray font-medium">
              <p>Jul 2024 - Present</p>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="font-semibold mb-3 text-dark-charcoal">Key Responsibilities:</h4>
            <ul className="list-disc list-inside text-warm-gray space-y-2">
              <li><strong>End-to-End Automation:</strong> Automated test cases for assigned features across five web applications in the Christie's project, improving pass rates by over 50% and up to 80% in some areas</li>
              <li><strong>TDD Framework Development:</strong> Built a TDD-based hybrid automation framework using Selenium with Java, reducing flakiness and improving script reuse and reliability</li>
              <li><strong>Cross-functional Collaboration:</strong> Collaborated with Developers and Business Analysts to analyze JIRA user stories, identify test scenarios, and determine cases ideal for automation</li>
              <li><strong>Regression Testing:</strong> Achieved substantial automation coverage in regression testing, significantly reducing manual efforts during deployments and expediting release cycles</li>
            </ul>
          </div>
          

          
          <div className="bg-warm-beige p-4 rounded-lg">
            <p className="text-sm italic text-dark-charcoal">
              <strong>Career Goal:</strong> Leveraging my strong foundation in Java, automation testing, and backend development 
              to transition into a Java backend developer role, contributing to scalable and robust applications.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
