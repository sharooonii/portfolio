import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RootLayout } from "./pages/RootLayout";
import { LandingPage } from "./pages/LandingPage";
import { AboutMe } from "./pages/AboutMe";
import { Contact } from "./pages/Contact";
import { Navigate } from "react-router-dom";
import { Projects } from "./pages/Projects";
import { ProjectLayout } from "./pages/ProjectLayout";

import { UnionFaith } from "@/pages/projects/UnionFaith"
import { A1Bakery } from "@/pages/projects/A1Bakery"
import { Asgh } from "@/pages/projects/Asgh"
import { Bnr } from "@/pages/projects/Bnr"
import { Deloitte } from "@/pages/projects/Deloitte"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<RootLayout />}>
          {/* Landing page and general pages */}
          <Route index element={<LandingPage />} />
          <Route path="about-me" element={<AboutMe />} />
          <Route path="contact" element={<Contact />} />
          
          {/* Portfolio section */}
          <Route path="portfolio">
            {/* Default redirect */}
            <Route index element={<Navigate to="website" replace />} />
            {/* Category listing */}
            <Route path=":category" element={<Projects />} />
          </Route>
        </Route>

        {/* Project detail pages with different layout */}
        <Route element={<ProjectLayout />}>
          <Route path="portfolio/union-faith" element={<UnionFaith />} />
          <Route path="portfolio/a1-bakery" element={<A1Bakery />} />
          <Route path="portfolio/asia-summit-on-global-health" element={<Asgh />} />
          <Route path="portfolio/belt-and-road-summit" element={<Bnr />} />
          <Route path="portfolio/deloitte" element={<Deloitte />} />
        </Route>
        
        {/* 404 page */}
        {/* <Route path="*" element={<ErrorPage />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default App
