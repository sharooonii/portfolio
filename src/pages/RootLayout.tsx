import { ScrollToTop } from "@/components/Utilities/ScrollToTop";
import { Header } from "@/components/Homepage/Header";
import { Footer} from "@/components/Homepage/Footer";
import { Outlet } from "react-router-dom";

export const RootLayout = () => (
  <div className="flex flex-col min-h-screen">
    <ScrollToTop />
    <Header />
    <div className="flex-grow">
      <Outlet /> {/* This is where nested routes render */}
    </div>
    <Footer />
  </div>
);