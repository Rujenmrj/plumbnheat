import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/home";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      {/* Full-width page content */}
      <main className="flex-1">
        <Home />
      </main>
      <Footer />
    </div>
  );
};

export default App;
