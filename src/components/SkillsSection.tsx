
import { useState, useEffect, useRef } from "react";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Briefcase, Building, GraduationCap, School } from "lucide-react";

const skills = [
  { name: "JavaScript/TypeScript", level: 90 },
  { name: "React/Next.js", level: 85 },
  { name: "CSS/Tailwind/SASS", level: 80 },
  { name: "Node.js/Express", level: 75 },
  { name: "SQL/NoSQL Databases", level: 70 },
  { name: "Testing (Jest, React Testing Library)", level: 70 },
];

const experienceData = [
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

const educationData = [
  {
    id: 1,
    degree: "Master of Computer Science",
    institution: "University of Technology",
    duration: "2019 - 2021",
    description: "Specialized in artificial intelligence and machine learning, with focus on neural networks and deep learning algorithms.",
    icon: "graduation"
  },
  {
    id: 2,
    degree: "Bachelor of Computer Science",
    institution: "State University",
    duration: "2015 - 2019",
    description: "Focused on software engineering, algorithms, and data structures. Graduated with honors.",
    icon: "school"
  }
];

const SkillsSection = () => {
  const [visibleSkills, setVisibleSkills] = useState<{[key: string]: number}>({});
  const [activeTab, setActiveTab] = useState("skills");
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.8) {
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setVisibleSkills(prev => ({
                ...prev,
                [skill.name]: skill.level
              }));
            }, index * 200);
          });
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check on initial load
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const handleTabChange = (value: string) => {
    setActiveTab(value);
  };

  return (
    <section id="skills-section" ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800/50 relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-blue-100/20 dark:bg-blue-900/5 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-indigo-100/20 dark:bg-indigo-900/5 blur-3xl animate-pulse-slow"></div>
      </div>
      
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 relative inline-block">
              <span className="relative z-10">Professional Growth</span>
              <span className="absolute -z-10 bottom-1 left-0 w-full h-4 bg-blue-200 dark:bg-blue-800/30 rounded"></span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              My skills, experience and educational background
            </p>
          </div>
          
          <Tabs defaultValue="skills" className="w-full" onValueChange={handleTabChange}>
            <TabsList className="grid grid-cols-3 mb-12 mx-auto max-w-md">
              <TabsTrigger value="skills" className="data-[state=active]:bg-gradient-to-r from-blue-500 to-indigo-500 data-[state=active]:text-white">
                Skills
              </TabsTrigger>
              <TabsTrigger value="experience" className="data-[state=active]:bg-gradient-to-r from-blue-500 to-indigo-500 data-[state=active]:text-white">
                Experience
              </TabsTrigger>
              <TabsTrigger value="education" className="data-[state=active]:bg-gradient-to-r from-blue-500 to-indigo-500 data-[state=active]:text-white">
                Education
              </TabsTrigger>
            </TabsList>
            
            {/* Skills Content */}
            <TabsContent value="skills" className="animate-fade-in">
              <div className="space-y-10">
                <div className="space-y-8">
                  {skills.map((skill, index) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                        <span className="text-lg font-medium text-blue-600 dark:text-blue-400">
                          {visibleSkills[skill.name] || 0}%
                        </span>
                      </div>
                      <Progress 
                        value={visibleSkills[skill.name] || 0} 
                        className="h-2.5 bg-gray-200 dark:bg-gray-700"
                      />
                    </div>
                  ))}
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mt-16">
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 p-8 rounded-xl border border-blue-100 dark:border-blue-800/30 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                    <h3 className="text-xl font-semibold mb-4 text-blue-700 dark:text-blue-300">Front-end Development</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Crafting responsive, accessible, and performant user interfaces with modern frameworks and design systems.
                    </p>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                        <span>Responsive Web Design</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                        <span>State Management (Redux, Context API)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                        <span>Performance Optimization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-500 flex-shrink-0"></span>
                        <span>Web Accessibility (WCAG)</span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-8 rounded-xl border border-indigo-100 dark:border-indigo-800/30 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                    <h3 className="text-xl font-semibold mb-4 text-indigo-700 dark:text-indigo-300">Back-end Development</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Building robust, secure, and scalable server-side applications and APIs.
                    </p>
                    <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500 flex-shrink-0"></span>
                        <span>RESTful API Design</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500 flex-shrink-0"></span>
                        <span>Authentication & Authorization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500 flex-shrink-0"></span>
                        <span>Database Design & Optimization</span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-500 flex-shrink-0"></span>
                        <span>Serverless Architecture</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            {/* Experience Content */}
            <TabsContent value="experience" className="animate-fade-in">
              <div className="space-y-12">
                {experienceData.map((item, index) => (
                  <Card key={item.id} className="border-0 shadow-lg overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row">
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
                ))}
              </div>
            </TabsContent>
            
            {/* Education Content */}
            <TabsContent value="education" className="animate-fade-in">
              <div className="space-y-12">
                {educationData.map((item, index) => (
                  <Card key={item.id} className="border-0 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-1/3 bg-gradient-to-br from-indigo-500 to-purple-600 text-white p-6 flex flex-col">
                        <div className="mb-4 p-3 bg-white/10 rounded-full w-fit">
                          {item.icon === "graduation" ? 
                            <GraduationCap className="h-6 w-6 text-white" /> : 
                            <School className="h-6 w-6 text-white" />
                          }
                        </div>
                        <h3 className="text-xl font-bold mb-1">{item.institution}</h3>
                        <p className="text-sm font-medium px-3 py-1 bg-white/20 rounded-full w-fit mt-auto">
                          {item.duration}
                        </p>
                      </div>
                      
                      <div className="w-full md:w-2/3 p-6">
                        <CardHeader className="p-0 mb-4">
                          <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100">{item.degree}</h3>
                        </CardHeader>
                        <CardContent className="p-0">
                          <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                        </CardContent>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
