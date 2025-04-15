import { Lightbulb, Target, Palette, CircuitBoard, Rocket, CodeXml } from "lucide-react";
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
    skills: [
      {
        name: "Empathy",
        description: "Understanding user needs and perspectives"
      },
      {
        name: "UX Research",
        description: "Gathering initial insights through interviews or observations"
      },
      {
        name: "Problem Solving",
        description: "Framing the core problem creatively"
      }, 
      {
        name: "Collaboration",
        description: "Brainstorming with teams"
      }, 
      {
        name: "Communication",
        description: "Sharing ideas with stakeholders"
      }, 
      {
        name: "Competitor Analysis",
        description: "Studying competitors to identify opportunities and gaps in the market"
      }, 
      {
        name: "Visual Communication",
        description: "Sketching early concepts"
      }, 
      {
        name: "Design Thinking",
        description: "Applying a user-centered approach to ideation"
      }, 
    ] 
  },
  { 
    icon: Target, 
    title: "Define", 
    skills: [
      {
        name:"User Research",
        description: "Deepening insights to define user requirements"
      },
      {
        name:"Empathy",
        description: "Aligning solutions with user needs"
      },
      {
        name:"Create User Personas",
        description: "Building detailed user profiles based on research"
      },
      {
        name:"Create User Stories",
        description: "Writing narratives to describe user interactions"
      },
      {
        name:"Customer Experience Map / User Journey Map",
        description: "Mapping the user’s journey to identify touchpoints"
      },
      {
        name:"Information Architecture",
        description: "Structuring content and flows"
      },
      {
        name:"Flow Chart",
        description: "Designing process or navigation flows for clarity"
      },
      {
        name:"Analytical Reasoning",
        description: "Analyzing data to set objectives"
      },
      {
        name:"Communication",
        description: "Articulating scope to teams and stakeholders"
      },
      {
        name:"Stakeholder Management",
        description: "Aligning with business goals"
      },
      {
        name:"Design Thinking",
        description: "Refining the problem and solution"
      },
    ] 
  },
  { 
    icon: Palette, 
    title: "Design",
    skills: [
      {
        name: "Wireframing",
        description: "Outlining the product structure"
      },
      {
        name: "Prototyping",
        description: "Building interactive design models"
      },
      {
        name: "Interaction Design / Motion Design",
        description: "Crafting intuitive user interactions"
      },
      {
        name: "Visual Design",
        description: "Creating appealing interfaces"
      },
      {
        name: "Mobile Design",
        description: "Optimizing for mobile devices"
      }, 
      {
        name: "User Interface Design",
        description: "Designing functional UI elements"
      }, 
      {
        name: "UX Writing",
        description: "Writing user-friendly interface copy"
      }, 
      {
        name: "Collaboration",
        description: "Working with developers and designers"
      }, 
      {
        name: "Communication",
        description: "Presenting designs to stakeholders"
      }, 
      {
        name: "Accessibility",
        description: "Ensuring inclusivity"
      }, 
      {
        name: "Data Visualization",
        description: "Presenting data clearly"
      }, 
      {
        name: "Responsive Design",
        description: "Adapting to various screen sizes"
      }, 
      {
        name: "Design Systems",
        description: "Creating reusable components & developing consistent design standards"
      }, 
      {
        name: "Agile Methodologies",
        description: "Iterating designs in a team setting"
      }, 
    ],
    tools: [
      {
        name: "Photoshop",
        description: "",
        img: ""
      },
      {
        name: "Illustrator",
        description: "",
        img: ""
      },
      {
        name: "Figma",
        description: "",
        img: ""
      },
      {
        name: "Adobe XD",
        description: "",
        img: ""
      },
      {
        name: "After Effect",
        description: "",
        img: ""
      },
      {
        name: "LottieFiles",
        description: "",
        img: ""
      },
      {
        name: "Premier Pro",
        description: "",
        img: ""
      },
    ]
  },
  { 
    icon: CircuitBoard, 
    title: "Test",
    skills: [
      {
        name: "Usability Testing",
        description: "Assessing design effectiveness"
      },
      {
        name: "Analytical Reasoning",
        description: "Interpreting test results"
      },
      {
        name: "User Research",
        description: "Gathering user feedback"
      },
      {
        name: "Communication",
        description: "Reporting findings"
      },
      {
        name: "Accessibility",
        description: "Verifying inclusivity standards"
      },
      {
        name: "Data Visualization",
        description: "Presenting test data"
      },
      {
        name: "Agile Methodologies",
        description: "Iterating based on outcomes"
      },
      {
        name: "Incremental A/B Testing",
        description: "Comparing design variations to optimize performance"
      },
      {
        name: "Google Analytics",
        description: "Analyzing user behavior and metrics"
      },
    ],
  },
  { 
    icon: CodeXml, 
    title: "Development",
    skills: [
      {
        name: "HTML",
        description: ""
      },
      {
        name: "CSS, TailwindCSS",
        description: ""
      },
      {
        name: "React.js",
        description: ""
      },
      {
        name: "React Hook Form",
        description: ""
      },
      {
        name: "Vue.js",
        description: ""
      },
      {
        name: "TanStack Table",
        description: ""
      },
      {
        name: "TanStack Query",
        description: ""
      },
      {
        name: "REST APIs",
        description: ""
      },
      {
        name: "Postman API",
        description: ""
      },
      {
        name: "Bootstrap",
        description: ""
      },
      {
        name: "Git - Gitlab, Github",
        description: ""
      },
      {
        name: "ShadcnUI, MUI, DaisyUI",
        description: ""
      },
      {
        name: "AceternityUI, Motion",
        description: ""
      },
      {
        name: "Node.js",
        description: ""
      },
      {
        name: "PostgresSQL",
        description: ""
      },
    ],
    tools: [
      {
        name: "VSCode",
        description: "",
        img: ""
      },
      {
        name: "Postman",
        description: "",
        img: ""
      },
      {
        name: "Fork",
        description: "",
        img: ""
      },
    ]
  }
];

export const Skill = () => {
  return (
    <div id="skill" className="home-skill-container mt-20">
      <div className="container mx-auto space-y-4 py-16">
        <h1 className="home-title">My Skills In Product Lifecycle</h1>
        
        <Tabs defaultValue="Brainstorm" className="combo">
          <TabsList className="tab-list">
            {steps.map((step) => (
              <TabsTrigger 
                key={step.title} 
                value={step.title}
                className="tabs-trigger group"
              >
                <div className="icon-container">
                  <step.icon className="icon" />
                </div>
                <span className="josefin">{step.title}</span>
              </TabsTrigger>
            ))}
          </TabsList>
          {steps.map((step, index) => (
            <TabsContent 
              key={step.title} 
              value={step.title}
              className="tabs-content"
            >
              <div className="space-y-6">
                {/* <h2 className="text-2xl font-bold josefin">
                  {`Stage ${index+1}`} - {step.title}
                </h2> */}

                {step.skills && (
                  <div className="space-y-3">
                    <div className="space-y-2">
                      {step.skills.map((skill, index) => (
                        <div 
                          key={index} 
                          className="pb-1"
                        >
                          <div>{skill.name}</div>
                          <div>{skill.description}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {step.tools && (
                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold">Tools</h3>
                    <div className="flex flex-wrap gap-2">
                      {step.tools.map((tool, index) => (
                        <div 
                          key={index} 
                          className="px-3 py-1 bg-white/20 rounded-full text-sm"
                        >
                          <div>{tool.name}</div>
                          <div>{tool.description}</div>
                        </div>
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