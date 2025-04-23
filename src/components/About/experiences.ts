// experiences.ts
import deloitte from "@/assets/company/deloitte-logo.jpg"
import unionfaith from "@/assets/home-projects/educare-company-white-logo.png"
import hktdc from "@/assets/company/hktdc-logo.png"
import unigel from "@/assets/home-projects/unigel-company-logo.png"
import oriental from "@/assets/company/oriental.jpg"


export interface Duty {
  id: string;
  description: string;
}

export interface Skill {
  id: string;
  name: string;
}

export interface ExperienceData {
  id: string;
  position: string;
  company: string;
  logo: string;
  employmentType: string;
  startTime: string;
  endTime: string;
  range: string;
  location: string;
  locationType: string;
  keyProjects?: string[];
  duties: Duty[];
  skills: Skill[];
}

export const experienceData: ExperienceData[] = [
  {
    id: "deloitte",
    position: "UI UX Designer & Frontend Developer",
    company: "Deloitte AI Institute",
    logo: deloitte,
    employmentType: "Full-time",
    startTime: "Nov 2024",
    endTime: "Present",
    range: "6 mos",
    location: "Hong Kong SAR",
    locationType: "On-site",
    keyProjects: [
      "AI Chatbot",
      "Server Performance Monitoring System",
      "AI-driven Invoicing System"
    ],
    duties: [
      {
        id: "deloitte-1",
        description: "Designed user-centric interfaces for AI applications that balance sophistication with accessibility"
      },
      {
        id: "deloitte-2",
        description: "Developed comprehensive UI component systems for web and Windows applications"
      },
      {
        id: "deloitte-3",
        description: "Implemented responsive frontend solutions using React.js and Vue.js frameworks"
      },
      {
        id: "deloitte-4",
        description: "Built efficient interfaces with Tailwind CSS and Shadcn UI, translating complex data into intuitive visualizations"
      },
      {
        id: "deloitte-5",
        description: "Collaborated with AI engineers to optimize human-AI interaction patterns"
      }
    ],
    skills: [
      { id: "skill-1", name: "React.js" },
      { id: "skill-2", name: "Vue.js" },
      { id: "skill-3", name: "Postman API" },
      { id: "skill-4", name: "REST APIs" },
      { id: "skill-5", name: "User Experience Design (UED)" },
      { id: "skill-6", name: "User Interface Design" },
      { id: "skill-7", name: "Artificial Intelligence (AI)" },
      { id: "skill-8", name: "Chatbot" },
      { id: "skill-9", name: "Fork" },
      { id: "skill-10", name: "TanStack" },
      { id: "skill-11", name: "Shadcn" },
      { id: "skill-12", name: "React Hook Form" },
      { id: "skill-13", name: "Git" },
      { id: "skill-14", name: "GitHub" },
      { id: "skill-15", name: "Gitlab" }
    ]
  },
  {
    id: "union-faith",
    position: "UI UX Designer & Frontend Developer",
    company: "Union Faith Corp",
    logo: unionfaith,
    employmentType: "Full-time",
    startTime: "Aug 2023",
    endTime: "Nov 2024",
    range: "1 yr 4 mos",
    location: "Hong Kong SAR",
    locationType: "On-site",
    keyProjects: [
      "Revamp of an insurance company website for online insurance selling"
    ],
    duties: [
      {
        id: "union-1",
        description: "Designed intuitive UX and appealing UI, incorporating brand elements for consistent visual identity"
      },
      {
        id: "union-2",
        description: "Conducted extensive user research and competitive analysis to inform design decisions"
      },
      {
        id: "union-3",
        description: "Developed frontend using React and JavaScript, integrating UI/UX principles for responsive design"
      },
      {
        id: "union-4",
        description: "Managed entire project lifecycle from conceptualization to implementation"
      },
      {
        id: "union-5",
        description: "Led small, agile team through development process, delivering weekly progress reports to stakeholders"
      }
    ],
    skills: [
      { id: "uf-skill-1", name: "React.js" },
      { id: "uf-skill-2", name: "HTML5" },
      { id: "uf-skill-3", name: "JavaScript" },
      { id: "uf-skill-4", name: "User Experience (UX)" },
      { id: "uf-skill-5", name: "Tailwind CSS" },
      { id: "uf-skill-6", name: "React Hook Form" },
      { id: "uf-skill-7", name: "Visual Design" },
      { id: "uf-skill-8", name: "MUI" },
      { id: "uf-skill-9", name: "Design System" },
      { id: "uf-skill-10", name: "Front-End Development" },
      { id: "uf-skill-11", name: "Git" },
      { id: "uf-skill-12", name: "English" },
      { id: "uf-skill-13", name: "User Interface Design" },
      { id: "uf-skill-14", name: "Web Content Accessibility Guidelines (WCAG)" },
      { id: "uf-skill-15", name: "Design Guidelines" },
      { id: "uf-skill-16", name: "Figma" },
      { id: "uf-skill-17", name: "Adobe Creative Suite" },
      { id: "uf-skill-18", name: "Google Material Design" },
      { id: "uf-skill-19", name: "ES6" },
      { id: "uf-skill-20", name: "Typography" },
      { id: "uf-skill-21", name: "Wireframing" },
      { id: "uf-skill-22", name: "Zod" }
    ]
  },
  {
    id: "ecommerce",
    position: "eCommerce Web Designer",
    company: "Unigel",
    logo: unigel,
    employmentType: "Contract",
    startTime: "Apr 2023",
    endTime: "Jun 2023",
    range: "3 mos",
    location: "Mainland China",
    locationType: "On-site",
    keyProjects: [
      "Designed and developed an online shop for an Alibaba B2B company targeting the US market"
    ],
    duties: [
      {
        id: "ecom-1",
        description: "Rebranded entire website with fresh, youthful design using nude & orange color scheme"
      },
      {
        id: "ecom-2",
        description: "Optimized user flow, resulting in 85% of customers finding desired products immediately"
      },
      {
        id: "ecom-3",
        description: "Conducted UX research to inform design decisions specifically for the US market"
      },
      {
        id: "ecom-4",
        description: "Mastered Shopify to design and launch a B2B e-commerce website within 3 months"
      },
      {
        id: "ecom-5",
        description: "Enhanced user interaction by integrating shopping cart functionality and customer review system"
      }
    ],
    skills: [
      { id: "ec-skill-1", name: "Design Guidelines" },
      { id: "ec-skill-2", name: "CSS" },
      { id: "ec-skill-3", name: "HTML5" },
      { id: "ec-skill-4", name: "User Experience (UX)" },
      { id: "ec-skill-5", name: "Visual Design" },
      { id: "ec-skill-6", name: "User Interface Design" },
      { id: "ec-skill-7", name: "Spoken English" },
      { id: "ec-skill-8", name: "Shopify" },
      { id: "ec-skill-9", name: "Adobe Creative Suite" },
      { id: "ec-skill-10", name: "Content Management Systems (CMS)" },
      { id: "ec-skill-11", name: "Responsive Web Design" }
    ]
  },
  {
    id: "hktdc",
    position: "Web Designer",
    company: "Hong Kong Trade Development Council",
    logo: hktdc,
    employmentType: "Full-time",
    startTime: "Mar 2022",
    endTime: "Apr 2023",
    range: "1 yr 2 mos",
    location: "Hong Kong SAR",
    locationType: "On-site",
    keyProjects: [
      "Exhibition Promotion Websites including Belt and Road Summit, Asia Summit on Global Health, and HK Licensing Show"
    ],
    duties: [
      {
        id: "hktdc-1",
        description: "Migrated and redesigned website content from TeamSite to WordPress, enhancing user experience"
      },
      {
        id: "hktdc-2",
        description: "Created responsive webpages using Bootstrap, improving cross-device accessibility"
      },
      {
        id: "hktdc-3",
        description: "Implemented interactive elements like scrolling banners and slideshows to increase engagement"
      },
      {
        id: "hktdc-4",
        description: "Conducted User Acceptance Testing (UAT) and used Jira for bug tracking and resolution"
      },
      {
        id: "hktdc-5",
        description: "Collaborated with cross-functional teams to align design with marketing strategies and technical requirements"
      }
    ],
    skills: [
      { id: "hk-skill-1", name: "CSS" },
      { id: "hk-skill-2", name: "HTML5" },
      { id: "hk-skill-3", name: "Bootstrap" },
      { id: "hk-skill-4", name: "Communication" },
      { id: "hk-skill-5", name: "English" },
      { id: "hk-skill-6", name: "User Interface Design" },
      { id: "hk-skill-7", name: "Spoken English" },
      { id: "hk-skill-8", name: "Adobe Creative Suite" },
      { id: "hk-skill-9", name: "WordPress" },
      { id: "hk-skill-10", name: "Responsive Web Design" }
    ]
  },
  {
    id: "journalist",
    position: "Journalist (World News)",
    company: "Oriental Press Group",
    logo: oriental,
    employmentType: "Full-time",
    startTime: "Jul 2020",
    endTime: "Oct 2021",
    range: "1 yr 4 mos",
    location: "Hong Kong SAR",
    locationType: "On-site",
    duties: [
      {
        id: "news-1",
        description: "Identified trending topics and gathered information from diverse sources to enhance reader engagement"
      },
      {
        id: "news-2",
        description: "Produced high-quality, newsworthy articles for online publication while meeting tight deadlines"
      },
      {
        id: "news-3",
        description: "Crafted compelling headlines and content to improve reader retention and interaction"
      },
      {
        id: "news-4",
        description: "Collaborated with senior journalists to align content with editorial priorities"
      },
      {
        id: "news-5",
        description: "Adapted quickly to evolving news landscapes and digital platforms in a fast-paced environment"
      }
    ],
    skills: [
      { id: "news-skill-1", name: "Communication" },
      { id: "news-skill-2", name: "English" },
      { id: "news-skill-3", name: "Content Strategy" },
      { id: "news-skill-4", name: "Spoken English" },
      { id: "news-skill-5", name: "Storytelling" }
    ]
  }
];