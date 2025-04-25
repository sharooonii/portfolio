import { ScrollToTop } from "@/components/Utilities/ScrollToTop";
import { Header } from "@/components/Homepage/Header";
import { Footer } from "@/components/Homepage/Footer";
import { Outlet } from "react-router-dom";

export const ProjectLayout = () => (
  <div className="flex flex-col min-h-screen">
    <ScrollToTop />
    <div className="flex-grow w-full">
      <Header showTopReminder={false} isWhite={true} />
      <div className="text-stone-800"><Outlet /></div>
    </div>
    <Footer />
  </div>
);