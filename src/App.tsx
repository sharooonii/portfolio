import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage } from "./pages/Homepage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      {/* Main application routes handled by Homepage */}
      <Route path="/*" element={<Homepage />} />
      
      {/* Settings remains a separate top-level route */}
      {/* <Route path="/settings" element={<Settings />} /> */}
      
      {/* Other Pages */}
      {/* <Route path="*" element={<ErrorPage />} /> */}
    </Routes>
  </BrowserRouter>
  )
}

export default App
