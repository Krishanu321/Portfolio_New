import { Button } from "@/components/ui/button";
import { MessageCircle, Download } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { 
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiCplusplus,
  SiMongodb,
  SiGit
} from "react-icons/si";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTitle, setCurrentTitle] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  
  const jobTitles = [
    "Full Stack Developer",
    "Associate Software Engineer", 
    "Web Developer", 
    "Frontend Developer",
    "Backend Developer", 
    "System Engineer", 
    "Software Engineer"
  ];

  const skills = [
    { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
    { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
    { name: "React", icon: <SiReact className="text-blue-400" /> },
    { name: "Node.js", icon: <SiNodedotjs className="text-green-500" /> },
    { name: "C++", icon: <SiCplusplus className="text-blue-600" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Git", icon: <SiGit className="text-orange-600" /> }
  ];
  
  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) - 0.5,
          y: ((e.clientY - rect.top) / rect.height) - 0.5
        });
      }
    };
    
    const titleInterval = setInterval(() => {
      setCurrentTitle(prev => (prev + 1) % jobTitles.length);
    }, 2500);
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearInterval(titleInterval);
    };
  }, []);

  const parallaxStyle = {
    transform: `translate3d(${mousePosition.x * 15}px, ${mousePosition.y * 15}px, 0)`,
    transition: 'transform 0.2s ease-out'
  };

  const handleWhatsAppContact = () => {
    window.open('https://wa.me/919083108496?text=Hi%20Krishanu!%20I%20would%20like%20to%20discuss%20a%20project%20with%20you.', '_blank');
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Krishanu Santra_Resume.pdf';
    link.download = '/Krishanu Santra_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section ref={heroRef} className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-white via-purple-50 to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 transition-all duration-500">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-200/40 to-blue-200/40 dark:from-purple-500/20 dark:to-blue-500/20 rounded-full blur-3xl animate-float" style={parallaxStyle}></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-200/40 to-purple-200/40 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full blur-3xl animate-pulse-slow" style={{...parallaxStyle, animationDelay: '-2s'}}></div>
        
        {/* Floating Elements */}
        <div className="absolute top-1/4 right-1/4 w-16 h-16 bg-gradient-to-br from-purple-400 to-blue-400 dark:from-purple-500 dark:to-blue-500 rounded-lg rotate-12 animate-float opacity-30" style={parallaxStyle}></div>
        <div className="absolute bottom-1/3 left-1/4 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-400 dark:from-blue-500 dark:to-purple-500 rounded-full animate-bounce opacity-20" style={parallaxStyle}></div>
      </div>
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Side - Professional Info */}
          <div className={`flex-1 max-w-2xl ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
            {/* Professional Badge */}
            <div className="inline-block mb-6">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur opacity-30"></div>
                <div className="relative px-6 py-2 bg-white/90 dark:bg-purple-800/80 backdrop-blur-sm rounded-full border border-purple-200 dark:border-purple-500 text-purple-700 dark:text-purple-200 text-sm font-semibold shadow-lg">
                  👋 Welcome To My Portfolio!
                </div>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-white">
              Hi, I'm <span className="bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 bg-clip-text text-transparent">Krishanu!</span>
              <br />
              <span className="text-3xl md:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent italic font-light transition-all duration-500">
                {jobTitles[currentTitle]}
              </span>
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I'm an India based developer & designer with <span className="text-purple-600 dark:text-purple-400 font-semibold">0.5 years</span> of experience in creating amazing digital experiences.
            </p>

            {/* Social Links with Original Brand Colors */}
            <div className="flex gap-4 mb-6">
              {/* GitHub with original black logo */}
              <a 
                href="https://github.com/Krishanu321" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 shadow-sm"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#181717">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
              </a>

              {/* LinkedIn with original blue logo */}
              <a 
                href="https://www.linkedin.com/in/003-lks/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-full border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 shadow-sm"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button 
                onClick={handleWhatsAppContact}
                className="group relative overflow-hidden bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/25"
              >
                <span className="relative z-10 flex items-center">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Hire Me
                </span>
              </Button>
              
              <Button 
                onClick={handleDownloadCV}
                variant="outline"
                className="group relative overflow-hidden border-2 border-purple-500 dark:border-purple-400 text-purple-600 dark:text-purple-400 hover:text-white font-semibold px-8 py-4 rounded-xl hover:bg-purple-500 dark:hover:bg-purple-400 transition-all duration-300 transform hover:scale-105 bg-white/80 dark:bg-gray-800/80"
              >
                <span className="relative z-10 flex items-center">
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </span>
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center p-4 bg-white/80 dark:bg-purple-800/50 backdrop-blur-sm rounded-xl border border-purple-100 dark:border-purple-700 shadow-lg">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">0.5</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-white/80 dark:bg-purple-800/50 backdrop-blur-sm rounded-xl border border-purple-100 dark:border-purple-700 shadow-lg">
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">5+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Projects Done</div>
              </div>
              <div className="text-center p-4 bg-white/80 dark:bg-purple-800/50 backdrop-blur-sm rounded-xl border border-purple-100 dark:border-purple-700 shadow-lg">
                <div className="text-2xl font-bold text-cyan-600 dark:text-cyan-400">23</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Age</div>
              </div>
              <div className="text-center p-4 bg-white/80 dark:bg-purple-800/50 backdrop-blur-sm rounded-xl border border-purple-100 dark:border-purple-700 shadow-lg">
                <div className="text-2xl font-bold text-purple-500 dark:text-purple-400">3</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Languages</div>
              </div>
            </div>
          </div>

          {/* Right Side - Round Image and Skills */}
          <div className={`flex-1 max-w-lg ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{animationDelay: '0.3s'}}>
            <div className="relative mt-12">
              {/* Round Portfolio Image */}
              <div className="relative mb-6 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                  <img 
                    src="./Pic__My.jpg" 
                    alt="Portfolio Preview" 
                    className="relative w-72 h-72 rounded-full object-cover shadow-2xl border-4 border-white/20 dark:border-purple-500/30"
                  />
                </div>
              </div>

              {/* Skills Grid with Official Icons */}
              <div className="bg-white/90 dark:bg-purple-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-2xl border border-purple-100 dark:border-purple-700">
                <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-4 text-center">Top Skills</h3>
                
                <div className="grid grid-cols-4 gap-3">
                  {skills.map((skill) => (
                    <div 
                      key={skill.name}
                      className="flex flex-col items-center p-3 bg-white/60 dark:bg-purple-700/50 rounded-lg hover:scale-105 transition-transform duration-300 shadow-sm"
                    >
                      <div className="text-3xl mb-1">{skill.icon}</div>
                      <span className="text-xs font-medium text-gray-700 dark:text-gray-200 text-center">{skill.name}</span>
                    </div>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-600">
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="font-medium text-gray-500 dark:text-gray-400 w-20">Email:</span>
                      <span className="text-purple-600 dark:text-purple-400 truncate">krishanusantra345@gmail.com</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium text-gray-500 dark:text-gray-400 w-20">Phone:</span>
                      <span className="text-blue-600 dark:text-blue-400">+919083108496</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium text-gray-500 dark:text-gray-400 w-20">Age:</span>
                      <span className="text-gray-600 dark:text-gray-300">23 Years</span>
                    </div>
                    <div className="flex items-center">
                      <span className="font-medium text-gray-500 dark:text-gray-400 w-20">Language:</span>
                      <span className="text-gray-600 dark:text-gray-300">English, Bengali, Hindi</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;