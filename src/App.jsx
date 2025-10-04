import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <h1 className="text-3xl font-bold mt-8 text-secondary">
          Welcome to PlumbNHeat!
        </h1>
        <p className="text-grayCustom-500 mt-4">Page content goes here.</p>
      </main>
      <Footer />
    </div>
  );
};

export default App;
