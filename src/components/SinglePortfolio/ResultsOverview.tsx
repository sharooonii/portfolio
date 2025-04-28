import React from 'react';

interface ResultItem {
  id: string;
  imgSrc: string;
  alt?: string;
}

interface ResultsOverviewProps {
  title?: string;
  results: ResultItem[];
  colors?: string[]; // CSS color values or Tailwind classes
  className?: string;
}

export const ResultsOverview: React.FC<ResultsOverviewProps> = ({
  title = "Results Overview",
  results = [],
  colors = ['#FFF5F5', '#F8A278', '#8B5032'], // Default colors: light pink, coral, brown
  className = '',
}) => {
  return (
    <section className={`py-12 ${className}`}>
      <div className="container mx-auto px-4">
        {title && (
          <h2 className="text-3xl font-medium text-center mb-10">{title}</h2>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {results.map((result, index) => {
            // Cycle through the colors array
            const bgColor = colors[index % colors.length];
            
            return (
              <div 
                key={result.id} 
                className="rounded-lg overflow-hidden flex items-center justify-center p-8"
                style={{ backgroundColor: bgColor }}
              >
                <img 
                  src={result.imgSrc} 
                  alt={result.alt || `Result ${index + 1}`} 
                  className="max-w-full h-auto shadow-sm rounded"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};