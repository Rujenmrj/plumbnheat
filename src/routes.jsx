import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import PrivacyPolicy from "./pages/privacy-policy/index.js";
import NotFound from "./pages/not-found/NotFound";
import ConstructionPage from "./pages/construction/index.jsx";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/services/construction" element={<ConstructionPage />} />
      {/* 404 Catch-all route */}
      <Route path="*" element={<NotFound />} /> {/* ✅ Works now */}
    </Routes>
  );
};

export default AppRoutes;
