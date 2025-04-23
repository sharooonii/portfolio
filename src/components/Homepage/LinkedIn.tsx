import { Linkedin } from "lucide-react";

export const LinkedIn = () => {

  const navigateToLinkedin = () => {
    // Open LinkedIn profile in a new tab
    window.open("https://www.linkedin.com/in/sharon-wong-49b44b280/", "_blank", "noopener,noreferrer");
  };

  return (
    <div className="flex justify-center items-center gap-2 cursor-pointer group mt-2 lg:mt-0" onClick={navigateToLinkedin}>
      <div className="size-8 rounded-lg bg-sbrown text-white flex justify-center items-center">
        <Linkedin className="size-5"/>
      </div>
      <p className="josefin uppercase group-hover:underline underline-offset-8 font-bold font-xl">
        My LinkedIn
      </p>
    </div>
  );
}