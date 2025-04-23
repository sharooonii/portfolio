// ExperienceCard.tsx
import React from 'react';
import { ExperienceData } from './experiences.ts';

const ExperienceCard: React.FC<{ experience: ExperienceData }> = ({ experience }) => {
  const {
    position,
    logo,
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

  // Calculate range dynamically if endTime is "Present"
  const calculateRange = () => {
    if (endTime !== "Present") {
      return range;
    }
    
    // Parse the start date properly from format like "Nov 2024"
    const parseDate = (dateStr: string) => {
      const [month, year] = dateStr.split(' ');
      const monthMap: Record<string, number> = {
        'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
        'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
      };
      
      const monthIndex = monthMap[month] || 0; // Default to January if month not found
      return new Date(parseInt(year), monthIndex);
    };
    
    const startDate = parseDate(startTime);
    const currentDate = new Date();
    
    // Calculate total months between dates
    const totalMonths = 
      (currentDate.getFullYear() - startDate.getFullYear()) * 12 + 
      (currentDate.getMonth() - startDate.getMonth());
    
    const years = Math.floor(totalMonths / 12);
    const months = totalMonths % 12;
    
    const displayYears = years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : '';
    const displayMonths = months > 0 ? `${months} mo${months > 1 ? 's' : ''}` : '';
    
    if (displayYears && displayMonths) {
      return `${displayYears} ${displayMonths}`;
    } else {
      return displayYears || displayMonths || '< 1 mo';
    }
  };

  const displayRange = endTime === "Present" ? calculateRange() : range;

  return (
    <div className="experience-card flex gap-4">
      <div className="experience-logo-container max-w-14">
        <img src={logo} alt={company} className="experience-logo w-full" />
      </div>
      
      <div className="experience-content">
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
          <span className="range">{displayRange}</span>
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
    </div>
  );
};

export default ExperienceCard;