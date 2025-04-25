
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ShadcnUI/tabs"
import { skills } from "./skills";

export const SkillTabs = () => {
  return ( 
    <Tabs defaultValue="Brainstorm" className="combo">
      <TabsList className="tab-list">
        {skills.map((step, index) => (
          <TabsTrigger 
            key={step.title} 
            value={step.title}
            className="tabs-trigger group"
          >
            <div className="icon-container">
              <step.icon className="icon" />
            </div>
            <span className="josefin text-lg">0{index+1} - {step.title}</span>
          </TabsTrigger>
        ))}
      </TabsList>
      {skills.map((step, index) => (
        <TabsContent 
          key={step.title} 
          value={step.title}
          className="tabs-content"
        >
          <h2 className="text-2xl font-bold josefin">
            {`Stage ${index+1}`} - {step.title}
          </h2>

          {step.skills && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold uppercase">Skills</h3>
              <div className="skill-col">
                {step.skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="flex gap-4"
                  >
                    {'img' in skill && skill.img && (
                      <div className="max-w-12"> 
                        <img src={skill.img} alt={skill.name} className="w-full rounded-md"/>
                      </div>
                    )}
                    <div>
                      <div className="font-bold">{skill.name}</div>
                      <div className="text-gray-400">{skill.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {step.tools && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold uppercase">Tools</h3>
              <div className="skill-col">
                {step.tools.map((tool, index) => (
                  <div 
                    key={index} 
                    className="flex gap-4"
                  >
                    <div className="max-w-12"> 
                      <img src={tool.img} alt={tool.name} className="w-full rounded-md"/>
                    </div>
                    <div>
                      <div className="font-bold">{tool.name}</div>
                      <div className="text-gray-400">{tool.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
            
        </TabsContent>
      ))}
    </Tabs>
  );
};