/**
 * Navigation Component - Atmospheric Depth Layering Design
 * 
 * Design Philosophy: Floating glassmorphism navigation with depth and blur
 * - Frosted glass effect with backdrop blur
 * - Smooth hover transitions with glow effects
 * - Fixed positioning creates foreground layer
 */

import { Link, useLocation } from "wouter";
import { useState, useEffect } from "react";

export default function Navigation() {
  const [location] = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/skills", label: "Skills" },
    { path: "/experience", label: "Experience" },
    { path: "/projects", label: "Projects" },
    { path: "/courses", label: "Courses" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        scrolled
          ? "bg-card/80 backdrop-blur-xl border-b border-border shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/">
            <a className="text-2xl font-bold text-foreground hover:text-accent transition-colors duration-300">
              Portfolio
            </a>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link key={item.path} href={item.path}>
                <a
                  className={`relative text-sm font-medium transition-all duration-300 hover:text-accent ${
                    location === item.path
                      ? "text-accent"
                      : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                  {location === item.path && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full glow-ring" />
                  )}
                </a>
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-foreground">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
