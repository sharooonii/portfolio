
import { SkillTabs } from "./SkillTabs";

export const Skill = () => {
  return (
    <div id="skill" className="skill-part home-skill-container mt-20">
      <div className="container mx-auto space-y-4 py-30">
        <h1 className="home-title">My Skills - In Product Lifecycle</h1>
        <SkillTabs />
      </div>
    </div>
  );
};