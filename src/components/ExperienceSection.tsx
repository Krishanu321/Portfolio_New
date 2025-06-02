
import { useEffect, useState, useRef } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Briefcase, Building } from "lucide-react";

interface Experience {
  id: number;
  position: string;
  company: string;
  duration: string;
  location: string;
  description: string[];
  icon: "briefcase" | "building";
}

const experienceData: Experience[] = [
  {
    id: 1,
    position: "Senior Full Stack Developer",
    company: "Tech Innovations Inc.",
    duration: "2021 - Present",
    location: "San Francisco, CA",
    description: [
      "Lead a team of 5 developers in creating modern web applications",
      "Implemented CI/CD pipelines reducing deployment time by 40%",
      "Optimized frontend performance resulting in 30% faster load times"
    ],
    icon: "briefcase"
  },
  {
    id: 2,
    position: "Frontend Developer",
    company: "Digital Solutions",
    duration: "2019 - 2021",
    location: "Chicago, IL",
    description: [
      "Developed responsive user interfaces using React and TypeScript",
      "Collaborated with designers to implement pixel-perfect UI components",
      "Built reusable component libraries that reduced development time by 25%"
    ],
    icon: "building"
  },
  {
    id: 3,
    position: "Web Developer Intern",
    company: "StartUp Labs",
    duration: "2018 - 2019",
    location: "Remote",
    description: [
      "Assisted in the development of web applications using modern JavaScript frameworks",
      "Participated in code reviews and implemented feedback to improve code quality",
      "Contributed to open-source projects related to data visualization"
    ],
    icon: "briefcase"
  }
];

const ExperienceSection = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.8) {
          experienceData.forEach((item, index) => {
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
    <section id="experience-section" ref={sectionRef} className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-800/50 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-indigo-100/30 dark:bg-indigo-900/10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-blue-100/30 dark:bg-blue-900/10 blur-3xl"></div>
      </div>
      
      <div className="container px-4 mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 relative inline-block">
            <span className="relative z-10">Experience</span>
            <span className="absolute -z-10 bottom-1 left-0 w-full h-4 bg-indigo-200 dark:bg-indigo-800/30 rounded"></span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            My professional journey and accomplishments
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto space-y-12">
          {experienceData.map((item, index) => (
            <div 
              key={item.id} 
              className={`${visibleItems.includes(item.id) ? 'animate-fade-in' : 'opacity-0'}`}
              style={{animationDelay: `${index * 0.3}s`}}
            >
              <Card className="border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all glass">
                <div className="flex flex-col md:flex-row">
                  {/* Left side - company info */}
                  <div className="w-full md:w-1/3 bg-gradient-to-br from-blue-500 to-indigo-600 text-white p-6 flex flex-col">
                    <div className="mb-4 p-3 bg-white/10 rounded-full w-fit">
                      {item.icon === "briefcase" ? 
                        <Briefcase className="h-6 w-6 text-white" /> : 
                        <Building className="h-6 w-6 text-white" />
                      }
                    </div>
                    <h3 className="text-xl font-bold mb-1">{item.company}</h3>
                    <p className="text-blue-100 mb-2">{item.location}</p>
                    <p className="text-sm font-medium px-3 py-1 bg-white/20 rounded-full w-fit mt-auto">
                      {item.duration}
                    </p>
                  </div>
                  
                  {/* Right side - experience details */}
                  <div className="w-full md:w-2/3 p-6">
                    <CardHeader className="p-0 mb-4">
                      <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{item.position}</h3>
                    </CardHeader>
                    <CardContent className="p-0">
                      <ul className="space-y-2">
                        {item.description.map((point, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                            <span className="text-gray-600 dark:text-gray-300">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
