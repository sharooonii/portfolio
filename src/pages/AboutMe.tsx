import { useState, useEffect, useRef } from "react";
import { AboutHero } from "@/components/About/AboutHero";
import ExperienceCard from "@/components/About/ExperienceCard";
import { experienceData } from "@/components/About/experiences";
import LicenseCard from "@/components/About/LicenseCard";
import { licenseData } from "@/components/About/licenses";
import LanguageCard from "@/components/About/LanguageCard";
import { languageData } from "@/components/About/languages";
import { SkillTabs } from "@/components/Homepage/SkillTabs";

type SectionStatus = 'passed' | 'active' | 'upcoming';
type SectionName = 'languages' | 'experience' | 'licenses' | 'skills';

export const AboutMe = () => {
  // References to section divs and titles
  const sectionRefs = {
    languages: {
      section: useRef<HTMLDivElement>(null),
      title: useRef<HTMLHeadingElement>(null)
    },
    experience: {
      section: useRef<HTMLDivElement>(null),
      title: useRef<HTMLHeadingElement>(null)
    },
    licenses: {
      section: useRef<HTMLDivElement>(null),
      title: useRef<HTMLHeadingElement>(null)
    },
    skills: {
      section: useRef<HTMLDivElement>(null),
      title: useRef<HTMLHeadingElement>(null)
    }
  };
  
  const stickyNavRef = useRef<HTMLDivElement>(null);
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  // State to track section status and progress
  const [activeSection, setActiveSection] = useState<SectionName | null>(null);
  const [sectionStatus, setSectionStatus] = useState<Record<SectionName, SectionStatus>>(
    Object.fromEntries(
      Object.keys(sectionRefs).map(key => [key, 'upcoming'])
    ) as Record<SectionName, SectionStatus>
  );
  const [sectionProgress, setSectionProgress] = useState<Record<SectionName, number>>(
    Object.fromEntries(
      Object.keys(sectionRefs).map(key => [key, 0])
    ) as Record<SectionName, number>
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const navHeight = stickyNavRef.current?.offsetHeight || 0;
      const navTopPosition = stickyNavRef.current ? 
        stickyNavRef.current.getBoundingClientRect().top + window.scrollY : 0;
      
      const scrollWithOffset = scrollPosition + navHeight + 10;
      
      // Get all section positions
      const sectionPositions = Object.entries(sectionRefs).map(([name, refs]) => ({
        name: name as SectionName,
        titlePosition: refs.title.current?.offsetTop || 0,
        height: refs.section.current?.offsetHeight || 0
      }));
      
      // Calculate progress and status for each section
      const newStatus = { ...sectionStatus };
      const newProgress = { ...sectionProgress };
      let currentActive: SectionName | null = null;
      
      sectionPositions.forEach((section, index) => {
        const nextSection = sectionPositions[index + 1];
        const sectionEnd = nextSection ? nextSection.titlePosition : 
          section.titlePosition + section.height;
        
        // Calculate progress
        newProgress[section.name] = scrollWithOffset < section.titlePosition ? 0 :
          scrollWithOffset >= sectionEnd ? 100 :
          ((scrollWithOffset - section.titlePosition) / (sectionEnd - section.titlePosition)) * 100;
        
        // Determine status
        if (scrollWithOffset < section.titlePosition) {
          newStatus[section.name] = 'upcoming';
        } else if (scrollWithOffset >= section.titlePosition && 
                  (nextSection ? scrollWithOffset < nextSection.titlePosition : 
                   scrollWithOffset < sectionEnd)) {
          newStatus[section.name] = 'active';
          currentActive = section.name;
        } else {
          newStatus[section.name] = 'passed';
        }
      });
      
      // Update states
      setSectionStatus(newStatus);
      setSectionProgress(newProgress);
      setActiveSection(currentActive);
    };
    
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to get styling for each tab
  const getTabStyle = (section: SectionName) => {
    const status = sectionStatus[section];
    const progress = sectionProgress[section];
    
    return {
      className: `py-2 text-sm ${
        status === 'passed' ? 'text-black/60' : 'text-black/50'
      }`,
      style: {
        backgroundColor: status === 'passed' ? '#fde5ec' : 'transparent',
        ...(status === 'active' && {
          background: `linear-gradient(to right, #fde5ec ${progress}%, transparent ${progress}%)`
        })
      }
    };
  };

  return (
    <div id="about-me-page" className="container mx-auto">
      <h1 className="top-title py-26 text-center">About Me</h1>
      <div className="space-y-16 pb-26">
        <AboutHero />
        <div className="space-y-16 relative">
          <div ref={stickyNavRef} className="sticky top-0 z-100 bg-white py-3">
            <div className="grid grid-cols-4 items-center text-center uppercase border border-spink divide-x divide-spink rounded-sm overflow-hidden">
              {Object.keys(sectionRefs).map((section, index) => (
                <div 
                  key={section} 
                  className="relative h-full *:h-full w-full *:flex *:justify-center *:items-center"
                >
                  <div {...getTabStyle(section as SectionName)}>
                    {section === 'licenses' ? 'Licenses & Certs' : 
                     section === 'experience' ? 'Work Experience' :
                     section.charAt(0).toUpperCase() + section.slice(1)}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="*:space-y-8 space-y-16">
            {Object.entries(sectionRefs).map(([name, refs]) => (
              <div key={name} ref={refs.section}>
                <h2 ref={refs.title} className="section-title josefin mb-6">
                  ✦ {name === 'experience' ? 'Work Experience' :
                     name === 'licenses' ? 'Licenses & Certifications' :
                     name.charAt(0).toUpperCase() + name.slice(1)}
                </h2>
                {name === 'languages' && (
                  <div className="grid grid-cols-3 xl:grid-cols-5 about-section p-10">
                    {languageData.map((language) => (
                      <LanguageCard key={language.id} language={language} />
                    ))}
                  </div>
                )}
                
                {name === 'experience' && (
                  <div className="about-section *:p-10 divide-y">
                    {experienceData.map((experience) => (
                      <ExperienceCard key={experience.id} experience={experience} />
                    ))}
                  </div>
                )}
                
                {name === 'licenses' && (
                <div className="about-section *:p-10 divide-y">
                    {licenseData.map((license) => (
                    <LicenseCard key={license.id} license={license} />
                  ))}
                  </div>
                )}

                {name === 'skills' && (
                  <div className="skill-part">
                    <SkillTabs />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}