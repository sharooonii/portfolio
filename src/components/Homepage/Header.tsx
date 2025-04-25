import logo from "@/assets/logo.svg";
import whiteLogo from "@/assets/logo-white.svg"
import { Button } from "../ShadcnUI/button";
import { useNavigate } from "react-router-dom";
import { AlignJustify } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ShadcnUI/sheet";

interface HeaderProps {
  showTopReminder?: boolean;
  isWhite?: boolean;
}

export const Header = ({ 
  showTopReminder = true, 
  isWhite = false 
}: HeaderProps) => {
  const navigate = useNavigate();

  // Navigation to home page
  const navigateToHome = () => {
    navigate("/");
  };

  // Navigation functions for routes
  const navigateToProjects = () => {
    navigate("/portfolio");
  };

  const navigateToAbout = () => {
    navigate("/about-me");
  };

  const navigateToContact = () => {
    navigate("/contact");
  };

  // Navigation items array for easier management
  const navItems = [
    { name: "Portfolio", onClick: navigateToProjects },
    { name: "About Me", onClick: navigateToAbout },
    { name: "Contact", onClick: navigateToContact }
  ];

  // Determine if header is absolute positioned (for hero sections)
  const headerPositionClass = isWhite ? 'absolute top-0 left-0 right-0 z-10' : '';

  return (
    <>
      {showTopReminder && (
        <div className="bg-spink py-2 text-white w-full">
          <p className="container mx-auto text-center josefin uppercase">
            ✦✦✦ <span className="hidden md:inline">welcome to contact me at</span> sharonaa0011@gmail.com ✦✦✦
          </p>
        </div>
      )}
      <div
        id="header"
        className={`container mx-auto py-8 flex justify-between items-center px-8 md:px-0 ${headerPositionClass}`}
      >
        <div 
          className={`flex items-center gap-2 cursor-pointer group text-lg
          ${isWhite ? 'text-white' : 'text-spink'}`} 
          onClick={navigateToHome}
        >
          <img src={isWhite? whiteLogo : logo} alt="website logo" className="w-8" />✦
          <h1 className="uppercase font-semibold 
          tracking-widest group-hover:underline underline-offset-8 josefin">
             Sharon Wong 
          </h1>✦
        </div>
        <div className="hidden md:flex items-center gap-2">
          {navItems.map((item, index) => (
            <Button 
              key={index}
              variant="ghost" 
              className={`header-button josefin ${isWhite ? '!text-white' : '!text-spink'}`}
              onClick={item.onClick}
            >
              {item.name}
            </Button>
          ))}
        </div>
        <div className="flex items-center gap-1 md:hidden">
          <Button 
            variant="outline" 
            className={`hidden sm:block header-project-button ${isWhite ? 'bg-transparent text-white' : 'text-spink hover:text-spink hover:bg-lpink/30 border-spink'}`}>
              Projects
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button 
                variant="outline" 
                size="icon" 
                className={`${isWhite ? 'text-white bg-transparent border-transparent' : 'text-spink hover:text-spink border-transparent hover:border-spink hover:bg-lpink/30'}`}>
                <AlignJustify className="size-5"/>
              </Button> 
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <div 
                  className="flex items-center gap-2 cursor-pointer group"
                  onClick={navigateToHome}
                >
                  <img src={logo} alt="website logo" className="w-8" />
                  <h1 className="uppercase text-lg font-semibold tracking-widest group-hover text-spink">
                    ✦ Sharon Wong ✦
                  </h1>
                </div>
              </SheetHeader>
              <div className="*:block space-y-2 px-4">
                {navItems.map((item, index) => (
                  <Button 
                    key={index}
                    variant="ghost" 
                    className="header-button josefin !text-spink"
                    onClick={item.onClick}
                  >
                    {item.name}
                  </Button>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </>
  );
};