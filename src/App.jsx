import React, { useState } from "react";
import "./App.css";
import AppRoutes from "./components/Routes";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [isNightMode, setIsNightMode] = useState(false);

  return (
    <div className={`App ${isNightMode ? "night-mode" : ""}`}>
      <Header isNightMode={isNightMode} onToggleNightMode={() => setIsNightMode((prev) => !prev)} />
      <AppRoutes />
      <Footer />
    </div>
  );
};

export default App;
