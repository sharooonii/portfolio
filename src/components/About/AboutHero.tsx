
import selfie from "@/assets/selfie.jpg";
import { LinkedIn } from "../Homepage/LinkedIn";

export const AboutHero = () => {

  const navigateToLinkedin = () => {
    window.open("https://www.linkedin.com/in/sharon-wong-49b44b280/", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-lpink/50 p-10 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10 items-center">
      <div className="md:col-span-2 space-y-2 md:space-y-4 xl:space-y-6 text-center">
        <div className="josefin text-2xl md:text-3xl lg:text-4xl font-extrabold uppercase">✦ Hello, I am Sharon Wong ✦</div>
        <div className="text-base md:text-lg">UI UX Designer | Frontend Developer | Deloitte AI Institute</div>
        <LinkedIn />
      </div>
      <div className="order-first md:order-last mx-auto md:mx-0">
        <div className="relative overflow-hidden rounded-lg max-w-96">
          <img 
            src={selfie} 
            alt="My photo" 
            className="w-full h-auto object-cover shadow-md transform transition-transform hover:scale-105 duration-300"
          />
        </div>
      </div>
    </div>
  );
}