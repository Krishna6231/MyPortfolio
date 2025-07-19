import { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
      isScrolled ? 'bg-warm-beige/90 backdrop-blur-sm shadow-sm' : 'bg-warm-beige'
    } border-b border-warm-gray/20`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div 
            className="text-xl font-bold text-dark-charcoal cursor-pointer"
            onClick={() => scrollToSection('hero')}
          >
            Krishna
          </div>
          
          <div className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('work')}
              className="text-dark-charcoal hover:text-warm-gray transition-colors duration-200"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-dark-charcoal hover:text-warm-gray transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('skills')}
              className="text-dark-charcoal hover:text-warm-gray transition-colors duration-200"
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('experience')}
              className="text-dark-charcoal hover:text-warm-gray transition-colors duration-200"
            >
              Experience
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-dark-charcoal hover:text-warm-gray transition-colors duration-200"
            >
              Contact
            </button>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://linkedin.com/in/krishna" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-warm-gray hover:text-dark-charcoal transition-colors duration-200"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="https://github.com/krishna" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-warm-gray hover:text-dark-charcoal transition-colors duration-200"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="mailto:krishna@email.com"
              className="text-warm-gray hover:text-dark-charcoal transition-colors duration-200"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
