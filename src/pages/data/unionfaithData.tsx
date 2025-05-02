import desktopBeginning from "@/assets/portfolio/unionfaith/desktop-beginning.png"
import quotation from "@/assets/portfolio/unionfaith/auto-quotation.png"
import purchase from "@/assets/portfolio/unionfaith/purchase.png"
import mobile from "@/assets/portfolio/unionfaith/responsive.png"

import canva from "@/assets/tools/canva.png"
import figma from "@/assets/tools/figma.png"
import fork from "@/assets/tools/fork.png"
import illustrator from "@/assets/tools/illustrator.png"
import lottiefiles from "@/assets/tools/lottiefiles.png"
import midjourney from "@/assets/tools/midjourney.png"
import motion from "@/assets/tools/motion.png"
import photoshop from "@/assets/tools/photoshop.png"
import shadcn from "@/assets/tools/shadcn.png"
import tailwindcss from "@/assets/tools/tailwindcss.png"
import react from "@/assets/tools/react.png"
import reacthookform from "@/assets/tools/reacthookfrom.png"
import zod from "@/assets/tools/zod.png"
import mui from "@/assets/tools/mui.jpg"
import typescript from "@/assets/tools/typescript.png"
import html from "@/assets/tools/html.png"
import css from "@/assets/tools/css.png"
import javascript from "@/assets/tools/javascript.png"
import axios from "@/assets/tools/axios.png"
import git from "@/assets/tools/git.png"
import node from '@/assets/tools/node.png'

// Import icons from Lucide or your preferred icon library
import {BadgeDollarSign, GitCompare, MapPlus, ShoppingCart, Smartphone, Paintbrush, Layout } from 'lucide-react';

// Project Introduction
const projectIntro = {
  title: "Union Faith Insurance Platform",
  role: "Lead Product Designer",
  date: "2023-2024",
  visitSite: "https://unionfaith.com", // Replace with actual URL
  
  overview: `Union Faith is Hong Kong's leading digital insurance provider, serving over 100,000 customers with affordable health coverage options. The company sought to increase online conversions by creating a more intuitive and transparent digital experience. As the lead designer, I spearheaded the UX redesign of their quotation and purchasing systems, working with a cross-functional team of developers, product managers, and insurance specialists.`,
  
  challenge: `The insurance industry typically suffers from complex purchasing processes and opaque pricing. Our research showed that 67% of potential customers abandoned applications due to confusion about plan options or pricing. My goal was to create a transparent, user-friendly platform that would simplify decision-making and streamline the purchase journey.`,
  
  process: `I began by conducting user interviews and analyzing conversion data to identify key pain points. After creating wireframes and user flows, I collaborated with stakeholders from product, compliance, and marketing to ensure our design met business requirements while solving customer problems. We then developed interactive prototypes for usability testing with both existing and potential customers before implementing the final design.`
};

// New format compatible with Features component
const quotationFeatures = [
  {
    id: 1,
    title: "Prominent Pricing Display",
    content: "User interviews revealed pricing as the top priority, so I positioned the quotation tool prominently below the hero banner for immediate visibility and access.",
    image: quotation, 
    icon: <BadgeDollarSign size={24} />
  },
  {
    id: 2,
    title: "Intuitive Tabs for Comparison",
    content: "To address the challenge of Union Faith's complex product structure with multiple variants and plans, I created intuitive tabs allowing users to easily compare pricing across different options.",
    image: quotation,
    icon: <GitCompare size={24} />
  },
  {
    id: 3,
    title: "Smart Navigation",
    content: "I designed the interface to subtly guide users through policy restrictions--such as family member limits and requirements--minimizing errors and helping them efficiently find suitable options without encountering frustrating dead ends.",
    image: quotation,
    icon: <MapPlus size={24} />
  }
];

const purchaseFeatures = [
  {
    id: 1,
    title: "Simplified Purchase Journey",
    content: "After observing high drop-off rates at checkout, I redesigned the purchase flow from 7 steps to 4 intuitive steps with clear progress indicators. This intervention improved conversion rates by 28% for first-time insurance buyers.",
    image: purchase, 
    icon: <ShoppingCart size={24} />
  },
  {
    id: 2,
    title: "Secure Transaction Experience",
    content: "Security concerns were a major barrier in user testing. I addressed this by implementing clear purchase summaries, multiple payment options with recognizable security badges, and instant confirmation emails, resulting in a 15% increase in customer trust metrics.",
    image: purchase,
    icon: <ShoppingCart size={24} />
  }
];

const responsiveFeatures = [
  {
    id: 1,
    title: "Responsive Design System",
    content: "Analytics showed 65% of visitors were using mobile devices. I implemented a responsive design using fluid grids and flexible images, ensuring a seamless experience across desktop, tablet, and mobile devices without functionality compromises.",
    image: mobile, 
    icon: <Smartphone size={24} />
  },
  {
    id: 2,
    title: "Mobile-First Approach",
    content: "I advocated for a mobile-first strategy, designing touch-friendly interfaces with larger tap targets, simplified navigation patterns, and performance optimizations for slower connections. This approach reduced mobile bounce rates by 23%.",
    image: mobile,
    icon: <Smartphone size={24} />
  }
];

const styleFeatures = [
  {
    id: 1,
    title: "Enhanced Brand Identity",
    content: "Working with Union Faith's marketing team, I established a stronger brand image with clearer visual hierarchy focused on customer needs while maintaining core brand values. The refreshed design improved brand recall by 18% in post-launch testing.",
    image: desktopBeginning, 
    icon: <Paintbrush size={24} />
  },
  {
    id: 2,
    title: "Comprehensive Design System",
    content: "To ensure consistency and speed future development, I built a complete design system with reusable components, standardized colors, typography and spacing guidelines. This system reduced design-to-development time by 40% for subsequent features.",
    image: desktopBeginning,
    icon: <Layout size={24} />
  }
];

// Features sections - organized by section
const featuresSections = {
  quotation: {
    data: quotationFeatures,
    title: "Intuitive Quotation Comparison",
    description: "The cornerstone of the redesign was making complex insurance products easily comparable and understandable for users with varying levels of insurance knowledge.",
    progressBarColor: "bg-[#418A8B]",
  },
  purchase: {
    data: purchaseFeatures,
    title: "Streamlined Purchase Experience",
    description: "We transformed the traditionally complex insurance purchase process into a guided, transparent journey that builds customer confidence at each step.",
    progressBarColor: "bg-[#84C4C2]",
  },
  responsive: {
    data: responsiveFeatures,
    title: "Cross-Device Accessibility",
    description: "A critical requirement was ensuring the platform performed flawlessly across all devices, with special attention to mobile users who represent our fastest-growing segment.",
    progressBarColor: "bg-[#78D0C8]",
  },
  style: {
    data: styleFeatures,
    title: "Brand & Design System",
    description: "Beyond functional improvements, we elevated the visual design to enhance trust while establishing a foundation for consistent future development.",
    progressBarColor: "bg-[#538A8A]",
  }
};

// Project outcomes
const projectOutcomes = {
  results: "The redesigned platform launched in March 2024 and has shown significant improvement across key metrics: 42% increase in quote completions, 28% higher conversion rate, and a 35% reduction in customer support inquiries related to the purchase process.",
  
  learnings: "This project reinforced the importance of balancing business requirements with user needs in a highly regulated industry. By involving compliance stakeholders early in the design process, we avoided potential roadblocks while still creating an intuitive experience."
};

const projectTools = [
  {
    name: "React",
    icon: react
  },
  {
    name: "TypeScript",
    icon: typescript
  },
  {
    name: "Tailwind CSS",
    icon: tailwindcss
  },
  {
    name: "ShadcnUI",
    icon: shadcn
  },
  {
    name: "MUI",
    icon: mui
  },
  {
    name: "React Hook Form",
    icon: reacthookform
  },
  {
    name: "Zod",
    icon: zod
  },
  {
    name: "Fork",
    icon: fork
  },
  {
    name: "Git",
    icon: git
  },
  {
    name: "Node.js",
    icon: node
  },
  {
    name: "HTML",
    icon: html
  },
  {
    name: "CSS",
    icon: css
  },
  {
    name: "JavaScript",
    icon: javascript
  },
  {
    name: "Axios",
    icon: axios
  },
  {
    name: "Canva",
    icon: canva
  },
  {
    name: "LottieFiles",
    icon: lottiefiles
  },
  {
    name: "Midjourney",
    icon: midjourney
  },
  {
    name: "Motion",
    icon: motion 
  },
  {
    name: "Figma",
    icon: figma
  },
  {
    name: "Photoshop",
    icon: photoshop
  },
  {
    name: "Illustrator",
    icon: illustrator
  },
];

export { 
  projectIntro,
  quotationFeatures, 
  purchaseFeatures, 
  responsiveFeatures, 
  styleFeatures, 
  featuresSections, 
  projectTools,
  projectOutcomes 
}