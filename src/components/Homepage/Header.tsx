import logo from "../../../public/logo.svg";
import { Button } from "../ui/button";

export const Header = () => {
  return (
    <>
      <div className="bg-spink py-2 text-white">
        <p className="container text-center josefin">
          ★★★ welcome to contact me at sharonaa0011@gmail.com ★★★
        </p>
      </div>
      <div
        id="header"
        className="container mx-auto py-4 flex justify-between items-center"
      >
        <div className="flex items-center gap-2">
          <img src={logo} alt="website logo" className="w-10" />
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" className="header-button josefin">
            Projects
          </Button>
          <Button variant="ghost" className="header-button josefin">
            About
          </Button>
          <Button variant="ghost" className="header-button josefin">
            Contact
          </Button>
        </div>
      </div>
    </>
  );
};
