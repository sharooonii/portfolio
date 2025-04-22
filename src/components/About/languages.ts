// languages.ts
export type ProficiencyLevel = 
  | "Native or bilingual proficiency"
  | "Full professional proficiency"
  | "Professional working proficiency"
  | "Limited working proficiency"
  | "Elementary proficiency";

export interface LanguageData {
  id: string;
  name: string;
  proficiency: ProficiencyLevel;
  // Optional field if you want to add a progress bar visualization
  proficiencyLevel?: number; // 1-5 scale where 5 is native proficiency
}

export const languageData: LanguageData[] = [
  {
    id: "english",
    name: "English",
    proficiency: "Full professional proficiency",
    proficiencyLevel: 4
  },
  {
    id: "cantonese",
    name: "Cantonese",
    proficiency: "Native or bilingual proficiency",
    proficiencyLevel: 5
  },
  {
    id: "mandarin",
    name: "Mandarin",
    proficiency: "Native or bilingual proficiency",
    proficiencyLevel: 5
  },
  {
    id: "korean",
    name: "Korean",
    proficiency: "Full professional proficiency",
    proficiencyLevel: 4
  },
  {
    id: "spanish",
    name: "Spanish",
    proficiency: "Limited working proficiency",
    proficiencyLevel: 3
  }
];