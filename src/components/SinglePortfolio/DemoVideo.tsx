import React from 'react';

interface DemoVideoProps {
  videoSrc: string;
  className?: string;
}

export const DemoVideo: React.FC<DemoVideoProps> = ({
  videoSrc,
  className = ""
}) => {
  const videoRef = React.useRef<HTMLVideoElement>(null);

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            videoRef.current?.play().catch(error => {
              console.error("Error playing video:", error);
            });
          } else {
            videoRef.current?.pause();
          }
        });
      },
      { threshold: 0.2 } // Trigger when at least 20% of the video is visible
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  return (
    <div className={`container mx-auto ${className}`}>
      {/* <h2 className="text-center text-3xl sm:text-5xl font-bold mb-10">Demo Video</h2> */}
      <div className="w-full rounded-xl overflow-hidden shadow-2xl">
        <video 
          ref={videoRef}
          src={videoSrc} 
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-auto"
          preload="metadata"
        >
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};