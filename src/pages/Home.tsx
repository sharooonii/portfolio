import { Routes, Route } from "react-router-dom";
import { Footer } from "@/components/Homepage/Footer";
import { Header } from "@/components/Homepage/Header";
import { LandingPage } from "./LandingPage";
import { Projects } from "./Projects";

export const Homepage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Routes>
          <Route 
            path="/" 
            element={<LandingPage />} 
          />
          <Route 
            path="/projects" 
            element={<Projects />} 
          />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};
