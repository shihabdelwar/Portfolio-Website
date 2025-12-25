/**
 * About Page - Atmospheric Depth Layering Design
 * 
 * Personal introduction with resume information and contact options
 * Enhanced with smooth animations and visual hierarchy
 */

import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, FileText, ArrowRight, Code2, Brain, GitBranch } from "lucide-react";
import { useEffect, useState } from "react";

export default function About() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">About Me</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Passionate computer science student dedicated to building innovative solutions and continuously expanding technical expertise
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          {/* Left Column - About Content */}
          <div className="space-y-8">
            {/* Hero Image */}
            <div
              className={`relative rounded-2xl overflow-hidden border border-primary/20 transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
                <img
                  src={`${import.meta.env.BASE_URL}images/about-hero.png`}
                  alt="Delwar Shihab"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="glass-card p-4 rounded-xl border border-primary/20 text-center hover:border-primary/50 transition-all">
                <div className="text-2xl font-bold text-primary">3.76</div>
                <p className="text-sm text-muted-foreground">GPA</p>
              </div>
              <div className="glass-card p-4 rounded-xl border border-primary/20 text-center hover:border-primary/50 transition-all">
                <div className="text-2xl font-bold text-primary">May 2027</div>
                <p className="text-sm text-muted-foreground">Graduation</p>
              </div>
              <div className="glass-card p-4 rounded-xl border border-primary/20 text-center hover:border-primary/50 transition-all">
                <div className="text-2xl font-bold text-primary">NYC</div>
                <p className="text-sm text-muted-foreground">Location</p>
              </div>
            </div>
          </div>

          {/* Right Column - Bio */}
          <div className="space-y-6">
            <div
              className={`transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
              }`}
            >
              <h2 className="text-2xl font-bold mb-3">Hello, I'm Shihab Delwar</h2>
              <p className="text-muted-foreground leading-relaxed">
                I'm a Computer Science student at Binghamton University, where I've developed a strong foundation in software development, algorithms, data structures, and modern programming paradigms. My academic journey has been complemented by hands-on experience through internships, personal projects, and collaborative team work.
              </p>
            </div>

            <div
              className={`transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
              }`}
            >
              <h3 className="text-lg font-semibold mb-2">My Passion</h3>
              <p className="text-muted-foreground leading-relaxed">
                My passion lies in creating efficient, scalable, and user-friendly applications that solve real-world problems. I am constantly exploring new technologies and methodologies to stay at the forefront of the rapidly evolving tech landscape.
              </p>
            </div>

            <div
              className={`transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
              }`}
            >
              <h3 className="text-lg font-semibold mb-2">Beyond Coding</h3>
              <p className="text-muted-foreground leading-relaxed">
                Beyond coding, I enjoy contributing to open-source projects, participating in hackathons, and engaging with the developer community to share knowledge and learn from others.
              </p>
            </div>

            {/* Honors */}
            <div
              className={`glass-card p-6 rounded-xl border border-primary/20 transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <span className="text-primary">✨</span> Academic Honors
              </h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  University Scholars Program
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Binghamton Achievement Scholarship Recipient
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                  Dean's List - Multiple Semesters
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            I'm always open to discussing new opportunities, collaborations, or just connecting with fellow developers and tech enthusiasts.
          </p>

          <div className="flex flex-wrap gap-4">
            <a href="mailto:shihabdelwar@gmail.com" target="_blank" rel="noopener noreferrer">
              <Button className="group gap-2 bg-primary hover:bg-primary/90">
                <Mail className="w-4 h-4" />
                Email Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="https://linkedin.com/in/shihab-delwar" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="group gap-2">
                <Linkedin className="w-4 h-4" />
                LinkedIn
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="https://github.com/shihabdelwar" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="group gap-2">
                <Github className="w-4 h-4" />
                GitHub
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <a href="/resume" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="group gap-2">
                <FileText className="w-4 h-4" />
                Resume
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
          </div>
        </div>

        {/* Interests & Focus Areas */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="glass-card p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-primary" />
              Full-Stack Development
            </h3>
            <p className="text-muted-foreground">
              Building end-to-end web applications with modern frameworks and technologies
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <GitBranch className="w-5 h-5 text-primary" />
              Algorithms & Data Structures
            </h3>
            <p className="text-muted-foreground">
              Solving complex computational problems with efficient and elegant solutions
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Brain className="w-5 h-5 text-primary" />
              Machine Learning
            </h3>
            <p className="text-muted-foreground">
              Exploring AI and ML techniques to create intelligent applications
            </p>
          </div>

          <div className="glass-card p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group">
            <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
              <Code2 className="w-5 h-5 text-primary" />
              Open Source
            </h3>
            <p className="text-muted-foreground">
              Contributing to community projects and sharing knowledge with developers
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
