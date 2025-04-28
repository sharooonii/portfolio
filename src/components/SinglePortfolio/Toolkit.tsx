// components/Toolkit.tsx

interface ToolkitItemProps {
  imgSrc: string;
  toolName: string;
}

interface ToolkitProps {
  subtitle: string;
  title: string;
  tools: ToolkitItemProps[];
  className?: string;
}

export const Toolkit: React.FC<ToolkitProps> = ({
  subtitle,
  title,
  tools,
  className = ""
}) => {
  return (
    <div className={`lg:py-16 ${className}`}>
      <div className="text-center mb-12">
        <p className="project-section-subtitle">{subtitle}</p>
        <h2 className="project-section-title mb-10">{title}</h2>
      </div>
      
      <div className="container mx-auto">
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {tools.map((tool, index) => (
            <div key={index} className="flex flex-col items-center" style={{ minWidth: '80px' }}>
              <img 
                src={tool.imgSrc} 
                alt={tool.toolName} 
                className="h-14 w-14 object-contain mb-3" 
              />
              <span className="text-sm text-center">{tool.toolName}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};