import { useEffect, useState } from "react";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('about-section');
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.8) {
          setIsVisible(true);
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Initial check in case the section is already visible
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const techSkills = [
    { name: "React.js", colorClass: "bg-purple-100 dark:bg-purple-500/20 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-500/30" },
    { name: "TypeScript", colorClass: "bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-500/30" },
    { name: "Node.js", colorClass: "bg-indigo-100 dark:bg-indigo-500/20 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-500/30" },
    { name: "SQL", colorClass: "bg-cyan-100 dark:bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-500/30" },
    { name: "MongoDB", colorClass: "bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30" }
  ];

  return (
    <section id="about-section" className="py-20 bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-950">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            {/* Code Box */}
            <div className={`w-full md:w-1/2 transition-all duration-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="relative group transform transition-transform duration-300 hover:-translate-y-2">
                {/* Shadow */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 rounded-xl opacity-20 blur-lg transition-all duration-500 group-hover:opacity-30"></div>
                
                {/* Main Code Box */}
                <div className="relative bg-gray-900 rounded-xl overflow-hidden border border-gray-700 shadow-xl">
                  {/* Window Controls */}
                  <div className="flex items-center px-4 py-3 bg-gray-800 border-b border-gray-700">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="ml-4 text-xs text-gray-400">Krishanu.jsx</div>
                  </div>
                  {/* Code Content */}
                  <div className="p-6">
                    <pre className="text-sm md:text-base font-mono text-gray-100 overflow-x-auto">
                      <code>
                        <span className="text-purple-400">const</span> <span className="text-blue-400">Krishanu</span> <span className="text-gray-400">= ()</span> <span className="text-purple-400">=&gt;</span> <span className="text-gray-400">{"{"}</span>{'\n'}
                        <span className="text-purple-400 ml-4">  return</span> <span className="text-gray-400">{"{"}</span>{'\n'}
                        <span className="text-yellow-400 ml-8">    frontend</span><span className="text-gray-400">:</span> <span className="text-gray-300">[</span><span className="text-green-400">"React"</span><span className="text-gray-300">, </span><span className="text-green-400">"TypeScript"</span><span className="text-gray-300">, </span><span className="text-green-400">"Tailwind"</span><span className="text-gray-300">]</span><span className="text-gray-400">,</span>{'\n'}
                        <span className="text-yellow-400 ml-8">    backend</span><span className="text-gray-400">:</span> <span className="text-gray-300">[</span><span className="text-green-400">"Node.js"</span><span className="text-gray-300">, </span><span className="text-green-400">"Express"</span><span className="text-gray-300">, </span><span className="text-green-400">"Python"</span><span className="text-gray-300">]</span><span className="text-gray-400">,</span>{'\n'}
                        <span className="text-yellow-400 ml-8">    database</span><span className="text-gray-400">:</span> <span className="text-gray-300">[</span><span className="text-green-400">"MongoDB"</span><span className="text-gray-300">, </span><span className="text-green-400">"PostgreSQL"</span><span className="text-gray-300">]</span><span className="text-gray-400">,</span>{'\n'}
                        <span className="text-yellow-400 ml-8">    motto</span><span className="text-gray-400">:</span> <span className="text-green-400">"Turning coffee into code ☕"</span>{'\n'}
                        <span className="text-gray-400 ml-4">  </span><span className="text-gray-400">{"}"}</span><span className="text-gray-400">;</span>{'\n'}
                        <span className="text-gray-400">{"}"}</span>{'\n\n'}
                        <span className="text-blue-400">console</span><span className="text-gray-400">.</span><span className="text-yellow-400">log</span><span className="text-gray-400">(</span><span className="text-blue-400">Krishanu</span><span className="text-gray-400">());</span>{'\n'}
                        <span className="text-gray-500">// Output: Full-Stack Developer</span>
                      </code>
                    </pre>
                  </div>
                  
                  {/* Reflection Effect */}
                  <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-gray-900/90 to-transparent rounded-b-xl"></div>
                </div>
              </div>
            </div>

            {/* About Content */}
            <div className={`w-full md:w-1/2 transition-all duration-700 delay-150 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-white">
                <span className="bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">About Me</span>
              </h2>
              
              <div className="space-y-6">
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  Hello! I'm <span className="font-semibold text-purple-600 dark:text-purple-400">Krishanu Santra</span>, a B.Tech in Computer Science and Engineering graduate from Kalyani Government Engineering College (KGEC).</p>
                
                <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                  As a passionate Full-Stack Developer, I bridge the gap between robust back-end systems and intuitive front-end interfaces. My expertise spans the entire development stack, allowing me to craft seamless, high-performance applications from concept to deployment.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {techSkills.map((tech, index) => (
                    <span 
                      key={index}
                      className={`${tech.colorClass} text-sm font-medium px-4 py-2 rounded-full border backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5`}
                    >
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;