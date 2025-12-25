/**
 * Skills Page - Atmospheric Depth Layering Design
 * 
 * Technical expertise showcase with proficiency levels
 * Enhanced with visual hierarchy and smooth animations
 */

import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

const skillsData = {
  "Programming Languages": [
    { name: "Python", level: "Advanced" },
    { name: "Java", level: "Advanced" },
    { name: "C++", level: "Intermediate" },
    { name: "JavaScript", level: "Advanced" },
    { name: "HTML/CSS", level: "Advanced" },
    { name: "C", level: "Intermediate" },
  ],
  "Web Development": [
    { name: "React", level: "Advanced" },
    { name: "Node.js", level: "Advanced" },
    { name: "Express", level: "Intermediate" },
    { name: "TailwindCSS", level: "Advanced" },
    { name: "Flask", level: "Intermediate" },
    { name: "Bootstrap", level: "Intermediate" },
  ],
  "Tools & Technologies": [
    { name: "Git", level: "Advanced" },
    { name: "GitHub", level: "Advanced" },
    { name: "Docker", level: "Intermediate" },
    { name: "AWS", level: "Intermediate" },
    { name: "MS Access", level: "Intermediate" },
    { name: "Autodesk Inventor", level: "Intermediate" },
  ],
  "Frameworks & Libraries": [
    { name: "TensorFlow", level: "Beginner" },
    { name: "Pandas", level: "Intermediate" },
    { name: "NumPy", level: "Intermediate" },
    { name: "OpenCV", level: "Intermediate" },
    { name: "Django", level: "Beginner" },
    { name: "PyTorch", level: "Beginner" },
  ],
  "Design & Creative": [
    { name: "Adobe Photoshop", level: "Advanced" },
    { name: "Adobe Illustrator", level: "Advanced" },
    { name: "AutoCAD", level: "Intermediate" },
    { name: "G Suite", level: "Advanced" },
    { name: "MS Office", level: "Advanced" },
  ],
  "Databases": [
    { name: "SQL", level: "Advanced" },
    { name: "MongoDB", level: "Intermediate" },
    { name: "PostgreSQL", level: "Intermediate" },
  ],
};

const certifications = [
  "Adobe Photoshop Professional Certificate",
  "Adobe Illustrator Professional Certificate",
  "Autodesk Inventor Certificate",
  "Coursera Introduction to Machine Learning",
];

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Bangla", level: "Fluent" },
  { name: "Spanish", level: "Intermediate" },
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Advanced":
      return "bg-primary/20 text-primary border-primary/50";
    case "Intermediate":
      return "bg-primary/10 text-primary/80 border-primary/30";
    case "Beginner":
      return "bg-muted text-muted-foreground border-muted";
    default:
      return "bg-muted text-muted-foreground";
  }
};

export default function Skills() {
  const [visibleCategories, setVisibleCategories] = useState<Set<string>>(new Set());

  useEffect(() => {
    Object.keys(skillsData).forEach((category, index) => {
      setTimeout(() => {
        setVisibleCategories((prev) => new Set(Array.from(prev).concat(category)));
      }, index * 100);
    });
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Technical Skills</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A comprehensive overview of my technical expertise across programming languages, frameworks, tools, and technologies
          </p>
        </div>

        {/* Skills Background Image */}
        <div className="mb-16 rounded-2xl overflow-hidden border border-primary/20 h-64 md:h-80">
          <img
            src={`${import.meta.env.BASE_URL}images/skills-gradient.png`}
            alt="Skills visualization"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {Object.entries(skillsData).map(([category, skills], categoryIndex) => (
            <div
              key={category}
              className={`transition-all duration-700 ${
                Array.from(visibleCategories).includes(category)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${categoryIndex * 100}ms` }}
            >
              <div className="glass-card p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-1 h-8 bg-gradient-to-b from-primary to-primary/50 rounded-full" />
                  {category}
                </h2>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 group cursor-default"
                    >
                      <Badge
                        variant="outline"
                        className={`${getLevelColor(
                          skill.level
                        )} border transition-all duration-300 group-hover:scale-105`}
                      >
                        {skill.name}
                      </Badge>
                      <span className="text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Competencies */}
        <div className="glass-card p-8 md:p-12 rounded-2xl border border-primary/20 mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8">Additional Competencies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "Problem Solving",
                  "Team Collaboration",
                  "Communication",
                  "Project Management",
                  "Agile/Scrum",
                  "Code Review",
                  "Debugging",
                  "System Design",
                ].map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="border-primary/30 hover:border-primary/60 transition-all"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-primary">Methodologies</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "RESTful APIs",
                  "Object-Oriented Design",
                  "Responsive Design",
                  "Version Control",
                  "Unit Testing",
                  "CI/CD",
                  "Data Structures",
                  "Algorithm Design",
                ].map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="border-primary/30 hover:border-primary/60 transition-all"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="glass-card p-8 md:p-12 rounded-2xl border border-primary/20 mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-6">Certifications</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={cert}
                className="flex items-start gap-3 p-4 rounded-lg bg-primary/5 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:bg-primary/10"
                style={{
                  animation: `slideIn 0.5s ease-out ${index * 0.1}s both`,
                }}
              >
                <span className="text-primary font-bold mt-1">✓</span>
                <span className="text-foreground">{cert}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Languages */}
        <div className="glass-card p-8 md:p-12 rounded-2xl border border-primary/20 animate-fade-in">
          <h2 className="text-3xl font-bold mb-6">Languages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="p-6 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              >
                <h3 className="text-lg font-semibold mb-2">{lang.name}</h3>
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-2 bg-muted rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary/60 rounded-full"
                      style={{
                        width: lang.level === "Fluent" ? "100%" : "70%",
                      }}
                    />
                  </div>
                  <span className="text-sm font-medium text-primary">{lang.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}
