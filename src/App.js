import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "../src/Componnents/Hero"


function App() {
  return (
    <Router>
      <div className="App bg-gradient-to-r from-[#ae59bd] to-[#50105b] min-h-screen flex items-center justify-center relative">
      <Routes>
    
      <Route path="/" element={<Hero />} />
   
    </Routes>
    </div>
    </Router>
  );
}

export default App;
