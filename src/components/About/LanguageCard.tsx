// LanguageCard.tsx
import React from 'react';
import { LanguageData } from './languages';

const LanguageCard: React.FC<{ language: LanguageData }> = ({ language }) => {
  const { name, proficiency, proficiencyLevel } = language;

  // Function to render proficiency level bar
  const renderProficiencyBar = () => {
    if (typeof proficiencyLevel === 'undefined') return null;
    
    const bars = [];
    for (let i = 1; i <= 5; i++) {
      bars.push(
        <div 
          key={i}
          className={`size-2 rounded-full mr-1 ${i <= proficiencyLevel ? 'bg-spink' : 'bg-gray-200'}`}
        />
      );
    }
    
    return (
      <div className="flex space-x-1 mt-1 w-full">
        {bars}
      </div>
    );
  };

  return (
    <div className="language-card mb-6">
      <div className="mb-2">
        <div className="language-name text-base font-semibold">{name}</div>
        <div className="time-info">{proficiency}</div>
      </div>
      {renderProficiencyBar()}
    </div>
  );
};

export default LanguageCard;