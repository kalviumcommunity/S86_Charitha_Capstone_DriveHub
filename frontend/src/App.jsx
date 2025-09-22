import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";


function AppRoutes() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />


      {/* Fallback */}
      <Route path="*" element={<h1 className="text-center mt-20">404 - Page Not Found</h1>} />
    </Routes>
  );
}

export default function App() {
  return (

      <Router>
        <Navbar />
        <div className="pt-20">
          <AppRoutes />
        </div>
      </Router>

  );
}
