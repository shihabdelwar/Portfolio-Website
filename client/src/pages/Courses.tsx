/**
 * Courses Page - Atmospheric Depth Layering Design
 * 
 * Design Philosophy: Academic coursework organized by category with visual depth
 * - Glassmorphism cards for course categories
 * - Expandable course details
 */

import { BookOpen, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";

const courseCategories = [
  {
    category: "Core Computer Science",
    courses: [
      { name: "Data Structures & Algorithms", code: "CS 310", semester: "Spring 2025", grade: "A" },
      { name: "Design & Analysis of Algorithms", code: "CS 375", semester: "Fall 2025", grade: "A" },
      { name: "Operating Systems", code: "CS 350", semester: "Fall 2025", grade: "B+" },
      { name: "Architecture from Programmers Perspective", code: "CS 220", semester: "Spring 2025", grade: "A" },
      { name: "Ethical, Social, & Global Issues in Computing", code: "CS 301", semester: "Fall 2025", grade: "A-" },
      { name: "Advanced Computer Architecture", code: "CS 320", semester: "Spring 2026", grade: "In Progress" },
      { name: "Automata Theory & Formal Languages", code: "CS 373", semester: "Spring 2026", grade: "In Progress" },
    ],
  },
  {
    category: "Software Development",
    courses: [
      { name: "Programming with Objects & Data Structures", code: "CS 210", semester: "Fall 2024", grade: "B+" },
      { name: "Programming & Hardware Fundamentals", code: "CS 120", semester: "Spring 2024", grade: "A" },
      { name: "Web Development", code: "CS 320", semester: "Fall 2024", grade: "A" },
      { name: "Programming for the Web", code: "CS 444", semester: "Fall 2026", grade: "Expected" },
    ],
  },
  {
    category: "Artificial Intelligence & Machine Learning",
    courses: [
      { name: "Introduction to Artificial Intelligence", code: "CS 465", semester: "Fall 2026", grade: "Expected" },
      { name: "Intro to Machine Learning", code: "CS 436", semester: "Fall 2026", grade: "Expected" },
      { name: "Programming Models for Emerging Platforms", code: "CS 476", semester: "Fall 2026", grade: "Expected" },
      { name: "Intelligent Mobile Robotics", code: "CS 424", semester: "Spring 2027", grade: "Expected" },
    ],
  },
  {
    category: "Mathematics & Theory",
    courses: [
      { name: "Discrete Mathematics", code: "MATH 314", semester: "Fall 2024", grade: "A" },
      { name: "Linear Algebra", code: "MATH 250", semester: "Spring 2024", grade: "A-" },
      { name: "Calculus II", code: "MATH 227", semester: "Fall 2023", grade: "A" },
      { name: "Probability & Statistics", code: "MATH 327", semester: "Spring 2025", grade: "A-" },
    ],
  },
];

const getGradeColor = (grade: string) => {
  if (grade === "A") return "bg-primary/20 text-primary border-primary/50";
  if (grade === "A-") return "bg-primary/15 text-primary/80 border-primary/40";
  if (grade === "In Progress") return "bg-muted/20 text-muted-foreground border-muted/50";
  return "bg-muted text-muted-foreground";
};

export default function Courses() {
  const [visibleCategories, setVisibleCategories] = useState<Set<string>>(new Set());

  useEffect(() => {
    courseCategories.forEach((cat, index) => {
      setTimeout(() => {
        setVisibleCategories((prev) => new Set(Array.from(prev).concat(cat.category)));
      }, index * 150);
    });
  }, []);

  const totalCourses = courseCategories.reduce((sum, cat) => sum + cat.courses.length, 0);
  const completedCourses = courseCategories.reduce(
    (sum, cat) =>
      sum +
      cat.courses.filter((c) => c.grade !== "In Progress").length,
    0
  );

  return (
    <div className="min-h-screen bg-background text-foreground pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-16 animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">Coursework</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            A comprehensive overview of my academic journey at Binghamton University, showcasing the diverse courses and subjects I've mastered
          </p>
        </div>

        {/* Courses Background */}
        <div className="mb-16 rounded-2xl overflow-hidden border border-primary/20 h-64 md:h-80">
          <img
            src={`${import.meta.env.BASE_URL}images/courses-pattern.png`}
            alt="Courses visualization"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="glass-card p-6 rounded-xl border border-primary/20 text-center hover:border-primary/50 transition-all">
            <div className="text-3xl font-bold text-primary mb-2">{totalCourses}</div>
            <p className="text-muted-foreground">Total Courses</p>
          </div>
          <div className="glass-card p-6 rounded-xl border border-primary/20 text-center hover:border-primary/50 transition-all">
            <div className="text-3xl font-bold text-primary mb-2">{completedCourses}</div>
            <p className="text-muted-foreground">Completed</p>
          </div>
          <div className="glass-card p-6 rounded-xl border border-primary/20 text-center hover:border-primary/50 transition-all">
            <div className="text-3xl font-bold text-primary mb-2">3.76</div>
            <p className="text-muted-foreground">GPA</p>
          </div>
        </div>

        {/* Courses by Category */}
        <div className="space-y-8">
          {courseCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className={`transition-all duration-700 ${
                Array.from(visibleCategories).includes(category.category)
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${categoryIndex * 150}ms` }}
            >
              <div className="glass-card p-8 rounded-2xl border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <BookOpen className="w-6 h-6 text-primary" />
                  {category.category}
                </h2>

                <div className="grid md:grid-cols-2 gap-4">
                  {category.courses.map((course) => (
                    <div
                      key={`${course.code}-${course.semester}`}
                      className="p-4 rounded-lg bg-primary/5 border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:bg-primary/10 group"
                    >
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div className="flex-1">
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                            {course.name}
                          </h3>
                          <p className="text-sm text-muted-foreground">{course.code}</p>
                        </div>
                        <Badge
                          variant="outline"
                          className={`${getGradeColor(course.grade)} border whitespace-nowrap`}
                        >
                          {course.grade}
                        </Badge>
                      </div>
                      <p className="text-xs text-muted-foreground">{course.semester}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Achievements */}
        <div className="mt-16 glass-card p-8 md:p-12 rounded-2xl border border-primary/20 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 flex items-center gap-3">
            <Award className="w-8 h-8 text-primary" />
            Academic Achievements
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-primary mb-4">Honors & Recognition</h3>
              <ul className="space-y-3">
                {[
                  "Dean's List - Multiple Semesters",
                  "University Scholars Program",
                  "Binghamton Achievement Scholarship Recipient",
                  "Consistent A/A- grades in major courses",
                ].map((achievement, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-primary mb-4">Learning Focus Areas</h3>
              <ul className="space-y-3">
                {[
                  "Systems Programming & OS Design",
                  "Artificial Intelligence & Machine Learning",
                  "Full-Stack Web Development",
                  "Database Design & Management",
                ].map((focus, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                    <span className="text-primary font-bold mt-1">→</span>
                    <span>{focus}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
