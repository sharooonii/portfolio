// LicenseCard.tsx
import React from 'react';
import { LicenseData } from './licenses';

const LicenseCard: React.FC<{ license: LicenseData }> = ({ license }) => {
  const {
    title,
    organization,
    issueDate,
    skills
  } = license;

  return (
    <div className="license-card">
      <div className="work-sub-title">{title}</div>
      <div className="organization text-base mb-1 font-medium">
        {organization}
      </div>
      <div className="time-info mb-2">
        Issued {issueDate}
      </div>
      
      {skills && skills.length > 0 && (
        <div className="skills">
          <span className="font-semibold">Skills: </span>
          {skills.map((skill, index) => (
            <span key={skill.id} className="skill">
              {skill.name}{index < skills.length - 1 ? ' · ' : ''}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default LicenseCard;