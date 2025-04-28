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
      {/* <h2 className="text-center text-3xl sm:text-5xl font-bold mb-10">Demo Video</h2> */}
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