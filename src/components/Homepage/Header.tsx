import logo from "../../../public/logo.svg";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const navigate = useNavigate();

  // Navigation to home page
  const navigateToHome = () => {
    navigate("/");
  };

  // Navigation functions for routes
  const navigateToProjects = () => {
    navigate("/projects");
  };

  const navigateToAbout = () => {
    navigate("/about-me");
  };

  const navigateToContact = () => {
    navigate("/contact");
  };

  // Navigation items array for easier management
  const navItems = [
    { name: "Projects", onClick: navigateToProjects },
    { name: "About Me", onClick: navigateToAbout },
    { name: "Contact", onClick: navigateToContact }
  ];

  return (
    <>
      <div className="bg-spink py-2 text-white">
        <p className="container mx-auto text-center josefin uppercase">
          ✦✦✦ welcome to contact me at sharonaa0011@gmail.com ✦✦✦
        </p>
      </div>
      <div
        id="header"
        className="container mx-auto py-8 flex justify-between items-center"
      >
        <div 
          className="flex items-center gap-2 cursor-pointer group"
          onClick={navigateToHome}
        >
          <img src={logo} alt="website logo" className="w-8" />
          <h1 className="uppercase text-spink text-lg font-semibold 
          tracking-widest group-hover">
            ✦ Sharon Wong ✦
          </h1>
        </div>
        <div className="flex items-center gap-2">
          {navItems.map((item, index) => (
            <Button 
              key={index}
              variant="ghost" 
              className="header-button josefin" 
              onClick={item.onClick}
            >
              {item.name}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};