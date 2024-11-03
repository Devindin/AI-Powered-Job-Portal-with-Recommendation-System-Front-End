import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "../src/Componnents/Hero"


function App() {
  return (
    <Router>
      
      <Routes>
    
      <Route path="/" element={<Hero />} />
   
    </Routes>
    </Router>
  );
}

export default App;
