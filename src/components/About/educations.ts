// educations.ts

import hkuLogo from "@/assets/schools/hku.jpg";
import cadizLogo from "@/assets/schools/uca.jpg";
import ewhaLogo from "@/assets/schools/ewah.jpg";

export interface Skill {
  id: string;
  name: string;
}

export interface EducationData {
  id: string;
  institution: string;
  degree?: string;
  field?: string;
  program?: string;
  startTime?: string;
  endTime?: string;
  year?: string;
  location?: string;
  skills?: Skill[];
  logo?: string;
}

export const educationData: EducationData[] = [
  {
    id: "hku",
    institution: "The University of Hong Kong",
    degree: "Bachelor of Arts - BA",
    field: "Korean Studies & Spanish",
    startTime: "Sep 2016",
    endTime: "Jun 2020",
    logo: hkuLogo,
    // skills: [
    //   { id: "edu-skill-1", name: "Spoken English" }
    // ]
  },
  {
    id: "cadiz",
    institution: "Universidad de Cádiz",
    program: "Summer Semester Exchange Programme, Spanish Language and Literature",
    year: "2019",
    logo: cadizLogo,
    // skills: [
    //   { id: "edu-skill-1", name: "Spoken English" }
    // ]
  },
  {
    id: "ewha",
    institution: "Ewha Womans University 이화여자대학교",
    program: "Summer Semester Exchange Programme, Korean Language and Literature",
    year: "2018",
    logo: ewhaLogo,
    // skills: [
    //   { id: "edu-skill-1", name: "Spoken English" }
    // ]
  }
]; 