// ExperienceCard.tsx
import React from 'react';
import { ExperienceData } from './experiences.ts';

const ExperienceCard: React.FC<{ experience: ExperienceData }> = ({ experience }) => {
  const {
    position,
    company,
    employmentType,
    startTime,
    endTime,
    range,
    location,
    locationType,
    keyProjects,
    duties,
    skills
  } = experience;

  return (
    <div className="experience-card">
      <div className="work-sub-title">{position}</div>
      <div className="company-info">
        <span className="company">{company}</span>
        {employmentType && (
          <>
            <span className="mx-1">·</span>
            <span className="employment-type">{employmentType}</span>
          </>
        )}
      </div>
      <div className="time-info mb-1">
        <span className="start-time">{startTime}</span> - 
        <span className="end-time"> {endTime}</span>
        <span className="mx-1">·</span>
        <span className="range">{range}</span>
      </div>
      {(location || locationType) && (
        <div className="time-info mb-3">
          <span className="location">{location}</span>
          {locationType && (
            <>
              <span className="mx-1">·</span>
              <span className="location-type">{locationType}</span>
            </>
          )}
        </div>
      )}
      
      {keyProjects && keyProjects.length > 0 && (
        <div className="key-projects mb-3">
          <div className="font-semibold mb-1">✦ Key Projects</div>
          <ul className="list-disc pl-5">
            {keyProjects.map((project, index) => (
              <li key={index}>{project}</li>
            ))}
          </ul>
        </div>
      )}
      
      {duties && duties.length > 0 && (
        <div className="duties mb-3">
          <div className="font-semibold mb-1">✦ Job Duties</div>
          <ul className="list-disc pl-5">
            {duties.map((duty) => (
              <li key={duty.id} className="mb-1">{duty.description}</li>
            ))}
          </ul>
        </div>
      )}
      
      {skills && skills.length > 0 && (
        <div className="skills">
          <span className="font-semibold mr-2">Skills :</span>
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

export default ExperienceCard;