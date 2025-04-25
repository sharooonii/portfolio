interface DemoVideoProps {
  videoSrc: string;
  className?: string;
}

export const DemoVideo: React.FC<DemoVideoProps> = ({
  videoSrc,
  className = ""
}) => {
  return (
    <div className={`${className}`}>
      <div className="w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-2xl">
        <video 
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