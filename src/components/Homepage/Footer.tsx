import { Button } from "../ShadcnUI/button";
import { LinkedIn } from "./LinkedIn";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();
  
  const navigateToProjects = () => {
    navigate("/portfolio");
  };

  const navigateToAbout = () => {
    navigate("/about-me");
  };

  const navigateToContact = () => {
    navigate("/contact");
  };

  const navItems = [
    { name: "Projects", onClick: navigateToProjects },
    { name: "About Me", onClick: navigateToAbout },
    { name: "Contact", onClick: navigateToContact }
  ];

  return (
    <footer id="footer" className="bg-nude py-8 md:py-18 w-full mt-auto">
      <div className="container mx-auto flex flex-col lg:flex-row gap-2 justify-between items-center">
        <h1 className="uppercase text-sbrown text-base tracking-widest">
          ✦ Thanks for visiting my website! 🥰 ✦
        </h1>
        <LinkedIn />
        <div className="flex items-center gap-2">
          {navItems.map((item, index) => (
            <Button 
              key={index}
              variant="ghost" 
              className="header-button josefin !text-sbrown" 
              onClick={item.onClick}
            >
              {item.name}
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
};