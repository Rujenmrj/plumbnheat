import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import PrivacyPolicy from "./pages/privacy-policy/index.js";
import NotFound from "./pages/not-found/NotFound";
import Contact from "./pages/contact-page/index.jsx";
import TermsOfService from "./pages/term-of-service/index.jsx";
import ConstructionPage from "./pages/construction/index.jsx";
import Heating from "./pages/heating/index.jsx";
import Plumbing from "./pages/plumbing/index.jsx";
const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/services/construction" element={<ConstructionPage />} />
      <Route path="/services/heating" element={<Heating />} />
      <Route path="/services/plumbing" element={<Plumbing />} />
      {/* 404 Catch-all route */}
      <Route path="/contact" element={<Contact />} />
      <Route path="*" element={<NotFound />} /> {/* ✅ Works now */}
    </Routes>
  );
};

export default AppRoutes;
