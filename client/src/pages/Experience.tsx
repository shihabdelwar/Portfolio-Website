/**
 * Experience Page - Atmospheric Depth Layering Design
 * 
 * Professional work history with timeline visualization
 * Enhanced with smooth animations and visual depth
 */

import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Building2 } from "lucide-react";
import { useEffect, useState } from "react";

const experiences = [
  {
    title: "Sales Associate",
    company: "American Eagle NY",
    location: "New York, NY",
    startDate: "May 2025",
    endDate: "Present",
    description:
      "Consistently surpassed weekly sales targets by 15–20% through data-driven product recommendations and real-time customer need assessment. Collaborated with leadership to optimize merchandising layouts based on observed customer behavior, increasing conversion rates in key sections by 8–10%.",
    technologies: ["Customer Service", "Sales Analytics", "Merchandising", "Leadership"],
    achievements: [
      "Exceeded weekly sales targets by 15-20%",
      "Improved conversion rates by 8-10%",
      "Optimized merchandising strategies",
    ],
  },
  {
    title: "Student Intern",
    company: "FintechFocus",
    location: "New York City, NY",
    startDate: "Jul 2023",
    endDate: "Aug 2023",
    description:
      "Developed two web applications using HTML, CSS, Python, and JavaScript; leveraged Bootstrap and Flask, focusing on responsive design and functionality. Engaged in collaborative project development, contributing to all phases of the software development life cycle.",
    technologies: ["HTML", "CSS", "Python", "JavaScript", "Bootstrap", "Flask"],
    achievements: [
      "Developed 2 full web applications",
      "Implemented responsive design patterns",
      "Contributed to complete SDLC",
      "Enhanced debugging and problem-solving skills",
    ],
  },
  {
    title: "Intern",
    company: "INET",
    location: "New York City, NY",
    startDate: "Feb 2023",
    endDate: "Apr 2023",
    description:
      "Conducted competitive research across 20+ social media channels, identifying engagement trends that informed a strategy resulting in a projected 15% audience growth. Identified market expansion and branding opportunities that contributed to a 10% increase in online visibility.",
    technologies: ["Social Media Research", "Market Analysis", "Branding", "Analytics"],
    achievements: [
      "Analyzed 20+ social media channels",
      "Identified trends for 15% audience growth",
      "Increased online visibility by 10%",
      "Developed market expansion strategy",
    ],
  },
];

export default function Experience() {
  const [visibleExperiences, setVisibleExperiences] = useState<Set<number>>(new Set());

  useEffect(() => {
    experiences.forEach((_, index) => {
      setTimeout(() => {
        setVisibleExperiences((prev) => new Set(Array.from(prev).concat(index)));
      }, index * 150);
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Professional Experience</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            My journey through internships, research positions, and professional roles in software development and computer science
          </p>
        </div>

        {/* Experience Background */}
        <div className="mb-16 rounded-2xl overflow-hidden border border-primary/20 h-64 md:h-80">
          <img
            src={`${import.meta.env.BASE_URL}images/experience-bg.png`}
            alt="Experience visualization"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                Array.from(visibleExperiences).includes(index)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Timeline Connector */}
              {index !== experiences.length - 1 && (
                <div className="flex justify-center mb-2">
                  <div className="w-1 h-8 bg-gradient-to-b from-primary to-primary/30" />
                </div>
              )}

              {/* Experience Card */}
              <div className="flex gap-6 mb-8 group">
                {/* Timeline Dot */}
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-primary border-4 border-background mt-2 group-hover:scale-125 transition-transform" />
                </div>

                {/* Content */}
                <div className="flex-1 glass-card p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-foreground mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Building2 className="w-4 h-4" />
                          {exp.company}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1 text-sm font-medium text-primary whitespace-nowrap">
                      <Calendar className="w-4 h-4" />
                      {exp.startDate} - {exp.endDate}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-primary mb-3">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="border-primary/30 hover:border-primary/60 transition-all"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Key Achievements */}
                  <div>
                    <h4 className="text-sm font-semibold text-primary mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="flex items-start gap-3 text-muted-foreground"
                        >
                          <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary Stats */}
        <div className="mt-20 grid md:grid-cols-3 gap-6 max-w-4xl">
          <div className="glass-card p-6 rounded-xl border border-primary/20 text-center hover:border-primary/50 transition-all">
            <div className="text-3xl font-bold text-primary mb-2">3</div>
            <p className="text-muted-foreground">Professional Positions</p>
          </div>
          <div className="glass-card p-6 rounded-xl border border-primary/20 text-center hover:border-primary/50 transition-all">
            <div className="text-3xl font-bold text-primary mb-2">2+</div>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
          <div className="glass-card p-6 rounded-xl border border-primary/20 text-center hover:border-primary/50 transition-all">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <p className="text-muted-foreground">Technologies</p>
          </div>
        </div>
      </div>
    </div>
  );
}
