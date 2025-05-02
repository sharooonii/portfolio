import { Button } from "../ShadcnUI/button";
import { LinkedIn } from "./LinkedIn";
import { useNavigate } from "react-router-dom";
import logo from "@/assets/logo/logo-brown.svg";
import logoGray from "@/assets/logo/logo-gray.svg"

export const Footer = ({ isPortfolio = false }: { isPortfolio?: boolean }) => {
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
    <footer id="footer" className={`${isPortfolio ? "bg-gray-100" : "bg-nude"} py-8 md:py-18 w-full mt-auto`}>
      <div className="container mx-auto flex flex-col lg:flex-row gap-2 justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
          <img src={isPortfolio ? logoGray : logo} alt="logo" className="w-8 h-8"/>
          <h1 className={`uppercase ${isPortfolio ? "text-black/60" : "text-sbrown"} text-base tracking-widest`}>
            ✦ Thanks for visiting my website! 🥰 ✦
          </h1>
        </div>
        <LinkedIn isPortfolio={isPortfolio} />
        <div className="flex items-center gap-2">
          {navItems.map((item, index) => (
            <Button 
              key={index}
              variant="ghost" 
              className={`header-button josefin ${isPortfolio ? "!text-black/60" : "!text-sbrown"}`} 
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