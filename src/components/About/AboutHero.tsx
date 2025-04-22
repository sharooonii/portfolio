
import selfie from "@/assets/selfie.jpg"
import { Linkedin } from "lucide-react";

export const AboutHero = () => {

  const navigateToLinkedin = () => {
    window.open("https://www.linkedin.com/in/sharon-wong-49b44b280/", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="bg-lpink/50 p-10 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10 items-center">
      <div className="md:col-span-2 space-y-6 text-center">
        <div className="josefin text-4xl font-extrabold uppercase">✦ Sharon Wong ✦</div>
        <div className="text-lg">UI UX Designer | Frontend Developer | Deloitte AI Institute</div>
        <div className="flex justify-center items-center gap-2 cursor-pointer group md:mt-2" onClick={navigateToLinkedin}>
          <div className="size-8 rounded-lg bg-sbrown text-white flex justify-center items-center">
            <Linkedin className="size-5"/>
          </div>
          <p className="josefin uppercase group-hover:underline underline-offset-8 font-bold font-xl">
            My LinkedIn
          </p>
        </div>
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