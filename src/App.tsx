import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Home";
import { SingleProject } from "@/components/Projects/SingleProject"
import { Contact } from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* Main application routes handled by Homepage */}
      <Route path="/*" element={<Homepage />} />
      <Route path="/contact" element={<Contact />}/>

      <Route path="/educare" element={<SingleProject />} />
      
      {/* Other Pages */}
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Routes>
  </BrowserRouter>
  )
}

export default App
