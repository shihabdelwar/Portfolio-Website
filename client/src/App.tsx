/**
 * App Component - Atmospheric Depth Layering Design
 * 
 * Design Philosophy: Dark theme with deep space grey background
 * Routes for all portfolio sections with navigation
 */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Courses from "./pages/Courses";
import { Router as WouterHashRouter} from "wouter";

function Router() {
  return (
    <WouterHashRouter base="/Portfolio-Website">
      <Navigation />
      <Switch>
        <Route path={"/"} component={Home} />
        <Route path={"/about"} component={About} />
        <Route path={"/skills"} component={Skills} />
        <Route path={"/experience"} component={Experience} />
        <Route path={"/projects"} component={Projects} />
        <Route path={"/courses"} component={Courses} />
        <Route path={"/404"} component={NotFound} />
        <Route component={NotFound} />
      </Switch>
    </WouterHashRouter>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
