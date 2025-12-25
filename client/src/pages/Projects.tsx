/**
 * Projects Page - Atmospheric Depth Layering Design
 * 
 * Design Philosophy: Project showcase with visual cards and depth effects
 * - Glassmorphism project cards with hover effects
 * - Grid layout with staggered animations
 */

import { ExternalLink, Github, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function Projects() {
  const projects = [
    {
      title: "Heap Memory Allocator",
      type: "Course Project",
      period: "Nov 2025 - Dec 2025",
      description:
        "Developed a free-space–managed memory allocator library in C with support for malloc, free, and realloc operations, implementing allocation policies, block coalescing, and comprehensive error checking to ensure allocator integrity.",
      technologies: ["C", "Memory Management", "Systems Programming", "Algorithms"],
      keyFeatures: [
        "Free-space management with coalescing",
        "malloc, free, and realloc operations",
        "Allocation policies implementation",
        "Comprehensive error checking",
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "xv6 Scheduler Enhancements",
      type: "Course Project",
      period: "Oct 2025 - Nov 2025",
      description:
        "Developed kernel-level scheduling functionality in xv6, including fork-winner control, MLFQ-like priority scheduling, allotment configuration, and scheduling pause mechanisms.",
      technologies: ["C", "Operating Systems", "Kernel Development", "Scheduling"],
      keyFeatures: [
        "Fork-winner control implementation",
        "MLFQ-like priority scheduling",
        "Allotment configuration",
        "Multi-process testing",
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "Real-Time Object Detection with YOLOv5",
      type: "Course Project",
      period: "May 2025 - Jun 2025",
      description:
        "Developed a Python application leveraging the Ultralytics YOLOv5 deep learning model to perform real-time object detection on live webcam video streams.",
      technologies: ["Python", "YOLOv5", "OpenCV", "Deep Learning", "Computer Vision"],
      keyFeatures: [
        "Real-time object detection",
        "Live webcam streaming",
        "Annotated frame rendering",
        "Dynamic object counting",
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "Dynamic TV Show Database",
      type: "Course Project",
      period: "Jan 2025 - April 2025",
      description:
        "Designed and implemented a complete TV show management system in C++ using dynamic memory, custom container classes, and modular object-oriented design.",
      technologies: ["C++", "Object-Oriented Design", "Data Structures", "Database"],
      keyFeatures: [
        "Dynamic memory management",
        "Custom container classes",
        "Object-oriented architecture",
        "Complete CRUD operations",
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "Server/Client Library Database",
      type: "Course Project",
      period: "Nov 2024 - Dec 2024",
      description:
        "Developed a multithreaded client-server library system in Java supporting concurrent user connections, custom authentication, and dynamic catalog queries.",
      technologies: ["Java", "Networking", "Multithreading", "Socket Programming"],
      keyFeatures: [
        "Multithreaded architecture",
        "Custom authentication system",
        "Dynamic catalog queries",
        "Object serialization",
      ],
      github: "#",
      demo: "#",
    },
    {
      title: "Netflix Recommender",
      type: "Course Project",
      period: "Jul 2023 - Aug 2023",
      description:
        "Developed a movie recommendation system using Python, HTML, and CSS, with a custom API to deliver personalized content.",
      technologies: ["Python", "HTML", "CSS", "API Development", "Machine Learning"],
      keyFeatures: [
        "Custom recommendation algorithm",
        "RESTful API design",
        "Responsive web interface",
        "Personalized content delivery",
      ],
      github: "#",
      demo: "#",
    },
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Background Pattern */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${import.meta.env.BASE_URL}images/projects-bg.png)`,
          }}
        />
      </div>

      <div className="container px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-up">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of personal and academic projects showcasing my technical skills,
            problem-solving abilities, and passion for building innovative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass-card rounded-xl p-6 hover:scale-105 transition-all duration-400 flex flex-col animate-fade-up"
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Project Header */}
              <div className="mb-4">
                <div className="flex items-start justify-between mb-3">
                  <Code className="w-8 h-8 text-accent" />
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      className="text-muted-foreground hover:text-accent transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={project.demo}
                      className="text-muted-foreground hover:text-accent transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>
                <h2 className="text-2xl font-semibold text-foreground mb-3">
                  {project.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Technologies */}
              <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="border-primary/30 text-xs hover:border-primary/60 transition-all"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-primary mb-3">
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {project.keyFeatures.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="text-primary mt-1">▸</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4 border-t border-primary/10">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 group border-primary/30 hover:border-primary/60"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 group bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
