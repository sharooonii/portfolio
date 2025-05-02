import desktopBeginning from "@/assets/portfolio/unionfaith/desktop-beginning.png"
import quotation from "@/assets/portfolio/unionfaith/auto-quotation.png"
import purchase from "@/assets/portfolio/unionfaith/purchase.png"
import mobile from "@/assets/portfolio/unionfaith/responsive.png"

import tailwindcss from "@/assets/tools/tailwindcss.png"
import react from "@/assets/tools/react.png"
import typescript from "@/assets/tools/typescript.png"

// Import icons from Lucide or your preferred icon library
import {BadgeDollarSign, GitCompare, MapPlus, ShoppingCart, Smartphone, Paintbrush, Layout } from 'lucide-react';

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
    content: "I designed the interface to subtly guide users through policy restrictions—such as family member limits and requirements—minimizing errors and helping them efficiently find suitable options without encountering frustrating dead ends.",
    image: quotation,
    icon: <MapPlus size={24} />
  }
];

const purchaseFeatures = [
  {
    id: 1,
    title: "Simplified Purchase Journey",
    content: "Streamlined insurance buying into intuitive steps, significantly improving conversion rates for first-time insurance buyers.",
    image: purchase, 
    icon: <ShoppingCart size={24} />
  },
  {
    id: 2,
    title: "Secure Transaction Experience",
    content: "Created secure checkout with clear summaries, multiple payment options, and instant confirmation to enhance customer trust.",
    image: purchase,
    icon: <ShoppingCart size={24} />
  }
];

const responsiveFeatures = [
  {
    id: 1,
    title: "Responsive",
    content: "Implemented responsive design using fluid grids and flexible images for seamless experience across desktop, tablet, and mobile.",
    image: mobile, 
    icon: <Smartphone size={24} />
  },
  {
    id: 2,
    title: "Mobile-First",
    content: "Designed touch-friendly mobile interface with larger targets, simplified navigation, and performance optimizations for slower connections.",
    image: mobile,
    icon: <Smartphone size={24} />
  }
];

const styleFeatures = [
  {
    id: 1,
    title: "Branding",
    content: "Established stronger brand image with clearer visual hierarchy focused on customer needs while maintaining core values.",
    image: desktopBeginning, 
    icon: <Paintbrush size={24} />
  },
  {
    id: 2,
    title: "Design System",
    content: "Built complete design system with consistent components, colors, typography and spacing for visual coherence and rapid development.",
    image: desktopBeginning,
    icon: <Layout size={24} />
  }
];

// Features sections - organized by section
const featuresSections = {
  quotation: {
    data: quotationFeatures,
    title: "Quotation Comparison",
    progressBarColor: "bg-[#418A8B]",
  },
  purchase: {
    data: purchaseFeatures,
    title: "Online Purchasing Experience",
    progressBarColor: "bg-[#84C4C2]",
  },
  responsive: {
    data: responsiveFeatures,
    title: "Mobile & Tablet Friendly",
    progressBarColor: "bg-[#78D0C8]",
  },
  style: {
    data: styleFeatures,
    title: "Style & Design",
    progressBarColor: "bg-[#538A8A]",
  }
};

const projectTools = [
  {
    name: "TypeScript",
    icon: typescript
  },
  {
    name: "React",
    icon: react
  },
  {
    name: "Tailwind CSS",
    icon: tailwindcss
  },
  {
    name: "TypeScript",
    icon: typescript
  },
  {
    name: "React",
    icon: react
  },
  {
    name: "Tailwind CSS",
    icon: tailwindcss
  },
  {
    name: "TypeScript",
    icon: typescript
  },
  {
    name: "React",
    icon: react
  },
  {
    name: "Tailwind CSS",
    icon: tailwindcss
  },
  {
    name: "TypeScript",
    icon: typescript
  },
  {
    name: "React",
    icon: react
  },
];

export { quotationFeatures, purchaseFeatures, responsiveFeatures, styleFeatures, featuresSections, projectTools }