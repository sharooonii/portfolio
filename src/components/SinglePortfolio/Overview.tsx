// components/Project/ProjectOverview.tsx

interface ProjectOverviewProps {
  title: string;
  role: string;
  dateRange: string;
  introduction: string;
}

export const ProjectOverview: React.FC<ProjectOverviewProps> = ({
  title,
  role,
  dateRange,
  introduction
}) => {
  return (
    <div className="container mx-auto block lg:grid grid-cols-2 *:px-0 *:lg:px-4">
      <div>
        <h1 className="portfolio-title">{title}</h1>
        <div className="*:space-x-2 mt-4 lg:mt-10">
          <p>
            <span>Role:</span>
            <span>{role}</span>
          </p>
          <p>
            <span>Date:</span>
            <span>{dateRange}</span>
          </p>
        </div>
      </div>
      <div className="portfolio-p lg:pt-0 pt-8">
        {introduction}
      </div>
    </div>
  );
}