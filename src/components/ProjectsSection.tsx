import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  url: string;
  github: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Student Centric Study-System | Self Paced Learning",
    description: "AI-powered learning platform for personalized courses, exam prep, and interview readiness with self-paced learning and role-based access.",
    tags: ["React", "RestAPI", "TypeScript", "NodeJS", "MongoDB"],
    url: "https://selflearning-five.vercel.app/",
    github: "https://github.com/Krishanu321/Student-Centric-Study-System_Self-Paced-Learning",
    image: "/Self_study.jpg"
  },
  {
    id: 2,
    title: "Doctor Appoinment Booking System",
    description: "A web-based Doctor Appointment Booking System built using the MERN Stack. Users can register, book appointments, and manage doctors through an admin dashboard.",
    tags: ["MongoDB", "ExpressJs", "ReactJs", "NodeJs"],
    url: "https://github.com/Krishanu321/Doc-Appoinment-system",
    github: "https://github.com/Krishanu321/Doc-Appoinment-system",
    image: "/Doctor.png"
  },
  {
    id: 3,
    title: "E-Commerce Platform",
    description: "Built an e-commerce website with HTML, CSS, and JavaScript featuring user-friendly design and dynamic functionality.",
    tags: ["HTML", "CSS", "JavaScrip"],
    url: "https://krish-shoppy-ecommerce.netlify.app/",
    github: "https://github.com/Krishanu321/krish-shoppy-ecommerce",
    image: "/Ecommerce.png"
  },
  {
    id: 4,
    title: "ATM System Management",
    description: "An analytics dashboard for social media management with data visualization, content scheduling, and performance metrics tracking.",
    tags: ["C++", "OOPS", "DSA"],
    url: "https://drive.google.com/file/d/1SSRCc1ijvyjha3hpzgpwvvK3ubSYjnLu/view",
    github: "https://github.com/Krishanu321/ATM_System",
    image: "/atm.jpg"
  },
  {
    id: 5,
    title: "Task Management System",
    description: "A productivity app for creating, organizing, and tracking tasks with drag-and-drop functionality.",
    tags: ["React", "HTML", "CSS", "JavaScript"],
    url: "https://todo-app-eight-beta-71.vercel.app/register",
    github: "https://github.com/Krishanu321/Todo-app-React",
    image: "/task.png"
  },
  {
    id: 6,
    title: "Krishanu Portfolio (Old)",
    description: " Developed a responsive  site using JavaScript, CSS, ReactJS, NodeJS, and ExpressJS, ensuring optimal viewing across devices and enhancing user interaction with smooth animations.",
    tags: ["ReactJs", "JavaScript", "CSS", "NodeJs", "HTML"],
    url: "https://krishanu-portfolio.onrender.com/",
    github: "https://github.com/Krishanu321/Portfolio_MERN_Stack",
    image: "/port.png"
  }
];

const ProjectsSection = () => {
  const [visibleProjects, setVisibleProjects] = useState<number[]>([]);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById('projects-section');
      if (section) {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.8) {
          projects.forEach((project, index) => {
            setTimeout(() => {
              setVisibleProjects(prev => [...prev, project.id]);
            }, index * 150);
          });
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isGradient = (image: string) => image.startsWith('bg-gradient');

  return (
    <section id="projects-section" className="py-20 bg-gradient-to-b from-blue-50 via-indigo-50 to-white dark:from-gray-900 dark:via-purple-900 dark:to-gray-800 relative overflow-hidden transition-all duration-500">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 dark:from-purple-500/20 dark:to-blue-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-cyan-200/30 to-blue-200/30 dark:from-blue-500/20 dark:to-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-emerald-200/30 to-teal-200/30 dark:from-purple-400/20 dark:to-indigo-400/20 rounded-full blur-2xl animate-bounce"></div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-600 dark:from-purple-400 dark:via-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-3xl mx-auto">
            Discover my latest creations that showcase innovation, creativity, and technical excellence in web development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group perspective-1000 ${visibleProjects.includes(project.id) ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.15}s` }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <Card className="relative overflow-hidden bg-white/90 dark:bg-purple-800/50 backdrop-blur-xl border border-blue-200 dark:border-purple-500/30 shadow-2xl transition-all duration-500 transform-gpu group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-blue-500/20 dark:group-hover:shadow-purple-500/20 h-full">
                {/* Animated Border Glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 via-indigo-400 to-cyan-400 dark:from-purple-400 dark:via-blue-400 dark:to-cyan-400 rounded-xl blur opacity-0 group-hover:opacity-50 transition duration-500"></div>
                
                <div className="relative z-10 h-full flex flex-col">
                  {/* Project Preview */}
                  <div className={`h-48 ${isGradient(project.image) ? project.image : ''} relative overflow-hidden transition-all duration-500 group-hover:scale-110`}>
                    {!isGradient(project.image) && (
                      <div 
                        className="h-full w-full bg-cover bg-center"
                        style={{ backgroundImage: `url(${project.image})` }}
                      />
                    )}
                    <div className="absolute inset-0 bg-white/20 dark:bg-black/20 group-hover:bg-white/10 dark:group-hover:bg-black/10 transition-colors duration-300"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 dark:from-purple-900/80 via-transparent to-transparent"></div>
                    
                    {/* Action Buttons */}
                    <div className={`absolute top-4 right-4 flex gap-2 transition-all duration-300 ${hoveredProject === project.id ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'}`}>
                      <Button
                        size="sm"
                        className="bg-white/80 dark:bg-purple-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-purple-700 text-gray-700 dark:text-gray-200 border-blue-200 dark:border-purple-400 h-8 w-8 p-0"
                        onClick={() => window.open(project.url, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                      <Button
                        size="sm"
                        className="bg-white/80 dark:bg-purple-800/80 backdrop-blur-sm hover:bg-white dark:hover:bg-purple-700 text-gray-700 dark:text-gray-200 border-blue-200 dark:border-purple-400 h-8 w-8 p-0"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col">
                    <CardHeader className="relative pb-2">
                      <CardTitle className="text-xl font-bold text-gray-800 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-indigo-600 dark:group-hover:from-purple-400 dark:group-hover:to-blue-400 group-hover:bg-clip-text transition-all duration-300">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="flex-1">
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span 
                            key={tagIndex}
                            className="relative overflow-hidden bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-purple-900/50 dark:to-blue-900/50 text-gray-700 dark:text-gray-200 text-xs font-medium px-3 py-1 rounded-full border border-blue-200 dark:border-purple-400 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-blue-400 dark:hover:border-purple-300 hover:text-blue-700 dark:hover:text-purple-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>

                    <CardFooter className="pt-2">
                      <Button 
                        variant="ghost" 
                        className="text-blue-600 dark:text-purple-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600 dark:hover:from-purple-500 dark:hover:to-blue-600 p-0 hover:px-4 transition-all duration-300 group/btn w-full justify-start"
                        onClick={() => window.open(project.url, '_blank')}
                      >
                        <span className="flex items-center">
                          View Project 
                          <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </span>
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button 
            variant="outline" 
            className="group relative overflow-hidden border-2 border-blue-500 dark:border-purple-500 text-blue-600 dark:text-purple-400 hover:text-white bg-white dark:bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-indigo-600 dark:hover:from-purple-500 dark:hover:to-blue-600 px-8 py-3 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 dark:hover:shadow-purple-500/25"
          >
            <span className="relative z-10 flex items-center font-semibold">
              View All Projects 
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;