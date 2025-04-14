import { Lightbulb, Target, Palette, CircuitBoard, Rocket } from "lucide-react";
import { Switch } from "../ui/switch";
import { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"

const design = [
  // Understanding the Product
  "User Interview",
  "UX Research - Quantitative, Qualitative",
  "Create User Personas",
  "Competitor Analysis",

  // Conceptual Design
  "Create User Stories",
  "Customer Experience Map / User Journey Map",
  "Flow Chart",

  // wireframing & Prototyping
  "Figma",
  "Adobe XD",

  // measuring the impact
  "Incremental A/B Testing",

  // UI Design
  "Design System",
  "Material Design System",

  // graphic design
  "Adobe Photoshop",
  "Adobe Illustrator",
  
  // motion design
  "Adobe AfterEffect",
  "LottieFiles",
  "Aceternity UI",
  "Motion"
];

const tasks = {
  "Understanding the Product": "Clarify Product, Define Target Users, Clarify Business Model",
  "Conceptual Design": "Create Product Backlog, Deliverables",
  "Wireframing": "", 
  "Prototyping": "",
  "Achieve UX Best Practices": "Getting Users Attention, Getting Postitive Intuitive Reaction, Get a Favorable Conscious Evaluation, Creating Urgency to Act",
  "Measuring the Impact": "",
  "Frontend Development": "",
  "Backend Development": "",
};

const programming = [
  // prototyping
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Vue.js",
  "ShadcnUI, MUI, Daisy UI, Headless UI", 
  "TailwindCSS",

  // user testing
  "Google Analytics",

  // frontend development
  "React Hook Form",
  "Zod",
  "TanStack Query & Table",
  "REST API",
  "Postman",
  "Git - Gitlab, Github",
  "Fork",

  // backend development
  "Node.js",
  "PostgreSQL"
];

const steps = [
  { 
    icon: Lightbulb, 
    title: "Brainstorm", 
    designSkills: ["Empathy", "UX Research - Qualitative", "Problem Solving", "Collaboration & Communication", "Visual Communication", "Design Thinking"] 
  },
  { 
    icon: Target, 
    title: "Define", 
    designSkills: ["User Research", "Empathy", "Information architecture", "Analytical Reasoning", "Stakeholder Management", "Design Thinking"] 
  },
  { 
    icon: Palette, 
    title: "Design",
    designSkills: ["Wireframing", "Prototyping", "Interaction Design", "Visual Design", "Mobile Design", "User Interface Design", "UX Writing", "Accessibility", "Data Visualization", "Responsive Design", "Agile Methodologies"],
    tools: ["Photoshop", "Illustrator", "Figma", "Adobe XD", "After Effect", "LottieFiles", "Premier Pro"]
  },
  { 
    icon: CircuitBoard, 
    title: "Test",
    designSkills: ["Usability Testing", "Analytical Reasoning", "User Research", "Communication"],
  },
  { 
    icon: Rocket, 
    title: "Launch",
    programmingSkills: ["HTML", "CSS", "JavaScript"],
  }
];

export const Skill = () => {
  return (
    <div id="skill" className="home-skill-container mt-20">
      <div className="container mx-auto space-y-4 py-16">
        <h1 className="home-title">My Skills</h1>
        
        <Tabs defaultValue="Brainstorm" className="combo">
          <TabsList className="tab-list">
            {steps.map((step) => (
              <TabsTrigger 
                key={step.title} 
                value={step.title}
                className="tabs-trigger"
              >
                <div className="icon-container">
                  <step.icon className="icon" />
                </div>
                <span>{step.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          {steps.map((step) => (
            <TabsContent 
              key={step.title} 
              value={step.title}
              className="p-6 overflow-hidden"
            >
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">{step.title}</h2>
                
                {step.designSkills && (
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">Design Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {step.designSkills.map((skill, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-white/20 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {step.tools && (
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {step.tools.map((tool, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-white/20 rounded-full text-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {step.programmingSkills && (
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">Programming Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {step.programmingSkills.map((skill, index) => (
                        <span 
                          key={index} 
                          className="px-3 py-1 bg-white/20 rounded-full text-sm"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};