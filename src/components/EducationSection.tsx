
import { useEffect, useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, School } from "lucide-react";

interface Education {
  id: number;
  degree: string;
  institution: string;
  duration: string;
  description: string;
  icon: "school" | "graduation";
}

const educationData: Education[] = [
  {
    id: 1,
    degree: "B.Tech in Computer Science and Engineering",
    institution: "University of Technology",
    duration: "2022 - 2025",
    description: "Specialized in artificial intelligence and machine learning, with focus on neural networks and deep learning algorithms.",
    icon: "graduation",
  },
  {
    id: 2,
    degree: "Bachelor of Computer Science",
    institution: "State University",
    duration: "2015 - 2019",
    description: "Focused on software engineering, algorithms, and data structures. Graduated with honors.",
    icon: "school",
  }
];

const EducationSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.8) {
          educationData.forEach((item, index) => {
            setTimeout(() => {
              setVisibleItems(prev => [...prev, item.id]);
            }, index * 300);
          });
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="education-section" ref={sectionRef} className="py-20 lg:py-32 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-blue-100/30 dark:bg-blue-900/10 blur-3xl"></div>
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-indigo-100/30 dark:bg-indigo-900/10 blur-3xl"></div>
      </div>
      
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="relative z-10">Education</span>
            <span className="absolute -z-10 bottom-1 left-0 w-full h-4 bg-blue-200 dark:bg-blue-800/30 rounded"></span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My academic journey and qualifications
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-400 to-indigo-600 rounded-full ml-1.5 md:ml-0 md:left-1/2 md:-translate-x-[2px]"></div>
            
            {/* Education items */}
            {educationData.map((item, index) => (
              <div 
                key={item.id} 
                className={`relative mb-16 ${visibleItems.includes(item.id) ? 'animate-fade-in' : 'opacity-0'}`}
                style={{animationDelay: `${index * 0.3}s`}}
              >
                <div className={`md:flex ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  {/* Icon */}
                  <div className={`absolute left-0 md:left-1/2 md:-translate-x-1/2 z-10 bg-white dark:bg-gray-900 rounded-full p-2 border-4 border-blue-500 shadow-lg animate-pulse-slow`}>
                    {item.icon === "graduation" ? 
                      <GraduationCap className="h-6 w-6 text-blue-500" /> : 
                      <School className="h-6 w-6 text-blue-500" />
                    }
                  </div>
                  
                  <div className={`pl-20 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                    <Card className="border-0 shadow-lg hover:shadow-xl transition-all glass animate-float" style={{animationDelay: `${index * 0.2}s`}}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle className="text-xl font-bold text-blue-600 dark:text-blue-400">{item.degree}</CardTitle>
                          <span className="text-sm font-medium px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
                            {item.duration}
                          </span>
                        </div>
                        <p className="text-lg font-medium">{item.institution}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
