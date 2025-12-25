/**
 * Home Page - Atmospheric Depth Layering Design
 * 
 * Design Philosophy: Immersive hero with parallax scrolling, glassmorphism cards
 * Enhanced with smooth scroll animations and visual depth effects
 */

import { Button } from "@/components/ui/button";
import { ArrowRight, Code2, Briefcase, BookOpen, Zap } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Parallax Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/images/hero-background.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            transform: `translateY(${scrollY * 0.5}px)`,
            opacity: 0.6,
          }}
        />

        {/* Animated gradient overlay */}
        <div className="absolute inset-0 z-1 bg-gradient-to-b from-transparent via-background/50 to-background" />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="space-y-6 animate-fade-in">
            {/* Animated badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-sm hover:border-primary/60 transition-all duration-300">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Full-Stack Developer</span>
            </div>

            {/* Main heading with gradient */}
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="text-foreground">Shihab</span>
              <br />
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Delwar
              </span>
            </h1>

            {/* Subheading */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Computer Science student at Binghamton University. Building innovative solutions with modern technologies, algorithms, and creative problem-solving.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Link href="/projects">
                <Button
                  size="lg"
                  className="group bg-primary hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
                >
                  View My Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/about">
                <Button
                  size="lg"
                  variant="outline"
                  className="group border-primary/30 hover:border-primary/60 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary/40 rounded-full flex items-start justify-center p-2">
            <div className="w-1 h-2 bg-primary/60 rounded-full animate-pulse" />
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-background to-background/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Explore My Work</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Dive into my technical skills, professional experiences, projects, and academic journey
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {/* Skills Card */}
            <div className="group glass-card p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
              <Link href="/skills">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Technical Skills</h3>
                <p className="text-muted-foreground">
                  Expertise in modern programming languages, frameworks, and development tools
                </p>
              </Link>
            </div>

            {/* Experience Card */}
            <div className="group glass-card p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
              <Link href="/experience">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Experience</h3>
                <p className="text-muted-foreground">
                  Professional work history and internships in software development
                </p>
              </Link>
            </div>

            {/* Projects Card */}
            <div className="group glass-card p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
              <Link href="/projects">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Code2 className="w-6 h-6 text-primary" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Projects</h3>
                <p className="text-muted-foreground">
                  Portfolio of personal and academic projects showcasing technical abilities
                </p>
              </Link>
            </div>

            {/* Courses Card */}
            <div className="group glass-card p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
              <Link href="/courses">
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <ArrowRight className="w-5 h-5 text-primary/40 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Courses</h3>
                <p className="text-muted-foreground">
                  Comprehensive computer science coursework and academic achievements
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-background/50 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                6+
              </div>
              <p className="text-muted-foreground">Projects</p>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                3.76
              </div>
              <p className="text-muted-foreground">GPA</p>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                12+
              </div>
              <p className="text-muted-foreground">Skills</p>
            </div>
            <div className="text-center group">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                3
              </div>
              <p className="text-muted-foreground">Internships</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
