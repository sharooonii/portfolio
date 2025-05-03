import {
  CircuitBoard,
  CodeXml,
  Lightbulb,
  Palette,
  Target,
} from "lucide-react";

import aceternityui from "@/assets/tools/aceternityui.png";
import adobexd from "@/assets/tools/adobexd.png";
import aftereffect from "@/assets/tools/aftereffect.png";
import animatecss from "@/assets/tools/animatecss.jpg";
import axios from "@/assets/tools/axios.png";
import canva from "@/assets/tools/canva.png";
import capcut from "@/assets/tools/capcut.png";
import css from "@/assets/tools/css.png";
import cursor from "@/assets/tools/cursor.png";
import daisyui from "@/assets/tools/daisyui.png";
import express from "@/assets/tools/express.png";
import figma from "@/assets/tools/figma.png";
import fork from "@/assets/tools/fork.png";
import git from "@/assets/tools/git.png";
import github from "@/assets/tools/github.png";
import gitlab from "@/assets/tools/gitlab.png";
import googleanalytics from "@/assets/tools/googleanalytics.png";
import hotjar from "@/assets/tools/hotjar.png";
import html from "@/assets/tools/html.png";
import illustrator from "@/assets/tools/illustrator.png";
import javascript from "@/assets/tools/javascript.png";
import lottiefiles from "@/assets/tools/lottiefiles.png";
import midjourney from "@/assets/tools/midjourney.png";
import motion from "@/assets/tools/motion.png";
import mui from "@/assets/tools/mui.jpg";
import node from "@/assets/tools/node.png";
import notion from "@/assets/tools/notion.png";
import photoshop from "@/assets/tools/photoshop.png";
import poe from "@/assets/tools/poe.png";
import postgresql from "@/assets/tools/postgresql.png";
import postman from "@/assets/tools/postman.png";
import premierpro from "@/assets/tools/premierpro.png";
import react from "@/assets/tools/react.png";
import reacthookform from "@/assets/tools/reacthookfrom.png";
import redux from "@/assets/tools/redux.png";
import restapi from "@/assets/tools/restapi.png";
import shadcn from "@/assets/tools/shadcn.png";
import tailwindcss from "@/assets/tools/tailwindcss.png";
import tanstack from "@/assets/tools/tanstack.jpg";
import typescript from "@/assets/tools/typescript.png";
import vscode from "@/assets/tools/vscode.png";
import vue from "@/assets/tools/vue.png";
import zod from "@/assets/tools/zod.png";

export const skills = [
  {
    icon: Lightbulb,
    title: "Brainstorm",
    skills: [
      {
        name: "Empathy",
        description:
          "Identifying user needs through active listening and observational research",
      },
      {
        name: "UX Research - Qualitative",
        description:
          "Conducting user interviews and focus groups to uncover initial user insights and pain points",
      },
      {
        name: "Problem Solving",
        description:
          "Defining core problems using techniques like the 5 Whys and brainstorming workshops",
      },
      {
        name: "Collaboration",
        description:
          "Leading team brainstorming sessions to generate innovative and diverse ideas",
      },
      {
        name: "Communication",
        description:
          "Conveying ideas to stakeholders through compelling storytelling and visual aids",
      },
      {
        name: "Competitor Analysis",
        description:
          "Analyzing competitor products to identify market gaps and innovation opportunities",
      },
      {
        name: "Visual Communication",
        description:
          "Sketching concepts and creating storyboards to visualize early ideas",
      },
      {
        name: "Design Thinking",
        description:
          "Facilitating empathy mapping and ideation workshops to develop user-centered solutions",
      },
    ],
    tools: [
      {
        name: "Notion",
        description:
          "Centralizing brainstorming notes and ideas for team collaboration",
        img: notion,
      },
      {
        name: "Canva",
        description:
          "Designing mood boards and visual concepts to inspire ideation",
        img: canva,
      },
      {
        name: "MidJourney",
        description:
          "Generating AI-driven visual concepts to spark creative ideas",
        img: midjourney,
      },
      // {
      //   name: "Miro",
      //   description: "Collaborating on mind maps and brainstorming sessions",
      //   img: miro,
      // },
      // {
      //   name: "MindMeister",
      //   description: "Visually organizing ideas through mind mapping",
      //   img: mindmeister,
      // },
    ],
  },
  {
    icon: Target,
    title: "Define",
    skills: [
      {
        name: "User Research",
        description:
          "Performing qualitative interviews and quantitative surveys to define user requirements",
      },
      {
        name: "Empathy",
        description:
          "Developing empathy maps to align solutions with user emotions and needs",
      },
      {
        name: "Create User Personas",
        description:
          "Crafting detailed personas using demographic and behavioral insights",
      },
      {
        name: "Create User Stories",
        description:
          "Writing user stories with clear acceptance criteria to guide development",
      },
      {
        name: "Customer Experience Map / User Journey Map",
        description:
          "Designing user journey maps to pinpoint pain points and opportunities",
      },
      {
        name: "Information Architecture",
        description:
          "Organizing content with sitemaps and card sorting for improved usability",
      },
      {
        name: "Flow Chart",
        description:
          "Creating user flow charts to ensure intuitive navigation paths",
      },
      {
        name: "Analytical Reasoning",
        description:
          "Evaluating survey data and feedback to establish measurable project goals",
      },
      {
        name: "Communication",
        description:
          "Documenting project scope in briefs to ensure team alignment",
      },
      {
        name: "Stakeholder Management",
        description:
          "Leading workshops to align design goals with business objectives",
      },
      {
        name: "Design Thinking",
        description:
          "Conducting workshops to refine problems and solutions with stakeholders",
      },
    ],
    tools: [
      {
        name: "Figma",
        description:
          "Drafting early wireframes and flow charts to visualize user journeys",
        img: figma,
      },
      {
        name: "Notion",
        description:
          "Structuring user personas, stories, and journey maps for clarity",
        img: notion,
      },
      // {
      //   name: "Miro",
      //   description: "Mapping user journeys and flows collaboratively",
      //   img: miro,
      // },
      // {
      //   name: "SurveyMonkey",
      //   description: "Conducting surveys for quantitative user research",
      //   img: surveymonkey,
      // },
      // {
      //   name: "Lookback",
      //   description: "Recording and analyzing user interviews for insights",
      //   img: lookback,
      // },
    ],
  },
  {
    icon: Palette,
    title: "Design",
    skills: [
      {
        name: "Wireframing",
        description:
          "Outlining product structures using low-fidelity wireframes for early validation",
      },
      {
        name: "Prototyping",
        description:
          "Building interactive prototypes to test user interactions and flows",
      },
      {
        name: "Interaction Design",
        description:
          "Designing intuitive interactions such as clicks, swipes, and navigation flows",
      },
      {
        name: "Motion Design",
        description:
          "Creating animations and transitions to enhance user engagement and feedback",
      },
      {
        name: "Visual Design",
        description:
          "Designing aesthetically appealing interfaces with consistent color and typography",
      },
      {
        name: "Mobile Design",
        description: "Optimizing interfaces for seamless mobile experiences",
      },
      {
        name: "User Interface Design",
        description:
          "Crafting functional and visually appealing UI elements for user interaction",
      },
      {
        name: "UX Writing",
        description:
          "Writing concise, user-friendly copy for interfaces and microinteractions",
      },
      {
        name: "Collaboration",
        description:
          "Partnering with developers and designers to refine design solutions",
      },
      {
        name: "Communication",
        description:
          "Presenting design concepts to stakeholders for feedback and approval",
      },
      {
        name: "Accessibility",
        description:
          "Ensuring designs meet WCAG standards for inclusive user experiences",
      },
      {
        name: "Data Visualization",
        description:
          "Designing user-friendly charts and graphs to present complex data",
      },
      {
        name: "Responsive Design",
        description:
          "Adapting designs to ensure consistency across various screen sizes",
      },
      {
        name: "Design Systems",
        description:
          "Developing reusable components to maintain design consistency",
      },
      {
        name: "Material Design System",
        description:
          "Implementing Google’s Material Design principles for cohesive interfaces",
      },
      {
        name: "Agile Methodologies",
        description:
          "Iterating designs in agile sprints to meet evolving requirements",
      },
    ],
    tools: [
      {
        name: "Figma",
        description:
          "Designing and collaborating on interfaces with real-time feedback",
        img: figma,
      },
      {
        name: "Photoshop",
        description:
          "Editing and creating visual assets to enhance interface design",
        img: photoshop,
      },
      {
        name: "Illustrator",
        description: "Designing vector graphics for icons and illustrations",
        img: illustrator,
      },
      {
        name: "Adobe XD",
        description: "Prototyping user experiences for interactive testing",
        img: adobexd,
      },
      {
        name: "After Effect",
        description:
          "Creating motion graphics and animations to enrich UI elements",
        img: aftereffect,
      },
      {
        name: "Premiere Pro",
        description:
          "Creating and editing professional-quality videos for product demos and UI demonstrations",
        img: premierpro,
      },
      {
        name: "CapCut",
        description:
          "Quickly producing and editing social media-friendly UI demos and design presentations",
        img: capcut,
      },
      {
        name: "LottieFiles",
        description:
          "Integrating lightweight animations to improve user engagement",
        img: lottiefiles,
      },
      {
        name: "Motion",
        description:
          "Building advanced motion effects for seamless UI transitions",
        img: motion,
      },
      {
        name: "Canva",
        description:
          "Creating quick mockups and design assets for early iterations",
        img: canva,
      },
    ],
  },
  {
    icon: CircuitBoard,
    title: "Test",
    skills: [
      {
        name: "Usability Testing",
        description:
          "Conducting user tests to evaluate design effectiveness and usability",
      },
      {
        name: "Analytical Reasoning",
        description:
          "Analyzing usability test results to identify and prioritize improvements",
      },
      {
        name: "User Research",
        description:
          "Collecting qualitative feedback through user interviews and observations",
      },
      {
        name: "Communication",
        description:
          "Delivering actionable test findings and recommendations to the team",
      },
      {
        name: "Accessibility",
        description:
          "Ensuring designs comply with WCAG standards for inclusivity",
      },
      {
        name: "Data Visualization",
        description:
          "Creating charts and reports using tools like Figma to present test insights",
      },
      {
        name: "Agile Methodologies",
        description:
          "Iterating designs based on test feedback within agile sprints",
      },
      {
        name: "Incremental A/B Testing",
        description:
          "Running A/B tests to optimize design variations for user engagement",
      },
      {
        name: "Google Analytics",
        description:
          "Analyzing user behavior metrics like bounce rate and time on page to validate designs",
      },
    ],
    tools: [
      {
        name: "Figma",
        description: "Testing prototypes with users to gather feedback",
        img: figma,
      },
      {
        name: "Postman",
        description: "Validating API functionality during testing",
        img: postman,
      },
      {
        name: "Google Analytics",
        description:
          "Monitoring user behavior metrics to assess design performance",
        img: googleanalytics,
      },
      {
        name: "Hotjar",
        description:
          "Analyzing user behavior with heatmaps and session recordings",
        img: hotjar,
      },
      // {
      //   name: "Maze",
      //   description: "Conducting remote usability tests and gathering feedback",
      //   img: maze,
      // },
      // {
      //   name: "BrowserStack",
      //   description: "Testing designs across different browsers and devices",
      //   img: browserstack,
      // },
    ],
  },
  {
    icon: CodeXml,
    title: "Development",
    skills: [
      {
        name: "HTML",
        description:
          "Structuring web content to ensure semantic and accessible markup",
        img: html,
      },
      {
        name: "CSS",
        description:
          "Styling interfaces for visual consistency and responsiveness",
        img: css,
      },
      {
        name: "JavaScript",
        description: "Implementing interactivity to enhance user experiences",
        img: javascript,
      },
      {
        name: "TypeScript",
        description:
          "Improving code quality and maintainability with type safety",
        img: typescript,
      },
      {
        name: "REST APIs",
        description:
          "Integrating backend services to enable dynamic functionality",
        img: restapi,
      },
      {
        name: "Axios",
        description:
          "Fetching data from APIs efficiently for seamless integration",
        img: axios,
      },
      {
        name: "Git",
        description: "Managing version control for collaborative development",
        img: git,
      },
      {
        name: "TailwindCSS",
        description:
          "Streamlining styling with utility-first CSS for rapid development",
        img: tailwindcss,
      },
      {
        name: "React.js",
        description:
          "Building dynamic, reusable UI components for scalable applications",
        img: react,
      },
      {
        name: "Redux",
        description:
          "Managing global application state to ensure scalability and consistency across components",
        img: redux,
      },
      {
        name: "React Hook Form",
        description: "Simplifying form management in React projects",
        img: reacthookform,
      },
      {
        name: "Zod",
        description: "Ensuring form validation with type-safe schemas",
        img: zod,
      },
      {
        name: "Vue.js",
        description:
          "Developing flexible, component-based interfaces for diverse projects",
        img: vue,
      },
      {
        name: "TanStack Table",
        description:
          "Rendering responsive tables for efficient data presentation",
        img: tanstack,
      },
      {
        name: "TanStack Query",
        description:
          "Managing data fetching and state for optimized performance",
        img: tanstack,
      },
      {
        name: "Express.js",
        description:
          "Building RESTful APIs and managing server-side routing for efficient backend functionality",
        img: express,
      },
      {
        name: "Node.js",
        description:
          "Building server-side logic for robust application functionality",
        img: node,
      },
      {
        name: "PostgreSQL",
        description: "Managing relational databases for secure data storage",
        img: postgresql,
      },
      // {
      //   name: "Collaboration",
      //   description: "Coordinating with teams for deployment",
      //   img: ""
      // },
      // {
      //   name: "Communication",
      //   description: "Updating stakeholders on development progress",
      //   img: ""
      // },
    ],
    tools: [
      {
        name: "VSCode",
        description: "Editing and managing code efficiently",
        img: vscode,
      },
      {
        name: "Postman",
        description: "Testing and debugging APIs during development",
        img: postman,
      },
      {
        name: "Fork",
        description: "Managing Git repositories for collaborative workflows",
        img: fork,
      },
      {
        name: "GitLab",
        description: "Hosting repositories and managing version control",
        img: gitlab,
      },
      {
        name: "GitHub",
        description: "Collaborating on code and managing project workflows",
        img: github,
      },
      {
        name: "ShadcnUI",
        description: "Implementing modern UI components for consistent design",
        img: shadcn,
      },
      {
        name: "MUI",
        description: "Using Material-UI components for professional interfaces",
        img: mui,
      },
      {
        name: "DaisyUI",
        description: "Enhancing TailwindCSS with pre-built UI components",
        img: daisyui,
      },
      {
        name: "AceternityUI",
        description: "Adding advanced UI effects for engaging interfaces",
        img: aceternityui,
      },
      {
        name: "Animate.css",
        description:
          "Adding ready-to-use CSS animations for smooth, engaging interface transitions",
        img: animatecss,
      },
      {
        name: "Motion",
        description: "Integrating motion effects to enhance interactivity",
        img: motion,
      },
      {
        name: "Cursor",
        description:
          "Leveraging AI-powered coding assistance for faster development",
        img: cursor,
      },
      {
        name: "POE",
        description: "Using AI to debug code and optimize solutions",
        img: poe,
      },
    ],
  },
];
