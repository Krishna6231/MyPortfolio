import { motion } from "framer-motion";

export default function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <hr className="border-warm-gray/30 mb-8" />
          <h2 className="text-3xl font-bold mb-8 text-dark-charcoal">Education</h2>
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
              <h3 className="text-2xl font-bold mb-2 text-dark-charcoal">B.Tech, Computer Science Engineering</h3>
              <p className="text-lg text-blue-600 font-medium">Mahatma Gandhi Institute of Technology</p>
            </div>
            <div className="text-warm-gray font-medium">
              <p>2020 - 2024</p>
              <p className="text-sm">CGPA: 8.0/10.0</p>
            </div>
          </div>
          
          <div className="mb-6">
            <h4 className="font-semibold mb-3 text-dark-charcoal">Intermediate Education:</h4>
            <div className="space-y-2">
              <p className="text-warm-gray">
                <strong>Narayana Junior College</strong> (2018 - 2020)
              </p>
              <p className="text-sm text-warm-gray">Marks: 977/1000</p>
            </div>
          </div>
          
          <div className="bg-warm-beige p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-dark-charcoal">Certifications:</h4>
            <ul className="text-sm text-dark-charcoal space-y-1">
              <li>• Oracle - Java Fundamentals</li>
              <li>• Cigniti Technologies - Automation Testing</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}