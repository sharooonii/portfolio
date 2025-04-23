import React from 'react';
import { EducationData } from './educations.ts';

const EducationCard: React.FC<{ education: EducationData }> = ({ education }) => {
  const {
    institution,
    degree,
    field,
    program,
    startTime,
    endTime,
    year,
    location,
    skills,
    logo
  } = education;

  return (
    <div className="education-card flex gap-4">
      <div className="education-logo-container max-w-14">
        <img src={logo} alt={institution} className="education-logo w-full" />
      </div>
      
      <div className="education-content">
        <div className="work-sub-title">{institution}</div>
        
        {degree && field && (
          <div className="degree-info mb-1">
            <span className="degree">{degree}, </span>
            <span className="field">{field}</span>
          </div>
        )}
        
        {program && (
          <div className="program-info mb-1">
            <span className="program">{program}</span>
          </div>
        )}
        
        <div className='flex gap-2'>
          <div className="time-info">
            {startTime && endTime ? (
              <>
                <span className="start-time">{startTime}</span> - 
                <span className="end-time"> {endTime}</span>
              </>
            ) : year ? (
              <span className="year">{year}</span>
            ) : null}
          </div>
          
          <span className='time-info'>·</span>

          {location && (
            <div className="time-info location-info">
              <span className="location">{location}</span>
            </div>
          )}
        </div>
        
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
    </div>
  );
};

export default EducationCard;
