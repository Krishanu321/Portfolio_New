import { useState, useRef } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Briefcase, 
  Building, 
  GraduationCap, 
  School, 
  Code, 
  Brain, 
  Zap
} from "lucide-react";
import { 
  SiJavascript, 
  SiReact, 
  SiNodedotjs, 
  SiMongodb, 
  SiExpress, 
  SiCplusplus,
  SiHtml5,
  SiTailwindcss,
  SiTypescript,
  SiPostman,
  SiMysql,
  SiPython
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript className="h-6 w-6" />, color: "from-yellow-400 to-yellow-600" },
  { name: "ReactJs", icon: <SiReact className="h-6 w-6" />, color: "from-blue-400 to-cyan-500" },
  { name: "NodeJS", icon: <SiNodedotjs className="h-6 w-6" />, color: "from-green-500 to-green-700" },
  { name: "MongoDB", icon: <SiMongodb className="h-6 w-6" />, color: "from-green-400 to-green-600" },
  { name: "ExpressJS", icon: <SiExpress className="h-6 w-6" />, color: "from-gray-400 to-gray-600" },
  { name: "C++", icon: <SiCplusplus className="h-6 w-6" />, color: "from-blue-600 to-blue-800" },
  { name: "HTML", icon: <SiHtml5 className="h-6 w-6" />, color: "from-orange-500 to-orange-700" },
  { name: "Tailwind", icon: <SiTailwindcss className="h-6 w-6" />, color: "from-cyan-400 to-blue-500" },
  { name: "TypeScript", icon: <SiTypescript className="h-6 w-6" />, color: "from-blue-500 to-blue-700" },
  { name: "Postman", icon: <SiPostman className="h-6 w-6" />, color: "from-orange-400 to-orange-600" },
  { name: "MySQL", icon: <SiMysql className="h-6 w-6" />, color: "from-blue-400 to-blue-600" },
  { name: "Python", icon: <SiPython className="h-6 w-6" />, color: "from-blue-500 to-yellow-500" }
];

const experienceData = [
  {
    id: 1,
    position: "SDE Intern",
    company: "Bluestock™🔺",
    duration: "1 Dec 2024 - 30 Jan 2025",
    location: "Remote",
    description: [
      "Built and improved web app features using modern JS frameworks.",
      "Worked remotely with a team to develop and debug code.",
      "Gained full-stack experience in a startup setting.",
      "Used Git and Agile practices for efficient development."
    ],
    icon: "briefcase"
  },
  {
    id: 2,
    position: "Web Developer",
    company: "Techoctanet Services Pvt Ltd",
    duration: "1st August 2024 - 30 Sept 2024",
    location: "Remote",
    description: [
      "Proficient in HTML for structuring clean, semantic, and accessible web pages.",
      "Skilled in CSS (including Flexbox & Grid) for creating responsive, modern UI designs.",
      "Strong foundation in JavaScript for adding interactivity and handling dynamic data.",
      "Experienced in React.js for building efficient, component-based SPAs with state management."
    ],
    icon: "building"
  },
  {
    id: 3,
    position: "MERN Stack Development",
    company: "Euphoria Genx",
    duration: "25th Jun 2023 - 25th Oct 2023",
    location: "Kolkata",
    description: [
      "Completed industrial training at Euphoria Genx, Kolkata.",
      "Specialized in MERN stack: MongoDB, Express.js, React.js, and Node.js.",
      "Built full-stack web applications with real-world functionality.",
      "Gained practical experience in end-to-end web development."
    ],
    icon: "briefcase"
  }
];

const educationData = [
  {
    id: 1,
    degree: "B.Tech in Computer Science and Engineering",
    institution: "Kalyani Government Engineering College, Nadia",
    duration: "2022 - 2025",
    description: "Specialized in software engineering , Cloud Computing with focus on full-stack development and database management. Graduated with first class honors.",
    icon: "graduation"
  },
  {
    id: 2,
    degree: "Diploma in Computer Science and Technology",
    institution: "Raja Ranjit Kishore Government Polytechnic, Jhargram",
    duration: "2020 - 2022",
    description: "Focused on computer science fundamentals, programming languages, and software development.",
    icon: "school"
  }
];

const SkillsExperienceSection = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section id="skills-section" ref={sectionRef} className="py-20 lg:py-32 bg-gradient-to-b from-white to-blue-50 dark:from-gray-900 dark:via-purple-900 dark:to-indigo-900 transition-all duration-500 relative">
      {/* 3D Background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 right-20 w-72 h-72 rounded-full bg-blue-200/20 dark:bg-blue-500/10 blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 rounded-full bg-indigo-200/20 dark:bg-indigo-500/10 blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-purple-200/10 dark:bg-purple-500/5 blur-3xl"></div>
      </div>
      
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 text-gray-800 dark:text-white">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 dark:from-cyan-400 dark:via-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
                My Journey
              </span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              My skills, experience, and educational background that shape my expertise
            </p>
          </div>
          
          <Tabs defaultValue="skills" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 mb-12 mx-auto max-w-md bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-200 dark:border-gray-700 shadow-lg">
              <TabsTrigger value="skills" className="data-[state=active]:bg-gradient-to-r from-blue-500 to-indigo-500 data-[state=active]:text-white text-gray-600 dark:text-gray-300">
                Skills
              </TabsTrigger>
              <TabsTrigger value="experience" className="data-[state=active]:bg-gradient-to-r from-cyan-500 to-blue-500 data-[state=active]:text-white text-gray-600 dark:text-gray-300">
                Experience
              </TabsTrigger>
              <TabsTrigger value="education" className="data-[state=active]:bg-gradient-to-r from-emerald-500 to-teal-500 data-[state=active]:text-white text-gray-600 dark:text-gray-300">
                Education
              </TabsTrigger>
            </TabsList>
            
            {/* Skills Content */}
            <TabsContent value="skills" className="animate-fade-in">
              <div className="space-y-10">
                {/* Skills Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {skills.map((skill) => (
                    <div 
                      key={skill.name}
                      className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 dark:border-gray-700/50 hover:shadow-2xl dark:hover:shadow-blue-500/20 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105"
                    >
                      <div className="flex flex-col items-center text-center space-y-3">
                        <div className={`w-16 h-16 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          {skill.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                          {skill.name}
                        </h3>
                      </div>
                      {/* Hover Effect Border */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 dark:group-hover:opacity-30 blur-xl transition-opacity duration-500 -z-10`}></div>
                    </div>
                  ))}
                </div>
                
                <div className="grid md:grid-cols-3 gap-8 mt-16">
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-100 dark:border-gray-700 text-gray-800 dark:text-white hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mb-4">
                        <Code className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-blue-600 dark:text-blue-400">Frontend Development</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300">Creating responsive, interactive user interfaces with modern frameworks and cutting-edge design systems.</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-100 dark:border-gray-700 text-gray-800 dark:text-white hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mb-4">
                        <Zap className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-cyan-600 dark:text-cyan-400">Backend Development</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300">Building robust, scalable server-side applications with secure APIs and optimal database design.</p>
                    </CardContent>
                  </Card>
                  
                  <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-100 dark:border-gray-700 text-gray-800 dark:text-white hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <CardHeader>
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg flex items-center justify-center mb-4">
                        <Brain className="h-6 w-6 text-white" />
                      </div>
                      <CardTitle className="text-emerald-600 dark:text-emerald-400">Problem Solving</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600 dark:text-gray-300">Analyzing complex requirements and delivering innovative solutions with clean, maintainable code.</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
            
            {/* Experience Content */}
            <TabsContent value="experience" className="animate-fade-in">
              <div className="space-y-12">
                {experienceData.map((item) => (
                  <Card key={item.id} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-100 dark:border-gray-700 overflow-hidden hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-1/3 bg-gradient-to-br from-blue-500 to-indigo-600 dark:from-blue-600 dark:to-indigo-700 text-white p-6 flex flex-col">
                        <div className="mb-4 p-3 bg-white/20 rounded-full w-fit">
                          {item.icon === "briefcase" ? 
                            <Briefcase className="h-6 w-6 text-white" /> : 
                            <Building className="h-6 w-6 text-white" />
                          }
                        </div>
                        <h3 className="text-xl font-bold mb-1">{item.company}</h3>
                        <p className="text-purple-200 mb-2">{item.location}</p>
                        <p className="text-sm font-medium px-3 py-1 bg-white/20 rounded-full w-fit mt-auto">
                          {item.duration}
                        </p>
                      </div>
                      
                      <div className="w-full md:w-2/3 p-6">
                        <CardHeader className="p-0 mb-4">
                          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{item.position}</h3>
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
                {educationData.map((item) => (
                  <Card key={item.id} className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-blue-100 dark:border-gray-700 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-all duration-300 transform hover:scale-105 shadow-lg">
                    <div className="flex flex-col md:flex-row">
                      <div className="w-full md:w-1/3 bg-gradient-to-br from-emerald-500 to-teal-600 dark:from-emerald-600 dark:to-teal-700 text-white p-6 flex flex-col">
                        <div className="mb-4 p-3 bg-white/20 rounded-full w-fit">
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
                          <h3 className="text-xl font-bold text-gray-800 dark:text-white">{item.degree}</h3>
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

export default SkillsExperienceSection;