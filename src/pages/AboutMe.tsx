import { AboutHero } from "@/components/About/AboutHero";
import EducationCard from "@/components/About/EducationCard";
import { educationData } from "@/components/About/educations";
import ExperienceCard from "@/components/About/ExperienceCard";
import { experienceData } from "@/components/About/experiences";
import LanguageCard from "@/components/About/LanguageCard";
import { languageData } from "@/components/About/languages";
import LicenseCard from "@/components/About/LicenseCard";
import { licenseData } from "@/components/About/licenses";
import { SkillTabs } from "@/components/Homepage/SkillTabs";
import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";

// type SectionStatus = 'passed' | 'active' | 'upcoming';
type SectionName =
  | "languages"
  | "experience"
  | "skills"
  | "education"
  | "licenses";

export const AboutMe = () => {
  // const navigate = useNavigate();
  const location = useLocation();

  // References to section divs and titles
  const sectionRefs = {
    languages: {
      section: useRef<HTMLDivElement>(null),
      title: useRef<HTMLHeadingElement>(null),
    },
    experience: {
      section: useRef<HTMLDivElement>(null),
      title: useRef<HTMLHeadingElement>(null),
    },
    skills: {
      section: useRef<HTMLDivElement>(null),
      title: useRef<HTMLHeadingElement>(null),
    },
    education: {
      section: useRef<HTMLDivElement>(null),
      title: useRef<HTMLHeadingElement>(null),
    },
    licenses: {
      section: useRef<HTMLDivElement>(null),
      title: useRef<HTMLHeadingElement>(null),
    },
  };

  const stickyNavRef = useRef<HTMLDivElement>(null);
  const userClickedRef = useRef<boolean>(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const scrollingToRef = useRef<SectionName | null>(null);

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // State to track active section
  const [activeSection, setActiveSection] = useState<SectionName | null>(null);
  const [userSelectedSection, setUserSelectedSection] =
    useState<SectionName | null>(null);

  // Check for hash in URL on initial load and when hash changes
  useEffect(() => {
    const hash = location.hash.replace("#", "");
    if (hash && Object.keys(sectionRefs).includes(hash as SectionName)) {
      scrollToSection(hash as SectionName);
    }
  }, [location.hash]);

  // Debounced scroll handler
  const debounce = <T extends (...args: unknown[]) => unknown>(
    func: T,
    wait: number
  ) => {
    return function executedFunction(...args: Parameters<T>) {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        func(...args);
      }, wait);
    };
  };

  // Function to detect which section is at the top of the viewport
  const detectActiveSection = () => {
    // If we're in the middle of a programmatic scroll, don't update
    if (userClickedRef.current) return;

    const scrollPosition = window.scrollY;
    const viewportTop = scrollPosition + 40; // 40px from the top of viewport

    // Get all section positions
    const sectionPositions = Object.entries(sectionRefs).map(
      ([name, refs]) => ({
        name: name as SectionName,
        top: refs.title.current?.getBoundingClientRect().top || 0,
        position:
          (refs.title.current?.getBoundingClientRect().top || 0) +
          scrollPosition,
      })
    );

    // Find the section closest to the top of the viewport
    let newActiveSection: SectionName | null = null;

    // Find the section whose title is closest to viewportTop
    const sortedByClosenessToTop = [...sectionPositions].sort(
      (a, b) =>
        Math.abs(a.position - viewportTop) - Math.abs(b.position - viewportTop)
    );

    if (sortedByClosenessToTop.length > 0) {
      newActiveSection = sortedByClosenessToTop[0].name;
    }

    // Update active section if needed
    if (newActiveSection) {
      setActiveSection(newActiveSection);
    }
  };

  useEffect(() => {
    // Create a debounced scroll handler
    const debouncedScrollHandler = debounce(detectActiveSection, 50);

    const scrollHandler = () => {
      if (!userClickedRef.current) {
        debouncedScrollHandler();
      }
    };

    window.addEventListener("scroll", scrollHandler);
    // Initial call to set active section
    detectActiveSection();

    return () => {
      window.removeEventListener("scroll", scrollHandler);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Handle clicking on a section tab
  const scrollToSection = (section: SectionName) => {
    // Update the internal tracking state
    scrollingToRef.current = section;

    // Set both active and user-selected section immediately for UI feedback
    setActiveSection(section);
    setUserSelectedSection(section);

    // Set user clicked flag to prevent scroll detection temporarily
    userClickedRef.current = true;

    // Update URL hash without causing a page reload
    // navigate(`#${section}`, { replace: true });

    const titleElement = sectionRefs[section].title.current;

    if (titleElement) {
      // Calculate the position of the title relative to the document
      const titlePosition =
        titleElement.getBoundingClientRect().top + window.scrollY;

      // Scroll to position the title at the top edge of the viewport
      // Add a small offset (30px) to ensure it's visible
      window.scrollTo({
        top: titlePosition - 30,
        behavior: "smooth",
      });

      // When scroll completes, ensure the active section is set correctly
      // and release the detection lock
      setTimeout(() => {
        // Force the active section to be the one we scrolled to
        if (scrollingToRef.current === section) {
          setActiveSection(section);
          setUserSelectedSection(section);
          scrollingToRef.current = null;
        }

        // Release the detection lock after a delay
        setTimeout(() => {
          userClickedRef.current = false;
          // One final check to ensure the active section is correct
          detectActiveSection();
        }, 100);
      }, 1000); // This should match approximate scroll duration
    }
  };

  // Determine which section to show as active in the UI
  const getDisplayedActiveSection = () => {
    // User selected section takes precedence if present
    return userSelectedSection || activeSection;
  };

  // Handle navigation click
  const handleNavClick = (section: SectionName) => {
    scrollToSection(section);
  };

  return (
    <div id="about-me-page" className="container mx-auto pb-16">
      <h1 className="top-title py-12 md:py-26 text-center">About Me</h1>
      <div className="space-y-16 pb-26 animate__animated animate__fadeInUp">
        <AboutHero />
        <div className="space-y-16">
          <div className="*:space-y-8 space-y-16">
            {Object.entries(sectionRefs).map(([name, refs]) => (
              <div key={name} ref={refs.section} id={name}>
                <h2 ref={refs.title} className="section-title josefin mb-6">
                  ✦{" "}
                  {name === "experience"
                    ? "Work Experience"
                    : name === "licenses"
                    ? "Licenses & Certifications"
                    : name === "skills"
                    ? "Skills - In Product Lifecycle"
                    : name.charAt(0).toUpperCase() + name.slice(1)}
                </h2>
                {name === "languages" && (
                  <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 about-section p-5 md:p-10">
                    {languageData.map((language) => (
                      <LanguageCard key={language.id} language={language} />
                    ))}
                  </div>
                )}

                {name === "experience" && (
                  <div className="about-section *:p-5 *:md:p-10 divide-y">
                    {experienceData.map((experience) => (
                      <ExperienceCard
                        key={experience.id}
                        experience={experience}
                      />
                    ))}
                  </div>
                )}

                {name === "skills" && (
                  <div className="skill-part">
                    <SkillTabs />
                  </div>
                )}

                {name === "education" && (
                  <div className="about-section *:p-5 *:md:p-10 divide-y">
                    {educationData.map((education) => (
                      <EducationCard key={education.id} education={education} />
                    ))}
                  </div>
                )}

                {name === "licenses" && (
                  <div className="about-section *:p-5 *:md:p-10 divide-y">
                    {licenseData.map((license) => (
                      <LicenseCard key={license.id} license={license} />
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed navigation at the bottom */}
      <div ref={stickyNavRef} className="fixed bottom-10 right-0 z-50">
        <div className="container mx-auto">
          <div className="items-center text-center uppercase border border-spink divide-y divide-spink rounded-sm overflow-hidden bg-white w-36 text-center">
            {Object.keys(sectionRefs).map((section) => (
              <div
                key={section}
                className="w-full cursor-pointer"
                onClick={() => handleNavClick(section as SectionName)}
              >
                <div
                  className={`py-2 text-xs w-full ${
                    getDisplayedActiveSection() === section
                      ? "bg-spink text-white font-medium"
                      : "text-black/60 hover:bg-lpink/50"
                  }`}
                >
                  {section === "licenses"
                    ? "Licenses & Certs"
                    : section === "experience"
                    ? "Work Experience"
                    : section.charAt(0).toUpperCase() + section.slice(1)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
