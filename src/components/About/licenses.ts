// licenses.ts
import fevaworks from "@/assets/company/fevaworks.jpg"
import hkddmi from "@/assets/company/hkddmi.jpg"

export interface Skill {
  id: string;
  name: string;
}

export interface LicenseData {
  id: string;
  title: string;
  organization: string;
  issueDate: string;
  skills?: Skill[];
  logo: string;
}

export const licenseData: LicenseData[] = [
  {
    id: "multimedia-web-design",
    title: "Certificate in Multimedia Web Design and Interactive Application Development",
    organization: "Feva Works IT Education Centre",
    logo: fevaworks,
    issueDate: "Aug 2022",
    skills: [
      { id: "mwd-skill-1", name: "jQuery" },
      { id: "mwd-skill-2", name: "JavaScript" },
      { id: "mwd-skill-3", name: "HTML5" },
      { id: "mwd-skill-4", name: "MySQL" },
      { id: "mwd-skill-5", name: "Responsive Web Design" }
    ]
  },
  {
    id: "uiux-certificate",
    title: "Professional Certificate in UI/UX Website Design with Figma and Adobe XD",
    organization: "Hong Kong Digital Design and Marketing Institute",
    logo: hkddmi,
    issueDate: "Feb 2022",
    skills: [
      { id: "uiux-skill-1", name: "User Experience (UX)" },
      { id: "uiux-skill-2", name: "Wireframing" },
      { id: "uiux-skill-3", name: "Adobe XD" },
      { id: "uiux-skill-4", name: "Responsive Web Design" },
      { id: "uiux-skill-5", name: "User Interface Design" },
      { id: "uiux-skill-6", name: "Figma" }
    ]
  },
  {
    id: "illustrator-certificate",
    title: "Illustrator Graphic Design and Advertising Professional Certificate",
    organization: "Hong Kong Digital Design and Marketing Institute",
    logo: hkddmi,
    issueDate: "Dec 2021",
    skills: []
  },
  {
    id: "photoshop-certificate",
    title: "Photoshop Digital Graphic Design Professional Certificate",
    organization: "Hong Kong Digital Design and Marketing Institute",
    logo: hkddmi,
    issueDate: "Nov 2021",
    skills: [
      { id: "ps-skill-1", name: "Visual Design" }
    ]
  }
];