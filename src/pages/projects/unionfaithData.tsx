import desktopBeginning from "@/assets/portfolio/unionfaith/desktop-beginning.png"
import quotation from "@/assets/portfolio/unionfaith/auto-quotation.png"
import purchase from "@/assets/portfolio/unionfaith/purchase.png"
import mobile from "@/assets/portfolio/unionfaith/responsive.png"

import tailwindcss from "@/assets/tools/tailwindcss.png"
import react from "@/assets/tools/react.png"
import typescript from "@/assets/tools/typescript.png"

const features = [
  {
    subtitle: "feature",
    title: "Insurance Quotation",
    description: "✦ Designing the quotation system was challenging given Union Faith's complex product structure with multiple variants and plans. User interviews revealed pricing as the top priority, so I positioned the quotation tool prominently below the hero banner and created intuitive tabs for easy price comparison across options. ✦ Another challenge was navigating policy restrictions—such as the four-member family limit and adult inclusion requirements. I designed the interface to subtly guide users down valid paths, minimizing errors and helping them efficiently find suitable options without encountering frustrating dead ends.",
    imageSrc: quotation,
    imageAlt: "Insurance Quotation Design",
    bgColor:"bg-[#418A8B]"
  },
  {
    subtitle: "feature",
    title: "Online Insurance Purchase",
    description: "Firebase A/B Testing shows you the impact app changes have on your most important business metrics. Out-of-the-box, it tracks retention, revenue, and engagement. In conjunction with Google Analytics for Firebase, you can also track how user actions change in each experiment.",
    imageSrc: purchase
    
    
    
    
    
    
    
    
    ,
    imageAlt: "Business analytics dashboard",
    bgColor:"bg-[#84C4C2]"
  },
  {
    subtitle: "feature",
    title: "Mobile and Tablet Friendly",
    description: "Improve your app by testing different versions with real users. Make data-driven decisions about what works best for your audience and fine-tune your application accordingly.",
    imageSrc: mobile,
    imageAlt: "User experience optimization",
    bgColor:"bg-[#78D0C8]",
  },
  {
    subtitle: "style",
    title: "Branding",
    description: "More concrete and outstanding brand image, Much clearer visual hierarchy, Focus on the quotation need of target customers",
    imageSrc: desktopBeginning,
    imageAlt: "Homepage",
    bgColor:"",
  },
  {
    subtitle: "style",
    title: "Design System",
    description: "Get started quickly with our easy-to-use interface. Define your variants, set your goals, and let our tools handle the heavy lifting of tracking and analysis.",
    imageSrc: desktopBeginning,
    imageAlt: "Simple implementation diagram",
    bgColor:"",
  }
];

const projectTools = [
  {
    imgSrc: typescript,
    toolName: "TypeScript"
  },
  {
    imgSrc: react,
    toolName: "React"
  },
  {
    imgSrc: tailwindcss,
    toolName: "Tailwind CSS"
  },
  {
    imgSrc: typescript,
    toolName: "TypeScript"
  },
  {
    imgSrc: react,
    toolName: "React"
  },
  {
    imgSrc: tailwindcss,
    toolName: "Tailwind CSS"
  },
  {
    imgSrc: typescript,
    toolName: "TypeScript"
  },
  {
    imgSrc: react,
    toolName: "React"
  },
  {
    imgSrc: tailwindcss,
    toolName: "Tailwind CSS"
  },
  {
    imgSrc: typescript,
    toolName: "TypeScript"
  },
  {
    imgSrc: react,
    toolName: "React"
  },
];

export { features, projectTools }