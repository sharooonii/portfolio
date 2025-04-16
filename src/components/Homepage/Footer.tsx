import { Button } from "../ui/button";
import { Linkedin } from "lucide-react";

export const Footer = () => {

  const navigateToLinkedin = () => {
    // Open LinkedIn profile in a new tab
    window.open("https://www.linkedin.com/in/sharon-wong-49b44b280/", "_blank", "noopener,noreferrer");
  }

  return (
    <div
      id="footer"
      className="bg-nude py-18"
    >
      <div className="container mx-auto flex justify-between items-center">

        <h1 className="uppercase text-sbrown text-base
        tracking-widest">
          ✦ Thanks for visiting my website! 🥰 ✦
        </h1>
        <div className="flex items-center gap-2 cursor-pointer group" onClick={navigateToLinkedin}>
            <div className="size-8 rounded-lg bg-sbrown text-white flex justify-center items-center">
              <Linkedin className="size-5"/>
            </div>
            <p className="josefin uppercase group-hover:underline underline-offset-8 font-bold font-xl">
              My LinkedIn
            </p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="header-button josefin !text-sbrown">
            Projects
          </Button>
          <Button variant="ghost" className="header-button josefin !text-sbrown">
            About
          </Button>
          <Button variant="ghost" className="header-button josefin !text-sbrown">
            Contact
          </Button>
        </div>
      </div>
    </div>
  );
};