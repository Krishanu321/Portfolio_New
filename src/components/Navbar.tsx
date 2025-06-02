
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppContact = () => {
    window.open('https://wa.me/919083108496?text=Hi%20Krishanu!%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.', '_blank');
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 backdrop-blur-xl ${
        isScrolled 
          ? 'bg-gray-900/90 dark:bg-gray-900/95 shadow-2xl shadow-purple-500/10 border-b border-purple-500/20' 
          : 'bg-transparent'
      }`}
    >
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl blur opacity-75 group-hover:opacity-100 transition-all duration-300 animate-pulse-slow"></div>
              <div className="relative w-12 h-12 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl flex items-center justify-center text-white font-bold text-xl shadow-2xl transform hover:scale-110 transition-all duration-300">
                K
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-gray-900 animate-pulse"></div>
            </div>
            <div className="ml-3">
              <div className="font-bold text-white text-lg">Krishanu Santra</div>
              <div className="text-xs text-purple-400 font-medium">Full Stack Developer</div>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-300 hover:text-purple-400 font-medium transition-all duration-300 relative group transform hover:scale-105">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about-section" className="text-gray-300 hover:text-purple-400 font-medium transition-all duration-300 relative group transform hover:scale-105">
              About
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#projects-section" className="text-gray-300 hover:text-purple-400 font-medium transition-all duration-300 relative group transform hover:scale-105">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#skills-section" className="text-gray-300 hover:text-purple-400 font-medium transition-all duration-300 relative group transform hover:scale-105">
              Journey
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact-section" className="text-gray-300 hover:text-purple-400 font-medium transition-all duration-300 relative group transform hover:scale-105">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-cyan-500 transition-all duration-300 group-hover:w-full"></span>
            </a>
            
            <ThemeToggle />
            
            <Button 
              onClick={handleWhatsAppContact}
              size="sm" 
              className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-medium px-6 py-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 hover:-translate-y-1"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              Hire Me
            </Button>
          </nav>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button 
              className="text-gray-300 focus:outline-none p-2 hover:text-purple-400 transition-colors duration-300" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-xl shadow-2xl border-t border-purple-500/20 animate-fade-in">
          <div className="container px-4 mx-auto py-4">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#" 
                className="text-gray-300 hover:text-purple-400 font-medium transition-colors py-2 border-b border-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#about-section" 
                className="text-gray-300 hover:text-purple-400 font-medium transition-colors py-2 border-b border-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#projects-section" 
                className="text-gray-300 hover:text-purple-400 font-medium transition-colors py-2 border-b border-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Projects
              </a>
              <a 
                href="#skills-section" 
                className="text-gray-300 hover:text-purple-400 font-medium transition-colors py-2 border-b border-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Journey
              </a>
              <a 
                href="#contact-section" 
                className="text-gray-300 hover:text-purple-400 font-medium transition-colors py-2 border-b border-gray-700"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </a>
              <Button 
                onClick={() => {
                  handleWhatsAppContact();
                  setIsMobileMenuOpen(false);
                }}
                size="sm" 
                className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white w-full font-medium py-3 rounded-xl transition-all duration-300"
              >
                <MessageCircle className="mr-2 h-4 w-4" />
                Hire Me
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
